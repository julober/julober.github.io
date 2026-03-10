# julober.github.io

## Project Overview

This repository contains Julia Lober’s personal portfolio site, built as a static, data-driven website using **Vanilla HTML, CSS, and JavaScript**. The design combines a clean “tech docs” style with full-width project banner cards rendered dynamically from a single data source.

## Workflow & Architecture

```text
julober.github.io/
├── index.html              # Page structure and content sections
├── style.css               # Visual design and responsive layout
├── script.js               # UI behavior + project card rendering
├── data.js                 # Dynamic project data source
├── images/                 # Root image asset directory (project banners/placeholders)
│   ├── placeholder1.jpg
│   ├── placeholder2.jpg
│   └── placeholder3.jpg
└── README.md
```

### Dynamic project flow

1. Project entries live in `data.js` as objects in the `projects` array.
2. Each object includes fields like `title`, `description`, `image`, `tags`, and `link`.
3. `script.js` reads that array on page load and injects full-width project cards into `#projects-grid`.
4. Image paths should target files in the root `images/` directory (for example: `images/placeholder1.jpg`).

## Deployment & CI/CD

This repository is connected to **Netlify**:

- Netlify automatically creates **live preview builds for every Pull Request**.
- Netlify also handles the **final production deployment** when changes are merged.

## How to Update Content

### Add a new photo to `images/`

1. Place your image file in `/images` (example: `images/my-new-banner.jpg`).
2. Use a clear file name so future updates are easy to track.

### Add a new project banner in `data.js`

1. Open `data.js`.
2. Copy an existing project object in the `projects` array.
3. Update the fields (`id`, `title`, `description`, `tags`, `link`, etc.).
4. Set `image` to the new image path in `/images` (example: `image: "images/my-new-banner.jpg"`).
5. Save and refresh the site to confirm the new card appears.

### Update the `/now` callout text

1. Open `index.html`.
2. Find the `<section id="now">` block and edit the text inside `.now-card`.
3. Update the date line (`.now-date`) so the timestamp matches the latest update.
4. Save and refresh to verify the callout content.
