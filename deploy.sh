#!/usr/bin/env bash
# Publica o site em carroscolecionaveis.pt por FTP.
# Uso (Git Bash, na raiz do projeto):  bash deploy.sh
# Credenciais em .ftp-deploy.env (fora do Git).
#
# Passos: build -> envia assets -> envia index.html -> apaga de /web/assets
# os ficheiros de builds antigos (o alojamento tem pouco espaço).
# Fora de /web/assets não apaga nada (ex.: /web/photos do backoffice).
set -euo pipefail
cd "$(dirname "$0")"

[ -f .ftp-deploy.env ] || { echo "Falta .ftp-deploy.env"; exit 1; }
. ./.ftp-deploy.env
REMOTE="ftp://$FTP_HOST/web"
AUTH=(--user "$FTP_USER:$FTP_PASS")

echo "1/4 Build..."
npm run build

echo "2/4 Upload dos assets e ficheiros estáticos..."
cfg=$(mktemp); trap 'rm -f "$cfg"' EXIT
( cd dist && find . -type f ! -name index.html | sed 's|^\./||' ) | while read -r f; do
  printf 'upload-file = "dist/%s"\nurl = "%s/%s"\n' "$f" "$REMOTE" "$f"
done > "$cfg"
if ! curl -sS --fail-early --ftp-create-dirs --retry 3 "${AUTH[@]}" -K "$cfg"; then
  echo "ERRO no upload (espaço no servidor?). O index.html NÃO foi enviado; o site continua na versão anterior."
  exit 1
fi

echo "3/4 Upload do index.html..."
curl -sS --fail --retry 3 "${AUTH[@]}" -T dist/index.html "$REMOTE/index.html"

echo "4/4 Limpeza de assets antigos..."
q=()
for f in $(curl -s "${AUTH[@]}" "$REMOTE/assets/" --list-only | tr -d '\r'); do
  case "$f" in .|..) continue;; esac
  [ -e "dist/assets/$f" ] || q+=(-Q "-DELE /web/assets/$f")
done
[ ${#q[@]} -gt 0 ] && curl -s "${AUTH[@]}" "ftp://$FTP_HOST/" "${q[@]}" -o /dev/null
echo "   apagados: $(( ${#q[@]} / 2 ))"

js=$(grep -o 'assets/index-[^"]*\.js' dist/index.html)
live=$(curl -s "https://$FTP_DOMAIN/" | grep -o 'assets/index-[^"]*\.js' || true)
if [ "$js" = "$live" ]; then echo "OK: https://$FTP_DOMAIN/ está a servir $js"; else echo "AVISO: o site serve '$live', esperado '$js' (cache?)"; fi
