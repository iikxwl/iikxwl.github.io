const personalData = {
  name: "Christian Batista",
  role: "Estudante de Ciência da Computação | Backend em formação",
  email: "christian.abatista07@gmail.com",
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
    description: "API REST simples para praticar cadastro, listagem, atualização e remoção de usuários.",
    technologies: ["Node.js", "Express", "JavaScript", "JSON"],
    status: "Em construção",
    type: "API REST",
    details: "Projeto de estudo para treinar rotas REST, validação de entrada, organização de controller e persistência inicial em JSON.",
    features: ["Rotas GET, POST, PUT e DELETE", "Validação básica de campos", "Organização de dados em JSON", "Estrutura inicial de API"],
    nextSteps: ["Adicionar paginação.", "Adicionar testes.", "Migrar persistência para banco de dados."],
    githubUrl: "https://github.com/iikxwl/api-gerenciamento-usuarios",
    demoUrl: "projects/users-api.html"
  },
  {
    id: "fullstack-002",
    code: "FULLSTACK-002",
    name: "Sistema de Tarefas Full Stack",
    category: "full-stack",
    categoryLabel: "Full Stack",
    description: "Aplicação de tarefas para praticar integração entre interface, JavaScript e backend.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
    status: "Em construção",
    type: "CRUD",
    details: "Projeto para entender o fluxo completo de uma aplicação: tela, eventos, requisições, rotas e atualização de dados.",
    features: ["Criar tarefas", "Listar tarefas", "Marcar tarefas como concluídas", "Excluir tarefas"],
    nextSteps: ["Adicionar filtro por status.", "Adicionar edição de tarefa.", "Adicionar autenticação."],
    githubUrl: "https://github.com/iikxwl/sistema-tarefas-fullstack",
    demoUrl: "projects/tasks.html"
  },
  {
    id: "backend-003",
    code: "BACKEND-003",
    name: "API de Contato do Portfólio",
    category: "back-end",
    categoryLabel: "Back-end",
    description: "Backend para receber e validar mensagens enviadas pelo formulário do portfólio.",
    technologies: ["Node.js", "Express", "JavaScript"],
    status: "Em construção",
    type: "API",
    details: "Projeto separado para praticar validação de dados, variáveis de ambiente e uma futura integração de envio de email.",
    features: ["Rota POST de contato", "Validação de nome, email e mensagem", "Estrutura com .env.example", "Base para integração SMTP/API"],
    nextSteps: ["Adicionar envio real de email.", "Adicionar proteção anti-spam.", "Publicar backend em Render ou Vercel."],
    githubUrl: "https://github.com/iikxwl/api-contato-portfolio",
    demoUrl: "projects/contact-api.html"
  },
  {
    id: "auth-004",
    code: "AUTH-004",
    name: "Sistema de Login Simples",
    category: "back-end",
    categoryLabel: "Back-end",
    description: "Projeto inicial para estudar autenticação, validação de campos e fluxo de login.",
    technologies: ["Node.js", "Express", "JavaScript"],
    status: "Planejado",
    type: "Autenticação",
    details: "Projeto para evoluir com calma até conceitos como hash de senha, JWT, sessão e proteção de rotas.",
    features: ["Validação de campos", "Simulação de login", "Organização de rotas", "Base para evolução com JWT"],
    nextSteps: ["Adicionar bcrypt.", "Adicionar JWT.", "Persistir usuários em banco de dados."],
    githubUrl: "https://github.com/iikxwl/sistema-login-simples",
    demoUrl: "projects/login.html"
  },
  {
    id: "api-005",
    code: "API-005",
    name: "Consulta de API Externa",
    category: "api",
    categoryLabel: "API",
    description: "Projeto para consumir uma API pública, tratar erros e exibir dados na tela.",
    technologies: ["JavaScript", "Fetch API", "HTML", "CSS"],
    status: "Em construção",
    type: "Consumo de API",
    details: "Projeto voltado a praticar requisições HTTP, estados de carregamento, tratamento de erro e renderização no frontend.",
    features: ["Buscar dados de API pública", "Exibir loading", "Tratar erros", "Renderizar resultado em tela"],
    nextSteps: ["Adicionar cache simples.", "Adicionar outra API pública.", "Melhorar acessibilidade."],
    githubUrl: "https://github.com/iikxwl/consulta-api-externa",
    demoUrl: "projects/api-fetch.html"
  },
  {
    id: "portfolio-006",
    code: "PORTFOLIO-006",
    name: "Portfólio Pessoal",
    category: "full-stack",
    categoryLabel: "Full Stack",
    description: "Meu portfólio pessoal para documentar evolução, projetos e próximos estudos.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    status: "Em evolução",
    type: "Projeto pessoal",
    details: "Projeto central para apresentar minha trajetória, estudos atuais e repositórios em desenvolvimento.",
    features: ["Layout responsivo", "Seção de projetos", "Currículo online", "Contato profissional"],
    nextSteps: ["Melhorar currículo.", "Adicionar projetos reais finalizados.", "Conectar domínio próprio."],
    githubUrl: "https://github.com/iikxwl/iikxwl.github.io",
    demoUrl: "index.html"
  }
];

