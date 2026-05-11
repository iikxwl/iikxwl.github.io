const personalData = {
  name: "Christian Batista",
  role: "Desenvolvedor Backend em formação | Python • APIs • Segurança",
  email: "Christian.abatista07@gmail.com",
  github: "https://github.com/iikxwl",
  linkedin: "https://www.linkedin.com/in/christianabatista/"
};

const REPOSITORY_URL = "https://github.com/iikxwl/iikxwl.github.io";

const fallbackProjects = [
  {
    id: "api-001",
    code: "API-001",
    name: "API de Gerenciamento de Usuários",
    category: "back-end",
    categoryLabel: "Back-end",
    description: "API para cadastro, listagem, atualização e remoção de usuários com organização REST.",
    technologies: ["Python (planejado)", "FastAPI (planejado)", "JavaScript", "JSON"],
    status: "Em desenvolvimento",
    type: "API REST",
    details: "Projeto de estudo para praticar estrutura de endpoints, validação de entrada e organização de código backend.",
    features: [
      "GET /api/users",
      "GET /api/users/:id",
      "POST /api/users",
      "PUT /api/users/:id",
      "DELETE /api/users/:id"
    ],
    nextSteps: [
      "Adicionar persistência em banco relacional.",
      "Criar testes automatizados básicos.",
      "Evoluir para estrutura em camadas."
    ],
    coverImage: "assets/images/projects/api-001-cover.jpg",
    githubUrl: REPOSITORY_URL,
    demoUrl: "projects/users-api.html"
  },
  {
    id: "auth-004",
    code: "AUTH-004",
    name: "Sistema de Login Seguro",
    category: "back-end",
    categoryLabel: "Back-end",
    description: "Projeto de autenticação com foco em validação de credenciais e fundamentos de segurança.",
    technologies: ["Python (planejado)", "FastAPI (planejado)", "JWT (planejado)", "SQL (planejado)"],
    status: "Planejado",
    type: "Autenticação",
    details: "Roadmap de autenticação segura com hash de senha, JWT e boas práticas de controle de sessão.",
    features: [
      "Validação de e-mail e senha",
      "Estrutura para hash de senha",
      "Fluxo para emissão de token",
      "Base para autorização por perfil"
    ],
    nextSteps: [
      "Implementar hash de senha com biblioteca adequada.",
      "Adicionar JWT com expiração.",
      "Persistir usuários e logs de acesso."
    ],
    coverImage: "assets/images/projects/auth-004-cover.jpg",
    githubUrl: REPOSITORY_URL
  },
  {
    id: "fullstack-002",
    code: "FULLSTACK-002",
    name: "Sistema de Tarefas Full Stack",
    category: "full-stack",
    categoryLabel: "Full Stack",
    description: "Aplicação de tarefas com frontend integrado ao backend para operações CRUD.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
    status: "Funcional",
    type: "CRUD",
    details: "Projeto para praticar fluxo completo de criação, atualização e remoção de tarefas com integração por API.",
    features: [
      "GET /api/tasks",
      "POST /api/tasks",
      "PATCH /api/tasks/:id",
      "DELETE /api/tasks/:id"
    ],
    nextSteps: [
      "Adicionar autenticação por usuário.",
      "Criar filtros de busca e status.",
      "Planejar migração do backend para Python."
    ],
    coverImage: "assets/images/projects/fullstack-002-cover.jpg",
    githubUrl: REPOSITORY_URL,
    demoUrl: "projects/tasks.html"
  },
  {
    id: "backend-003",
    code: "BACKEND-003",
    name: "API de Contato do Portfólio",
    category: "back-end",
    categoryLabel: "Back-end",
    description: "API para receber, validar e processar mensagens enviadas pelo formulário de contato.",
    technologies: ["Node.js", "Express", "Validação de dados", "JSON"],
    status: "Funcional",
    type: "API",
    details: "Back-end com validação de campos e resposta padronizada para mensagens de contato.",
    features: [
      "POST /api/contact",
      "Validação de campos obrigatórios",
      "Resposta estruturada de sucesso e erro",
      "Integração com formulário do portfólio"
    ],
    nextSteps: [
      "Adicionar rate limit para proteção anti-spam.",
      "Registrar logs de requisições.",
      "Planejar migração para FastAPI."
    ],
    coverImage: "assets/images/projects/backend-003-cover.jpg",
    githubUrl: REPOSITORY_URL,
    demoUrl: "projects/contact-api.html"
  },
  {
    id: "api-005",
    code: "API-005",
    name: "Consulta de API Externa",
    category: "api",
    categoryLabel: "API",
    description: "Consumo de API pública com tratamento de erros, estado de carregamento e exibição de dados.",
    technologies: ["JavaScript", "Fetch API", "HTML", "CSS"],
    status: "Funcional",
    type: "Consumo de API",
    details: "Projeto voltado para integração com serviços externos e tratamento de cenários de falha.",
    features: [
      "Busca de dados por usuário",
      "Tratamento de erro de requisição",
      "Feedback de carregamento",
      "Renderização dinâmica de resultados"
    ],
    nextSteps: [
      "Adicionar cache local para reduzir chamadas.",
      "Melhorar estados de erro para acessibilidade.",
      "Criar versão em Python para automação."
    ],
    coverImage: "assets/images/projects/api-005-cover.jpg",
    githubUrl: REPOSITORY_URL,
    demoUrl: "projects/api-fetch.html"
  },
  {
    id: "portfolio-006",
    code: "PORTFOLIO-006",
    name: "Portfólio Pessoal",
    category: "full-stack",
    categoryLabel: "Full Stack",
    description: "Portfólio profissional com foco em backend, projetos práticos e currículo online ATS-friendly.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Python (planejado)"],
    status: "Em desenvolvimento",
    type: "Projeto pessoal",
    details: "Projeto central para consolidar estudos de backend, integração de APIs e comunicação profissional.",
    features: [
      "Layout responsivo",
      "Seção de projetos dinâmica",
      "Currículo online organizado",
      "Contato integrado ao backend"
    ],
    nextSteps: [
      "Adicionar seção técnica para roadmap em Python.",
      "Melhorar cobertura de acessibilidade.",
      "Publicar atualizações contínuas no GitHub."
    ],
    coverImage: "assets/images/projects/portfolio-006-cover.jpg",
    githubUrl: REPOSITORY_URL,
    demoUrl: "index.html"
  }
];

