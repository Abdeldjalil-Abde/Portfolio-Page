/* =========================================================
   CENTRAL DATA — عدّل هنا فقط لإضافة/تعديل المحتوى مستقبلاً
   ========================================================= */
const DATA = {
  contactChannels: [
    {
      label: "البريد الإلكتروني",
      value: "abdeldjalil.tech.ogx.dz@gmail.com",
      icon: "mail",
    },
    { label: "الهاتف / واتساب", value: "06.67.09.55.01", icon: "phone" },
    { label: "الموقع", value: " ورقلة ,الجزائر", icon: "pin" },
  ],
  socials: [

    { name: "Facebook", url: "#", icon: "facebook" },
    { name: "LinkedIn", url: "#", icon: "linkedin" },
    { name: "GitHub", url: "#", icon: "github" },
  ],
  services: [
    {
      tag: "01",
      title: "تطوير المواقع الإلكترونية",
      desc: "مواقع احترافية متجاوبة، من التصميم إلى النشر.",
      items: [
        "تصميم مواقع احترافية ومتجاوبة",
        "برمجة المواقع من الصفر",
        "تطوير Web Applications ولوحات تحكم",
        "ربط قواعد البيانات ونشر المواقع",
        "تحسين الأداء وحل المشاكل البرمجية",
      ],
    },
    {
      tag: "02",
      title: "برمجة تطبيقات الحاسوب",
      desc: "أنظمة سطح مكتب مخصصة لإدارة أعمالك.",
      items: [
        "برامج سطح مكتب مخصصة",
        "أنظمة التسيير والإدارة",
        "برامج الفوترة وإدارة الطلبة",
        "تصميم وربط قواعد البيانات",
        "صيانة وإصلاح الأخطاء البرمجية",
      ],
    },
    {
      tag: "03",
      title: "الحلول البرمجية والأنظمة المخصصة",
      desc: "لديك فكرة أو مشكلة؟ نحوّلها إلى نظام برمجي.",
      items: [
        "تحليل الاحتياجات",
        "تصميم الحل وتطوير النظام",
        "اختبار النظام والنشر",
        "الصيانة والتطوير المستمر",
      ],
    },
    {
      tag: "04",
      title: "الخدمات الأكاديمية",
      desc: "العربية | الفرنسية | الإنجليزية.",
      items: [
        "كتابة وتنسيق البحوث",
        "إعداد مذكرات التخرج",
        "تنسيق Word و LaTeX",
        "إعداد التقارير الأكاديمية",
      ],
    },
    {
      tag: "05",
      title: "تصميم العروض التقديمية",
      desc: "عروض عصرية وواضحة للمناقشات والعروض المهنية.",
      items: [
        "PowerPoint احترافي",
        "LaTeX Beamer",
        "تصميم مناسب للمناقشات الجامعية",
      ],
    },
    {
      tag: "06",
      title: "إعداد تقارير التربص",
      desc: "إعداد وتنسيق وفق معايير أكاديمية واحترافية.",
      items: [
        "هيكلة وتنسيق التقرير",
        "مراجعة المحتوى الأكاديمي",
        "تنسيق نهائي جاهز للتسليم",
      ],
    },
  ],
  /* products, projectFilters, projects are now loaded from data.json at runtime — see loadProductsAndProjects() below */
  products: [],
  projectFilters: [],
  projects: [],
  skills: [
    {
      cat: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "Next.js", "Thymeleaf"],
    },
    {
      cat: "Backend",
      items: ["PHP", "Python", "Java", "Spring Boot", "Flask"],
    },
    { cat: "Desktop", items: ["Python", "PyQt5"] },
    { cat: "Database", items: ["MySQL", "SQLite", "InfluxDB"] },
    {
      cat: "AI / Machine Learning",
      items: [
        "Python",
        "TensorFlow",
        "Keras",
        "PyTorch",
        "Scikit-learn",
        "Pandas",
        "OpenCV",
      ],
    },
    {
      cat: "Networking & Infrastructure",
      items: ["Linux", "Docker", "Git", "Mininet", "Open vSwitch", "SDN"],
    },
  ],
  why: [
    { title: "جودة وإتقان", desc: "عمل مدروس بعناية في كل تفصيل." },
    {
      title: "حلول مخصصة",
      desc: "لا حلول جاهزة، بل مبنية على احتياجك فعليًا.",
    },
    { title: "احترام المواعيد", desc: "التزام بالجدول الزمني المتفق عليه." },
    {
      title: "تصميم عصري وتجربة استخدام جيدة",
      desc: "واجهات واضحة وسلسة للمستخدم.",
    },
    { title: "متابعة ودعم بعد التسليم", desc: "لا ينتهي العمل عند التسليم." },
  ],
  workflow: [
    { title: "تحليل احتياجاتك", desc: "فهم عميق للمشكلة والهدف." },
    { title: "تحديد الحل المناسب", desc: "اختيار التقنية والمقاربة الأنسب." },
    { title: "تصميم الواجهة والنظام", desc: "بناء الهيكلة والتجربة." },
    { title: "البرمجة والتطوير", desc: "تنفيذ فعلي ومتابعة تقدم العمل." },
    { title: "الاختبار والتحسين", desc: "فحص شامل قبل التسليم." },
    { title: "التسليم والمتابعة", desc: "دعم ومتابعة بعد الإطلاق." },
  ],
};