const skillsData = {
  nodejs: { title: "Node.js", description: "Estou estudando Node.js para criar APIs e entender melhor desenvolvimento backend com JavaScript." },
  express: { title: "Express.js", description: "Uso Express para praticar rotas, middlewares e respostas HTTP em projetos simples." },
  "api-rest": { title: "APIs REST", description: "Estou aprendendo a organizar endpoints por recurso usando GET, POST, PUT e DELETE." },
  crud: { title: "CRUD", description: "Base para a maioria dos sistemas: criar, listar, atualizar e remover dados." },
  json: { title: "JSON", description: "Uso JSON para trocar dados entre frontend e backend e para persistência simples em estudos." },
  validacao: { title: "Validação", description: "Validação ajuda a evitar dados inválidos e é uma base importante para segurança em aplicações." },
  javascript: { title: "JavaScript", description: "Linguagem principal que estou usando para praticar frontend e backend." },
  fetch: { title: "Fetch API", description: "Uso Fetch API para conectar páginas HTML com APIs e dados externos." },
  html5: { title: "HTML5", description: "Estrutura das páginas, com foco em semântica e organização." },
  css3: { title: "CSS3", description: "Estilização responsiva para criar interfaces legíveis e funcionais." },
  responsividade: { title: "Responsividade", description: "Adaptação do layout para celular, tablet e desktop." },
  "git-github": { title: "Git e GitHub", description: "Versionamento, publicação dos projetos e organização da minha evolução técnica." }
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

let projects = fallbackProjects;
let activeFilter = "todos";
let lastFocusedElement = null;

function setupPersonalData() {
  const profileName = document.getElementById("profile-name");
  const roleBadge = document.getElementById("role-badge");
  const emailLink = document.getElementById("email-link");

  if (profileName) profileName.textContent = personalData.name;
  if (roleBadge) roleBadge.textContent = personalData.role;
  if (emailLink) {
    emailLink.href = `mailto:${personalData.email}`;
    emailLink.textContent = personalData.email;
  }

  document.querySelectorAll('[data-link="github"]').forEach((link) => { link.href = personalData.github; });
  document.querySelectorAll('[data-link="linkedin"]').forEach((link) => { link.href = personalData.linkedin; });
}

function setProjectsStatus(message, type = "info") {
  if (!projectStatus) return;
  projectStatus.textContent = message;
  projectStatus.classList.remove("status-error", "status-success", "status-info");
  projectStatus.classList.add(`status-${type}`);
}

function normalizeCategory(categoryValue) {
  return String(categoryValue || "").toLowerCase();
}

function getFilteredProjects() {
  if (activeFilter === "todos") return projects;
  return projects.filter((project) => normalizeCategory(project.category) === activeFilter);
}

function renderProjects() {
  const filteredProjects = getFilteredProjects();
  projectGrid.innerHTML = "";

  if (!filteredProjects.length) {
    projectGrid.innerHTML = `<article class="empty-card"><h3>Nenhum projeto encontrado</h3><p>Não há projetos para o filtro selecionado.</p></article>`;
    return;
  }

  projectGrid.innerHTML = filteredProjects.map((project) => {
    const stackText = Array.isArray(project.technologies) ? project.technologies.join(", ") : "Tecnologias não informadas";
    const coverMarkup = project.coverImage ? `<img class="project-cover" src="${project.coverImage}" alt="Capa do projeto ${project.name}" loading="lazy">` : "";

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
            <a class="btn btn-primary" href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </article>`;
  }).join("");
}

function setActiveFilterButton(buttonElement) {
  filterButtons.forEach((button) => button.classList.remove("is-active"));
  buttonElement.classList.add("is-active");
}

function openProjectModal(projectId, triggerElement = null) {
  const project = projects.find((item) => String(item.id) === String(projectId));
  if (!project) return;

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

  modalFeatures.innerHTML = (project.features || []).map((feature) => `<li>${feature}</li>`).join("");
  modalNextSteps.innerHTML = (project.nextSteps || ["Detalhar próximos passos no roadmap."]).map((step) => `<li>${step}</li>`).join("");
  modalProjectLink.href = project.demoUrl || project.githubUrl;
  modalProjectLink.textContent = project.demoUrl ? "Abrir demo" : "Ver projeto";
  modalGithubLink.href = project.githubUrl;

  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modalCloseButton.focus();
}

function closeProjectModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
  if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
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
    const detailsButton = event.target instanceof HTMLElement ? event.target.closest(".project-details-btn") : null;
    if (detailsButton) openProjectModal(detailsButton.dataset.projectId, detailsButton);
  });

  modal.addEventListener("click", (event) => {
    if (event.target instanceof HTMLElement && event.target.matches("[data-close-modal]")) closeProjectModal();
  });

  modalCloseButton.addEventListener("click", closeProjectModal);
}

function setupSkillsInteraction() {
  const skillCards = document.querySelectorAll(".skill-card");
  const skillDetail = document.getElementById("skill-detail");

  skillCards.forEach((card) => {
    card.addEventListener("click", () => {
      const skillKey = card.dataset.skill;
      if (!skillKey || !skillsData[skillKey]) return;

      skillCards.forEach((item) => {
        item.classList.remove("is-selected");
        item.setAttribute("aria-expanded", "false");
      });

      card.classList.add("is-selected");
      card.setAttribute("aria-expanded", "true");
      skillDetail.innerHTML = `<h3>${skillsData[skillKey].title}</h3><p>${skillsData[skillKey].description}</p>`;
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

  navLinks.forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof Node && !nav.contains(target) && !toggleButton.contains(target)) closeMenu();
  });
}

function setupActiveNavLink() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const activateLink = (sectionId) => {
    navLinks.forEach((link) => {
      const isCurrent = link.getAttribute("href") === `#${sectionId}`;
      link.classList.toggle("is-active", isCurrent);
      if (isCurrent) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) activateLink(entry.target.id); });
    }, { threshold: 0.45, rootMargin: "-20% 0px -40% 0px" });
    sections.forEach((section) => observer.observe(section));
  } else {
    activateLink("inicio");
  }
}