const skillsData = {
  python: {
    title: "Python",
    description: "Linguagem principal para backend, automações e construção de APIs limpas e organizadas."
  },
  fastapi: {
    title: "FastAPI",
    description: "Framework moderno para criar APIs REST performáticas com validação de dados por tipo."
  },
  "api-rest": {
    title: "APIs REST",
    description: "Desenvolvimento de endpoints com rotas bem definidas e uso correto de métodos HTTP."
  },
  jwt: {
    title: "JWT",
    description: "Estratégia de autenticação com token para proteger rotas e controlar sessões no backend."
  },
  sql: {
    title: "SQL",
    description: "Base para modelagem e consulta de dados relacionais em aplicações backend."
  },
  "git-github": {
    title: "Git/GitHub",
    description: "Versionamento, histórico de mudanças e publicação de projetos em repositórios."
  },
  linux: {
    title: "Linux",
    description: "Ambiente comum para servidores e deploy, útil para rotinas de backend e automações."
  },
  "web-security": {
    title: "Segurança Web Básica",
    description: "Fundamentos de validação, autenticação, proteção de rotas e práticas defensivas em aplicações web."
  },
  discordpy: {
    title: "Discord.py",
    description: "Biblioteca para bots e automações no Discord, útil para praticar eventos, comandos e integrações."
  },
  html: {
    title: "HTML",
    description: "Estrutura semântica para interfaces claras, acessíveis e compatíveis com navegadores modernos."
  },
  css: {
    title: "CSS",
    description: "Estilização responsiva para garantir legibilidade e boa experiência em desktop e mobile."
  },
  javascript: {
    title: "JavaScript",
    description: "Linguagem para interatividade no frontend e integração com APIs via requisições assíncronas."
  }
};

