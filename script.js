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
 * Each card is a full-bleed banner with:
 *  - A background image (or bannerGradient when no image is provided)
 *  - A dark linear-gradient overlay for text legibility
 *  - Tech-stack tag pills, title, description
 *  - An optional "Explore" link (whole card is the link when project.link is set)
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
      // Background: real image takes priority, otherwise use the gradient.
      // sanitizeUrl ensures only safe http/https/relative URLs reach the DOM.
      const bgStyle = project.image
        ? `background-image: url("${sanitizeUrl(project.image)}")`
        : `background: ${project.bannerGradient || "linear-gradient(135deg, #0a2d52, #1a5a9a)"}`;

      const tagsHTML = Array.isArray(project.tags)
        ? project.tags
            .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
            .join("")
        : "";

      const linkAttr = project.link
        ? `href="${sanitizeUrl(project.link)}" target="_blank" rel="noopener noreferrer"`
        : "";

      const exploreLinkHTML = project.link
        ? `<span class="card-link" aria-hidden="true">
             ${escapeHtml(project.linkLabel || "Explore")}
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
               <path d="M3 8h10M9 4l4 4-4 4"/>
             </svg>
           </span>`
        : "";

      // Whole card becomes an <a> when a link is set
      const tagName = project.link ? "a" : "article";
      const tagAttrs = project.link ? linkAttr : "";

      return `
        <${tagName} class="project-card" ${tagAttrs}>
          <div class="card-bg" style="${bgStyle}"></div>
          <div class="card-content">
            <div class="card-tags">${tagsHTML}</div>
            <h3 class="card-title">${escapeHtml(project.title)}</h3>
            <p class="card-desc">${escapeHtml(project.description)}</p>
            ${exploreLinkHTML}
          </div>
        </${tagName}>`;
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

/**
 * Sanitizes a URL to prevent CSS/JS injection via data.js image or link fields.
 * Only allows http, https, and relative paths (no javascript: or data: URIs).
 */
function sanitizeUrl(url) {
  if (typeof url !== "string") return "";
  const trimmed = url.trim();
  if (/^javascript:/i.test(trimmed) || /^data:/i.test(trimmed)) return "";
  return escapeHtml(trimmed);
}

/* ── Boot ────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
});