function setupBackToTop() {
  backToTopButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", () => backToTopButton.classList.toggle("visible", window.scrollY > 420));
}

function validateField(field) {
  const errorElement = document.getElementById(`error-${field.name}`);
  if (!errorElement) return true;

  const value = field.value.trim();
  let errorMessage = "";

  if (field.name === "nome" && value.length < 2) errorMessage = "Informe um nome com pelo menos 2 caracteres.";
  if (field.name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) errorMessage = "Informe um e-mail válido.";
  if (field.name === "mensagem" && value.length < 10) errorMessage = "A mensagem precisa ter pelo menos 10 caracteres.";

  errorElement.textContent = errorMessage;
  field.setAttribute("aria-invalid", errorMessage ? "true" : "false");
  return !errorMessage;
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");
  const submitButton = document.getElementById("submit-button");
  const fields = [form.querySelector("#nome"), form.querySelector("#email"), form.querySelector("#mensagem")];

  fields.forEach((field) => field.addEventListener("blur", () => validateField(field)));

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const allValid = fields.every((field) => validateField(field));
    if (!allValid) {
      feedback.textContent = "Revise os campos destacados antes de enviar.";
      return;
    }

    const name = form.nome.value.trim();
    const email = form.email.value.trim();
    const message = form.mensagem.value.trim();
    const subject = encodeURIComponent(`Contato pelo portfólio - ${name}`);
    const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`);

    submitButton.disabled = true;
    submitButton.textContent = "Abrindo email...";
    feedback.textContent = "Abrindo seu aplicativo de email para envio da mensagem.";

    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;

    window.setTimeout(() => {
      submitButton.disabled = false;
      submitButton.textContent = "Enviar por email";
    }, 1200);
  });
}

async function copyEmailToClipboard() {
  const copyFeedback = document.getElementById("copy-feedback");

  try {
    await navigator.clipboard.writeText(personalData.email);
    copyFeedback.textContent = "Email copiado.";
  } catch (error) {
    copyFeedback.textContent = `Copie manualmente: ${personalData.email}`;
  }
}

function setupCopyEmailButton() {
  const copyButton = document.getElementById("copy-email");
  copyButton.addEventListener("click", copyEmailToClipboard);
}

function setupKeyboardEvents() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeProjectModal();
  });
}

function setupTerminalTyping() {
  const typingTarget = document.getElementById("terminal-typing");
  if (!typingTarget) return;

  const lines = ["em evolução constante", "projetos em construção", "foco em backend"];
  let currentLine = 0;

  setInterval(() => {
    currentLine = (currentLine + 1) % lines.length;
    typingTarget.textContent = lines[currentLine];
  }, 1800);
}

function setupMatrixRain() {
  const matrixRain = document.getElementById("matrix-rain");
  if (!matrixRain) return;

  const symbols = "01ABCDEF#@$%&*";

  function randomColumnText() {
    let value = "";
    for (let index = 0; index < 40; index += 1) value += symbols[Math.floor(Math.random() * symbols.length)];
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

  renderProjects();
  setProjectsStatus("Projetos em construção e repositórios organizados no GitHub.", "success");
}

init();
