const express = require("express");
const fs = require("fs/promises");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();
const PORT = Number(process.env.PORT || 3000);
const ADMIN_KEY = process.env.ADMIN_KEY || "change-me";
const CONTACT_RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || "Christian.abatista07@gmail.com";
const SMTP_HOST = process.env.SMTP_HOST || "";
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_USER = process.env.SMTP_USER || "";
const SMTP_PASS = process.env.SMTP_PASS || "";

const ROOT_DIR = path.resolve(__dirname, "..");
const DATA_DIR = path.join(__dirname, "data");
const PROJECTS_FILE = path.join(DATA_DIR, "projects.json");
const MESSAGES_FILE = path.join(DATA_DIR, "messages.json");
const USERS_FILE = path.join(DATA_DIR, "users.json");
const TASKS_FILE = path.join(DATA_DIR, "tasks.json");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type,x-admin-key");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  next();
});

app.use(express.json({ limit: "100kb" }));

async function ensureDataFiles() {
  await fs.mkdir(DATA_DIR, { recursive: true });

  const defaults = [
    { file: PROJECTS_FILE, fallback: "[]" },
    { file: MESSAGES_FILE, fallback: "[]" },
    { file: USERS_FILE, fallback: "[]" },
    { file: TASKS_FILE, fallback: "[]" }
  ];

  for (const item of defaults) {
    try {
      await fs.access(item.file);
    } catch (error) {
      await fs.writeFile(item.file, item.fallback, "utf8");
    }
  }
}

async function readJson(filePath) {
  const content = await fs.readFile(filePath, "utf8");
  const normalized = content.replace(/^\uFEFF/, "");
  return JSON.parse(normalized);
}

async function writeJson(filePath, data) {
  const content = JSON.stringify(data, null, 2);
  await fs.writeFile(filePath, content, "utf8");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateContactPayload(payload) {
  const errors = {};

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const message = String(payload.message || "").trim();

  if (name.length < 2) {
    errors.name = "Nome deve ter pelo menos 2 caracteres.";
  }

  if (!isValidEmail(email)) {
    errors.email = "E-mail inválido.";
  }

  if (message.length < 10) {
    errors.message = "Mensagem deve ter pelo menos 10 caracteres.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized: { name, email, message }
  };
}

function validateUserPayload(payload) {
  const errors = {};

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();

  if (name.length < 2) {
    errors.name = "Nome do usuário deve ter pelo menos 2 caracteres.";
  }

  if (!isValidEmail(email)) {
    errors.email = "E-mail do usuário inválido.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized: { name, email }
  };
}

function validateTaskPayload(payload) {
  const errors = {};
  const title = String(payload.title || "").trim();

  if (title.length < 2) {
    errors.title = "Título da tarefa deve ter pelo menos 2 caracteres.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized: { title }
  };
}

function hasAdminAccess(req) {
  const headerKey = req.get("x-admin-key");
  const queryKey = typeof req.query.key === "string" ? req.query.key : "";
  const providedKey = headerKey || queryKey;
  return providedKey && providedKey === ADMIN_KEY;
}

function canUseSmtp() {
  return Boolean(SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS);
}

let cachedTransporter = null;

function getMailerTransporter() {
  if (!canUseSmtp()) {
    return null;
  }

  if (cachedTransporter) {
    return cachedTransporter;
  }

  cachedTransporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  });

  return cachedTransporter;
}

async function sendContactEmail(messageData) {
  const transporter = getMailerTransporter();
  if (!transporter) {
    return {
      sent: false,
      notice: "Mensagem salva em JSON. SMTP não configurado para envio automático."
    };
  }

  const info = await transporter.sendMail({
    from: `Portfolio Contact <${SMTP_USER}>`,
    to: CONTACT_RECEIVER_EMAIL,
    subject: `[Portfólio] Nova mensagem de ${messageData.name}`,
    text: [
      `Nome: ${messageData.name}`,
      `E-mail: ${messageData.email}`,
      "",
      "Mensagem:",
      messageData.message
    ].join("\n"),
    html: `
      <h2>Nova mensagem do portfólio</h2>
      <p><strong>Nome:</strong> ${messageData.name}</p>
      <p><strong>E-mail:</strong> ${messageData.email}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${messageData.message.replace(/\n/g, "<br>")}</p>
    `
  });

  return {
    sent: true,
    notice: "E-mail automático enviado com sucesso.",
    messageId: info.messageId
  };
}

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "portfolio-backend",
    smtpConfigured: canUseSmtp(),
    timestamp: new Date().toISOString()
  });
});

