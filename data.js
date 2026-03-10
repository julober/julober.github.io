// ============================================================
//  data.js  –  Portfolio project data
//  To add a new project, copy one of the objects below and
//  paste it inside the `projects` array.  Fill in every field:
//    image          – relative/absolute URL, or "" to use bannerGradient
//    bannerGradient – CSS gradient shown when image is "" (required)
//    link           – "" if not applicable
// ============================================================

const projects = [
  {
    id: 1,
    title: "Data Management at NSIDC",
    description:
      "Supported AWS cloud storage migration for NASA's cryosphere data archive. Produced metadata for 35+ SnowEx datasets and authored Python automation scripts to streamline ingest workflows.",
    image: "IMG_2627.jpeg",
    bannerGradient: "linear-gradient(135deg, #0a2d52 0%, #1a5a9a 60%, #2176c2 100%)",
    tags: ["Python", "AWS", "Metadata", "SnowEx", "NASA"],
    link: "",
    linkLabel: "Explore"
  },
  {
    id: 2,
    title: "Scientific Programming at TerrainWorks",
    description:
      "Developed collaborative open-source machine learning and geospatial software solutions for terrain analysis and landscape modeling.",
    image: "",
    bannerGradient: "linear-gradient(135deg, #0d2b1e 0%, #155235 50%, #1e7a50 100%)",
    tags: ["Python", "Machine Learning", "GIS", "Open Source"],
    link: "",
    linkLabel: "Explore"
  },
  {
    id: 3,
    title: "Phytoplankton Kaleidoscope",
    description:
      "An art-based data visualization collaboration merging oceanographic datasets with generative visual art techniques to make science accessible and beautiful.",
    image: "",
    bannerGradient: "linear-gradient(135deg, #0d2b40 0%, #1a6080 50%, #5e3a8c 100%)",
    tags: ["Data Visualization", "Oceanography", "Art", "Python"],
    link: "",
    linkLabel: "Explore"
  }
];
