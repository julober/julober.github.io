// ============================================================
// data.js — Single source of truth for portfolio content
// Edit only the placeholder text and paths below.
// Use backticks so multi-line text is easy to maintain.
// ============================================================

export const portfolioData = {
  // ── Edit shared UI defaults here ──────────────────────────
  ui: {
    // [EDIT ME] Fallback project card background if an image path is empty
    projectCardFallbackBackground: `linear-gradient(135deg, #0a2d52, #1a5a9a)`
  },

  // ── Edit profile content here ─────────────────────────────
  profile: {
    // [EDIT ME] Name shown in hero heading and document metadata
    name: `Julia Lober`,

    // [EDIT ME] One-line subtitle shown below the name
    title: `Cryospheric Scientist • Scientific Programmer • Open Science Advocate`,

    // [EDIT ME] Multi-line bio paragraph for intro/about section
    about: `[PLACEHOLDER: Write a multi-line bio here about geophysics, open data, and field science.]`
  },

  // ── Edit /now callout text here ───────────────────────────
  now: {
    // [EDIT ME] Multi-line /now content
    text: `[PLACEHOLDER: Write what you are currently focused on, e.g., thesis work at Boise State.]`
  },

  // ── Edit project cards here ───────────────────────────────
  projects: [
    {
      title: `Data Management at NSIDC`,
      description: `[PLACEHOLDER: Description of AWS cloud storage and metadata for SnowEx.]`,
      image: `images/nsidc-placeholder.jpg`,
      link: `#`
    },
    {
      title: `Scientific Programming at TerrainWorks`,
      description: `[PLACEHOLDER: Description of open-source machine learning and R scripts.]`,
      image: `images/terrainworks-placeholder.jpg`,
      link: `#`
    },
    {
      title: `Phytoplankton Kaleidoscope`,
      description: `[PLACEHOLDER: Description of the art-based data visualization.]`,
      image: `images/kaleidoscope-placeholder.jpg`,
      link: `#`
    },
    {
      title: `Seattle Aquarium: From Outer Space to the Microscope`,
      description: `[PLACEHOLDER: Description of the public talk connecting satellite remote sensing to phytoplankton ecology.]`,
      image: `images/aquarium-placeholder.jpg`,
      link: `#`
    }
  ]
};
