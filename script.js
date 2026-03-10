// ============================================================
//  script.js  –  Portfolio interactivity & dynamic rendering
// ============================================================

/* ── Smooth-scroll for anchor nav links ─────────────────── */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

/* ── Active nav highlight on scroll ─────────────────────── */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function highlightNav() {
  let scrollY = window.scrollY;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");
    const matchingLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
    if (matchingLink) {
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((l) => l.classList.remove("active"));
        matchingLink.classList.add("active");
      }
    }
  });
}

window.addEventListener("scroll", highlightNav, { passive: true });
highlightNav();

/* ── Mobile hamburger menu ───────────────────────────────── */
const hamburger = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".nav-links");

if (hamburger && navLinksContainer) {
  hamburger.addEventListener("click", () => {
    const isOpen = navLinksContainer.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", isOpen);
    hamburger.querySelector("span:nth-child(1)").style.transform = isOpen
      ? "translateY(8px) rotate(45deg)"
      : "";
    hamburger.querySelector("span:nth-child(2)").style.opacity = isOpen ? "0" : "1";
    hamburger.querySelector("span:nth-child(3)").style.transform = isOpen
      ? "translateY(-8px) rotate(-45deg)"
      : "";
  });

  // Close menu when a link is clicked
  navLinksContainer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinksContainer.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.querySelectorAll("span").forEach((s) => {
        s.style.transform = "";
        s.style.opacity = "1";
      });
    });
  });
}

/* ── Dynamic project card rendering ─────────────────────── */

/**
 * Renders project cards from the `projects` array (defined in data.js)
 * into the element with id="projects-grid".
 *
 * Each card shows:
 *  - An optional image (or a placeholder if none provided)
 *  - Title, description
 *  - Tech-stack tag pills
 *  - An optional "Explore" link
 */
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  if (!Array.isArray(projects) || projects.length === 0) {
    grid.innerHTML = '<p class="empty-state">No projects yet – check back soon!</p>';
    return;
  }

  grid.innerHTML = projects
    .map((project) => {
      const imageHTML = project.image
        ? `<img src="${project.image}" alt="${escapeHtml(project.title)}" class="card-img" loading="lazy">`
        : `<div class="card-img card-img-placeholder" aria-hidden="true">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
               <rect x="8" y="16" width="48" height="32" rx="3"/>
               <circle cx="22" cy="28" r="4"/>
               <polyline points="8,40 20,28 30,36 42,24 56,36"/>
             </svg>
           </div>`;

      const tagsHTML = Array.isArray(project.tags)
        ? project.tags
            .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
            .join("")
        : "";

      const linkHTML =
        project.link
          ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="card-link">
               ${escapeHtml(project.linkLabel || "Explore")}
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14" aria-hidden="true">
                 <path d="M3 8h10M9 4l4 4-4 4"/>
               </svg>
             </a>`
          : "";

      return `
        <article class="project-card">
          ${imageHTML}
          <div class="card-body">
            <h3 class="card-title">${escapeHtml(project.title)}</h3>
            <p class="card-desc">${escapeHtml(project.description)}</p>
            <div class="card-tags">${tagsHTML}</div>
            ${linkHTML}
          </div>
        </article>`;
    })
    .join("");
}

/** Minimal HTML-escape to prevent XSS from data.js values */
function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ── Boot ────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
});