const projectGrid = document.getElementById("project-grid");
const projectStatus = document.getElementById("projects-status");
const filterButtons = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("project-modal");
const modalCloseButton = document.getElementById("modal-close");
const modalCover = document.getElementById("modal-cover");
const modalCase = document.getElementById("modal-case");
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalDescription = document.getElementById("modal-description");
const modalStatus = document.getElementById("modal-status");
const modalType = document.getElementById("modal-type");
const modalStack = document.getElementById("modal-stack");
const modalFeatures = document.getElementById("modal-features");
const modalNextSteps = document.getElementById("modal-next-steps");
const modalProjectLink = document.getElementById("modal-project-link");
const modalGithubLink = document.getElementById("modal-github-link");
const backToTopButton = document.getElementById("back-to-top");

let projects = [];
let activeFilter = "todos";
let lastFocusedElement = null;
let resolvedApiBase = null;

function getApiBaseCandidates() {
  const candidates = [];

  if (window.location.origin && window.location.origin !== "null") {
    candidates.push(`${window.location.origin.replace(/\/$/, "")}/api`);
  }

  candidates.push("/api");
  candidates.push("http://localhost:3000/api");
  candidates.push("http://127.0.0.1:3000/api");

  return [...new Set(candidates)];
}

const API_BASE_CANDIDATES = getApiBaseCandidates();

function buildApiUrl(base, endpoint) {
  const normalizedBase = String(base || "").replace(/\/+$/, "");
  const normalizedEndpoint = String(endpoint || "").replace(/^\/+/, "");
  return `${normalizedBase}/${normalizedEndpoint}`;
}

async function fetchWithTimeout(url, options = {}, timeoutMs = 9000) {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    window.clearTimeout(timeoutId);
  }
}

async function requestApi(endpoint, options = {}) {
  const method = String(options.method || "GET").toUpperCase();
  const candidates = resolvedApiBase ? [resolvedApiBase, ...API_BASE_CANDIDATES] : API_BASE_CANDIDATES;
  const uniqueCandidates = [...new Set(candidates)];
  let lastError = null;

  for (const base of uniqueCandidates) {
    const url = buildApiUrl(base, endpoint);

    try {
      const response = await fetchWithTimeout(url, options);
      const contentType = response.headers.get("content-type") || "";
      const isJson = contentType.includes("application/json");

      if (response.ok && isJson) {
        resolvedApiBase = base;
        return { response, base };
      }

      if (!response.ok && isJson) {
        resolvedApiBase = base;
        return { response, base };
      }

      if (response.ok && method === "GET") {
        continue;
      }
    } catch (error) {
      lastError = error;
    }
  }

  if (lastError) {
    throw lastError;
  }

  throw new Error("API indisponível.");
}

function setupPersonalData() {
  const profileName = document.getElementById("profile-name");
  const roleBadge = document.getElementById("role-badge");
  const emailLink = document.getElementById("email-link");

  if (profileName) {
    profileName.textContent = personalData.name;
  }

  if (roleBadge) {
    roleBadge.textContent = personalData.role;
  }

  if (emailLink) {
    emailLink.href = `mailto:${personalData.email}`;
    emailLink.textContent = personalData.email;
  }

  const githubLinks = document.querySelectorAll('[data-link="github"]');
  githubLinks.forEach((link) => {
    link.href = personalData.github;
  });

  const linkedinLinks = document.querySelectorAll('[data-link="linkedin"]');
  linkedinLinks.forEach((link) => {
    link.href = personalData.linkedin;
  });
}

function setProjectsStatus(message, type = "info") {
  projectStatus.textContent = message;
  projectStatus.classList.remove("status-error", "status-success", "status-info");
  projectStatus.classList.add(`status-${type}`);
}

function normalizeCategory(categoryValue) {
  return String(categoryValue || "").toLowerCase();
}

function getFilteredProjects() {
  if (activeFilter === "todos") {
    return projects;
  }

  return projects.filter((project) => normalizeCategory(project.category) === activeFilter);
}

