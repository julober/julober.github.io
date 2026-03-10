# julober.github.io 

Personal portfolio website for **Julia Lober** — Cryospheric Scientist, Scientific Programmer, and Open Science Advocate.

**Live site:** [julober.github.io](https://julober.github.io)

---

## File structure

```
julober.github.io/
├── index.html      ← Main page (all sections)
├── style.css       ← Alpine/Cryosphere-palette styling
├── script.js       ← Dynamic rendering & nav interactions
├── data.js         ← ✏️  Edit this file to add/update projects
├── IMG_0241.jpg    ← Hero image (aerial wing over ice)
└── README.md
```

---

## ✏️  How to add a new project

All project cards are driven by the `projects` array in **`data.js`**.  
Open that file and copy-paste an existing object, then fill in your values:

```js
{
  id: 4,                            // increment from the last entry
  title: "My New Project",
  description: "A short description of what you did and why it matters.",
  image: "images/my-project.jpg",   // relative path, or "" for placeholder
  tags: ["Python", "AWS", "QGIS"],  // tech stack tags shown as pills
  link: "https://github.com/julober/my-project",  // "" if no link yet
  linkLabel: "Explore"              // text on the button
}
```

Save the file. The JavaScript in `script.js` automatically reads the array and
renders all cards into the grid on page load—no HTML changes needed.

---

## 🖼️  How to add a project image

1. Drop your image into the repository root (or an `images/` sub-folder).
2. Set the `image` field in `data.js` to the relative path, e.g. `"images/my-project.jpg"`.
3. A descriptive `alt` text is generated automatically from the project title.

If `image` is left as `""`, a clean placeholder graphic is shown instead.

---

## 🚀  Deploying to GitHub Pages

This site is a **static site** (pure HTML/CSS/JS), so GitHub Pages serves it
with zero build steps.

### First-time setup

1. Push this repository to GitHub as `<your-username>.github.io`.
2. Go to **Settings → Pages** in your repository.
3. Under **Source**, select:
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
4. Click **Save**.  
   GitHub will build and publish the site within ~60 seconds.  
   Your site will be live at `https://<your-username>.github.io`.

### Updating the site

```bash
# 1. Make your changes (e.g. add a project to data.js)
# 2. Commit and push
git add .
git commit -m "Add new project: My New Project"
git push origin main
```

GitHub Pages redeploys automatically on every push to `main`.

---

## 🎨  Design notes

| Token | Value | Usage |
|-------|-------|-------|
| `--color-accent` | `#3a7fc1` | Links, buttons, highlights |
| `--color-accent-dark` | `#24568a` | Hover states |
| `--color-bg` | `#f5f8fb` | Page background |
| `--color-text` | `#1e2d3d` | Body text |

Fonts are loaded from Google Fonts: **Inter** (body) and **JetBrains Mono** (code/labels).

---

## Local development

No build tools required. Just open `index.html` in a browser, or run a tiny
local server to avoid any `file://` quirks:

```bash
# Python 3
python -m http.server 8080
# then open http://localhost:8080
```
