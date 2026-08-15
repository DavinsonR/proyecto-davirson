// ============================================================
// CONTENIDO DEL SITIO — fuente única de verdad (ES / EN)
// Para editar textos, edita SOLO este archivo.
// ============================================================

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export type Status = "live" | "building" | "research" | "idea";

const profile = {
  name: "Davirson Novoa Ramírez",
  email: "Davinsonnovoaramirez@gmail.com",
  linkedin: "https://linkedin.com/in/davirson-novoa-ramirez-2721641b5",
  github: "https://github.com/DavinsonR",
  kaggle: "https://kaggle.com/davinsonnovoa",
};

export const dictionaries = {
  // ==========================================================
  // ESPAÑOL
  // ==========================================================
  es: {
    profile,
    meta: {
      title: "Davirson Novoa — De FP&A a Data Science",
      description:
        "Economista y analista FP&A en transición hacia data science. Proyectos reales, decisiones documentadas y disponibilidad 100% remota.",
    },
    nav: {
      links: [
        { label: "Sistema", href: "#sistema" },
        { label: "Proyectos", href: "#proyectos" },
        { label: "Historia", href: "#historia" },
        { label: "CV", href: "/cv" },
      ],
      contact: "Contacto",
      switchLabel: "EN",
    },
    hero: {
      kicker: "FP&A → Data Science · 100% remoto · GMT-5",
      lines: ["Entiendo el negocio por sus números.", "Ahora hago que los datos decidan."],
      warmLine: "Un proceso con propósito.",
      sub: "Economista y consultor FP&A con operaciones en más de 15 países de América, en transición hacia la ciencia de datos. Aquí documento el proceso completo — proyectos, decisiones y errores — construido en un 80% con IA como copiloto.",
      subWarm: "Disponible para roles 100% remotos.",
      ctaPrimary: "ver el sistema →",
      ctaSecondary: "cv en 30 segundos",
    },
    sistema: {
      label: "// sistema",
      title: "Estado actual, sin maquillaje",
      desc: "Esto no es un portfolio terminado — es un sistema en construcción. Cada módulo muestra exactamente dónde está hoy. Cuando algo avanza, la barra avanza.",
      progressLabel: "progreso",
      modules: [
        {
          name: "CV_INTERACTIVO",
          status: "live" as Status,
          progress: 90,
          desc: "Perfil, experiencia FP&A en 15+ países, habilidades con niveles honestos y la narrativa de la transición.",
        },
        {
          name: "TRADING_SIM",
          status: "building" as Status,
          progress: 20,
          desc: "Backtester de estrategias: MACD, medias móviles, volumen. Motor en Python, resultados visualizados aquí.",
        },
        {
          name: "HISTORIA",
          status: "research" as Status,
          progress: 15,
          desc: "El relato de la transición con lente de propósito. En redacción — sin filtro heroico.",
        },
        {
          name: "LAB",
          status: "idea" as Status,
          progress: 5,
          desc: "Experimentos con IA, visualizaciones y datos. Se activa cuando el MVP tenga tracción.",
        },
      ],
    },
    featured: {
      label: "// proyecto destacado",
      title: "Lo que estoy construyendo ahora",
      desc: "El primer proyecto que cruza los dos mundos: criterio financiero + código.",
      windowTitle: "trading_sim / backtest_macd.py — estado: BUILDING",
      projectTitle: "Simulador de Trading Algorítmico",
      stack: "python · pandas · datos históricos · indicadores técnicos",
      body: "Un motor de backtesting que evalúa estrategias definidas por reglas — cruces de medias móviles, señales MACD, filtros de volumen — contra datos históricos reales. Con métricas honestas: retorno, drawdown máximo, y por qué una estrategia que se ve perfecta en backtest probablemente esté sobreajustada.",
      link: "ver proceso y decisiones → (próximamente)",
      chartLabel: "EQUITY_CURVE.demo",
      chartRange: "backtest de ejemplo",
      legendStrategy: "— estrategia",
      legendBenchmark: "- - benchmark",
    },
    human: {
      label: "La historia",
      title: "No fue un salto al vacío.\nFue oficializar lo que ya hacía.",
      body: "Como economista terminé metiendo Python y datos en cada rol financiero que tuve: análisis cambiario, automatización, dashboards que convirtieron cierres contables en decisiones. Esta es la historia de convertir eso en mi carrera principal — qué gané, qué costó, y el lente de propósito que ordena todo lo demás.",
      cta: "historia completa en redacción",
    },
    cvStrip: {
      label: "// trayectoria",
      title: "CV en 30 segundos",
      desc: "La versión escaneable. La versión completa e interactiva vive en su propia página.",
      fullCv: "ver CV completo →",
      rows: [
        {
          period: "2026 — hoy",
          title: "Business Consultant, FP&A — Neoris EPAM",
          desc: "Sistemas de gestión financiera para Norteamérica: cierre, forecast y variaciones de SG&A en 12 países/regiones. 100% remoto.",
          tag: "fp&a",
        },
        {
          period: "2024 — 2026",
          title: "SLB — de practicante a especialista en 26 meses",
          desc: "Tesorería y facturación LATAM: análisis cambiario en Python, automatización que liberó 10+ h/mes, revenue recognition bajo SOX.",
          tag: "finanzas + datos",
        },
        {
          period: "2023 — 2024",
          title: "Datos desde el inicio",
          desc: "Investigación económica (LEE Javeriana) y analítica social voluntaria con equipos remotos internacionales.",
          tag: "datos",
        },
      ],
    },
    contact: {
      label: "// contacto",
      title: "¿Buscas a alguien que entienda el negocio y los datos?",
      body: "Abierto a roles 100% remotos como Data Analyst / Junior Data Scientist, y a consultoría en FP&A + automatización. Respondo en español e inglés.",
      email: "Escribir email",
      linkedin: "LinkedIn",
      github: "GitHub",
      kaggle: "Kaggle",
    },
    footer: {
      left: "Davirson Novoa — construido en público, 80% con IA",
      right: "hecho con disciplina, curiosidad y propósito",
    },
    cv: {
      title: "Davirson Novoa Ramírez",
      subtitle: "Analista FP&A → Data Analyst / Junior Data Scientist",
      metaLine: "Bogotá, Colombia · GMT-5 · 100% remoto · Inglés B2 · Portugués A2",
      download: "Descargar CV (PDF)",
      downloadHref: "/Davirson_Novoa_CV_ES.pdf",
      contactBtn: "Contacto",
      facts: [
        { value: "15+", label: "países en operaciones" },
        { value: "10+ h/mes", label: "automatizadas en reporting" },
        { value: "26 meses", label: "de practicante a especialista" },
        { value: "3", label: "roles remotos / híbridos" },
      ],
      profileLabel: "// perfil",
      profileText:
        "Economista y analista de datos. Tres años aplicando Python, SQL y Power BI dentro de roles financieros reales — tesorería, facturación y FP&A — para operaciones en más de 15 países de América. Mi ventaja no es solo técnica: entiendo el negocio que los datos describen. Maestría en Economía en curso (Pontificia Universidad Javeriana). Busco un rol 100% remoto como Data Analyst / Junior Data Scientist.",
      skillsLabel: "// habilidades",
      skillsFinTitle: "Dominio financiero",
      skillsFinDesc: "El contexto que los datos necesitan para significar algo.",
      skillsFin: [
        "FP&A", "Cierre y forecast", "SG&A", "Revenue recognition (SOX)", "Tesorería",
        "Análisis cambiario", "Presupuestos", "SAP", "JD Edwards", "MicroStrategy",
      ],
      skillsTechTitle: "Stack técnico — niveles honestos",
      skillsTechDesc: "Autoevaluados con honestidad: prefiero superar expectativas que inflarlas.",
      skillsTech: [
        { name: "Excel avanzado + Power Query", level: 90, note: "avanzado · uso diario" },
        { name: "Python (pandas, análisis)", level: 70, note: "intermedio-avanzado" },
        { name: "SQL (MySQL, PostgreSQL)", level: 65, note: "intermedio-avanzado" },
        { name: "Machine Learning", level: 60, note: "fundamentos sólidos · Stanford 2024" },
        { name: "Power BI", level: 55, note: "intermedio · uso constante desde 2023" },
        { name: "R · Stata", level: 50, note: "intermedio · académico" },
        { name: "Git · GitHub", level: 45, note: "en uso creciente" },
      ],
      expLabel: "// experiencia",
      expTitle: "Experiencia",
      remoteTag: "remoto",
      hybridTag: "híbrido",
      experience: [
        {
          company: "Neoris EPAM",
          location: "Bogotá, Colombia",
          mode: "remote",
          roles: [
            {
              title: "Business Consultant, FP&A",
              period: "Mar 2026 — presente",
              bullets: [
                "Diseñé y lideré 3 sistemas de gestión financiera para el cierre y forecast de gastos SG&A en Norteamérica, con impacto en 12 países/regiones.",
                "Gestioné el cierre mensual y la confirmación del forecast a nivel compañía, analizando variaciones contra plan y forecast anterior.",
                "Di seguimiento a la variación cambiaria en moneda constante y a la inflación por moneda.",
                "Construí reporting FP&A con Excel avanzado, Power Query, Power BI, MicroStrategy, JD Edwards y SAP.",
              ],
            },
          ],
        },
        {
          company: "SLB",
          location: "Bogotá, Colombia",
          mode: "hybrid",
          note: "Progresión interna: de practicante a especialista en 26 meses.",
          roles: [
            {
              title: "Especialista en Facturación (Argentina & Brasil)",
              period: "Dic 2024 — Mar 2026",
              bullets: [
                "Ejecuté reconocimiento de ingresos en SAP bajo los requisitos de Sarbanes-Oxley (SOX).",
                "Desarrollé visualizaciones en Power BI para análisis de ingresos y tendencias.",
                "Realicé auditorías internas en proyectos tecnológicos integrados, asegurando trazabilidad y cumplimiento.",
              ],
            },
            {
              title: "Analista de Tesorería",
              period: "Oct 2024 — Dic 2024",
              bullets: [
                "Automaticé la conciliación bancaria en SAP, mejorando precisión y eficiencia.",
                "Reduje más de 10 horas mensuales de reporting financiero optimizando procesos.",
                "Implementé flujos de trabajo automatizados con Power Automate.",
              ],
            },
            {
              title: "Practicante de Tesorería",
              period: "Ene 2024 — Jun 2024",
              bullets: [
                "Desarrollé en Python un análisis integral de descalces cambiarios en mercados latinoamericanos, identificando riesgos y oportunidades de cobertura.",
                "Construí dashboards en Power BI para proyección de flujo de caja en 15+ países.",
                "Automaticé reportes de transacciones bancarias en 10+ operaciones regionales.",
              ],
            },
          ],
        },
        {
          company: "LEE Javeriana",
          location: "Remoto",
          mode: "remote",
          roles: [
            {
              title: "Asistente de Investigación",
              period: "Jul 2023 — Dic 2023",
              bullets: [
                "Analicé datos del sistema educativo colombiano con enfoque en educación superior.",
                "Desarrollé dashboards en Power BI para visualización de resultados de investigación.",
                "Contribuí a estudios de evaluación de impacto mediante análisis estadístico.",
              ],
            },
          ],
        },
        {
          company: "Solidariamente (voluntariado)",
          location: "Remoto",
          mode: "remote",
          roles: [
            {
              title: "Social Data Analyst Jr",
              period: "Ene 2023 — Jul 2023",
              bullets: [
                "Entregué herramientas analíticas e insights para ONG en entornos multiculturales.",
                "Colaboré con equipos internacionales en iniciativas de impacto social basadas en datos.",
              ],
            },
          ],
        },
      ],
      pivot: {
        label: "La transición, contada honestamente",
        body: "En cada rol financiero terminé construyendo lo mismo: código y datos. Un análisis cambiario en Python cuando era practicante. Automatizaciones que liberaron más de 10 horas al mes en tesorería. Dashboards que convirtieron cierres contables en decisiones. En 2024 gané un hackathon de analítica y completé la Especialización en Machine Learning de Stanford. La conclusión fue obvia: no estaba haciendo finanzas con algo de datos — estaba haciendo ciencia de datos dentro de las finanzas. Este sitio documenta el paso final: convertirla en mi carrera principal, sin desechar la ventaja de entender el negocio.",
      },
      awardsLabel: "// reconocimientos",
      awards: [
        { title: "Ganador — BodyTech Trends Hackathon", year: "2024", desc: "Solución de analítica de datos para el sector salud y fitness." },
        { title: "Becario Ecopetrol — Programa Mario Galán Gómez", year: "2018", desc: "Beca por mérito académico y potencial de liderazgo." },
      ],
      eduLabel: "// educación y certificaciones",
      education: [
        { title: "Maestría en Economía", inst: "Pontificia Universidad Javeriana", period: "2025 — 2026", status: "building" as Status, statusText: "EN CURSO" },
        { title: "Pregrado en Economía", inst: "Pontificia Universidad Javeriana", period: "2020 — 2024", status: "live" as Status, statusText: "COMPLETADO" },
        { title: "Técnico en Sistemas", inst: "SENA", period: "2018", status: "live" as Status, statusText: "COMPLETADO" },
      ],
      certs: [
        { title: "Especialización en Machine Learning", inst: "Stanford · Coursera", year: "2024" },
        { title: "Certificado de Ciberseguridad", inst: "Google · Coursera", year: "2024" },
        { title: "Ciencia de Datos con Python", inst: "Platzi", year: "2023" },
      ],
      remote: {
        label: "// preparado para remoto",
        points: [
          "3 roles remotos o híbridos con equipos distribuidos en 15+ países.",
          "GMT-5 (Bogotá): solapamiento completo con horarios de EE. UU. y Canadá.",
          "Experiencia trabajando con equipos de Norteamérica, Argentina y Brasil.",
          "Español nativo · Inglés B2 · Portugués A2.",
        ],
      },
    },
  },

  // ==========================================================
  // ENGLISH
  // ==========================================================
  en: {
    profile,
    meta: {
      title: "Davirson Novoa — From FP&A to Data Science",
      description:
        "Economist and FP&A analyst transitioning into data science. Real projects, documented decisions, available for fully remote roles.",
    },
    nav: {
      links: [
        { label: "System", href: "#sistema" },
        { label: "Projects", href: "#proyectos" },
        { label: "Story", href: "#historia" },
        { label: "Resume", href: "/cv" },
      ],
      contact: "Contact",
      switchLabel: "ES",
    },
    hero: {
      kicker: "FP&A → Data Science · Fully remote · GMT-5",
      lines: ["I understand business through its numbers.", "Now I make data drive the decisions."],
      warmLine: "A process with purpose.",
      sub: "Economist and FP&A consultant with operations across 15+ countries in the Americas, transitioning into data science. This site documents the entire process — projects, decisions, and mistakes — built roughly 80% with AI as a copilot.",
      subWarm: "Available for fully remote roles.",
      ctaPrimary: "view the system →",
      ctaSecondary: "resume in 30 seconds",
    },
    sistema: {
      label: "// system",
      title: "Current status, no makeup",
      desc: "This is not a finished portfolio — it's a system under construction. Each module shows exactly where it stands today. When something moves, the bar moves.",
      progressLabel: "progress",
      modules: [
        {
          name: "INTERACTIVE_RESUME",
          status: "live" as Status,
          progress: 90,
          desc: "Profile, FP&A experience across 15+ countries, honestly-leveled skills, and the transition narrative.",
        },
        {
          name: "TRADING_SIM",
          status: "building" as Status,
          progress: 20,
          desc: "Strategy backtester: MACD, moving averages, volume. Python engine, results visualized here.",
        },
        {
          name: "STORY",
          status: "research" as Status,
          progress: 15,
          desc: "The transition story through a lens of purpose. Being written — no heroic filter.",
        },
        {
          name: "LAB",
          status: "idea" as Status,
          progress: 5,
          desc: "Experiments with AI, visualizations, and data. Activates once the MVP gains traction.",
        },
      ],
    },
    featured: {
      label: "// featured project",
      title: "What I'm building now",
      desc: "The first project that crosses both worlds: financial judgment + code.",
      windowTitle: "trading_sim / backtest_macd.py — status: BUILDING",
      projectTitle: "Algorithmic Trading Simulator",
      stack: "python · pandas · historical data · technical indicators",
      body: "A backtesting engine that evaluates rule-based strategies — moving-average crossovers, MACD signals, volume filters — against real historical data. With honest metrics: returns, max drawdown, and why a strategy that looks perfect in backtest is probably overfitted.",
      link: "see process & decisions → (coming soon)",
      chartLabel: "EQUITY_CURVE.demo",
      chartRange: "sample backtest",
      legendStrategy: "— strategy",
      legendBenchmark: "- - benchmark",
    },
    human: {
      label: "The story",
      title: "It wasn't a leap into the void.\nIt was making official what I already did.",
      body: "As an economist, I ended up bringing Python and data into every finance role I held: FX analysis, automation, dashboards that turned accounting closes into decisions. This is the story of turning that into my main career — what I gained, what it cost, and the lens of purpose that orders everything else.",
      cta: "full story being written",
    },
    cvStrip: {
      label: "// track record",
      title: "Resume in 30 seconds",
      desc: "The scannable version. The full interactive version lives on its own page.",
      fullCv: "view full resume →",
      rows: [
        {
          period: "2026 — now",
          title: "Business Consultant, FP&A — Neoris EPAM",
          desc: "Financial management systems for North America: SG&A close, forecast, and variance across 12 countries/regions. Fully remote.",
          tag: "fp&a",
        },
        {
          period: "2024 — 2026",
          title: "SLB — intern to specialist in 26 months",
          desc: "LATAM treasury & billing: FX analysis in Python, automation that freed 10+ hrs/month, revenue recognition under SOX.",
          tag: "finance + data",
        },
        {
          period: "2023 — 2024",
          title: "Data from the start",
          desc: "Economic research (LEE Javeriana) and volunteer social analytics with international remote teams.",
          tag: "data",
        },
      ],
    },
    contact: {
      label: "// contact",
      title: "Looking for someone who understands both the business and the data?",
      body: "Open to fully remote roles as Data Analyst / Junior Data Scientist, and to consulting in FP&A + automation. I work in English and Spanish.",
      email: "Send email",
      linkedin: "LinkedIn",
      github: "GitHub",
      kaggle: "Kaggle",
    },
    footer: {
      left: "Davirson Novoa — built in public, 80% with AI",
      right: "made with discipline, curiosity, and purpose",
    },
    cv: {
      title: "Davirson Novoa Ramírez",
      subtitle: "FP&A Analyst → Data Analyst / Junior Data Scientist",
      metaLine: "Bogotá, Colombia · GMT-5 · Fully remote · English B2 · Portuguese A2",
      download: "Download resume (PDF)",
      downloadHref: "/Davirson_Novoa_Resume_EN.pdf",
      contactBtn: "Contact",
      facts: [
        { value: "15+", label: "countries in operations" },
        { value: "10+ hrs/mo", label: "automated in reporting" },
        { value: "26 months", label: "from intern to specialist" },
        { value: "3", label: "remote / hybrid roles" },
      ],
      profileLabel: "// profile",
      profileText:
        "Economist and data analyst. Three years applying Python, SQL, and Power BI inside real finance roles — treasury, billing, and FP&A — for operations across 15+ countries in the Americas. My edge isn't only technical: I understand the business the data describes. Master's in Economics in progress (Pontificia Universidad Javeriana). Seeking a fully remote role as Data Analyst / Junior Data Scientist.",
      skillsLabel: "// skills",
      skillsFinTitle: "Finance domain",
      skillsFinDesc: "The context data needs in order to mean something.",
      skillsFin: [
        "FP&A", "Close & forecast", "SG&A", "Revenue recognition (SOX)", "Treasury",
        "FX analysis", "Budgeting", "SAP", "JD Edwards", "MicroStrategy",
      ],
      skillsTechTitle: "Technical stack — honest levels",
      skillsTechDesc: "Self-assessed honestly: I'd rather exceed expectations than inflate them.",
      skillsTech: [
        { name: "Advanced Excel + Power Query", level: 90, note: "advanced · daily use" },
        { name: "Python (pandas, analysis)", level: 70, note: "intermediate-advanced" },
        { name: "SQL (MySQL, PostgreSQL)", level: 65, note: "intermediate-advanced" },
        { name: "Machine Learning", level: 60, note: "solid foundations · Stanford 2024" },
        { name: "Power BI", level: 55, note: "intermediate · constant use since 2023" },
        { name: "R · Stata", level: 50, note: "intermediate · academic" },
        { name: "Git · GitHub", level: 45, note: "growing daily use" },
      ],
      expLabel: "// experience",
      expTitle: "Experience",
      remoteTag: "remote",
      hybridTag: "hybrid",
      experience: [
        {
          company: "Neoris EPAM",
          location: "Bogotá, Colombia",
          mode: "remote",
          roles: [
            {
              title: "Business Consultant, FP&A",
              period: "Mar 2026 — present",
              bullets: [
                "Designed and led 3 financial management systems for SG&A close and forecast across North America, impacting 12 countries/regions.",
                "Managed monthly close and company-wide forecast confirmation, analyzing variances against plan and prior forecast.",
                "Tracked FX variance in constant currency and per-currency inflation.",
                "Built FP&A reporting with advanced Excel, Power Query, Power BI, MicroStrategy, JD Edwards, and SAP.",
              ],
            },
          ],
        },
        {
          company: "SLB",
          location: "Bogotá, Colombia",
          mode: "hybrid",
          note: "Internal progression: intern to specialist in 26 months.",
          roles: [
            {
              title: "Billing Specialist (Argentina & Brazil)",
              period: "Dec 2024 — Mar 2026",
              bullets: [
                "Executed revenue recognition in SAP under Sarbanes-Oxley (SOX) requirements.",
                "Built Power BI visualizations for revenue and trend analysis.",
                "Performed internal audits on integrated technology projects, ensuring traceability and compliance.",
              ],
            },
            {
              title: "Treasury Analyst",
              period: "Oct 2024 — Dec 2024",
              bullets: [
                "Automated bank reconciliation in SAP, improving accuracy and efficiency.",
                "Cut 10+ hours per month of financial reporting through process optimization.",
                "Implemented automated workflows with Power Automate.",
              ],
            },
            {
              title: "Treasury Intern",
              period: "Jan 2024 — Jun 2024",
              bullets: [
                "Built a comprehensive FX mismatch analysis for Latin American markets in Python, identifying financial risks and hedging opportunities.",
                "Created Power BI dashboards for cash-flow projections across 15+ countries.",
                "Automated bank transaction reporting across 10+ regional operations.",
              ],
            },
          ],
        },
        {
          company: "LEE Javeriana",
          location: "Remote",
          mode: "remote",
          roles: [
            {
              title: "Research Assistant",
              period: "Jul 2023 — Dec 2023",
              bullets: [
                "Analyzed data on the Colombian education system with a focus on higher education.",
                "Developed Power BI dashboards to visualize research findings.",
                "Contributed to impact evaluation studies through statistical analysis.",
              ],
            },
          ],
        },
        {
          company: "Solidariamente (volunteer)",
          location: "Remote",
          mode: "remote",
          roles: [
            {
              title: "Social Data Analyst Jr",
              period: "Jan 2023 — Jul 2023",
              bullets: [
                "Delivered analytical tools and insights for NGOs operating in multicultural environments.",
                "Collaborated with international teams on data-driven social impact initiatives.",
              ],
            },
          ],
        },
      ],
      pivot: {
        label: "The transition, told honestly",
        body: "In every finance role, I ended up building the same thing: code and data. An FX analysis in Python as an intern. Automations that freed more than 10 hours a month in treasury. Dashboards that turned accounting closes into decisions. In 2024 I won a data analytics hackathon and completed Stanford's Machine Learning Specialization. The conclusion was obvious: I wasn't doing finance with a bit of data — I was doing data science inside finance. This site documents the final step: making it my main career, without discarding the advantage of understanding the business.",
      },
      awardsLabel: "// recognition",
      awards: [
        { title: "Winner — BodyTech Trends Hackathon", year: "2024", desc: "Data analytics solution for the health & fitness sector." },
        { title: "Ecopetrol Scholar — Mario Galán Gómez Program", year: "2018", desc: "Merit scholarship for academic excellence and leadership potential." },
      ],
      eduLabel: "// education & certifications",
      education: [
        { title: "M.Sc. in Economics", inst: "Pontificia Universidad Javeriana", period: "2025 — 2026", status: "building" as Status, statusText: "IN PROGRESS" },
        { title: "B.Sc. in Economics", inst: "Pontificia Universidad Javeriana", period: "2020 — 2024", status: "live" as Status, statusText: "COMPLETED" },
        { title: "Systems Technician", inst: "SENA", period: "2018", status: "live" as Status, statusText: "COMPLETED" },
      ],
      certs: [
        { title: "Machine Learning Specialization", inst: "Stanford · Coursera", year: "2024" },
        { title: "Cybersecurity Certificate", inst: "Google · Coursera", year: "2024" },
        { title: "Data Science with Python", inst: "Platzi", year: "2023" },
      ],
      remote: {
        label: "// remote-ready",
        points: [
          "3 remote or hybrid roles with teams distributed across 15+ countries.",
          "GMT-5 (Bogotá): full overlap with US and Canada working hours.",
          "Experience working with teams in North America, Argentina, and Brazil.",
          "Native Spanish · English B2 · Portuguese A2.",
        ],
      },
    },
  },
};

export type Dictionary = (typeof dictionaries)["es"];

export function getDictionary(locale: string): Dictionary {
  return (dictionaries as Record<string, Dictionary>)[locale] ?? dictionaries.es;
}