function renderProjects() {
  const filteredProjects = getFilteredProjects();
  projectGrid.innerHTML = "";

  if (!filteredProjects.length) {
    projectGrid.innerHTML = `
      <article class="empty-card">
        <h3>Nenhum projeto encontrado</h3>
        <p>Não há projetos para o filtro selecionado no momento.</p>
      </article>
    `;
    return;
  }

  const cardsMarkup = filteredProjects
    .map((project) => {
      const stackText = Array.isArray(project.technologies)
        ? project.technologies.join(", ")
        : "Tecnologias não informadas";
      const coverMarkup = project.coverImage
        ? `<img class="project-cover" src="${project.coverImage}" alt="Capa do projeto ${project.name}" loading="lazy">`
        : "";
      const demoButtonMarkup = project.demoUrl
        ? `<a class="btn btn-secondary" href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" aria-label="Abrir demo do projeto ${project.name}">Demo</a>`
        : "";

      return `
        <article class="project-card" aria-label="${project.name}">
          ${coverMarkup}
          <div class="project-card-body">
            <p class="project-case">[${project.code}]</p>
            <h3 class="project-title">${project.name}</h3>
            <p class="project-category">Categoria: ${project.categoryLabel}</p>
            <p class="project-description">${project.description}</p>

            <ul class="project-metadata">
              <li><strong>Tipo:</strong> ${project.type}</li>
              <li><strong>Status:</strong> ${project.status}</li>
              <li><strong>Stack:</strong> ${stackText}</li>
            </ul>

            <div class="project-actions">
              <a class="btn btn-primary" href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" aria-label="Abrir código do projeto ${project.name}">Código</a>
              ${demoButtonMarkup}
              <button class="btn btn-secondary project-details-btn" type="button" data-project-id="${project.id}" aria-label="Ver detalhes do projeto ${project.name}">Detalhes</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  projectGrid.innerHTML = cardsMarkup;
}

function setActiveFilterButton(buttonElement) {
  filterButtons.forEach((button) => {
    button.classList.remove("is-active");
  });

  buttonElement.classList.add("is-active");
}

function openProjectModal(projectId, triggerElement = null) {
  const project = projects.find((item) => String(item.id) === String(projectId));
  if (!project) {
    return;
  }

  lastFocusedElement = triggerElement ?? document.activeElement;

  modalCase.textContent = `[${project.code}]`;
  modalTitle.textContent = project.name;
  modalCategory.textContent = project.categoryLabel;
  modalDescription.textContent = project.details;
  modalStatus.textContent = project.status;
  modalType.textContent = project.type;
  modalStack.textContent = (project.technologies || []).join(", ");

  if (project.coverImage) {
    modalCover.src = project.coverImage;
    modalCover.alt = `Capa do projeto ${project.name}`;
    modalCover.hidden = false;
  } else {
    modalCover.src = "";
    modalCover.alt = "";
    modalCover.hidden = true;
  }

  modalFeatures.innerHTML = (project.features || [])
    .map((feature) => `<li>${feature}</li>`)
    .join("");

  modalNextSteps.innerHTML = (project.nextSteps || ["Detalhar próximos passos deste projeto no roadmap do GitHub."])
    .map((step) => `<li>${step}</li>`)
    .join("");

  if (project.demoUrl) {
    modalProjectLink.href = project.demoUrl;
    modalProjectLink.textContent = "Demo";
    modalProjectLink.hidden = false;
  } else {
    modalProjectLink.href = "#";
    modalProjectLink.textContent = "Demo";
    modalProjectLink.hidden = true;
  }

  modalGithubLink.href = project.githubUrl;
  modalGithubLink.textContent = "Código";

  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modalCloseButton.focus();
}

function closeProjectModal() {
  modal.hidden = true;
  document.body.style.overflow = "";

  if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
}

function sanitizeProjects(data) {
  if (!Array.isArray(data)) {
    return [];
  }

  return data.map((project) => ({
    ...project,
    nextSteps: Array.isArray(project.nextSteps) && project.nextSteps.length
      ? project.nextSteps
      : ["Adicionar próximos passos deste case conforme roadmap de evolução."],
    githubUrl: project.githubUrl || REPOSITORY_URL,
    demoUrl: project.demoUrl || null
  }));
}

async function loadProjectsFromApi() {
  setProjectsStatus("Carregando projetos...", "info");

  try {
    const { response } = await requestApi("projects", { method: "GET" });
    const data = await response.json();

    projects = sanitizeProjects(data);

    if (!projects.length) {
      throw new Error("Lista de projetos vazia na API.");
    }

    renderProjects();
    setProjectsStatus("Projetos carregados com sucesso pela API.", "success");
    return;
  } catch (apiError) {
    projects = sanitizeProjects(fallbackProjects);

    if (projects.length) {
      renderProjects();
      setProjectsStatus("API indisponível no momento. Exibindo projetos locais de fallback.", "info");
      return;
    }

    projects = [];
    renderProjects();
    setProjectsStatus("Não foi possível carregar projetos. Verifique a API e o fallback local.", "error");
  }
}

function setupProjectFilters() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = normalizeCategory(button.dataset.filter || "todos") || "todos";
      setActiveFilterButton(button);
      renderProjects();
    });
  });
}

function setupProjectEvents() {
  projectGrid.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const detailsButton = target.closest(".project-details-btn");
    if (!detailsButton) {
      return;
    }

    openProjectModal(detailsButton.dataset.projectId, detailsButton);
  });

  modal.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (target.matches("[data-close-modal]")) {
      closeProjectModal();
    }
  });

  modalCloseButton.addEventListener("click", closeProjectModal);
}

function setupSkillsInteraction() {
  const skillCards = document.querySelectorAll(".skill-card");
  const skillDetail = document.getElementById("skill-detail");

  skillCards.forEach((card) => {
    card.addEventListener("click", () => {
      const skillKey = card.dataset.skill;
      if (!skillKey || !skillsData[skillKey]) {
        return;
      }

      skillCards.forEach((item) => {
        item.classList.remove("is-selected");
        item.setAttribute("aria-expanded", "false");
      });

      card.classList.add("is-selected");
      card.setAttribute("aria-expanded", "true");

      const skillData = skillsData[skillKey];
      skillDetail.innerHTML = `
        <h3>${skillData.title}</h3>
        <p>${skillData.description}</p>
      `;

      skillDetail.focus();
    });
  });
}

function setupMobileMenu() {
  const toggleButton = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  const navLinks = nav.querySelectorAll("a");

  function closeMenu() {
    toggleButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }

  toggleButton.addEventListener("click", () => {
    const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
    toggleButton.setAttribute("aria-expanded", String(!isExpanded));
    nav.classList.toggle("is-open", !isExpanded);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Node)) {
      return;
    }

    if (!nav.contains(target) && !toggleButton.contains(target)) {
      closeMenu();
    }
  });
}

function setupActiveNavLink() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const activateLink = (sectionId) => {
    navLinks.forEach((link) => {
      const isCurrent = link.getAttribute("href") === `#${sectionId}`;
      link.classList.toggle("is-active", isCurrent);

      if (isCurrent) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activateLink(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
        rootMargin: "-20% 0px -40% 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));
  } else {
    activateLink("inicio");
  }
}

function setupBackToTop() {
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    backToTopButton.classList.toggle("visible", window.scrollY > 420);
  });
}

