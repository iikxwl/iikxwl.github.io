const personalData = {
  name: "Christian Batista",
  role: "Desenvolvedor Full Stack Júnior | Foco em Back-end",
  email: "Christian.abatista07@gmail.com",
  github: "https://github.com/iikxwl",
  linkedin: "https://www.linkedin.com/in/christianabatista/"
};

const fallbackProjects = [
  {
    id: "api-001",
    code: "API-001",
    name: "API de Gerenciamento de Usuários",
    category: "back-end",
    categoryLabel: "Back-end",
    description: "API REST simples para cadastro, listagem, atualização e remoção de usuários.",
    technologies: ["Node.js", "Express", "JavaScript", "JSON"],
    status: "Em desenvolvimento",
    type: "API REST",
    details: "Projeto de estudo com foco em organização de rotas REST, validação de entrada e estrutura de dados em JSON.",
    features: [
      "GET /api/users",
      "GET /api/users/:id",
      "POST /api/users",
      "PUT /api/users/:id",
      "DELETE /api/users/:id"
    ],
    nextSteps: [
      "Adicionar paginação de resultados.",
      "Implementar testes automatizados da API.",
      "Migrar persistência de JSON para banco de dados relacional."
    ],
    coverImage: "assets/images/projects/api-001-cover.jpg",
    githubUrl: "https://github.com/iikxwl",
    demoUrl: "projects/users-api.html"
  },
  {
    id: "fullstack-002",
    code: "FULLSTACK-002",
    name: "Sistema de Tarefas Full Stack",
    category: "full-stack",
    categoryLabel: "Full Stack",
    description: "Aplicação de tarefas com front-end integrado ao back-end, permitindo criar, concluir e excluir tarefas.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
    status: "Em desenvolvimento",
    type: "CRUD",
    details: "Aplicação prática para treinar fluxo CRUD completo, integração por Fetch API e atualização dinâmica da interface.",
    features: [
      "GET /api/tasks",
      "POST /api/tasks",
      "PATCH /api/tasks/:id",
      "DELETE /api/tasks/:id"
    ],
    nextSteps: [
      "Adicionar filtro por status (pendente/concluída).",
      "Adicionar edição do título da tarefa.",
      "Implementar autenticação por usuário."
    ],
    coverImage: "assets/images/projects/fullstack-002-cover.jpg",
    githubUrl: "https://github.com/iikxwl",
    demoUrl: "projects/tasks.html"
  },
  {
    id: "backend-003",
    code: "BACKEND-003",
    name: "API de Contato do Portfólio",
    category: "back-end",
    categoryLabel: "Back-end",
    description: "Back-end responsável por receber, validar e enviar mensagens do formulário de contato.",
    technologies: ["Node.js", "Express", "JavaScript", "JSON"],
    status: "Concluído",
    type: "API",
    details: "API para tratamento de mensagens com validação de campos, persistência local e envio automático por SMTP quando configurado.",
    features: [
      "POST /api/contact",
      "Validação de campos",
      "Envio automático de e-mail",
      "Resposta JSON de sucesso ou erro"
    ],
    nextSteps: [
      "Adicionar proteção anti-spam com rate limit.",
      "Implementar painel administrativo de mensagens.",
      "Registrar logs de envio de e-mail por mensagem."
    ],
    coverImage: "assets/images/projects/backend-003-cover.jpg",
    githubUrl: "https://github.com/iikxwl",
    demoUrl: "projects/contact-api.html"
  },
  {
    id: "auth-004",
    code: "AUTH-004",
    name: "Sistema de Login Simples",
    category: "back-end",
    categoryLabel: "Back-end",
    description: "Estrutura inicial de autenticação com validação de campos e simulação segura de login.",
    technologies: ["Node.js", "Express", "JavaScript"],
    status: "Em desenvolvimento",
    type: "Autenticação",
    details: "Demonstração didática de autenticação, sem armazenamento de senha real e com comentários para evolução segura.",
    features: [
      "Validação de campos",
      "Simulação de login",
      "Organização de rotas",
      "Base para futura evolução com JWT e hash"
    ],
    nextSteps: [
      "Adicionar hash de senha (bcrypt).",
      "Adicionar autenticação por JWT.",
      "Persistir usuários em banco de dados."
    ],
    coverImage: "assets/images/projects/auth-004-cover.jpg",
    githubUrl: "https://github.com/iikxwl",
    demoUrl: "projects/login.html"
  },
  {
    id: "api-005",
    code: "API-005",
    name: "Consulta de API Externa",
    category: "api",
    categoryLabel: "API",
    description: "Projeto que consome uma API pública, trata erros, exibe loading e mostra dados na tela.",
    technologies: ["JavaScript", "Fetch API", "HTML", "CSS"],
    status: "Em desenvolvimento",
    type: "Consumo de API",
    details: "Projeto para praticar consumo de API externa com tratamento de erro, controle de estado e renderização de resultados.",
    features: [
      "Buscar dados de API pública",
      "Tratar erros de requisição",
      "Exibir loading",
      "Mostrar resultado em tela"
    ],
    nextSteps: [
      "Adicionar cache simples para evitar chamadas repetidas.",
      "Adicionar suporte a múltiplas APIs públicas.",
      "Melhorar acessibilidade na exibição dos resultados."
    ],
    coverImage: "assets/images/projects/api-005-cover.jpg",
    githubUrl: "https://github.com/iikxwl",
    demoUrl: "projects/api-fetch.html"
  },
  {
    id: "portfolio-006",
    code: "PORTFOLIO-006",
    name: "Portfólio Full Stack",
    category: "full-stack",
    categoryLabel: "Full Stack",
    description: "Portfólio pessoal com front-end responsivo, back-end funcional, projetos dinâmicos, currículo online ATS-friendly e formulário conectado à API.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
    status: "Em desenvolvimento",
    type: "Projeto pessoal",
    details: "Projeto central reunindo arquitetura front-end + back-end, integração por API e apresentação profissional de estudos práticos.",
    features: [
      "Front-end responsivo",
      "Back-end funcional",
      "API de projetos",
      "Formulário conectado ao back-end",
      "Currículo online ATS-friendly"
    ],
    nextSteps: [
      "Adicionar testes de integração das rotas principais.",
      "Publicar versão em ambiente de hospedagem.",
      "Organizar roadmap público de evolução no GitHub."
    ],
    coverImage: "assets/images/projects/portfolio-006-cover.jpg",
    githubUrl: "https://github.com/iikxwl",
    demoUrl: "index.html"
  }
];

