# Portfólio Full Stack | Christian Batista

Portfólio com visual cyber/dark, foco em Back-end e integração real com API em Node.js + Express.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Node.js
- Express
- Nodemailer (envio automático opcional)
- JSON (persistência para aprendizado)

## Estrutura

```text
.
+- index.html
+- styles.css
+- script.js
+- cv.html
+- cv.md
+- curriculo-online.html
+- .env.example
+- package.json
+- assets/
¦  +- cv/
¦  ¦  +- Christian-Batista-CV.pdf
¦  +- images/projects/
+- projects/
¦  +- users-api.html
¦  +- tasks.html
¦  +- contact-api.html
¦  +- login.html
¦  +- api-fetch.html
+- server/
   +- app.js
   +- data/
      +- projects.json
      +- messages.json
      +- users.json
      +- tasks.json
```

## Instalação

```bash
npm install
```

## Configuração de ambiente (`.env`)

1. Copie o exemplo:

```bash
cp .env.example .env
```

No PowerShell:

```powershell
Copy-Item .env.example .env
```

2. Configure o arquivo `.env`:

```env
PORT=3000
ADMIN_KEY=troque-esta-chave
CONTACT_RECEIVER_EMAIL=Christian.abatista07@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-de-app
```

### Observação importante sobre Gmail

- Use **senha de app** (não senha normal da conta).
- Se SMTP não estiver configurado, o sistema **ainda salva** a mensagem em `server/data/messages.json` e retorna aviso claro.

## Como rodar

```bash
npm start
```

ou

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

## Rotas da API

### Base

- `GET /api/health`
- `GET /api/projects`
- `GET /api/projects/:id`
- `POST /api/contact`
- `GET /api/messages` (protegida por `ADMIN_KEY`)

### Usuários

- `GET /api/users`
- `GET /api/users/:id`
- `POST /api/users`
- `PUT /api/users/:id`
- `DELETE /api/users/:id`

### Tarefas

- `GET /api/tasks`
- `POST /api/tasks`
- `PATCH /api/tasks/:id`
- `DELETE /api/tasks/:id`

### Login didático

- `POST /api/auth/login`

## Como testar `GET /api/projects`

Abra no navegador:

- [http://localhost:3000/api/projects](http://localhost:3000/api/projects)

Ou no terminal:

```bash
curl http://localhost:3000/api/projects
```

## Como testar `POST /api/contact`

### Pelo portfólio

1. Acesse [http://localhost:3000](http://localhost:3000)
2. Vá em **Contato**
3. Preencha nome, e-mail e mensagem
4. Clique em **Enviar mensagem**

### Pelo terminal (exemplo)

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Teste","email":"teste@email.com","message":"Mensagem de teste com mais de dez caracteres."}'
```

## Projetos no portfólio

A seção “Cases técnicos” tenta carregar da API e, se a API estiver indisponível, usa fallback local em `script.js`.

Projetos exibidos:

1. API de Gerenciamento de Usuários (`API-001`)
2. Sistema de Tarefas Full Stack (`FULLSTACK-002`)
3. API de Contato do Portfólio (`BACKEND-003`)
4. Sistema de Login Simples (`AUTH-004`)
5. Consulta de API Externa (`API-005`)
6. Portfólio Full Stack (`PORTFOLIO-006`)

## Onde editar projetos e links

- Fonte principal dos projetos: `server/data/projects.json`
- Comentário no front já indica onde trocar `githubUrl` por link de repositório específico.

## Currículo online ATS-friendly

- Página: [http://localhost:3000/cv.html](http://localhost:3000/cv.html)
- Botão **Imprimir / Salvar PDF** usa `window.print()`.
- Botão **Baixar CV** aponta para `assets/cv/Christian-Batista-CV.pdf`.

### Onde colocar o PDF real

- Caminho: `assets/cv/Christian-Batista-CV.pdf`

## Contato exibido no site

- E-mail: `Christian.abatista07@gmail.com`
- GitHub: [https://github.com/iikxwl](https://github.com/iikxwl)
- LinkedIn: [https://www.linkedin.com/in/christianabatista/](https://www.linkedin.com/in/christianabatista/)

> O site não exibe telefone nem WhatsApp.

## Subir no GitHub (sem push automático)

```bash
git init
git add .
git commit -m "feat: fix projects loading, contact email and ATS resume"
git branch -M main
git remote add origin https://github.com/iikxwl/NOME-DO-REPOSITORIO.git
git push -u origin main
```

Nenhum push foi executado automaticamente.