function validateField(field) {
  const fieldName = field.name;
  const errorElement = document.getElementById(`error-${fieldName}`);

  if (!errorElement) {
    return true;
  }

  const value = field.value.trim();
  let errorMessage = "";

  if (fieldName === "nome" && value.length < 2) {
    errorMessage = "Informe um nome com pelo menos 2 caracteres.";
  }

  if (fieldName === "email") {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      errorMessage = "Informe um e-mail válido.";
    }
  }

  if (fieldName === "mensagem" && value.length < 10) {
    errorMessage = "A mensagem precisa ter pelo menos 10 caracteres.";
  }

  errorElement.textContent = errorMessage;
  field.setAttribute("aria-invalid", errorMessage ? "true" : "false");
  return !errorMessage;
}

async function sendContactMessage(payload) {
  const { response } = await requestApi("contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const result = await response.json();

  if (!response.ok) {
    const message = result.message || "Falha ao enviar mensagem.";
    throw new Error(message);
  }

  return result;
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");
  const submitButton = document.getElementById("submit-button");

  const fields = [
    form.querySelector("#nome"),
    form.querySelector("#email"),
    form.querySelector("#mensagem")
  ];

  fields.forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const allValid = fields.every((field) => validateField(field));
    if (!allValid) {
      feedback.textContent = "Revise os campos destacados antes de enviar.";
      return;
    }

    const payload = {
      name: form.nome.value.trim(),
      email: form.email.value.trim(),
      message: form.mensagem.value.trim()
    };

    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";
    feedback.textContent = "";

    try {
      const result = await sendContactMessage(payload);
      const emailNotice = result?.email?.notice ? ` ${result.email.notice}` : "";
      feedback.textContent = `Mensagem enviada com sucesso!${emailNotice}`;
      form.reset();
    } catch (error) {
      feedback.textContent = "Erro ao enviar mensagem. Verifique se o back-end está ativo e tente novamente.";
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Enviar mensagem";
    }
  });
}

