export const publicProfile = {
  name: "Augusto Rico",
  headline: "Economist · Data Analyst · Research",
  description:
    "Economista de la Universidad Nacional de Colombia y Analista I en la DIAN. Trabajo con datos, métodos cuantitativos e investigación aplicada.",
  descriptionEn:
    "Economist from Universidad Nacional de Colombia and Data Analyst at Colombia's tax administration (DIAN), working with data, quantitative methods and applied research.",
  location: {
    city: "Bogotá",
    country: "Colombia",
  },
  email: "aricolkg@gmail.com",
  academicEmail: "arico@unal.edu.co",
  links: {
    website: "https://lekillergallet.github.io/",
    about: "https://lekillergallet.github.io/sobre-mi/",
    english: "https://lekillergallet.github.io/en/",
    github: "https://github.com/LeKilleRGallet",
    linkedin: "https://www.linkedin.com/in/lekillergallet/",
    cv: "https://lekillergallet.github.io/pdf/cv.pdf",
  },
  education: [
    {
      institution: "Universidad Nacional de Colombia",
      degree: "Economía",
      degreeEn: "Economics",
      year: 2024,
    },
  ],
  experience: [
    {
      organization: "DIAN — Dirección de Impuestos y Aduanas Nacionales",
      role: "Analista I",
      roleEn: "Analyst I",
      location: "Bogotá, Colombia",
      start: "2025-01",
      current: true,
      publicSummary:
        "Análisis e integración de datos administrativos, construcción de indicadores, automatización y soporte cuantitativo para decisiones.",
      publicSummaryEn:
        "Analysis and integration of administrative data, indicator construction, automation and quantitative support for decision-making.",
    },
    {
      organization: "Universidad Nacional de Colombia",
      role: "Monitor académico",
      roleEn: "Teaching Assistant",
      start: "2022",
      end: "2023",
      current: false,
      publicSummary:
        "Microeconomía III, Economía para Ingenieros e Historia del Pensamiento Económico.",
      publicSummaryEn:
        "Microeconomics III, Economics for Engineers and History of Economic Thought.",
    },
  ],
  skills: [
    "Python",
    "SQL",
    "PySpark",
    "Azure Databricks",
    "Power BI",
    "Excel",
    "Pandas",
    "scikit-learn",
    "Git",
    "LaTeX",
  ],
  methods: [
    "Data cleaning",
    "Data quality",
    "Automation",
    "Classification",
    "Clustering",
    "Time series",
    "Econometrics",
    "Machine learning",
    "Quantitative research",
  ],
  researchAreas: [
    "Behavioral Economics",
    "Game Theory",
    "Decision Theory",
    "Causal Inference",
    "Networks",
    "Complex Systems",
    "Quantitative Finance",
    "Computational Social Science",
    "Tax Compliance",
    "Public Policy",
  ],
  languages: [
    { language: "Spanish", level: "Native" },
    { language: "English", level: "Professional working proficiency" },
    { language: "German", level: "Professional working proficiency" },
  ],
  availability: [
    "Remote projects",
    "Part-time",
    "Freelance",
    "Research support",
    "Project-based work",
  ],
  publicDataPolicy:
    "Este perfil contiene hechos profesionales destinados a publicación. No contiene datos internos de la DIAN ni información reservada.",
  publicDataPolicyEn:
    "This profile contains professional facts intended for public disclosure. It does not contain internal DIAN data or restricted information.",
  lastUpdated: "2026-09-18",
} as const;

export type PublicProfile = typeof publicProfile;
