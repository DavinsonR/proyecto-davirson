// ============================================================
// CONTENIDO DEL SITIO — fuente única de verdad (ES / EN)
// Para editar textos, edita SOLO este archivo.
// ============================================================

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export type Status = "live" | "building" | "research" | "idea";

// Un reconocimiento puede tener evidencia pública; la mayoría no la tiene.
export type Award = { title: string; year: string; desc: string; href?: string; hrefLabel?: string };

const profile = {
  name: "Davirson Novoa Ramírez",
  email: "davinsonnovoaramirez@gmail.com",
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
      backHome: "Volver al inicio",
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
      pipelineLive: "Pipeline en vivo · datos hasta",
      pipelineStalled: "Pipeline detenido · datos hasta",
      pipelineLiveFallback: "Pipeline en vivo · se actualiza a diario",
      metrics: [
        { value: "15+", label: "países en alcance", note: "en tres roles de finanzas" },
        { value: "26", label: "meses de practicante a especialista", note: "SLB" },
        { value: "48", label: "activos en producción", note: "pipeline diario" },
        { value: "89", label: "pruebas de datos automáticas", note: "en cada corrida" },
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
        built: "Una plataforma de datos completa sobre infraestructura gratuita: ingesta diaria desde cuatro fuentes de mercado, un warehouse PostgreSQL en capas medallion con dbt, 89 pruebas de calidad automáticas, CI/CD y un modelo semántico de Power BI encima. Se actualiza sola cada mañana sin que yo intervenga.",
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
        "1.392 variantes de estrategia evaluadas sobre 48 activos con comisiones, slippage y validación fuera de muestra. La gran mayoría de las ganadoras eran ilusiones del backtest.",
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
        desc: "De todas las variantes que le ganaron a comprar-y-mantener en el periodo de entrenamiento, solo una de cada ocho siguió ganando en el periodo de validación que nunca influyó en su selección. El resto era ruido con buena suerte.",
        stageAll: "variantes evaluadas (5 estrategias + todas sus combinaciones AND)",
        stageIs: "le ganaron a buy & hold dentro de muestra",
        stageBoth: "siguieron ganándole fuera de muestra",
      },
      survivalChart: {
        title: "Supervivencia por nº de señales combinadas",
        desc: "Combinar más señales no aumenta la probabilidad de que un hallazgo sea real: la supervivencia se queda en el mismo rango con una señal que con cuatro, y la señal sola es la que mejor aguanta. La complejidad no compra robustez.",
      },
      exposureChart: {
        title: "Tiempo en el mercado por nº de señales",
        desc: "Cada filtro adicional no mejora las entradas — te saca del mercado. Exigiendo las 5 señales a la vez la exposición cae a prácticamente cero, y ninguna de esas variantes le ganó a comprar y mantener: ni siquiera en el periodo de entrenamiento.",
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
        title: "Las {n} combinaciones de este activo",
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
            body: "Más de 58.000 velas de Tiingo, Tiingo FX, Coinbase y Kraken en un warehouse PostgreSQL con arquitectura medallion, 89 tests de calidad de datos en dbt, 171 pruebas unitarias en Python y reconciliación entre fuentes. Todo reproducible desde el repo.",
          },
        ],
        repoCta: "ver el pipeline completo en GitHub →",
        backCta: "← volver al inicio",
      },
    },
    quality: {
      label: "Las 89 pruebas, una por una",
      title: "Qué se revisa antes de publicar una sola cifra",
      desc: "Esta es la lista completa, contada contra el manifiesto compilado de dbt. Si una falla, el pipeline se detiene y la página conserva los datos del día anterior en vez de publicar algo roto.",
      rows: [
        { n: 47, name: "not_null", what: "Ninguna columna que entra en un cálculo puede llegar vacía. Fue la prueba que destapó el fallo de Kraken, cuando el 100% de una fuente llegaba en NULL." },
        { n: 21, name: "accepted_values", what: "Un campo de categoría solo admite los valores del catálogo. Una clase de activo mal escrita deja de ser un dato nuevo y pasa a ser un error." },
        { n: 7, name: "unique_combination", what: "No puede existir la misma vela dos veces para el mismo activo y la misma fecha. Es lo que vuelve inofensivo reingerir." },
        { n: 6, name: "SQL propio", what: "Reglas que ninguna prueba genérica cubre: que el exceso de retorno cuadre con sus componentes, o que una combinación que nunca operó no pueda contar como ganadora." },
        { n: 4, name: "relationships", what: "Todo símbolo que aparece en un resultado tiene que existir en el catálogo de activos. Un activo huérfano falla en vez de desaparecer." },
        { n: 3, name: "unique", what: "Las llaves primarias son únicas de verdad, no por convención." },
        { n: 1, name: "ohlc_consistency", what: "El máximo del día no puede quedar por debajo del mínimo, ni la apertura fuera del rango. Detecta una fuente corrupta antes que cualquier métrica." },
      ],
      note: "Encima de estas corren 139 pruebas unitarias en Python sobre el motor de backtesting, las estrategias y el cliente de cada API.",
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
          desc: "Tesorería y facturación LATAM: análisis cambiario en Python, automatización que liberó ~10 horas al mes por analista — unas 60 en el equipo —, revenue recognition bajo SOX.",
          tag: "Finanzas + datos",
        },
        {
          period: "2023",
          title: "Investigación económica · LEE Javeriana",
          desc: "Investigación aplicada y analítica social voluntaria con equipos remotos internacionales.",
          tag: "Datos",
        },
      ],
    },
    toolkit: {
      title: "Herramientas, con la prueba al lado",
      note: "Cada herramienta con el trabajo que la respalda. Todo lo que aparece aquí está corriendo hoy, no en un certificado.",
      rows: [
        { name: "Excel y modelado financiero", proof: "Cierre y forecast de SG&A para 12 países en Neoris EPAM" },
        { name: "Power BI", proof: "Modelo semántico de 7 tablas en TMDL, cargado contra Supabase" },
        { name: "Tableau", proof: "Dashboard ganador del BodyTech Trends Hackathon, público" },
        { name: "SQL · PostgreSQL", proof: "Warehouse medallion de tres capas, 60.000 velas en producción" },
        { name: "Python", proof: "Ingesta incremental, motor de backtesting, descomposición cambiaria" },
        { name: "dbt", proof: "89 pruebas de calidad que corren antes de publicar un dato" },
        { name: "Git · GitHub Actions", proof: "Cron diario en operación, con circuit breaker de rate limit" },
        { name: "Machine learning", proof: "Especialización de Stanford en Coursera, 2024" },
      ],
    },
    disclosures: {
      title: "Divulgaciones",
      items: [
        {
          term: "Construido en público",
          text: "Este sitio y los proyectos detrás se documentan mientras se hacen, incluidos los errores. La bitácora de ingeniería registra 28 fallos encontrados y corregidos, numerados uno a uno.",
        },
        {
          term: "Rendimientos pasados",
          text: "La investigación de trading que aparece aquí es una demostración de metodología, no una recomendación de inversión.",
        },
        {
          term: "Cifras verificables",
          text: "Cada número de esta página sale del pipeline o del repositorio público, y enlaza al artefacto que lo prueba.",
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
      // El "title mapping": los tres nombres con que las vacantes llaman al
      // mismo rol cruzado. Es el encabezado, no un subtítulo.
      targetsLabel: "Roles objetivo",
      targets: ["Finance Data Analyst", "Financial BI Analyst", "Analytics Engineer"],
      subtitle: "Economista y consultor FP&A que construye la infraestructura de datos que usa.",
      metaLine: "Bogotá, Colombia · GMT-5 · 100% remoto · Inglés B2 · Portugués A2",
      download: "Descargar CV (PDF)",
      downloadHref: "/Davirson_Novoa_CV_ES.pdf",
      latex: "Fuente LaTeX",
      latexHref: "/Davirson_Novoa_CV_ES.tex",
      latexNote: "Compilable en Overleaf sin instalar nada.",
      contactBtn: "Contacto",
      facts: [
        { value: "15+", label: "países en las operaciones que reporto" },
        { value: "60 h/mes", label: "de reporting devueltas al equipo (10 por analista)" },
        { value: "26 meses", label: "de practicante a especialista" },
        { value: "48", label: "activos en un pipeline diario propio" },
      ],
      profileLabel: "Perfil",
      profileText:
        "Economista con tres años dentro de finanzas corporativas — tesorería, facturación y FP&A — construyendo yo mismo los datos que el negocio necesita: Python, SQL y Power BI aplicados a operaciones en más de 15 países de América. Hoy opero en producción un warehouse PostgreSQL con arquitectura medallion, transformaciones en dbt, 89 pruebas automáticas de calidad y un modelo semántico de Power BI, actualizado a diario sin intervención manual. Busco un rol remoto donde el criterio financiero y la ingeniería de datos se paguen como una sola capacidad, no como dos mitades.",
      pivot: {
        label: "El rol cruzado",
        body: "No estoy cambiando de carrera: estoy cobrando por lo que ya hago. En cada rol financiero terminé construyendo lo mismo — código y datos — porque el reporte que hacía falta no existía. Un análisis de descalces cambiarios en Python siendo practicante. Automatizaciones que devolvieron unas 10 horas al mes a cada analista de tesorería — cerca de 60 al mes en el equipo. Modelos de Power BI que convirtieron un cierre contable en una decisión. La ventaja no es saber Python: es saber qué pregunta vale la pena responder antes de escribirlo. Un Finance Data Analyst no es un analista de datos que aprendió finanzas, ni un financiero que aprendió a programar — es quien no necesita traductor entre los dos.",
      },
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
                "Desarrollé modelos y visualizaciones en Power BI para análisis de ingresos y tendencias.",
                "Realicé auditorías internas en proyectos tecnológicos integrados, asegurando trazabilidad y cumplimiento.",
              ],
            },
            {
              title: "Analista de Tesorería",
              period: "Oct 2024 — Dic 2024",
              bullets: [
                "Automaticé la conciliación bancaria en SAP, mejorando precisión y eficiencia.",
                "Eliminé cerca de 10 horas mensuales de reporting manual por analista — unas 60 horas al mes devueltas al equipo — optimizando y automatizando el proceso.",
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
              title: "Analista de datos sociales",
              period: "Ene 2023 — Jul 2023",
              bullets: [
                "Entregué herramientas analíticas e insights para ONG en entornos multiculturales.",
                "Colaboré con equipos internacionales en iniciativas de impacto social basadas en datos.",
              ],
            },
          ],
        },
      ],
      projectsLabel: "Proyectos en producción",
      projectsNote: "Código abierto y verificable. Nada de esto es un ejercicio de curso.",
      projects: [
        {
          name: "market-data-medallion",
          role: "Plataforma de datos de mercado — diseño, construcción y operación",
          period: "2026 — en operación",
          href: "https://github.com/DavinsonR/market-data-medallion",
          hrefLabel: "github.com/DavinsonR/market-data-medallion",
          stack: [
            "PostgreSQL", "Arquitectura medallion", "dbt", "Python", "Prefect",
            "GitHub Actions", "Supabase", "Power BI (TMDL / PBIP)", "Next.js",
          ],
          bullets: [
            "Ingesta incremental por watermark desde 4 fuentes (Tiingo, Coinbase, Kraken, FX) hacia un warehouse PostgreSQL de tres capas: 48 activos y más de 58.000 velas, idempotente y reanudable.",
            "89 pruebas automáticas de calidad en dbt más 171 pruebas unitarias en Python; el pipeline falla antes de publicar un dato malo, no después.",
            "Motor de backtesting sin look-ahead con validación out-of-sample 70/30 sobre 1.392 variantes de estrategia: solo el 13% de las ganadoras in-sample sobrevivió a la ventana ciega.",
            "Descomposición cambiaria de ADRs latinoamericanos, separando el retorno de la empresa del movimiento de la divisa mediante la identidad (1+r_USD) × (1+r_FX) = (1+r_local).",
            "Orquestación diaria en GitHub Actions con circuit breaker de rate limit, sobre infraestructura de costo cero.",
          ],
        },
        {
          name: "BodyTrends",
          role: "Analítica de demanda de búsqueda para una cadena de gimnasios — ganador del hackathon",
          period: "2024",
          href: "https://public.tableau.com/app/profile/davirson.novoa/viz/BodyTrendsADataAnalysisProject/TrendsAnalysis",
          hrefLabel: "Ver el dashboard en Tableau Public",
          stack: ["Tableau", "Python", "pandas", "Google Ads Keyword Planner", "Excel"],
          bullets: [
            "Limpié y estructuré 19.560 registros de keywords de Google Ads en Python, con búsquedas mensuales, competencia y variación interanual desagregadas por sede.",
            "Construí en Tableau el análisis de tendencias de demanda por sede, para responder qué busca la gente cerca de cada gimnasio y en qué momento del año.",
            "Ganó el BodyTech Trends Hackathon 2024. El dashboard sigue publicado y es consultable por cualquiera.",
          ],
        },
      ],
      skillsLabel: "Habilidades",
      skillsFinTitle: "Dominio financiero",
      skillsFinDesc: "El contexto que los datos necesitan para significar algo.",
      skillsFin: [
        "FP&A", "Cierre y forecast", "SG&A", "Revenue recognition (SOX)", "Tesorería",
        "Análisis cambiario", "Presupuestos", "Moneda constante", "SAP", "JD Edwards", "MicroStrategy",
      ],
      skillsDataTitle: "Datos e ingeniería",
      skillsDataDesc: "Herramientas que corren hoy en un repositorio público, no en un certificado.",
      skillsData: [
        "SQL analítico", "PostgreSQL", "dbt", "Arquitectura medallion", "Python (pandas)",
        "ETL incremental", "Prefect", "GitHub Actions", "Supabase", "Power BI · DAX",
        "Power Query", "Tableau", "Git", "Next.js · Vercel",
      ],
      skillsTechTitle: "Stack técnico",
      skillsTechDesc: "Cada herramienta con el trabajo que la respalda.",
      skillsTech: [
        { name: "Excel y modelado financiero", proof: "Cierre y forecast de SG&A para 12 países en Neoris EPAM" },
        { name: "Power BI", proof: "Modelo semántico de 7 tablas en TMDL, cargado contra Supabase" },
        { name: "Tableau", proof: "Dashboard ganador del BodyTech Trends Hackathon, público" },
        { name: "SQL · PostgreSQL", proof: "Warehouse medallion de tres capas, 60.000 velas en producción" },
        { name: "Python", proof: "Ingesta incremental, motor de backtesting, descomposición cambiaria" },
        { name: "dbt", proof: "89 pruebas de calidad que corren antes de publicar un dato" },
        { name: "Git · GitHub Actions", proof: "Cron diario en operación, con circuit breaker de rate limit" },
        { name: "Machine learning", proof: "Especialización de Stanford en Coursera, 2024" },
      ],
      awardsLabel: "Reconocimientos",
      // Ojo: si el workbook se renombra en Tableau Public, la URL cambia y este
      // enlace hay que actualizarlo aquí (fuente única).
      awards: ([
        {
          title: "Ganador — BodyTech Trends Hackathon",
          year: "2024",
          desc: "Analítica y diseño del tablero en Tableau sobre tendencias de consumo del sector salud y fitness. Sigue publicado.",
          href: "https://public.tableau.com/app/profile/davirson.novoa/viz/BodyTrendsADataAnalysisProject/TrendsAnalysis",
          hrefLabel: "ver el tablero en Tableau Public",
        },
        { title: "Becario Ecopetrol — Programa Mario Galán Gómez", year: "2018", desc: "Beca por mérito académico y potencial de liderazgo." },
      ] as Award[]),
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
      backHome: "Back to home",
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
      pipelineLive: "Live pipeline · data through",
      pipelineStalled: "Pipeline stalled · data through",
      pipelineLiveFallback: "Live pipeline · refreshes daily",
      metrics: [
        { value: "15+", label: "countries in scope", note: "across three finance roles" },
        { value: "26", label: "months intern to specialist", note: "SLB" },
        { value: "48", label: "assets in production", note: "daily pipeline" },
        { value: "89", label: "automated data tests", note: "every run" },
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
        built: "A complete data platform on free infrastructure: daily ingestion from four market sources, a PostgreSQL warehouse in medallion layers with dbt, 89 automated quality tests, CI/CD, and a Power BI semantic model on top. It refreshes itself every morning without me.",
        matterLabel: "Why it matters",
        matter: "This is the same architecture a finance team needs for reporting: reconciled sources, verifiable quality, and a dashboard nobody has to rebuild by hand.",
        findingLabel: "Published finding",
        finding: "Of more than 1,300 strategy variants evaluated, barely one in eight of the in-sample winners survived out-of-sample validation. I published every one that did not.",
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
        "1,392 strategy variants evaluated across 48 assets with fees, slippage and out-of-sample validation. The vast majority of the winners were backtest illusions.",
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
        desc: "Of all the variants that beat buy-and-hold during the training period, only one in eight kept winning in the validation window that never influenced their selection. The rest was noise with good luck.",
        stageAll: "variants evaluated (5 strategies + every AND-combination)",
        stageIs: "beat buy & hold in sample",
        stageBoth: "kept beating it out of sample",
      },
      survivalChart: {
        title: "Survival by number of combined signals",
        desc: "Combining more signals does not increase the odds that a finding is real: survival stays in the same range with one signal as with four, and the lone signal holds up best. Complexity does not buy robustness.",
      },
      exposureChart: {
        title: "Time in the market by signal count",
        desc: "Each extra filter does not improve the entries — it takes you out of the market. Demanding all 5 signals at once drops exposure to practically zero, and not one of those variants beat buy & hold: not even in the training period.",
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
        title: "This asset's {n} combinations",
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
            body: "More than 58,000 candles from Tiingo, Tiingo FX, Coinbase and Kraken in a PostgreSQL medallion warehouse, 89 dbt data-quality tests, 171 Python unit tests and cross-source reconciliation. Everything reproducible from the repo.",
          },
        ],
        repoCta: "see the full pipeline on GitHub →",
        backCta: "← back to home",
      },
    },
    quality: {
      label: "The 89 tests, one by one",
      title: "What gets checked before a single figure is published",
      desc: "This is the complete list, counted against dbt's compiled manifest. When one fails the pipeline stops, and the page keeps yesterday's data instead of publishing something broken.",
      rows: [
        { n: 47, name: "not_null", what: "No column that feeds a calculation may arrive empty. This is the test that caught the Kraken defect, when 100% of one source was landing as NULL." },
        { n: 21, name: "accepted_values", what: "A category field only accepts values from the catalogue. A misspelled asset class stops being new data and becomes an error." },
        { n: 7, name: "unique_combination", what: "The same candle cannot exist twice for one asset on one date. That is what makes re-ingestion harmless." },
        { n: 6, name: "custom SQL", what: "Rules no generic test covers: that excess return reconciles with its components, or that a combination which never traded cannot count as a winner." },
        { n: 4, name: "relationships", what: "Every symbol in a result must exist in the asset catalogue. An orphaned asset fails instead of vanishing." },
        { n: 3, name: "unique", what: "Primary keys are unique in fact, not by convention." },
        { n: 1, name: "ohlc_consistency", what: "A day's high cannot sit below its low, nor the open outside the range. It catches a corrupt feed before any metric does." },
      ],
      note: "On top of these, 139 Python unit tests cover the backtesting engine, the strategies and each API client.",
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
          desc: "LATAM treasury and billing: FX analysis in Python, automation that freed ~10 hours a month per analyst — about 60 across the team —, revenue recognition under SOX.",
          tag: "Finance + data",
        },
        {
          period: "2023",
          title: "Economic research · LEE Javeriana",
          desc: "Applied research and volunteer social analytics with international remote teams.",
          tag: "Data",
        },
      ],
    },
    toolkit: {
      title: "Tools, with the proof next to them",
      note: "Each tool with the work that backs it. Everything here is running today, not sitting on a certificate.",
      rows: [
        { name: "Excel and financial modelling", proof: "SG&A close and forecast across 12 countries at Neoris EPAM" },
        { name: "Power BI", proof: "Seven-table semantic model in TMDL, loaded against Supabase" },
        { name: "Tableau", proof: "Dashboard that won the BodyTech Trends Hackathon, public" },
        { name: "SQL · PostgreSQL", proof: "Three-layer medallion warehouse, 60,000 candles in production" },
        { name: "Python", proof: "Incremental ingestion, backtesting engine, FX decomposition" },
        { name: "dbt", proof: "89 quality tests that run before a single figure is published" },
        { name: "Git · GitHub Actions", proof: "Daily cron in operation, with a rate-limit circuit breaker" },
        { name: "Machine learning", proof: "Stanford Specialization on Coursera, 2024" },
      ],
    },
    disclosures: {
      title: "Disclosures",
      items: [
        {
          term: "Built in public",
          text: "This site and the projects behind it are documented as they are made, failures included. The engineering log records 28 defects found and fixed, numbered one by one.",
        },
        {
          term: "Past results",
          text: "The trading research shown here is a methodology demonstration, not investment advice.",
        },
        {
          term: "Verifiable figures",
          text: "Every number on this page comes from the pipeline or the public repository, and links to the artifact that proves it.",
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
      // The title mapping: the three names job posts give the same crossover
      // role. It is the heading, not a subtitle.
      targetsLabel: "Target roles",
      targets: ["Finance Data Analyst", "Financial BI Analyst", "Analytics Engineer"],
      subtitle: "Economist and FP&A consultant who builds the data infrastructure he works from.",
      metaLine: "Bogotá, Colombia · GMT-5 · Fully remote · English B2 · Portuguese A2",
      download: "Download resume (PDF)",
      downloadHref: "/Davirson_Novoa_Resume_EN.pdf",
      latex: "LaTeX source",
      latexHref: "/Davirson_Novoa_Resume_EN.tex",
      latexNote: "Compiles in Overleaf with nothing to install.",
      contactBtn: "Contact",
      facts: [
        { value: "15+", label: "countries in the operations I report on" },
        { value: "60 hrs/mo", label: "of reporting given back to the team (10 per analyst)" },
        { value: "26 months", label: "from intern to specialist" },
        { value: "48", label: "assets in a daily pipeline I run" },
      ],
      profileLabel: "Profile",
      profileText:
        "Economist with three years inside corporate finance — treasury, billing and FP&A — building the data the business runs on: Python, SQL and Power BI applied to operations across 15+ countries in the Americas. I now run a production PostgreSQL warehouse in medallion architecture, with dbt transformations, 89 automated quality tests and a Power BI semantic model, refreshed daily with no manual step. I am looking for a remote role where financial judgment and data engineering are paid as one capability, not two halves.",
      pivot: {
        label: "The crossover role",
        body: "This is not a career change; it is pricing what I already do. In every finance role I ended up building the same thing — code and data — because the report the business needed did not exist. An FX mismatch analysis in Python as an intern. Automation that gave every treasury analyst about 10 hours a month back — close to 60 a month across the team. Power BI models that turned a monthly close into a decision. The edge is not knowing Python; it is knowing which question is worth answering before writing any. A Finance Data Analyst is neither a data analyst who picked up finance nor a finance person who picked up code — it is the one who needs no translator between them.",
      },
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
                "Built FP&A reporting with advanced Excel, Power Query, Power BI, MicroStrategy, JD Edwards and SAP.",
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
                "Built Power BI models and visualizations for revenue and trend analysis.",
                "Performed internal audits on integrated technology projects, ensuring traceability and compliance.",
              ],
            },
            {
              title: "Treasury Analyst",
              period: "Oct 2024 — Dec 2024",
              bullets: [
                "Automated bank reconciliation in SAP, improving accuracy and efficiency.",
                "Cut roughly 10 hours of manual reporting per analyst per month — about 60 hours a month back to the team — by optimizing and automating the process.",
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
                "Analyzed Colombian education-system data with a focus on higher education.",
                "Built Power BI dashboards to visualize research findings.",
                "Contributed to impact-evaluation studies through statistical analysis.",
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
              title: "Social Data Analyst",
              period: "Jan 2023 — Jul 2023",
              bullets: [
                "Delivered analytical tools and insights for NGOs in multicultural environments.",
                "Collaborated with international teams on data-driven social-impact initiatives.",
              ],
            },
          ],
        },
      ],
      projectsLabel: "Production projects",
      projectsNote: "Open source and checkable. None of this is a course exercise.",
      projects: [
        {
          name: "market-data-medallion",
          role: "Market data platform — designed, built and operated",
          period: "2026 — in operation",
          href: "https://github.com/DavinsonR/market-data-medallion",
          hrefLabel: "github.com/DavinsonR/market-data-medallion",
          stack: [
            "PostgreSQL", "Medallion architecture", "dbt", "Python", "Prefect",
            "GitHub Actions", "Supabase", "Power BI (TMDL / PBIP)", "Next.js",
          ],
          bullets: [
            "Watermark-based incremental ingestion from 4 sources (Tiingo, Coinbase, Kraken, FX) into a three-layer PostgreSQL warehouse: 48 assets and more than 58,000 candles, idempotent and resumable.",
            "89 automated dbt data-quality tests plus 171 Python unit tests; the pipeline fails before publishing bad data, not after.",
            "No-look-ahead backtesting engine with 70/30 out-of-sample validation over 1,392 strategy variants: only 13% of the in-sample winners survived the blind window.",
            "FX decomposition for Latin American ADRs, separating company performance from the currency move through the identity (1+r_USD) × (1+r_FX) = (1+r_local).",
            "Daily orchestration on GitHub Actions with a rate-limit circuit breaker, running on zero-cost infrastructure.",
          ],
        },
        {
          name: "BodyTrends",
          role: "Search-demand analytics for a gym chain — hackathon winner",
          period: "2024",
          href: "https://public.tableau.com/app/profile/davirson.novoa/viz/BodyTrendsADataAnalysisProject/TrendsAnalysis",
          hrefLabel: "See the dashboard on Tableau Public",
          stack: ["Tableau", "Python", "pandas", "Google Ads Keyword Planner", "Excel"],
          bullets: [
            "Cleaned and shaped 19,560 Google Ads keyword records in Python, carrying monthly searches, competition and year-on-year change broken out by branch.",
            "Built the demand-trend analysis in Tableau, branch by branch, to answer what people search for near each gym and when in the year they search for it.",
            "Won the BodyTech Trends Hackathon 2024. The dashboard is still published and anyone can open it.",
          ],
        },
      ],
      skillsLabel: "Skills",
      skillsFinTitle: "Finance domain",
      skillsFinDesc: "The context data needs in order to mean something.",
      skillsFin: [
        "FP&A", "Close & forecast", "SG&A", "Revenue recognition (SOX)", "Treasury",
        "FX analysis", "Budgeting", "Constant currency", "SAP", "JD Edwards", "MicroStrategy",
      ],
      skillsDataTitle: "Data & engineering",
      skillsDataDesc: "Tools running today in a public repository, not on a certificate.",
      skillsData: [
        "Analytical SQL", "PostgreSQL", "dbt", "Medallion architecture", "Python (pandas)",
        "Incremental ETL", "Prefect", "GitHub Actions", "Supabase", "Power BI · DAX",
        "Power Query", "Git", "Next.js · Vercel",
      ],
      skillsTechTitle: "Technical stack",
      skillsTechDesc: "Each tool with the work that backs it.",
      skillsTech: [
        { name: "Excel and financial modelling", proof: "SG&A close and forecast across 12 countries at Neoris EPAM" },
        { name: "Power BI", proof: "Seven-table semantic model in TMDL, loaded against Supabase" },
        { name: "Tableau", proof: "Dashboard that won the BodyTech Trends Hackathon, public" },
        { name: "SQL · PostgreSQL", proof: "Three-layer medallion warehouse, 60,000 candles in production" },
        { name: "Python", proof: "Incremental ingestion, backtesting engine, FX decomposition" },
        { name: "dbt", proof: "89 quality tests that run before a single figure is published" },
        { name: "Git · GitHub Actions", proof: "Daily cron in operation, with a rate-limit circuit breaker" },
        { name: "Machine learning", proof: "Stanford Specialization on Coursera, 2024" },
      ],
      awardsLabel: "Recognition",
      awards: ([
        {
          title: "Winner — BodyTech Trends Hackathon",
          year: "2024",
          desc: "Analytics and dashboard design in Tableau on consumer trends in the health and fitness sector. Still published.",
          href: "https://public.tableau.com/app/profile/davirson.novoa/viz/BodyTrendsADataAnalysisProject/TrendsAnalysis",
          hrefLabel: "see the dashboard on Tableau Public",
        },
        { title: "Ecopetrol Scholar — Mario Galán Gómez Program", year: "2018", desc: "Scholarship for academic merit and leadership potential." },
      ] as Award[]),
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
          "GMT-5 (Bogotá): full overlap with US and Canadian hours.",
          "Experience working with teams in North America, Argentina and Brazil.",
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