async function copyEmailToClipboard() {
  const copyFeedback = document.getElementById("copy-feedback");

  try {
    await navigator.clipboard.writeText(personalData.email);
    copyFeedback.textContent = "E-mail copiado para a área de transferência.";
    return;
  } catch (error) {
    const fallbackTextArea = document.createElement("textarea");
    fallbackTextArea.value = personalData.email;
    fallbackTextArea.style.position = "fixed";
    fallbackTextArea.style.left = "-9999px";

    document.body.appendChild(fallbackTextArea);
    fallbackTextArea.focus();
    fallbackTextArea.select();

    try {
      document.execCommand("copy");
      copyFeedback.textContent = "E-mail copiado para a área de transferência.";
    } catch (fallbackError) {
      copyFeedback.textContent = `Não foi possível copiar automaticamente. Copie manualmente: ${personalData.email}`;
    }

    document.body.removeChild(fallbackTextArea);
  }
}

function setupCopyEmailButton() {
  const copyButton = document.getElementById("copy-email");
  copyButton.addEventListener("click", copyEmailToClipboard);
}

function setupKeyboardEvents() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeProjectModal();
    }
  });
}

function setupTerminalTyping() {
  const typingTarget = document.getElementById("terminal-typing");
  if (!typingTarget) {
    return;
  }

  const lines = [
    "backend focus active",
    "python roadmap in progress",
    "api studies running"
  ];

  let currentLine = 0;

  setInterval(() => {
    currentLine = (currentLine + 1) % lines.length;
    typingTarget.textContent = lines[currentLine];
  }, 1800);
}

function setupMatrixRain() {
  const matrixRain = document.getElementById("matrix-rain");
  if (!matrixRain) {
    return;
  }

  const symbols = "01ABCDEF#@$%&*";

  function randomColumnText() {
    let value = "";
    for (let index = 0; index < 40; index += 1) {
      value += symbols[Math.floor(Math.random() * symbols.length)];
    }
    return value;
  }

  function renderColumns() {
    matrixRain.innerHTML = "";
    const totalColumns = Math.max(8, Math.floor(window.innerWidth / 130));

    for (let index = 0; index < totalColumns; index += 1) {
      const column = document.createElement("span");
      column.className = "matrix-column";
      column.textContent = randomColumnText();
      column.style.left = `${(index / totalColumns) * 100}%`;
      column.style.animationDelay = `${Math.random() * 6}s`;
      column.style.animationDuration = `${8 + Math.random() * 8}s`;
      matrixRain.appendChild(column);
    }
  }

  renderColumns();
  window.addEventListener("resize", renderColumns);
}

function init() {
  setupPersonalData();
  setupMobileMenu();
  setupActiveNavLink();
  setupSkillsInteraction();
  setupProjectFilters();
  setupProjectEvents();
  setupBackToTop();
  setupContactForm();
  setupCopyEmailButton();
  setupKeyboardEvents();
  setupTerminalTyping();
  setupMatrixRain();

  loadProjectsFromApi();
}

init();