app.get("/api/projects", async (req, res) => {
  try {
    const projects = await readJson(PROJECTS_FILE);
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Erro ao carregar projetos." });
  }
});

app.get("/api/projects/:id", async (req, res) => {
  try {
    const projects = await readJson(PROJECTS_FILE);
    const projectId = req.params.id.toLowerCase();

    const project = projects.find((item) => {
      const idMatch = String(item.id || "").toLowerCase() === projectId;
      const codeMatch = String(item.code || "").toLowerCase() === projectId;
      return idMatch || codeMatch;
    });

    if (!project) {
      res.status(404).json({ message: "Projeto não encontrado." });
      return;
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar projeto." });
  }
});

app.post("/api/contact", async (req, res) => {
  const { isValid, errors, sanitized } = validateContactPayload(req.body || {});

  if (!isValid) {
    res.status(400).json({
      message: "Dados inválidos. Verifique os campos e tente novamente.",
      errors
    });
    return;
  }

  try {
    const messages = await readJson(MESSAGES_FILE);

    const newMessage = {
      id: Date.now(),
      ...sanitized,
      createdAt: new Date().toISOString()
    };

    messages.push(newMessage);
    await writeJson(MESSAGES_FILE, messages);

    let emailResult = {
      sent: false,
      notice: "Mensagem salva em JSON. SMTP não configurado para envio automático."
    };

    try {
      emailResult = await sendContactEmail(newMessage);
    } catch (emailError) {
      emailResult = {
        sent: false,
        notice: "Mensagem salva com sucesso, mas o envio automático de e-mail falhou."
      };
    }

    res.status(201).json({
      message: "Mensagem recebida com sucesso!",
      data: {
        id: newMessage.id,
        createdAt: newMessage.createdAt
      },
      email: emailResult
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao salvar mensagem." });
  }
});

app.get("/api/messages", async (req, res) => {
  if (!hasAdminAccess(req)) {
    res.status(401).json({ message: "Acesso negado. Chave de administrador inválida." });
    return;
  }

  try {
    const messages = await readJson(MESSAGES_FILE);
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Erro ao carregar mensagens." });
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await readJson(USERS_FILE);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Erro ao carregar usuários." });
  }
});

app.get("/api/users/:id", async (req, res) => {
  try {
    const users = await readJson(USERS_FILE);
    const userId = Number(req.params.id);
    const user = users.find((item) => item.id === userId);

    if (!user) {
      res.status(404).json({ message: "Usuário não encontrado." });
      return;
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuário." });
  }
});

app.post("/api/users", async (req, res) => {
  const { isValid, errors, sanitized } = validateUserPayload(req.body || {});

  if (!isValid) {
    res.status(400).json({ message: "Dados inválidos para usuário.", errors });
    return;
  }

  try {
    const users = await readJson(USERS_FILE);

    const duplicated = users.some((item) => item.email.toLowerCase() === sanitized.email.toLowerCase());
    if (duplicated) {
      res.status(409).json({ message: "Já existe usuário com este e-mail." });
      return;
    }

    const newUser = {
      id: Date.now(),
      ...sanitized,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    await writeJson(USERS_FILE, users);
    res.status(201).json({ message: "Usuário criado com sucesso.", data: newUser });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar usuário." });
  }
});

app.put("/api/users/:id", async (req, res) => {
  const { isValid, errors, sanitized } = validateUserPayload(req.body || {});

  if (!isValid) {
    res.status(400).json({ message: "Dados inválidos para atualização.", errors });
    return;
  }

  try {
    const users = await readJson(USERS_FILE);
    const userId = Number(req.params.id);
    const index = users.findIndex((item) => item.id === userId);

    if (index < 0) {
      res.status(404).json({ message: "Usuário não encontrado." });
      return;
    }

    const duplicated = users.some((item) => item.id !== userId && item.email.toLowerCase() === sanitized.email.toLowerCase());
    if (duplicated) {
      res.status(409).json({ message: "Outro usuário já utiliza este e-mail." });
      return;
    }

    const updatedUser = {
      ...users[index],
      ...sanitized,
      updatedAt: new Date().toISOString()
    };

    users[index] = updatedUser;
    await writeJson(USERS_FILE, users);
    res.json({ message: "Usuário atualizado com sucesso.", data: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar usuário." });
  }
});

app.delete("/api/users/:id", async (req, res) => {
  try {
    const users = await readJson(USERS_FILE);
    const userId = Number(req.params.id);
    const index = users.findIndex((item) => item.id === userId);

    if (index < 0) {
      res.status(404).json({ message: "Usuário não encontrado." });
      return;
    }

    const [removed] = users.splice(index, 1);
    await writeJson(USERS_FILE, users);
    res.json({ message: "Usuário removido com sucesso.", data: removed });
  } catch (error) {
    res.status(500).json({ message: "Erro ao remover usuário." });
  }
});

app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await readJson(TASKS_FILE);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Erro ao carregar tarefas." });
  }
});

app.post("/api/tasks", async (req, res) => {
  const { isValid, errors, sanitized } = validateTaskPayload(req.body || {});

  if (!isValid) {
    res.status(400).json({ message: "Dados inválidos para tarefa.", errors });
    return;
  }

  try {
    const tasks = await readJson(TASKS_FILE);

    const newTask = {
      id: Date.now(),
      title: sanitized.title,
      done: false,
      createdAt: new Date().toISOString()
    };

    tasks.push(newTask);
    await writeJson(TASKS_FILE, tasks);
    res.status(201).json({ message: "Tarefa criada com sucesso.", data: newTask });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar tarefa." });
  }
});

app.patch("/api/tasks/:id", async (req, res) => {
  try {
    const tasks = await readJson(TASKS_FILE);
    const taskId = Number(req.params.id);
    const index = tasks.findIndex((item) => item.id === taskId);

    if (index < 0) {
      res.status(404).json({ message: "Tarefa não encontrada." });
      return;
    }

    const done = Boolean(req.body.done);

    tasks[index] = {
      ...tasks[index],
      done,
      updatedAt: new Date().toISOString()
    };

    await writeJson(TASKS_FILE, tasks);
    res.json({ message: "Tarefa atualizada com sucesso.", data: tasks[index] });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar tarefa." });
  }
});

app.delete("/api/tasks/:id", async (req, res) => {
  try {
    const tasks = await readJson(TASKS_FILE);
    const taskId = Number(req.params.id);
    const index = tasks.findIndex((item) => item.id === taskId);

    if (index < 0) {
      res.status(404).json({ message: "Tarefa não encontrada." });
      return;
    }

    const [removed] = tasks.splice(index, 1);
    await writeJson(TASKS_FILE, tasks);
    res.json({ message: "Tarefa removida com sucesso.", data: removed });
  } catch (error) {
    res.status(500).json({ message: "Erro ao remover tarefa." });
  }
});

app.post("/api/auth/login", (req, res) => {
  const email = String(req.body.email || "").trim();
  const password = String(req.body.password || "");

  if (!isValidEmail(email)) {
    res.status(400).json({ message: "E-mail inválido." });
    return;
  }

  if (password.length < 6) {
    res.status(400).json({ message: "A senha deve ter pelo menos 6 caracteres." });
    return;
  }

  // Fluxo didático: não autentica contra banco e não persiste senha.
  // Em produção, adicionar hash de senha (ex.: bcrypt), JWT e banco de dados real.
  res.json({
    message: "Login validado em modo de demonstração.",
    data: {
      email,
      tokenPreview: "demo-token-do-not-use-in-production"
    }
  });
});

app.use(express.static(ROOT_DIR));

app.get("/", (req, res) => {
  res.sendFile(path.join(ROOT_DIR, "index.html"));
});

app.use("/api", (req, res) => {
  res.status(404).json({ message: "Rota de API não encontrada." });
});

ensureDataFiles()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`[server] Rodando em http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Falha ao iniciar o servidor:", error);
    process.exit(1);
  });
