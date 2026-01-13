# Guia de Deploy em Servidor PHP

## Pré-requisitos

- Servidor Apache com `mod_rewrite` ativo
- PHP 7.4+ (opcional, apenas se usar funcionalidades PHP)
- SSL/HTTPS recomendado

## Passos para Deploy

### 1. Build da aplicação

```bash
npm run build
```

Isto cria a pasta `dist/` com os ficheiros estáticos.

### 2. Upload para o servidor

Carregue todo o conteúdo da pasta `dist/` para a raiz do seu servidor (public_html, www, htdocs, etc.):

```
dist/
├── index.html
├── assets/
│   ├── index-xxxxx.js
│   ├── index-xxxxx.css
│   └── ... (imagens e outros assets)
└── ... (outros ficheiros)
```

### 3. Configurar .htaccess

O ficheiro `.htaccess` já está incluído e faz:
- Redireciona todas as rotas para `index.html` (necessário para React Router)
- Configura cache para melhor performance
- Ativa compressão GZIP
- Adiciona headers de segurança

### 4. Ativar HTTPS (Recomendado)

Se tiver SSL, descomente as linhas no `.htaccess`:

```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## Variáveis de Ambiente

As variáveis do Supabase estão embebidas no build e não precisam de configuração adicional no servidor.

## URLs da Aplicação

- **Site principal:** `/`
- **Login Admin:** `/admin/login`
- **Backoffice:** `/admin`

## Credenciais do Backoffice

- **Email:** `admin@colecoes.pt`
- **Password:** `admin@colecoes.pt`

## Troubleshooting

### Página em branco ou erro 404

1. Verifique se `mod_rewrite` está ativo:
   ```bash
   a2enmod rewrite
   sudo service apache2 restart
   ```

2. Verifique se o `.htaccess` está a ser lido (AllowOverride All no Apache config)

### Recursos não carregam

Verifique se os paths no `index.html` estão corretos. Se a app estiver numa subpasta, pode precisar de ajustar o `base` no `vite.config.ts`.

### CORS errors

O Supabase já está configurado para aceitar pedidos de qualquer origem. Se tiver problemas, verifique a consola do browser.
