export const topicHubs = [
  {
    slug: "data-analytics",
    title: "Analítica de datos y Business Intelligence",
    titleEn: "Data Analytics & Business Intelligence",
    description:
      "Trabajo con Python, SQL, PySpark, Azure Databricks, Power BI y Excel para limpiar, integrar, validar, automatizar y analizar datos.",
    descriptionEn:
      "Work with Python, SQL, PySpark, Azure Databricks, Power BI and Excel to clean, integrate, validate, automate and analyze data.",
    keywords: [
      "Data Analytics",
      "Business Intelligence",
      "Python",
      "SQL",
      "PySpark",
      "Databricks",
      "Power BI",
      "Data Quality",
      "Automation"
    ],
    projectIds: [
      "informalidad-tributaria-multidimensional",
      "rnn-vs-gam-finanzas"
    ],
    archiveTitles: [
      "Trabajo Final Econometría 2022-2"
    ],
    relatedPages: [
      { es: "/data/", en: "/en/data/", labelEs: "Portafolio Data & BI", labelEn: "Data & BI portfolio" },
      { es: "/colaborar/", en: "/en/collaborate/", labelEs: "Colaboración", labelEn: "Collaboration" }
    ]
  },
  {
    slug: "econometrics-time-series",
    title: "Econometría y series de tiempo",
    titleEn: "Econometrics & Time Series",
    description:
      "Econometría aplicada, modelos de series de tiempo, ARIMA, cointegración, GARCH y evaluación de pronósticos en trabajos académicos y de investigación.",
    descriptionEn:
      "Applied econometrics, time-series models, ARIMA, cointegration, GARCH and forecast evaluation across academic and research work.",
    keywords: [
      "Econometrics",
      "Time Series",
      "ARIMA",
      "Cointegration",
      "GARCH",
      "Forecasting"
    ],
    projectIds: [
      "rnn-vs-gam-finanzas"
    ],
    archiveTitles: [
      "Trabajo 1 — Econometría II",
      "Trabajo II — Series de Tiempo Multivariadas",
      "Trabajo Final Econometría 2022-2"
    ],
    relatedPages: [
      { es: "/finance/", en: "/en/finance/", labelEs: "Finance & Quant", labelEn: "Finance & Quant" },
      { es: "/research/", en: "/en/research-support/", labelEs: "Soporte de investigación", labelEn: "Research support" }
    ]
  },
  {
    slug: "behavioral-game-theory",
    title: "Economía conductual y teoría de juegos",
    titleEn: "Behavioral Economics & Game Theory",
    description:
      "Investigación sobre decisiones estratégicas y comportamiento, incluyendo juegos secuenciales, prospect theory, aversión a las pérdidas, normas sociales y mecanismos de decisión.",
    descriptionEn:
      "Research on strategic interaction and behavior, including sequential games, prospect theory, loss aversion, social norms and decision mechanisms.",
    keywords: [
      "Behavioral Economics",
      "Game Theory",
      "Prospect Theory",
      "Decision Theory",
      "Social Norms"
    ],
    projectIds: [
      "sistema-salud-teoria-juegos"
    ],
    archiveTitles: [],
    relatedPages: [
      { es: "/investigacion/", en: "/en/research/", labelEs: "Investigación", labelEn: "Research" },
      { es: "/agenda/", en: "/en/research-agenda/", labelEs: "Agenda de investigación", labelEn: "Research agenda" }
    ]
  },
  {
    slug: "quantitative-finance",
    title: "Finanzas cuantitativas",
    titleEn: "Quantitative Finance",
    description:
      "Series financieras, forecasting, volatilidad, GARCH, optimización media-varianza y construcción de portafolios.",
    descriptionEn:
      "Financial time series, forecasting, volatility, GARCH, mean-variance optimization and portfolio construction.",
    keywords: [
      "Quantitative Finance",
      "Financial Time Series",
      "GARCH",
      "Portfolio Optimization",
      "Markowitz",
      "Forecasting"
    ],
    projectIds: [
      "rnn-vs-gam-finanzas"
    ],
    archiveTitles: [
      "Trabajo 1 — Econometría II",
      "Trabajo II — Series de Tiempo Multivariadas"
    ],
    relatedPages: [
      { es: "/finance/", en: "/en/finance/", labelEs: "Portafolio Finance & Quant", labelEn: "Finance & Quant portfolio" }
    ]
  },
  {
    slug: "tax-compliance-public-policy",
    title: "Cumplimiento tributario y política pública",
    titleEn: "Tax Compliance & Public Policy",
    description:
      "Investigación sobre formalización, informalidad tributaria, datos administrativos y medición multidimensional del cumplimiento empresarial en Colombia.",
    descriptionEn:
      "Research on formalization, tax informality, administrative data and multidimensional measurement of business tax compliance in Colombia.",
    keywords: [
      "Tax Compliance",
      "Tax Informality",
      "Formalization",
      "Administrative Data",
      "Public Policy",
      "Colombia"
    ],
    projectIds: [
      "informalidad-tributaria-multidimensional"
    ],
    archiveTitles: [],
    relatedPages: [
      { es: "/investigacion/", en: "/en/research/", labelEs: "Investigación", labelEn: "Research" },
      { es: "/research/", en: "/en/research-support/", labelEs: "Métodos y soporte de investigación", labelEn: "Research methods and support" }
    ]
  }
] as const;

export type TopicHub = (typeof topicHubs)[number];
