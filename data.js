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
    name: ` `,

    // [EDIT ME] One-line subtitle shown below the name
    title: `Graduate student at CryoGARS`,

    // [EDIT ME] Multi-line bio paragraph for intro/about section
    about: `Currently working on a master's degree at Boise State University studying interferometric coherence in seasonal snow.`
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
      image: `images/IMG_2883.jpeg`,
      link: `#`
    },
    {
      title: `Scientific Programming at TerrainWorks`,
      description: `[PLACEHOLDER: Description of open-source machine learning and R scripts.]`,
      image: `images/IMG_2883.jpeg`,
      link: `#`
    },
    {
      title: `Phytoplankton Kaleidoscope`,
      description: `[PLACEHOLDER: Description of the art-based data visualization.]`,
      image: `images/IMG_2883.jpeg`,
      link: `#`
    },
    {
      title: `Seattle Aquarium: From Outer Space to the Microscope`,
      description: `[PLACEHOLDER: Description of the public talk connecting satellite remote sensing to phytoplankton ecology.]`,
      image: `images/IMG_2883.jpeg`,
      link: `#`
    }
  ]
};
