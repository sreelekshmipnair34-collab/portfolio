/**
 * ==========================================================================
 * SREELEKSHMI PORTFOLIO — INTERACTIVE JAVASCRIPT ENGINE
 * B.Tech 1st Year CSE Student & Web Developer
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // ------------------------------------------------------------------------
  // 1. DATA: Project Case Studies for Modal
  // ------------------------------------------------------------------------
  const projectDatabase = {
    1: {
      title: "TaskFlow Pro — Smart Task & Productivity Manager",
      badge: "JavaScript App • Productivity",
      desc: "TaskFlow Pro is a full-featured web task and workflow manager designed for productivity. It includes dynamic status filtering, priority badges, instant search indexing, real-time completion analytics, and persistent storage via browser localStorage.",
      metrics: [
        { val: "100%", lbl: "Client-Side Privacy" },
        { val: "0ms", lbl: "Latency Persistence" },
        { val: "Responsive", lbl: "All Screen Sizes" }
      ],
      challenge: "Providing immediate, reactive UI updates and search filtering across hundreds of tasks without state drift or unnecessary DOM re-renders.",
      solution: "Implemented an event-driven architecture with normalized JavaScript data objects, debounced search filters, and persistent synchronization with HTML5 LocalStorage.",
      stack: ["HTML5", "CSS3", "JavaScript (ES6+)", "LocalStorage", "Responsive Design"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    2: {
      title: "ShopSphere — Modern Full-Stack Store",
      badge: "Full Stack • E-Commerce",
      desc: "A responsive full-stack e-commerce web platform featuring dynamic catalog browsing, category filtering, cart management, user session handling, and RESTful product endpoints built with Node.js and Express.",
      metrics: [
        { val: "REST", lbl: "API Architecture" },
        { val: "CRUD", lbl: "Database Operations" },
        { val: "Mobile-First", lbl: "UI Experience" }
      ],
      challenge: "Handling real-time cart modifications, price totals, and stock validation gracefully across client and server.",
      solution: "Engineered modular Express route controllers paired with structured MongoDB/Mongoose schemas and asynchronous Fetch requests from the React frontend.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS Grid", "REST APIs"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    3: {
      title: "WeatherPulse — Dynamic Weather Analytics",
      badge: "Frontend • Asynchronous APIs",
      desc: "WeatherPulse is an interactive weather application that provides real-time meteorological conditions and multi-day forecasts. It features automatic browser geolocation detection, dynamic weather themes, and temperature conversions.",
      metrics: [
        { val: "Live", lbl: "OpenWeather API" },
        { val: "< 1s", lbl: "Data Retrieval" },
        { val: "Auto", lbl: "Geo-Location" }
      ],
      challenge: "Gracefully handling geolocation permission denials, network failures, and parsing multi-nested meteorological API JSON payloads.",
      solution: "Utilized asynchronous JavaScript (async/await) with comprehensive try/catch error boundaries, fallback city defaults, and responsive CSS glassmorphism cards.",
      stack: ["HTML5", "Vanilla JavaScript", "Fetch API", "OpenWeather API", "CSS Glassmorphism"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    4: {
      title: "DevConnect — Developer Community Hub",
      badge: "Full Stack • Community Platform",
      desc: "DevConnect is a social web application for software developers to showcase project work, write technical updates, exchange peer code reviews, and bookmark open-source resources.",
      metrics: [
        { val: "JWT", lbl: "Token Auth" },
        { val: "Modular", lbl: "Components" },
        { val: "Scalable", lbl: "Backend Schema" }
      ],
      challenge: "Implementing secure user session authentication alongside responsive feed interactions with dynamic post commenting.",
      solution: "Built JSON Web Token (JWT) auth middleware in Express with password hashing via bcrypt, coupled with stateful React components for optimistic feed updates.",
      stack: ["React.js", "Node.js", "Express", "MongoDB", "JWT Auth", "REST APIs"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    5: {
      title: "FinanceTracker — Expense & Budget Manager",
      badge: "JavaScript App • Data Analytics",
      desc: "An intuitive web application for tracking personal income, monthly expenses, category budget allocations, and savings goals with HTML5 Canvas charts and interactive metrics.",
      metrics: [
        { val: "Canvas", lbl: "Visual Charts" },
        { val: "Instant", lbl: "Balance Sync" },
        { val: "Offline", lbl: "Storage Capable" }
      ],
      challenge: "Creating fluid, interactive data visualization charts without relying on bloated 3rd-party library dependencies.",
      solution: "Built custom responsive Canvas drawing routines in JavaScript to render monthly trend bar charts and category breakdown rings.",
      stack: ["JavaScript", "HTML5 Canvas", "CSS3 Grid", "LocalStorage"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    6: {
      title: "AuraUI — Glassmorphic Design System",
      badge: "Frontend • UI Component System",
      desc: "A bespoke design system and component kit built from the ground up using semantic HTML5 and vanilla CSS custom properties, featuring glassmorphism cards, glowing buttons, modals, and fluid micro-animations.",
      metrics: [
        { val: "30+", lbl: "Crafted Components" },
        { val: "0 KB", lbl: "No CSS Bloat" },
        { val: "100%", lbl: "Theme Compliant" }
      ],
      challenge: "Ensuring high contrast, accessibility, and smooth performance on low-power mobile devices while leveraging CSS backdrop filters.",
      solution: "Structured CSS variables into centralized semantic tokens with fallbacks and hardware-accelerated transforms for seamless 60 FPS transitions.",
      stack: ["HTML5", "Vanilla CSS3", "CSS Variables", "JavaScript", "Responsive Design"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  };

  // ------------------------------------------------------------------------
  // 2. DOM Elements Selection
  // ------------------------------------------------------------------------
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const themeToggle = document.getElementById("theme-toggle");
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  const mouseSpotlight = document.getElementById("mouse-spotlight");
  const typewriterEl = document.getElementById("typewriter");

  // Terminal Elements
  const terminalInput = document.getElementById("terminal-input");
  const terminalOutput = document.getElementById("terminal-output");
  const terminalClearBtn = document.getElementById("terminal-clear-btn");
  const terminalChips = document.querySelectorAll(".chip-cmd");

  // Filter Elements
  const skillTabs = document.querySelectorAll(".skill-tab");
  const skillCards = document.querySelectorAll(".skill-card");
  const projectFilters = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  // Modal Elements
  const modal = document.getElementById("project-modal");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modalClose = document.getElementById("modal-close");
  const modalContent = document.getElementById("modal-content");

  // Contact & Toast Elements
  const copyEmailBtn = document.getElementById("copy-email-btn");
  const emailAddressText = document.getElementById("email-address-text");
  const contactForm = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");
  const localTimeDisplay = document.getElementById("local-time-display");
  const backToTopBtn = document.getElementById("back-to-top");
  const currentYearSpan = document.getElementById("current-year");
  const resumeBtn = document.getElementById("resume-download-btn");

  // ------------------------------------------------------------------------
  // 3. Theme Management (Light / Dark Mode)
  // ------------------------------------------------------------------------
  const savedTheme = localStorage.getItem("sreelekshmi-theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("sreelekshmi-theme", newTheme);
    showToast(`Switched to ${newTheme} mode`);
  });

  // ------------------------------------------------------------------------
  // 4. Mouse Spotlight Movement
  // ------------------------------------------------------------------------
  let isTicking = false;
  window.addEventListener("pointermove", (e) => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
        document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
        isTicking = false;
      });
      isTicking = true;
    }
  });

  // ------------------------------------------------------------------------
  // 5. Typewriter Animation for B.Tech 1st Year CSE Student
  // ------------------------------------------------------------------------
  const phrases = [
    "B.Tech 1st Year CSE Student",
    "Full-Stack Web Development",
    "Modern HTML5, CSS3 & JavaScript",
    "React.js & Dynamic Frontends",
    "Problem Solving & Core Computer Science"
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 85;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typewriterEl.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40;
    } else {
      typewriterEl.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 85;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typeSpeed = 1600; // Pause at end of sentence
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 400; // Pause before typing new sentence
    }

    setTimeout(typeEffect, typeSpeed);
  }

  if (typewriterEl) {
    typeEffect();
  }

  // ------------------------------------------------------------------------
  // 6. Sticky Navbar & Active Link Scroll Spy
  // ------------------------------------------------------------------------
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });

  // ------------------------------------------------------------------------
  // 7. Mobile Navigation Drawer
  // ------------------------------------------------------------------------
  mobileToggle.addEventListener("click", () => {
    const isOpen = mobileDrawer.classList.toggle("open");
    mobileToggle.classList.toggle("open", isOpen);
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileDrawer.classList.remove("open");
      mobileToggle.classList.remove("open");
    });
  });

  // ------------------------------------------------------------------------
  // 8. Animated Number Counters (Intersection Observer)
  // ------------------------------------------------------------------------
  const statNumbers = document.querySelectorAll(".stat-number");
  let animatedStats = false;

  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animatedStats) {
          animatedStats = true;
          statNumbers.forEach((stat) => {
            const target = parseInt(stat.getAttribute("data-target"), 10);
            let count = 0;
            const duration = 1500;
            const increment = Math.max(1, Math.ceil(target / (duration / 30)));

            const timer = setInterval(() => {
              count += increment;
              if (count >= target) {
                stat.textContent = target;
                clearInterval(timer);
              } else {
                stat.textContent = count;
              }
            }, 30);
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  const statsContainer = document.querySelector(".stats-counter-strip");
  if (statsContainer) {
    statsObserver.observe(statsContainer);
  }

  // ------------------------------------------------------------------------
  // 9. Interactive Developer Terminal CLI
  // ------------------------------------------------------------------------
  const commandHelp = {
    help: "Available commands: <strong>bio</strong>, <strong>academics</strong>, <strong>skills</strong>, <strong>education</strong>, <strong>projects</strong>, <strong>hire</strong>, <strong>contact</strong>, <strong>clear</strong>, <strong>date</strong>",
    bio: "<strong>Sreelekshmi</strong> is a <strong>1st-year B.Tech Computer Science & Engineering (CSE)</strong> student with a passionate drive for full-stack web development. She builds responsive, modern web applications using HTML5, CSS3, modern JavaScript (ES6+), React.js, and Node.js while mastering core computer science concepts.",
    academics: "<strong>Academic Profile:</strong><br>• Program: Bachelor of Technology (B.Tech)<br>• Branch: Computer Science & Engineering (CSE)<br>• Year of Study: <strong>1st Year (Freshman)</strong><br>• Coursework: Problem Solving & C, Discrete Math, Computer Fundamentals, Web Engineering",
    education: "<strong>Education & Qualifications:</strong><br>• B.Tech in Computer Science & Engineering (1st Year Undergraduate)<br>• Self-directed Full-Stack Web Development & Modern JavaScript Specialization",
    skills: "<strong>Technical Proficiencies:</strong><br>• Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, CSS Flexbox & Grid, Responsive UI<br>• Backend: Node.js, Express.js, RESTful APIs, JSON<br>• Databases: MongoDB, Mongoose, SQL basics<br>• Developer Tools: Git, GitHub, VS Code, Postman, Vite, NPM",
    projects: "<strong>Featured Projects Built:</strong><br>1. TaskFlow Pro — Smart Task & Productivity Manager<br>2. ShopSphere — Modern Full-Stack Store<br>3. WeatherPulse — Dynamic Weather Analytics<br>4. DevConnect — Developer Community Hub<br>5. FinanceTracker — Expense & Budget Manager<br>6. AuraUI — Glassmorphic Design System",
    hire: "🎉 Sreelekshmi is a motivated 1st-year B.Tech CSE student actively seeking student internships, technical mentorship, hackathon teams, and collaborative web projects! Email: <strong>sreelekshmi.dev@gmail.com</strong>",
    contact: "Email: sreelekshmi.dev@gmail.com | GitHub: github.com | LinkedIn: linkedin.com",
    date: () => `Current Local Time: ${new Date().toLocaleString()}`,
    whoami: "sreelekshmi@btech-cse-student",
    sudo: "Access granted: You are exploring Sreelekshmi's 1st-year B.Tech CSE portfolio!",
    clear: "CLEAR"
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    const userLine = document.createElement("div");
    userLine.className = "term-line";
    userLine.innerHTML = `<span class="term-prompt-prefix">guest@sreelekshmi:~$</span> <span class="term-user-cmd">${escapeHtml(cmd)}</span>`;
    terminalOutput.appendChild(userLine);

    if (cmd === "clear") {
      terminalOutput.innerHTML = "";
      return;
    }

    const respLine = document.createElement("div");
    respLine.className = "term-line";

    if (commandHelp[cmd]) {
      const resp = typeof commandHelp[cmd] === "function" ? commandHelp[cmd]() : commandHelp[cmd];
      respLine.innerHTML = resp;
    } else {
      respLine.innerHTML = `command not found: <span style="color:#ef4444">${escapeHtml(cmd)}</span>. Type <span class="term-highlight">help</span> for available commands.`;
    }

    terminalOutput.appendChild(respLine);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  if (terminalInput) {
    terminalInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        executeCommand(terminalInput.value);
        terminalInput.value = "";
      }
    });

    terminalChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const cmd = chip.getAttribute("data-cmd");
        terminalInput.value = cmd;
        executeCommand(cmd);
        terminalInput.value = "";
      });
    });

    if (terminalClearBtn) {
      terminalClearBtn.addEventListener("click", () => {
        terminalOutput.innerHTML = "";
      });
    }
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  // ------------------------------------------------------------------------
  // 10. Skills Filter Tabs
  // ------------------------------------------------------------------------
  skillTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      skillTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const category = tab.getAttribute("data-category");

      skillCards.forEach((card) => {
        const cardCat = card.getAttribute("data-category");
        if (category === "all" || cardCat === category) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 20);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.96)";
          setTimeout(() => {
            card.style.display = "none";
          }, 200);
        }
      });
    });
  });

  // ------------------------------------------------------------------------
  // 11. Projects Category Filter
  // ------------------------------------------------------------------------
  projectFilters.forEach((btn) => {
    btn.addEventListener("click", () => {
      projectFilters.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const cardCat = card.getAttribute("data-category");
        if (filter === "all" || cardCat === filter) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 20);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(15px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 250);
        }
      });
    });
  });

  // ------------------------------------------------------------------------
  // 12. Project Modal Popup Logic
  // ------------------------------------------------------------------------
  function openProjectModal(id) {
    const data = projectDatabase[id];
    if (!data) return;

    modalContent.innerHTML = `
      <div class="modal-header-tag">${data.badge}</div>
      <h3 class="modal-title">${data.title}</h3>
      <p class="modal-desc">${data.desc}</p>

      <h4 class="modal-section-title">Key Highlights</h4>
      <div class="modal-metrics-grid">
        ${data.metrics
          .map(
            (m) => `
          <div class="modal-metric-box">
            <div class="modal-metric-val">${m.val}</div>
            <div class="modal-metric-lbl">${m.lbl}</div>
          </div>
        `
          )
          .join("")}
      </div>

      <h4 class="modal-section-title">The Challenge</h4>
      <p class="modal-desc">${data.challenge}</p>

      <h4 class="modal-section-title">Implementation &amp; Solution</h4>
      <p class="modal-desc">${data.solution}</p>

      <h4 class="modal-section-title">Tech Stack</h4>
      <div class="project-tags" style="margin-bottom: 24px;">
        ${data.stack.map((s) => `<span class="tag">${s}</span>`).join("")}
      </div>

      <div class="modal-actions">
        <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="btn-icon"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          <span>GitHub Code</span>
        </a>
        <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <span>Live Demo</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="btn-icon"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeProjectModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  document.querySelectorAll(".view-details-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = btn.getAttribute("data-id");
      openProjectModal(id);
    });
  });

  document.querySelectorAll(".demo-link").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = btn.getAttribute("data-id");
      openProjectModal(id);
    });
  });

  if (modalClose) modalClose.addEventListener("click", closeProjectModal);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeProjectModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeProjectModal();
    }
  });

  // ------------------------------------------------------------------------
  // 13. 1-Click Copy Email for Sreelekshmi
  // ------------------------------------------------------------------------
  if (copyEmailBtn && emailAddressText) {
    copyEmailBtn.addEventListener("click", () => {
      const email = emailAddressText.textContent.trim();
      navigator.clipboard.writeText(email).then(() => {
        copyEmailBtn.classList.add("copied");
        const textSpan = copyEmailBtn.querySelector(".copy-btn-text");
        if (textSpan) textSpan.textContent = "Copied!";

        showToast("Email copied: " + email);

        setTimeout(() => {
          copyEmailBtn.classList.remove("copied");
          if (textSpan) textSpan.textContent = "Copy";
        }, 3000);
      });
    });
  }

  // ------------------------------------------------------------------------
  // 14. Interactive Contact Form with Validation
  // ------------------------------------------------------------------------
  if (contactForm) {
    const nameInput = document.getElementById("form-name");
    const emailInput = document.getElementById("form-email");
    const messageInput = document.getElementById("form-message");

    function validateField(input, condition) {
      const group = input.closest(".form-group");
      if (!condition) {
        group.classList.add("error");
        return false;
      } else {
        group.classList.remove("error");
        return true;
      }
    }

    nameInput.addEventListener("input", () => {
      validateField(nameInput, nameInput.value.trim().length >= 2);
    });

    emailInput.addEventListener("input", () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      validateField(emailInput, emailRegex.test(emailInput.value.trim()));
    });

    messageInput.addEventListener("input", () => {
      validateField(messageInput, messageInput.value.trim().length >= 10);
    });

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isNameValid = validateField(nameInput, nameInput.value.trim().length >= 2);
      const isEmailValid = validateField(emailInput, emailRegex.test(emailInput.value.trim()));
      const isMessageValid = validateField(messageInput, messageInput.value.trim().length >= 10);

      if (!isNameValid || !isEmailValid || !isMessageValid) {
        showToast("Please complete all required fields properly.", "error");
        return;
      }

      submitBtn.classList.add("loading");
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.classList.remove("loading");
        submitBtn.disabled = false;
        contactForm.reset();
        showToast("Thank you! Your message was sent to Sreelekshmi.");
      }, 1400);
    });
  }

  // ------------------------------------------------------------------------
  // 15. Toast Notification System
  // ------------------------------------------------------------------------
  let toastTimer = null;
  function showToast(msg, type = "success") {
    if (!toast || !toastMessage) return;

    toastMessage.textContent = msg;
    toast.classList.add("show");

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 4000);
  }

  // ------------------------------------------------------------------------
  // 16. Live Clock Display
  // ------------------------------------------------------------------------
  function updateTime() {
    if (!localTimeDisplay) return;
    const now = new Date();
    try {
      const timeStr = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      });
      localTimeDisplay.textContent = timeStr;
    } catch {
      localTimeDisplay.textContent = now.toLocaleTimeString();
    }
  }

  updateTime();
  setInterval(updateTime, 1000);

  // ------------------------------------------------------------------------
  // 17. Back to Top Smooth Scroll
  // ------------------------------------------------------------------------
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ------------------------------------------------------------------------
  // 18. Resume Download Generator for Sreelekshmi
  // ------------------------------------------------------------------------
  if (resumeBtn) {
    resumeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showToast("Generating Resume for Sreelekshmi...");
      setTimeout(() => {
        showToast("Resume download ready!");
        const resumeContent = `===========================================================
SREELEKSHMI — B.TECH 1ST YEAR (CSE) & WEB DEVELOPER
Email: sreelekshmi.dev@gmail.com | Portfolio: localhost:5500
===========================================================

EDUCATION:
- Bachelor of Technology (B.Tech) in Computer Science & Engineering (CSE)
  Year: 1st Year (Freshman) | Status: Currently Enrolled
  Coursework: Problem Solving & C Programming, Discrete Mathematics, Computer Fundamentals

TECHNICAL SKILLS:
- Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Responsive Web Design, Flexbox & Grid
- Backend: Node.js, Express.js, RESTful APIs, JSON
- Databases: MongoDB, SQL Fundamentals
- Tools & Workflows: Git, GitHub, VS Code, Postman, Vite, NPM

FEATURED PROJECTS:
1. TaskFlow Pro — Smart Task & Productivity Manager
   - Technologies: HTML5, CSS3, JavaScript (ES6+), LocalStorage
   - Features: Priority filtering, real-time search, persistence.

2. ShopSphere — Modern Full-Stack Store
   - Technologies: React.js, Node.js, Express.js, MongoDB
   - Features: Product catalog, responsive cart, RESTful endpoints.

3. WeatherPulse — Dynamic Weather Analytics
   - Technologies: HTML5, CSS3, JavaScript, OpenWeather API
   - Features: Geolocation weather lookup, asynchronous Fetch calls.

4. DevConnect — Developer Community Hub
   - Technologies: React.js, Node.js, Express, MongoDB, JWT Auth
   - Features: Post updates, project sharing, interactive feed.

INTERESTS & ACTIVITIES:
- Hackathons, Open-Source Contributions, Frontend Architecture, Algorithms
===========================================================`;

        const blob = new Blob([resumeContent], { type: "text/plain;charset=utf-8" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "Sreelekshmi_Resume_CSE.txt";
        link.click();
      }, 700);
    });
  }

  // ------------------------------------------------------------------------
  // 19. Set Current Footer Year Dynamically
  // ------------------------------------------------------------------------
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});