const ICONS = {
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>',
  desktop:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  layers:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l9 5-9 5-9-5 9-5z"/><path d="M3 12l9 5 9-5M3 17l9 5 9-5"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>',
  present:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h20M12 3v14M8 21l4-4 4 4"/></svg>',
  report:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 2h6l4 4v16H5V2h4z"/><path d="M9 12h6M9 16h6"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>',
  phone:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 5a2 2 0 012-2h3l2 5-2.5 1.5a11 11 0 005 5L14 12l5 2v3a2 2 0 01-2 2A16 16 0 013 5z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  facebook:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/><path d="M10 9h4v2a4 4 0 018 0v10h-4v-9a2 2 0 00-4 0v9h-4z"/></svg>',
  github:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.6 3.3 5.5 3.6 5.5 3.6a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 10c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V22"/></svg>',
};
const svcIcons = ["code", "layers", "desktop", "book", "present", "report"];
const projTypeIcon = {
  Web: "code",
  Desktop: "desktop",
  AI: "layers",
  Software: "code",
  Academic: "book",
};

/* ---------- Render Services ---------- */
const servicesGrid = document.getElementById("servicesGrid");
DATA.services.forEach((s, i) => {
  servicesGrid.insertAdjacentHTML(
    "beforeend",
    `
    <div class="service-card reveal">
      <span class="service-tag">${s.tag}</span>
      <div class="service-icon">${ICONS[svcIcons[i]]}</div>
      <h3>${s.title}</h3>
      <p class="desc">${s.desc}</p>
      <ul>${s.items.map((it) => `<li>${it}</li>`).join("")}</ul>
    </div>
  `,
  );
});

/* ---------- Render Products ---------- */
const productsGrid = document.getElementById("productsGrid");
function renderProducts() {
  productsGrid.innerHTML = "";
  DATA.products.forEach((p) => {
    productsGrid.insertAdjacentHTML(
      "beforeend",
      `
      <div class="product-card reveal in">
        <div class="product-mock">
          <span class="product-badge">${p.badge}</span>
          <div class="win">
            <div class="win-bar"><i></i><i></i><i></i></div>
            <div class="win-body"><div class="bar w1"></div><div class="bar w2"></div><div class="bar w3"></div><div class="bar w2"></div></div>
          </div>
        </div>
        <div class="product-body">
          <h3>${p.title}</h3>
          <div class="problem">${p.problem}</div>
          <p class="desc">${p.desc}</p>
          <ul class="feature-list">${p.features.map((f) => `<li>${f}</li>`).join("")}</ul>
          <div class="tech-pills">${p.tech.map((t) => `<span class="tech-pill">${t}</span>`).join("")}</div>
          <a href="#contact" class="btn btn-ghost product-cta">اكتشف المنتج</a>
        </div>
      </div>
    `,
    );
  });
}