const skillsData = {
  nodejs: {
    title: "Node.js",
    description: "Runtime JavaScript no servidor para construir APIs e aplicações back-end com fluxo assíncrono."
  },
  express: {
    title: "Express.js",
    description: "Framework leve para estruturar rotas, middlewares e respostas HTTP em APIs REST."
  },
  "api-rest": {
    title: "APIs REST",
    description: "Criação de endpoints organizados por recurso, usando métodos GET, POST, PUT e DELETE."
  },
  crud: {
    title: "CRUD",
    description: "Implementação de operações de criação, leitura, atualização e remoção de dados."
  },
  json: {
    title: "JSON",
    description: "Formato de dados usado para comunicação entre front-end e back-end, além de persistência inicial."
  },
  validacao: {
    title: "Validação de dados",
    description: "Verificação de entradas do usuário para reduzir erros e manter integridade dos dados."
  },
  javascript: {
    title: "JavaScript",
    description: "Base para lógica no navegador e no servidor, unificando linguagem em projetos Full Stack."
  },
  fetch: {
    title: "Fetch API",
    description: "Comunicação do front-end com APIs para enviar e buscar dados de forma assíncrona."
  },
  html5: {
    title: "HTML5",
    description: "Estrutura semântica para páginas acessíveis, organizadas e mais fáceis de manter."
  },
  css3: {
    title: "CSS3",
    description: "Estilização responsiva e consistente para criar interfaces modernas e legíveis."
  },
  responsividade: {
    title: "Responsividade",
    description: "Adaptação de layout para celular, tablet e desktop mantendo usabilidade."
  },
  "git-github": {
    title: "Git e GitHub",
    description: "Versionamento de código, histórico de alterações e publicação de projetos em repositórios."
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
              <button class="btn btn-secondary project-details-btn" type="button" data-project-id="${project.id}">Ver detalhes</button>
              <!-- Troque "githubUrl" no server/data/projects.json quando criar o repositório específico deste projeto -->
              <a class="btn btn-primary" href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">GitHub</a>
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
    modalProjectLink.textContent = "Abrir demo";
  } else {
    const fallbackBase = resolvedApiBase || API_BASE_CANDIDATES[0] || "/api";
    modalProjectLink.href = buildApiUrl(fallbackBase, `projects/${project.id}`);
    modalProjectLink.textContent = "Ver detalhes (JSON)";
  }

  modalGithubLink.href = project.githubUrl;

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
    githubUrl: project.githubUrl || "https://github.com/iikxwl"
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
    "api online",
    "database mode: json",
    "ready for requests"
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

