# Configuração do EmailJS

Para ativar o envio automático de emails quando uma subscrição é concluída, siga estes passos:

## 1. Criar conta no EmailJS (Gratuito)

1. Aceda a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crie uma conta gratuita (permite 200 emails/mês grátis)

## 2. Configurar o Serviço de Email

1. No painel do EmailJS, vá a **Email Services**
2. Clique em **Add New Service**
3. Escolha o seu provedor de email (Gmail, Outlook, etc.)
4. Siga as instruções para conectar
5. Copie o **Service ID** (ex: `service_abc123`)

## 3. Criar o Template de Email

1. Vá a **Email Templates**
2. Clique em **Create New Template**
3. Configure o template com estas variáveis:

**Subject (Assunto):**
```
Nova Subscrição - {{from_name}}
```

**Content (Conteúdo HTML):**
```html
<h2>Nova Subscrição Recebida</h2>

<h3>Dados Pessoais</h3>
<p><strong>Nome:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Telemóvel:</strong> {{phone}}</p>
<p><strong>Consente Marketing:</strong> {{marketing_consent}}</p>

<h3>Detalhes da Encomenda</h3>
<p><strong>Primeiro Livro:</strong> {{first_book}}</p>

<h3>Morada de Entrega</h3>
<p><strong>Morada:</strong> {{delivery_address}}</p>
<p><strong>Código Postal:</strong> {{postal_code}}</p>
<p><strong>Localidade:</strong> {{city}}</p>

<h3>Dados Bancários</h3>
<p><strong>Banco:</strong> {{bank}}</p>
<p><strong>IBAN:</strong> {{iban}}</p>

<h3>Titular da Conta</h3>
<p><strong>Nome:</strong> {{account_holder}}</p>
<p><strong>Morada:</strong> {{account_address}}</p>
<p><strong>Código Postal:</strong> {{account_postal_code}}</p>
<p><strong>Localidade:</strong> {{account_city}}</p>

<hr>
<p><small>Data da subscrição: {{subscription_date}}</small></p>
```

4. Guarde o template e copie o **Template ID** (ex: `template_xyz789`)

## 4. Obter a Public Key

1. Vá a **Account** → **General**
2. Copie a **Public Key** (ex: `user_PQR456XYZ`)

## 5. Configurar no Código

Abra o ficheiro `src/components/SubscriptionForm.tsx` e substitua os valores no topo do ficheiro:

```typescript
const EMAILJS_SERVICE_ID = "service_abc123"; // Seu Service ID
const EMAILJS_TEMPLATE_ID = "template_xyz789"; // Seu Template ID
const EMAILJS_PUBLIC_KEY = "user_PQR456XYZ"; // Sua Public Key
const EMAIL_DESTINO = "seu-email@exemplo.com"; // Email que receberá as subscrições
```

## 6. Testar

Após configurar, faça uma subscrição de teste no formulário. Deverá receber um email com todos os dados da subscrição.

## Resolução de Problemas

- **Email não chega**: Verifique a pasta de spam
- **Erro no console**: Verifique se as credenciais estão corretas
- **Limite excedido**: Atualize para um plano pago no EmailJS

## Alternativa: Gmail App Password

Se usar Gmail, pode precisar de criar uma "App Password":
1. Vá a [myaccount.google.com/security](https://myaccount.google.com/security)
2. Ative "2-Step Verification"
3. Procure por "App passwords"
4. Gere uma password para "Mail"
5. Use essa password no EmailJS