/* ---------- Render Project Filters + Grid ---------- */
const filterRow = document.getElementById("filterRow");
const projectsGrid = document.getElementById("projectsGrid");
function renderProjects() {
  filterRow.innerHTML = "";
  DATA.projectFilters.forEach((f, i) => {
    filterRow.insertAdjacentHTML(
      "beforeend",
      `<button class="filter-btn ${i === 0 ? "active" : ""}" data-filter="${f}">${f}</button>`,
    );
  });
  projectsGrid.innerHTML = "";
  DATA.projects.forEach((p) => {
    projectsGrid.insertAdjacentHTML(
      "beforeend",
      `
      <div class="project-card reveal in" data-type="${p.type}">
        <div class="project-thumb">
          <span class="project-type">${p.type}</span>
          ${ICONS[projTypeIcon[p.type]] || ICONS.code}
        </div>
        <div class="project-body">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <div class="project-tech">${p.tech.map((t) => `<span class="tech-pill">${t}</span>`).join("")}</div>
          <div class="project-links">
            ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Demo</a>` : ""}
            ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">GitHub</a>` : ""}
          </div>
          <div class="placeholder-note">بيانات تجريبية — قابلة للاستبدال</div>
        </div>
      </div>
    `,
    );
  });
}
filterRow.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  filterRow
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  const f = btn.dataset.filter;
  document.querySelectorAll(".project-card").forEach((card) => {
    card.classList.toggle("hidden", f !== "الكل" && card.dataset.type !== f);
  });
});

/* ---------- Load products & projects from data.json ---------- */
async function loadProductsAndProjects() {
  try {
    const res = await fetch("data.json");
    if (!res.ok) throw new Error("data.json HTTP " + res.status);
    const json = await res.json();
    DATA.products = json.products || [];
    DATA.projectFilters = json.projectFilters || ["الكل"];
    DATA.projects = json.projects || [];
  } catch (err) {
    console.error(
      "تعذّر تحميل data.json — تأكد أنه بجانب index.html وأنك تفتح الموقع عبر خادم محلي وليس مباشرة من الملف.",
      err,
    );
    DATA.products = [];
    DATA.projectFilters = ["الكل"];
    DATA.projects = [];
  }
  renderProducts();
  renderProjects();
}
loadProductsAndProjects();

/* ---------- Render Skills ---------- */
const skillsGrid = document.getElementById("skillsGrid");
DATA.skills.forEach((s) => {
  skillsGrid.insertAdjacentHTML(
    "beforeend",
    `
    <div class="skill-cat reveal">
      <h4>${s.cat}</h4>
      <div class="skill-tags">${s.items.map((i) => `<span class="skill-tag">${i}</span>`).join("")}</div>
    </div>
  `,
  );
});

/* ---------- Render Why ---------- */
const whyGrid = document.getElementById("whyGrid");
DATA.why.forEach((w, i) => {
  whyGrid.insertAdjacentHTML(
    "beforeend",
    `
    <div class="why-card reveal">
      <span class="why-num">${String(i + 1).padStart(2, "0")}</span>
      <h3>${w.title}</h3>
      <p>${w.desc}</p>
    </div>
  `,
  );
});

/* ---------- Render Workflow ---------- */
const workflowGrid = document.getElementById("workflowGrid");
DATA.workflow.forEach((w, i) => {
  workflowGrid.insertAdjacentHTML(
    "beforeend",
    `
    <div class="workflow-step reveal">
      <div class="workflow-num">${String(i + 1).padStart(2, "0")}</div>
      <h4>${w.title}</h4>
      <p>${w.desc}</p>
    </div>
  `,
  );
});

/* ---------- Render Contact Channels + Footer ---------- */
const contactChannels = document.getElementById("contactChannels");
const footerContact = document.getElementById("footerContact");
DATA.contactChannels.forEach((c) => {
  contactChannels.insertAdjacentHTML(
    "beforeend",
    `
    <div class="contact-channel">
      <span class="ic">${ICONS[c.icon]}</span>
      <div><small>${c.label}</small>${c.value}</div>
    </div>
  `,
  );
  footerContact.insertAdjacentHTML(
    "beforeend",
    `<li>${c.label}: ${c.value}</li>`,
  );
});
const footerSocial = document.getElementById("footerSocial");
DATA.socials.forEach((s) => {
  footerSocial.insertAdjacentHTML(
    "beforeend",
    `<a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.name}">${ICONS[s.icon]}</a>`,
  );
});

/* ---------- Terminal typing effect (hero signature) ---------- */
const terminalLines = [
  [
    '<span class="kw">const</span> studio = ',
    '<span class="fn">new</span> OGXTech();',
  ],
  [
    'studio.<span class="fn">build</span>(',
    '<span class="str">"Web Development"</span>);',
  ],
  [
    'studio.<span class="fn">build</span>(',
    '<span class="str">"Software Systems"</span>);',
  ],
  [
    'studio.<span class="fn">build</span>(',
    '<span class="str">"Custom Solutions"</span>);',
  ],
  [
    'studio.<span class="kw">status</span> = ',
    '<span class="str">"delivering..."</span>',
  ],
];
const termEl = document.getElementById("terminalBody");
let termLineIdx = 0;
function typeLine() {
  termEl.innerHTML = "";
  terminalLines.slice(0, termLineIdx + 1).forEach((pair, i) => {
    const div = document.createElement("div");
    div.className = "line";
    if (i === termLineIdx) {
      div.innerHTML = pair.join("") + '<span class="caret"></span>';
    } else {
      div.innerHTML = pair.join("");
    }
    termEl.appendChild(div);
  });
  termLineIdx = (termLineIdx + 1) % terminalLines.length;
  if (termLineIdx === 0) {
    setTimeout(() => {
      termEl.innerHTML = "";
      typeLine();
    }, 1400);
  } else {
    setTimeout(typeLine, 1100);
  }
}
typeLine();

/* ---------- Navbar scroll state ---------- */
const header = document.getElementById("siteHeader");
window.addEventListener(
  "scroll",
  () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  },
  { passive: true },
);

/* ---------- Mobile menu ---------- */
const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileClose = document.getElementById("mobileClose");
burgerBtn.addEventListener("click", () => mobileMenu.classList.add("open"));
mobileClose.addEventListener("click", () =>
  mobileMenu.classList.remove("open"),
);
mobileMenu
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => mobileMenu.classList.remove("open")),
  );

/* ---------- Reveal on scroll ---------- */
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        io.unobserve(en.target);
      }
    });
  },
  { threshold: 0.15 },
);
revealEls.forEach((el) => io.observe(el));

/* ---------- Contact form (client-side only) ---------- */
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formSuccess").classList.add("show");
  this.reset();
});

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
