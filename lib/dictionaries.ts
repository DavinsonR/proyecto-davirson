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
      title: "Davirson Novoa — Finance Data Analyst",
      description:
        "Economista y consultor FP&A que construye la infraestructura de datos él mismo. Leo un P&L y construyo el pipeline que lo alimenta.",
    },
    nav: {
      links: [
        { label: "Trabajo", href: "#work" },
        { label: "Trayectoria", href: "#track" },
        { label: "CV", href: "/cv" },
      ],
      contact: "Contacto",
      switchLabel: "EN",
      switchTitle: "Read in English",
      themeLight: "Modo claro",
      themeDark: "Modo oscuro",
    },
    sheet: {
      classification: "Perfil · Finanzas y Datos",
      asOf: "Corte a agosto 2026",
      name: "Davirson Novoa Ramírez",
      verdict: "Finance Data Analyst",
      thesis: "Leo un P&L y construyo el pipeline que lo alimenta.",
      sub: "Economista y consultor FP&A para operaciones en más de 15 países. Opero una plataforma de datos en producción —ingesta diaria, pruebas de calidad automáticas y modelo en Power BI— que construí yo mismo.",
      availability: "Bogotá · GMT-5 · Traslape completo con horario de EE.UU. · Abierto a roles remotos",
      metricsLabel: "Cifras verificables",
      metricsNote: "Cada cifra enlaza a lo que la prueba.",
      pipelineLive: "Pipeline en vivo · última actualización",
      pipelineLiveFallback: "Pipeline en vivo · se actualiza a diario",
      metrics: [
        { value: "15+", label: "países en alcance", note: "en tres roles de finanzas" },
        { value: "26", label: "meses de practicante a especialista", note: "SLB" },
        { value: "48", label: "activos en producción", note: "pipeline diario" },
        { value: "100", label: "pruebas de datos automáticas", note: "en cada corrida" },
      ],
      ctaPrimary: "Descargar CV (PDF)",
      ctaSecondary: "Ver la evidencia",
      portraitPending: "DNR",
    },
    work: {
      title: "Lo que construí, y el problema que resuelve",
      intro: "Un proyecto, contado como se cuenta un caso: el problema primero.",
      project: {
        name: "market-data-medallion",
        kind: "Plataforma de datos en producción",
        problemLabel: "El problema",
        problem: "Los equipos financieros reconstruyen la misma hoja de cálculo frágil cada mes. Nadie puede probar que las cifras están bien y, cuando el analista se va, el proceso se va con él.",
        builtLabel: "Lo que construí",
        built: "Una plataforma de datos completa sobre infraestructura gratuita: ingesta diaria desde tres APIs de mercado, un warehouse PostgreSQL en capas medallion con dbt, 100 pruebas de calidad automáticas, CI/CD y un modelo semántico de Power BI encima. Se actualiza sola cada mañana sin que yo intervenga.",
        matterLabel: "Por qué importa",
        matter: "Es la misma arquitectura que necesita el reporting de un equipo financiero: fuentes conciliadas, calidad verificable y un tablero que nadie tiene que reconstruir a mano.",
        findingLabel: "Hallazgo publicado",
        finding: "De más de 1.300 variantes de estrategia evaluadas, apenas una de cada ocho ganadoras dentro de muestra sobrevivió a la validación fuera de muestra. Publiqué todas las que no.",
        stack: ["PostgreSQL", "dbt", "Python", "Power BI", "GitHub Actions", "Prefect"],
        repoCta: "Ver el código",
        liveCta: "Abrir el laboratorio",
      },
      capabilitiesTitle: "Lo que esto demuestra",
      capabilities: [
        { name: "Modelado de datos en SQL", detail: "warehouse en capas, dbt, pruebas de calidad" },
        { name: "Python para datos", detail: "ETL, pandas, validación con pandera" },
        { name: "Power BI y modelos semánticos", detail: "medidas DAX, modelo dimensional" },
        { name: "Orquestación y CI/CD", detail: "cron diario, reintentos, auditoría de corridas" },
        { name: "FP&A", detail: "cierre, forecast, variaciones de SG&A" },
        { name: "Análisis cambiario", detail: "descomposición empresa vs moneda" },
      ],
    },
    tradingSim: {
      metaTitle: "Trading Sim — más de 1.300 estrategias contra la realidad",
      metaDesc:
        "Más de 1.300 variantes de estrategia evaluadas sobre 48 activos con comisiones, slippage y validación fuera de muestra. La gran mayoría de las ganadoras eran ilusiones del backtest.",
      kicker: "Laboratorio · trading_sim",
      title: "Más de 1.300 estrategias entraron al laboratorio. Sobrevivieron menos de 50.",
      intro:
        "Cinco estrategias técnicas clásicas y todas sus combinaciones posibles, evaluadas sobre 48 activos — cripto, ETFs, acciones de EE.UU., ADRs latinoamericanos y divisas — con comisiones, slippage y sin mirar el futuro. Cada variante se entrena en el 70% de la historia y se juzga en el 30% que nunca vio. Esto no es un curso de trading: es la medición honesta de cuánto sobrevive el análisis técnico al contacto con la realidad.",
      pipelineLine:
        "datos: pipeline propio (API → PostgreSQL → dbt → backtester) · actualización diaria automática · código abierto",
      loading: "cargando datos del pipeline…",
      error: "No se pudieron cargar los datos (GitHub raw). Reintenta en unos segundos.",
      retry: "reintentar",
      stats: {
        variants: "variantes evaluadas",
        beatIs: "ganaron en entrenamiento",
        survivors: "sobrevivieron fuera de muestra",
        survival: "tasa de supervivencia",
      },
      funnel: {
        title: "El embudo de la honestidad",
        desc: "De todas las variantes que le ganaron a comprar-y-mantener en el periodo de entrenamiento, solo una de cada nueve siguió ganando en el periodo de validación que nunca influyó en su selección. El resto era ruido con buena suerte.",
        stageAll: "variantes evaluadas (5 estrategias + todas sus combinaciones AND)",
        stageIs: "le ganaron a buy & hold dentro de muestra",
        stageBoth: "siguieron ganándole fuera de muestra",
      },
      survivalChart: {
        title: "Supervivencia por nº de señales combinadas",
        desc: "Combinar más señales no aumenta la probabilidad de que un hallazgo sea real: la supervivencia es plana en ~11%. La complejidad no compra robustez.",
      },
      exposureChart: {
        title: "Tiempo en el mercado por nº de señales",
        desc: "Cada filtro adicional no mejora las entradas — te saca del mercado. Con las 5 señales exigidas a la vez: cero operaciones en 4,5 años.",
        never: "nunca coinciden",
      },
      signalOne: "señal",
      signalMany: "señales",
      explorer: {
        windowTitle: "explorador de backtests",
        assetLabel: "activo",
        strategyLabel: "estrategia",
        benchmark: "buy & hold",
        splitMarker: "→ validación",
        tableToggle: "ver datos en tabla",
        date: "fecha",
        noData: "sin datos para este activo todavía",
      },
      regions: { global: "Global", us: "Estados Unidos", latam: "Latinoamérica", emerging: "Emergentes" },
      metrics: { ret: "retorno", bh: "buy & hold", dd: "drawdown máx", sharpe: "sharpe", trades: "operaciones", win: "% ganadoras" },
      combos: {
        title: "Las 31 combinaciones de este activo",
        desc: "\"Luz verde en MACD + volumen\" y todas las demás. Ordenadas por su exceso de retorno fuera de muestra — la única cifra que no se usó para elegir nada. Las filas atenuadas nunca abrieron una posición.",
        strategy: "combinación",
        exposure: "expos.",
        excess: "exceso (total)",
        oosExcess: "exceso (valid.)",
        survived: "¿ganó fuera?",
        yes: "sí",
        no: "no",
        zeroTrades: "0 ops",
      },
      leaderboard: {
        title: "Las 5 estrategias, cara a cara",
        desc: "Promedios sobre los 48 activos, periodo completo 2022–2026. Ninguna estrategia tiene exceso de retorno promedio positivo: en promedio, todas pierden contra no hacer nada.",
        strategy: "estrategia",
        beat: "le ganó a B&H",
        avgReturn: "retorno prom.",
        avgBh: "B&H prom.",
        excess: "exceso prom.",
        sharpe: "sharpe med.",
      },
      fx: {
        title: "¿La empresa o la moneda? — ADRs latinoamericanos",
        desc: "Ecopetrol, Bancolombia, Petrobras y los demás ADRs cotizan en Nueva York en dólares: su retorno mezcla el desempeño de la empresa con el movimiento cambiario. Con las divisas en el mismo warehouse, los separamos (ventana: 365 días).",
        formula: "(1 + r_USD) × (1 + r_FX) = (1 + r_local)  ·  arrastre = r_USD − r_local",
        asset: "activo",
        pair: "par",
        usd: "retorno USD",
        local: "retorno local",
        fxMove: "mov. divisa",
        drag: "arrastre FX",
        note: "Arrastre negativo = la moneda local se depreció y le restó al inversionista en dólares; positivo = la moneda ayudó. Un análisis que solo existe porque el warehouse tiene las dos series.",
      },
      health: {
        windowTitle: "pipeline_health — corrida diaria",
        totals: "{assets} activos · {candles} velas diarias · {backtests} backtests en la base · última generación {date}",
      },
      updated: "datos generados",
      repoCta: "código en GitHub",
      method: {
        label: "Metodología",
        title: "Las reglas que hacen creíbles los números",
        desc: "Un backtest sin estas reglas es marketing. Cada una existe porque su ausencia infla resultados — y varias las aprendimos encontrando bugs reales, documentados en el repositorio.",
        items: [
          {
            title: "sin mirar el futuro",
            body: "La señal calculada al cierre del día t se ejecuta a la apertura del día t+1. Nunca se opera con información que aún no existía — el error clásico que infla backtests.",
          },
          {
            title: "costos reales",
            body: "10 pb de comisión por lado + 5 pb de slippage adverso en cada ejecución. La razón nº1 por la que estrategias \"perfectas\" en papel pierden dinero real.",
          },
          {
            title: "validación 70/30",
            body: "Cada variante se entrena en el 70% de la historia y se juzga en el 30% restante, que nunca influyó en su selección. Con más de 1.300 variantes, sin ventana ciega el resultado sería data dredging.",
          },
          {
            title: "calentamiento simétrico",
            body: "Los indicadores necesitan historia antes de dar señal. El corte 70/30 se toma después de ese calentamiento, para que ambas ventanas comparen regímenes equivalentes.",
          },
          {
            title: "ganar exige operar",
            body: "Una combinación que nunca entra al mercado rinde 0% y \"le ganaría\" a un mercado en caída. No cuenta: vencer a buy & hold requiere haber operado.",
          },
          {
            title: "datos auditables",
            body: "55.000+ velas de Coinbase, Kraken y Tiingo en un warehouse PostgreSQL con arquitectura medallion, 87 tests de calidad de datos y reconciliación entre fuentes. Todo reproducible desde el repo.",
          },
        ],
        repoCta: "ver el pipeline completo en GitHub →",
        backCta: "← volver al inicio",
      },
    },
    track: {
      title: "Trayectoria",
      fullCv: "Ver CV completo",
      rows: [
        {
          period: "2026 — hoy",
          title: "Business Consultant, FP&A · Neoris EPAM",
          desc: "Sistemas de gestión financiera para Norteamérica: cierre, forecast y variaciones de SG&A en 12 países. 100% remoto.",
          tag: "FP&A",
        },
        {
          period: "2024 — 2026",
          title: "SLB · de practicante a especialista en 26 meses",
          desc: "Tesorería y facturación LATAM: análisis cambiario en Python, automatización que liberó más de 10 horas al mes, revenue recognition bajo SOX.",
          tag: "Finanzas + datos",
        },
        {
          period: "2023 — 2024",
          title: "Investigación económica · LEE Javeriana",
          desc: "Investigación aplicada y analítica social voluntaria con equipos remotos internacionales.",
          tag: "Datos",
        },
      ],
    },
    toolkit: {
      title: "Herramientas, calificadas con honestidad",
      note: "Sin inflar. Un 6 significa que la uso bien con documentación al lado; un 9, que la enseño.",
      scaleLabel: "nivel",
      rows: [
        { name: "Modelado financiero y Excel", level: 9 },
        { name: "Power BI", level: 8 },
        { name: "SQL", level: 7 },
        { name: "Python", level: 7 },
        { name: "dbt y warehousing", level: 6 },
        { name: "Machine learning", level: 6 },
      ],
    },
    disclosures: {
      title: "Divulgaciones",
      items: [
        {
          term: "Construido en público",
          text: "Este sitio y los proyectos detrás se documentan mientras se hacen, incluidos los errores. La bitácora de ingeniería registra 23 fallos encontrados y corregidos.",
        },
        {
          term: "Rendimientos pasados",
          text: "La investigación de trading que aparece aquí es una demostración de metodología, no una recomendación de inversión.",
        },
        {
          term: "Asistencia de IA",
          text: "Cerca del 80% del código se escribió con IA como copiloto. Las decisiones de arquitectura, el criterio de dominio y las reglas de honestidad son míos.",
        },
        {
          term: "Idiomas",
          text: "Español nativo · Inglés B2 · Portugués A2.",
        },
      ],
    },
    contact: {
      title: "¿Buscas a alguien que entienda el negocio y construya los datos?",
      body: "Abierto a roles remotos de Finance Data Analyst, Analytics Engineer y FP&A con automatización. Respondo en español e inglés.",
      email: "Escribir un correo",
      linkedin: "LinkedIn",
      github: "GitHub",
      kaggle: "Kaggle",
    },
    footer: {
      left: "Davirson Novoa · construido en público",
      right: "Datos actualizados a diario por un pipeline automático",
    },
    cv: {
      title: "Davirson Novoa Ramírez",
      subtitle: "Finance Data Analyst · FP&A + ingeniería de datos",
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
      profileLabel: "Perfil",
      profileText:
        "Economista y analista de datos. Tres años aplicando Python, SQL y Power BI dentro de roles financieros reales — tesorería, facturación y FP&A — para operaciones en más de 15 países de América. Mi ventaja no es solo técnica: entiendo el negocio que los datos describen. Maestría en Economía en curso (Pontificia Universidad Javeriana). Busco un rol remoto de Finance Data Analyst o Analytics Engineer, donde el criterio financiero y la ingeniería de datos cuenten como una sola capacidad.",
      skillsLabel: "Habilidades",
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
      expLabel: "Experiencia",
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
      awardsLabel: "Reconocimientos",
      awards: [
        { title: "Ganador — BodyTech Trends Hackathon", year: "2024", desc: "Solución de analítica de datos para el sector salud y fitness." },
        { title: "Becario Ecopetrol — Programa Mario Galán Gómez", year: "2018", desc: "Beca por mérito académico y potencial de liderazgo." },
      ],
      eduLabel: "Educación y certificaciones",
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
        label: "Preparado para remoto",
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
      title: "Davirson Novoa — Finance Data Analyst",
      description:
        "Economist and FP&A consultant who builds the data infrastructure himself. I read a P&L and I build the pipeline that feeds it.",
    },
    nav: {
      links: [
        { label: "Work", href: "#work" },
        { label: "Track record", href: "#track" },
        { label: "CV", href: "/cv" },
      ],
      contact: "Contact",
      switchLabel: "ES",
      switchTitle: "Leer en español",
      themeLight: "Light mode",
      themeDark: "Dark mode",
    },
    sheet: {
      classification: "Profile · Finance & Data",
      asOf: "As of August 2026",
      name: "Davirson Novoa Ramírez",
      verdict: "Finance Data Analyst",
      thesis: "I read a P&L, and I build the pipeline that feeds it.",
      sub: "Economist and FP&A consultant supporting operations across 15+ countries. I run a production data platform — daily ingestion, automated quality tests, a Power BI model — that I built and operate myself.",
      availability: "Bogotá · GMT-5 · Full overlap with US hours · Open to remote roles",
      metricsLabel: "Verifiable figures",
      metricsNote: "Every figure links to what proves it.",
      pipelineLive: "Live pipeline · last refresh",
      pipelineLiveFallback: "Live pipeline · refreshes daily",
      metrics: [
        { value: "15+", label: "countries in scope", note: "across three finance roles" },
        { value: "26", label: "months intern to specialist", note: "SLB" },
        { value: "48", label: "assets in production", note: "daily pipeline" },
        { value: "100", label: "automated data tests", note: "every run" },
      ],
      ctaPrimary: "Download CV (PDF)",
      ctaSecondary: "See the evidence",
      portraitPending: "DNR",
    },
    work: {
      title: "What I built, and the problem it solves",
      intro: "One project, told the way a case is told: the problem first.",
      project: {
        name: "market-data-medallion",
        kind: "Production data platform",
        problemLabel: "The problem",
        problem: "Finance teams rebuild the same fragile spreadsheet every month. Nobody can prove the numbers are right, and when the analyst leaves, the process leaves with them.",
        builtLabel: "What I built",
        built: "A complete data platform on free infrastructure: daily ingestion from three market APIs, a PostgreSQL warehouse in medallion layers with dbt, 100 automated quality tests, CI/CD, and a Power BI semantic model on top. It refreshes itself every morning without me.",
        matterLabel: "Why it matters",
        matter: "This is the same architecture a finance team needs for reporting: reconciled sources, verifiable quality, and a dashboard nobody has to rebuild by hand.",
        findingLabel: "Published finding",
        finding: "Of 1,300+ strategy variants evaluated, barely one in eight of the in-sample winners survived out-of-sample validation. I published every one that did not.",
        stack: ["PostgreSQL", "dbt", "Python", "Power BI", "GitHub Actions", "Prefect"],
        repoCta: "See the code",
        liveCta: "Open the lab",
      },
      capabilitiesTitle: "What this demonstrates",
      capabilities: [
        { name: "SQL data modeling", detail: "layered warehouse, dbt, quality tests" },
        { name: "Python for data", detail: "ETL, pandas, pandera validation" },
        { name: "Power BI & semantic models", detail: "DAX measures, dimensional model" },
        { name: "Orchestration & CI/CD", detail: "daily cron, retries, run auditing" },
        { name: "FP&A", detail: "close, forecast, SG&A variance" },
        { name: "FX analysis", detail: "company vs currency decomposition" },
      ],
    },
    tradingSim: {
      metaTitle: "Trading Sim — 1,300+ strategies vs. reality",
      metaDesc:
        "1,300+ strategy variants evaluated across 48 assets with fees, slippage and out-of-sample validation. The vast majority of the winners were backtest illusions.",
      kicker: "Lab · trading_sim",
      title: "1,300+ strategies entered the lab. Fewer than 50 survived.",
      intro:
        "Five classic technical strategies and every possible combination of them, evaluated across 48 assets — crypto, ETFs, US stocks, Latin American ADRs and currencies — with fees, slippage and no look-ahead. Every variant trains on 70% of history and is judged on the 30% it never saw. This is not a trading course: it is an honest measurement of how much technical analysis survives contact with reality.",
      pipelineLine:
        "data: own pipeline (API → PostgreSQL → dbt → backtester) · automatic daily refresh · open source",
      loading: "loading pipeline data…",
      error: "Could not load the data (GitHub raw). Retry in a few seconds.",
      retry: "retry",
      stats: {
        variants: "variants evaluated",
        beatIs: "won in training",
        survivors: "survived out of sample",
        survival: "survival rate",
      },
      funnel: {
        title: "The honesty funnel",
        desc: "Of all the variants that beat buy-and-hold during the training period, only one in nine kept winning in the validation window that never influenced their selection. The rest was noise with good luck.",
        stageAll: "variants evaluated (5 strategies + every AND-combination)",
        stageIs: "beat buy & hold in sample",
        stageBoth: "kept beating it out of sample",
      },
      survivalChart: {
        title: "Survival by number of combined signals",
        desc: "Combining more signals does not increase the odds that a finding is real: survival is flat at ~11%. Complexity does not buy robustness.",
      },
      exposureChart: {
        title: "Time in the market by signal count",
        desc: "Each extra filter does not improve the entries — it takes you out of the market. Demanding all 5 signals at once: zero trades in 4.5 years.",
        never: "they never align",
      },
      signalOne: "signal",
      signalMany: "signals",
      explorer: {
        windowTitle: "backtest explorer",
        assetLabel: "asset",
        strategyLabel: "strategy",
        benchmark: "buy & hold",
        splitMarker: "→ validation",
        tableToggle: "view data as table",
        date: "date",
        noData: "no data for this asset yet",
      },
      regions: { global: "Global", us: "United States", latam: "Latin America", emerging: "Emerging" },
      metrics: { ret: "return", bh: "buy & hold", dd: "max drawdown", sharpe: "sharpe", trades: "trades", win: "win rate" },
      combos: {
        title: "This asset's 31 combinations",
        desc: "\"Green light on MACD + volume\" and all the rest. Sorted by out-of-sample excess return — the only figure that was never used to pick anything. Dimmed rows never opened a position.",
        strategy: "combination",
        exposure: "expos.",
        excess: "excess (full)",
        oosExcess: "excess (valid.)",
        survived: "won out?",
        yes: "yes",
        no: "no",
        zeroTrades: "0 trades",
      },
      leaderboard: {
        title: "The 5 strategies, head to head",
        desc: "Averages across all 48 assets, full period 2022–2026. No strategy has positive average excess return: on average, they all lose to doing nothing.",
        strategy: "strategy",
        beat: "beat B&H",
        avgReturn: "avg return",
        avgBh: "avg B&H",
        excess: "avg excess",
        sharpe: "med. sharpe",
      },
      fx: {
        title: "The company or the currency? — Latin American ADRs",
        desc: "Ecopetrol, Bancolombia, Petrobras and the other ADRs trade in New York in dollars: their return mixes company performance with the currency move. With the FX pairs in the same warehouse, we separate them (window: 365 days).",
        formula: "(1 + r_USD) × (1 + r_FX) = (1 + r_local)  ·  drag = r_USD − r_local",
        asset: "asset",
        pair: "pair",
        usd: "USD return",
        local: "local return",
        fxMove: "FX move",
        drag: "FX drag",
        note: "Negative drag = the local currency depreciated and subtracted from the USD investor's return; positive = the currency helped. An analysis that only exists because the warehouse holds both series.",
      },
      health: {
        windowTitle: "pipeline_health — daily run",
        totals: "{assets} assets · {candles} daily candles · {backtests} backtests in the warehouse · last generated {date}",
      },
      updated: "data generated",
      repoCta: "code on GitHub",
      method: {
        label: "Methodology",
        title: "The rules that make these numbers credible",
        desc: "A backtest without these rules is marketing. Each one exists because its absence inflates results — and several were learned by finding real bugs, documented in the repository.",
        items: [
          {
            title: "no look-ahead",
            body: "A signal computed at day t's close executes at day t+1's open. No trade ever uses information that did not yet exist — the classic error that inflates backtests.",
          },
          {
            title: "real costs",
            body: "10 bps commission per side + 5 bps adverse slippage on every fill. The #1 reason strategies that look \"perfect\" on paper lose real money.",
          },
          {
            title: "70/30 validation",
            body: "Every variant trains on 70% of history and is judged on the remaining 30%, which never influenced its selection. With 1,300+ variants, skipping the blind window would be data dredging.",
          },
          {
            title: "symmetric warm-up",
            body: "Indicators need history before they can speak. The 70/30 split is taken after that warm-up, so both windows compare equivalent regimes.",
          },
          {
            title: "winning requires trading",
            body: "A combination that never enters the market returns 0% and would \"beat\" a falling market. It does not count: beating buy & hold requires having traded.",
          },
          {
            title: "auditable data",
            body: "55,000+ candles from Coinbase, Kraken and Tiingo in a PostgreSQL medallion warehouse, 87 data-quality tests and cross-source reconciliation. Everything reproducible from the repo.",
          },
        ],
        repoCta: "see the full pipeline on GitHub →",
        backCta: "← back to home",
      },
    },
    track: {
      title: "Track record",
      fullCv: "See full CV",
      rows: [
        {
          period: "2026 — present",
          title: "Business Consultant, FP&A · Neoris EPAM",
          desc: "Financial management systems for North America: close, forecast and SG&A variance across 12 countries. Fully remote.",
          tag: "FP&A",
        },
        {
          period: "2024 — 2026",
          title: "SLB · intern to specialist in 26 months",
          desc: "LATAM treasury and billing: FX analysis in Python, automation that freed more than 10 hours a month, revenue recognition under SOX.",
          tag: "Finance + data",
        },
        {
          period: "2023 — 2024",
          title: "Economic research · LEE Javeriana",
          desc: "Applied research and volunteer social analytics with international remote teams.",
          tag: "Data",
        },
      ],
    },
    toolkit: {
      title: "Tools, honestly rated",
      note: "No inflation. A 6 means I use it well with the docs open; a 9 means I teach it.",
      scaleLabel: "level",
      rows: [
        { name: "Financial modeling & Excel", level: 9 },
        { name: "Power BI", level: 8 },
        { name: "SQL", level: 7 },
        { name: "Python", level: 7 },
        { name: "dbt & warehousing", level: 6 },
        { name: "Machine learning", level: 6 },
      ],
    },
    disclosures: {
      title: "Disclosures",
      items: [
        {
          term: "Built in public",
          text: "This site and the projects behind it are documented as they are made, failures included. The engineering log records 23 defects found and fixed.",
        },
        {
          term: "Past results",
          text: "The trading research shown here is a methodology demonstration, not investment advice.",
        },
        {
          term: "AI assistance",
          text: "Roughly 80% of the code was written with AI as a copilot. The architecture decisions, the domain judgment and the honesty rules are mine.",
        },
        {
          term: "Languages",
          text: "Native Spanish · English B2 · Portuguese A2.",
        },
      ],
    },
    contact: {
      title: "Hiring someone who reads the business and builds the data?",
      body: "Open to remote Finance Data Analyst, Analytics Engineer and FP&A automation roles. I answer in English and Spanish.",
      email: "Send an email",
      linkedin: "LinkedIn",
      github: "GitHub",
      kaggle: "Kaggle",
    },
    footer: {
      left: "Davirson Novoa · built in public",
      right: "Data refreshed daily by an automated pipeline",
    },
    cv: {
      title: "Davirson Novoa Ramírez",
      subtitle: "Finance Data Analyst · FP&A + data engineering",
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
      profileLabel: "Profile",
      profileText:
        "Economist and data analyst. Three years applying Python, SQL, and Power BI inside real finance roles — treasury, billing, and FP&A — for operations across 15+ countries in the Americas. My edge isn't only technical: I understand the business the data describes. Master's in Economics in progress (Pontificia Universidad Javeriana). Seeking a remote Finance Data Analyst or Analytics Engineer role, where financial judgment and data engineering count as one capability.",
      skillsLabel: "Skills",
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
      expLabel: "Experience",
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
      awardsLabel: "Recognition",
      awards: [
        { title: "Winner — BodyTech Trends Hackathon", year: "2024", desc: "Data analytics solution for the health & fitness sector." },
        { title: "Ecopetrol Scholar — Mario Galán Gómez Program", year: "2018", desc: "Merit scholarship for academic excellence and leadership potential." },
      ],
      eduLabel: "Education & certifications",
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
        label: "Remote-ready",
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
