# BITÁCORA MAESTRA — PROYECTO DAVIRSON
### Hoja de ruta, mapa de arquitectura e historial completo de ejecución
### v1.0 · Última actualización: 14 agosto 2026

> Este documento es el mapa definitivo del proyecto. Su propósito: que cualquier sesión futura (o cualquier persona) pueda entender **qué se construyó, por qué, cómo, qué falló y qué sigue** — sin repetir procesos fallidos ni redescubrir decisiones ya tomadas. Cuando el proyecto crezca, este archivo evita que nos estanquemos.

---

## 1. SUMMARY EJECUTIVO

**Qué es:** Sitio web personal bilingüe (ES/EN) que documenta la transición de Davirson Novoa de FP&A/finanzas hacia data science. No es un portfolio genérico: su tesis es "entiendo el negocio **y** los datos", y su diferenciador de diseño es mostrar el proceso en construcción ("build in public") mediante módulos con estado.

**Estado actual (14 ago 2026):**
- ✅ Fases 0–3 completadas (Discovery, Identidad, Arquitectura, MVP Build).
- ✅ Código fuente completo, compila sin errores, 4 rutas estáticas (`/es`, `/en`, `/es/cv`, `/en/cv`).
- ✅ Dos PDFs de CV (ES/EN) generados desde la misma fuente de datos.
- ✅ Desplegado en Vercel (build exitoso).
- ⚠️ **Bloqueo abierto:** el deploy quedó en el scope personal de Vercel con "Vercel Authentication" activada → devuelve HTTP 403 público. Requiere desactivación manual (ver §7, FALLO-05). El conector no tiene permisos para desactivarla automáticamente.

**Stack:** Next.js 16 + Tailwind CSS v4 + TypeScript, desplegado en Vercel. Sin backend, sin base de datos (todo estático/SSG). Costo: $0.

**Decisión narrativa central:** el CV NO se copió tal cual. Se reconstruyó para contar que Davirson ya hacía data science *dentro* de las finanzas (Python desde practicante, automatizaciones, hackathon ganado, Stanford ML), y que el pivote es "oficializar lo que ya hacía", no un salto al vacío.

---

## 2. DIAGRAMA DE FLUJO DEL PROCESO COMPLETO

```
┌─────────────────────────────────────────────────────────────────────┐
│                      PROYECTO DAVIRSON — FLUJO                        │
└─────────────────────────────────────────────────────────────────────┘

FASE 0 — DISCOVERY  ✅
   │  Prompt maestro + entrevista → Documento Fundacional v1.0
   │  Define: visión, estrategia, 4 conceptos de marca, IA, roadmap
   ▼
FASE 1 — IDENTIDAD  ✅
   │  ¿Preguntas del usuario?
   │   1. Ver ≥5 mockups  → SÍ
   │   2. Confirmar stack → Next.js+Tailwind+Vercel (React incluido; Python = motor aparte)
   │   3. Idea proyecto   → Simulador trading algorítmico (complejidad escalable V1/V2/V3)
   │
   ├─► Entregable: 5 direcciones visuales (HTML con tabs)
   │      01 Terminal Sereno · 02 Terminal+Alma★ · 03 Cuaderno Bitácora
   │      04 Sistema en Construcción · 05 Minimal Future
   │
   ├─► Usuario elige: FUSIÓN 02 (base cálida) + 04 (módulos de estado)
   │
   ├─► Entregable: mockup definitivo (fusión)
   │      Fix aplicado: separar amarillo BUILDING (#E3C368) del ámbar humano (#D9A05B)
   │
   └─► Usuario rechaza nav estilo terminal → Fix: nav limpio (Inter, sin v0.1/status)
   ▼
FASE 2 — ARQUITECTURA  ✅
   │  Entregable: wireframes (mapa del sitio + /cv + /proyectos/trading-sim + /historia)
   │  Decisiones: contacto = sección, no página · PDF desde fuente única · Python offline→JSON
   ▼
FASE 3 — MVP BUILD  ✅  (+ adelanto de Fase 6 deploy)
   │
   ├─ 3.1 Scaffold Next.js 16 + Tailwind v4 + TS
   ├─ 3.2 Tokens de diseño → globals.css (@theme)
   ├─ 3.3 lib/dictionaries.ts  ← FUENTE ÚNICA DE VERDAD (ES/EN)
   ├─ 3.4 Componentes: StatusPill, ProgressBar, Navbar, Footer
   ├─ 3.5 Layout [lang] + i18n (rutas /es /en, sin librería)
   ├─ 3.6 Home (hero, sistema, proyecto, historia, cv-strip, contacto)
   ├─ 3.7 CV interactivo completo
   │        └─ FALLO-01: fuentes next/font/google sin red en build → fix <link>
   │        └─ FALLO-02: `as const` ensanchaba tipos → fix quitar as const
   ├─ 3.8 Ajustes usuario: nombre, niveles skills, narrativa reconstruida
   ├─ 3.9 Generador PDF (scripts/generate-cv-pdfs.ts, lee dictionaries)
   │        └─ FALLO-03: characterSpacing encadenado no es función → fix opción .text()
   ├─ 3.10 Build final ✅ → 4 rutas estáticas
   └─ 3.11 DEPLOY a Vercel
            └─ FALLO-04: 1er deploy sin 3 archivos (payload incompleto)
            └─ FALLO-05: Vercel Authentication activa → 403 público  ⚠️ ABIERTO
            └─ FALLO-06: redeploy a team → 403 permisos del conector
   ▼
┌─── PRÓXIMO ───────────────────────────────────────────────────────┐
│ INMEDIATO: usuario desactiva Vercel Authentication (manual, §7)     │
│ FASE 4: motor Python trading_sim (backtest → JSON → visualización) │
│ FASE 5: página /historia (narrativa completa)                      │
│ FASE 6: analítica (Umami/GoatCounter) + evaluar dominio propio     │
│ FASE 7+: Lab · Blog · Ventures (reservados, no construidos)        │
└────────────────────────────────────────────────────────────────────┘
```

---

## 3. ARQUITECTURA TÉCNICA

### 3.1 Estructura de carpetas
```
davirson/
├── app/
│   ├── globals.css              ← tokens @theme (colores + fuentes)
│   └── [lang]/                  ← segmento dinámico i18n (es|en)
│       ├── layout.tsx           ← fuentes, metadata, Navbar+Footer, generateStaticParams
│       ├── page.tsx             ← Home (6 secciones)
│       └── cv/page.tsx          ← CV interactivo completo
├── components/
│   ├── Navbar.tsx               ← "use client" (usePathname para toggle idioma)
│   ├── Footer.tsx
│   ├── StatusPill.tsx           ← pills LIVE/BUILDING/RESEARCH/IDEA
│   └── ProgressBar.tsx          ← barras de progreso por estado
├── lib/
│   └── dictionaries.ts          ← ⭐ FUENTE ÚNICA DE VERDAD (todo el texto ES/EN)
├── scripts/
│   └── generate-cv-pdfs.ts      ← genera public/*.pdf desde dictionaries
├── public/
│   ├── Davirson_Novoa_CV_ES.pdf
│   └── Davirson_Novoa_Resume_EN.pdf
├── next.config.ts               ← redirects / → /es, /cv → /es/cv
├── tsconfig.json                ← excluye scripts/ del build de producción
└── package.json
```

### 3.2 Principios de arquitectura (no violar)
1. **Fuente única de verdad:** todo el texto vive en `lib/dictionaries.ts`. Nunca escribir texto dentro de componentes. Un cambio de copy = un solo archivo, y se refleja en sitio + PDF a la vez.
2. **i18n sin dependencias:** rutas `/[lang]/` + diccionarios TS. Cero librerías, contenido versionado en Git.
3. **Sin backend hasta que se necesite:** todo SSG. Supabase/API routes solo cuando Lab o Community lo exijan (Fase 7+). El trading_sim corre en Python **offline**, exporta JSON, el sitio solo visualiza → $0, sin servidor.
4. **Modularidad:** agregar una sección = nueva ruta + nueva entrada en diccionario. No se toca lo existente (regla "no romper").
5. **Los estados son el mensaje:** las barras de progreso deben reflejar la realidad. TRADING_SIM está en 20% porque aún no existe. Actualizar honestamente = el corazón del build in public.

### 3.3 Design tokens (definidos en globals.css)
| Token | Valor | Uso |
|---|---|---|
| `--color-ink` | #0D0D10 | fondo base |
| `--color-fg` | #F0F2F5 | texto principal |
| `--color-body` | #99A2AD | texto cuerpo |
| `--color-cold` | #8AB8D0 | acento técnico (frío) |
| `--color-warm` | #D9A05B | acento humano — **SOLO** historia/propósito |
| `--color-live` | #5FBF8A | estado LIVE (verde) |
| `--color-building` | #E3C368 | estado BUILDING (amarillo frío — distinto del ámbar) |
| `--color-research` | #7FA8D9 | estado RESEARCH (azul) |
| `--color-idea` | #8A93A0 | estado IDEA (gris) |
| Fuentes | Space Grotesk (display) · IBM Plex Mono (técnico) · Inter (cuerpo) |

**Regla de color crítica:** el ámbar `#D9A05B` es exclusivo de contenido humano (historia, propósito). Los colores de estado son "lenguaje de máquina". Nunca mezclar — es lo que hace que el contraste frío/cálido se sienta intencional.

---

## 4. DECISIONES CLAVE (con justificación corta)

| # | Decisión | Por qué |
|---|---|---|
| D-01 | Next.js sobre Astro | Roadmap incluye dashboard/IA/API → evita migración futura |
| D-02 | React viene con Next; Python es motor aparte, no del sitio | Aclaración al usuario: no compiten, se complementan |
| D-03 | Dirección visual = fusión 02+04 | 02 resuelve tensión frío/cálido; 04 es el más diferenciador (build in public) |
| D-04 | Nav en Inter, sin estilo terminal | Feedback del usuario: la mono en el nav desconectaba la página. Mono se queda en contenido técnico |
| D-05 | i18n sin librería | Cero deps, contenido en Git, control total |
| D-06 | Contacto = sección, no página | Una página con 3 links sería parada muerta |
| D-07 | PDF desde fuente única | Nunca desincronizar dos CVs; editar dictionaries actualiza ambos |
| D-08 | Trading sim: Python offline → JSON | $0, sin servidor, sin mantenimiento, velocidad máxima |
| D-09 | Niveles de skills honestos (no todo "avanzado") | La honestidad ES el diferenciador ante reclutadores |
| D-10 | Narrativa reconstruida, no copiada | El CV plano no contaba la transición; la versión nueva demuestra que ya hacía data science en finanzas |
| D-11 | Bilingüe + remoto en primer plano | Objetivo explícito: consultorías/trabajos internacionales remotos |
| D-12 | Nombre visible "Davirson" (cédula); links reales "Davinson" (redes) | Usuario confirmó ambos válidos; se respeta cada uno donde corresponde |

---

## 5. NARRATIVA DEL CV — cómo se reconstruyó

**Problema:** el CV original era una lista de funciones financieras. No contaba una transición ni mostraba la ventaja competitiva.

**Reconstrucción aplicada:**
- **Hero:** "Entiendo el negocio por sus números. Ahora hago que los datos decidan."
- **Hilo conductor:** en cada rol financiero ya construía código/datos (Python de practicante, automatización 10+h/mes, dashboards en 15+ países).
- **Prueba de pivote:** hackathon ganado (2024) + Stanford ML Specialization (2024).
- **Frase tesis:** "no estaba haciendo finanzas con algo de datos — estaba haciendo ciencia de datos dentro de las finanzas."
- **Remoto como argumento:** GMT-5 con solape US/Canadá, equipos en 15+ países, 3 roles remotos/híbridos.

**Datos verificados del CV original (no inventados):** Neoris EPAM (FP&A, 2026), SLB (practicante→especialista, 26 meses, 2024–2026), LEE Javeriana (2023), Solidariamente (2023), Maestría Economía Javeriana (en curso), Stanford ML + Google Cybersecurity + Platzi, hackathon BodyTech, beca Ecopetrol.

---

## 6. HISTORIAL DE EJECUCIONES (cronológico)

| Paso | Acción | Resultado |
|---|---|---|
| E-01 | Leer CV .docx subido | ✅ contenido extraído |
| E-02 | `create-next-app` (Next 16, TS, Tailwind v4) | ✅ scaffold |
| E-03 | `npm install` | ✅ deps OK |
| E-04 | Limpiar scaffold (borrar page/layout default) | ✅ |
| E-05 | globals.css con tokens @theme | ✅ |
| E-06 | lib/dictionaries.ts (ES/EN completo) | ✅ |
| E-07 | StatusPill + ProgressBar | ✅ |
| E-08 | Navbar + Footer | ✅ |
| E-09 | layout.tsx con next/font | ❌ FALLO-01 |
| E-10 | Home + CV pages | ✅ |
| E-11 | build #1 | ❌ FALLO-01 confirmado (fuentes sin red) |
| E-12 | Fix: fuentes vía `<link>` | ✅ |
| E-13 | build #2 | ❌ FALLO-02 (tipos `as const`) |
| E-14 | Fix: quitar `as const` | ✅ |
| E-15 | build #3 | ✅ 4 rutas estáticas |
| E-16 | Smoke test local (curl ambos idiomas) | ✅ |
| E-17 | Ajustes usuario (niveles skills, etc.) | ✅ |
| E-18 | Generador PDF #1 | ❌ FALLO-03 (characterSpacing) |
| E-19 | Fix + PDF #2 | ✅ 2 PDFs, 2 págs c/u |
| E-20 | build #4 (con PDFs) | ✅ |
| E-21 | Deploy #1 a Vercel (personal scope) | ⚠️ FALLO-04 (3 archivos faltantes) + FALLO-05 (403 auth) |
| E-22 | Deploy #2 (payload completo) | ✅ build OK, ⚠️ FALLO-05 persiste |
| E-23 | Intentar desactivar auth vía API | ❌ 404/403 permisos conector |
| E-24 | Redeploy a team con teamId | ❌ FALLO-06 (403 crear deployment en team) |
| E-25 | Escribir esta bitácora | ✅ |

---

## 7. HISTORIAL DE FALLOS (para no repetirlos)

**FALLO-01 — Fuentes de Google en build**
- Síntoma: `next build` falla al descargar Space Grotesk/Inter/Plex Mono con `next/font/google`.
- Causa: el entorno de build (sandbox) no tiene acceso de red a Google Fonts.
- Fix: cargar fuentes vía `<link>` en el `<head>` del layout + declararlas en `@theme` de globals.css.
- Lección: en entornos sin red, `next/font/google` falla. `<link>` funciona igual en producción. (Optimización futura opcional: volver a next/font en Vercel para mejor CLS.)

**FALLO-02 — Tipos ensanchados por `as const`**
- Síntoma: TypeScript error al asignar `dictionaries` a tipo `Dictionary`.
- Causa: `} as const` sobre todo el objeto congelaba literales y chocaba con el tipo derivado.
- Fix: quitar el `as const` global; mantener solo los `as Status` puntuales.
- Lección: no aplicar `as const` a objetos gigantes de los que además derivas un tipo.

**FALLO-03 — characterSpacing en PDFKit**
- Síntoma: `doc.font(...).fontSize(...).fillColor(...).characterSpacing(...)` → "is not a function".
- Causa: en esta versión de PDFKit, characterSpacing no es método encadenable.
- Fix: pasarlo como opción del método `.text(txt, { characterSpacing: 1.5 })`.
- Lección: verificar la API real de la librería antes de encadenar; no asumir fluent API.

**FALLO-04 — Payload de deploy incompleto**
- Síntoma: primer deploy no incluyó 3 archivos (page.tsx, cv/page.tsx, dictionaries.ts, PDFs).
- Causa: se armó el árbol de archivos a mano y faltaron entradas.
- Fix: segundo deploy con los 15 archivos completos.
- Lección: al deployar por API con árbol manual, verificar el conteo de archivos contra el disco antes de enviar.

**FALLO-05 — Vercel Authentication (403 público)  ⚠️ ABIERTO**
- Síntoma: la URL de producción devuelve HTTP 403 a visitantes.
- Causa: Vercel activa "Vercel Authentication" (SSO/protección) por defecto en proyectos creados vía API en scope personal. NO es un fallo de build — el sitio está construido.
- Fix requerido (MANUAL, ~20 segundos):
  1. Entrar a vercel.com → proyecto `proyecto-davirson`.
  2. Settings → Deployment Protection.
  3. Desactivar "Vercel Authentication" (ponerlo en Disabled/Standard Protection off).
  4. Guardar. La URL queda pública al instante.
- Por qué no se resolvió automáticamente: el conector MCP no tiene permisos para leer/modificar la configuración del proyecto en el scope personal (endpoints devuelven 404/403).

**FALLO-06 — 403 al crear deployment en el team**
- Síntoma: redeploy con `teamId` del team → 403 "You don't have permission to create a Production Deployment for this project."
- Causa: el token del conector tiene rol limitado en el team `Davinson_Project`.
- Fix: no reintentar por esa vía. El deploy del scope personal (E-22) ya es válido; solo falta resolver FALLO-05.
- Lección: el deploy por conector queda en el scope por defecto del token. Para control total del proyecto (protección, dominio, envs), gestionar desde el dashboard o conectar el repo GitHub a Vercel manualmente.

---

## 8. RECOMENDACIÓN DE INFRAESTRUCTURA A FUTURO

El deploy directo por API (file-tree) sirvió para publicar rápido, pero deja el proyecto sin repositorio Git y en un scope con permisos limitados para el conector. **Recomendación fuerte para la próxima sesión:**

1. Crear repo en GitHub (`git init` → commit → push). El código ya está listo para ello.
2. En Vercel: "Add New Project" → importar ese repo → Deploy. Esto:
   - Da control total (protección, dominio, variables de entorno).
   - Habilita deploy automático en cada push (build in public real).
   - Evita los 403 de permisos del conector.
3. A partir de ahí, cada avance (subir TRADING_SIM a 40%, escribir /historia) es un commit → deploy automático.

Esto no descarta lo hecho: el mismo código se sube tal cual. Solo cambia el canal de deploy a uno que tú administras.

---

## 9. PENDIENTES INMEDIATOS

- [ ] **(Usuario)** Desactivar Vercel Authentication → sitio público (FALLO-05, §7).
- [ ] **(Recomendado)** Migrar deploy a repo GitHub conectado a Vercel (§8).
- [ ] Confirmar niveles de skills finales (ya ajustados: Python 70, SQL 65, ML 60, PowerBI 55, R 50).
- [ ] Revisar los 2 PDFs generados y validar que la maquetación te convence.

## 10. ROADMAP RESTANTE

| Fase | Objetivo | Estado |
|---|---|---|
| 4 | Motor Python trading_sim → JSON → visualización interactiva en /proyectos/trading-sim | Pendiente |
| 5 | Página /historia (narrativa completa con lente de propósito) | Pendiente |
| 6 | Analítica privacy-friendly (Umami/GoatCounter) + evaluar dominio propio (~$10-15/año) | Pendiente |
| 7 | Lab (experimentos IA/datos) | Reservado |
| 8 | Blog (build in public escrito) | Reservado |
| 9 | Ventures | Reservado |
| 10 | Community + IA avanzada | Reservado (solo si hay necesidad real) |

---
*Fin de la bitácora v1.0. Actualizar este archivo tras cada sesión de trabajo significativa.*

---

## ANEXO — SESIÓN 2 (15 ago 2026): GitHub + deploy público  [RECONSTRUIDO]

> Nota de integridad: los commits originales de este anexo nunca llegaron a GitHub (el `git push` final quedó pendiente y la sandbox se reinició). Este anexo se reconstruyó fielmente en la sesión 3 a partir del historial de la conversación. Lección aplicada: la bitácora solo está a salvo cuando está PUSHEADA al repo, no en local ni en la sandbox.

### Resultado de la sesión
- ✅ Repo público creado y poblado: **https://github.com/DavinsonR/proyecto-davirson** (rama `main`, 45 objetos).
- ✅ Repo vinculado a Vercel → proyecto `proyecto-davirson-git` (id `prj_6A4tybxsDzHqEewvp8BPYRholyNa`, team `team_vsIksKP4BA1FeV3paGf1JR6s`).
- ✅ Primer deploy disparado por el usuario desde el dashboard (Create Preview Deployment, rama main).
- ✅ FALLO-05 resuelto: usuario apagó "Require Log In" (Vercel Authentication) a nivel de **proyecto y de team**.
- ✅ **Sitio PÚBLICO verificado:** https://proyecto-davirson-git.vercel.app — confirmado en incógnito, otro navegador y datos móviles (3 redes independientes).

### Ejecuciones (E-26 a E-35)
| Paso | Acción | Resultado |
|---|---|---|
| E-26 | git init + commit en sandbox; zip con .git entregado al usuario | ✅ |
| E-27 | Usuario crea repo público DavinsonR/proyecto-davirson | ✅ |
| E-28 | Usuario descomprime en /mnt/c/... y trabaja desde WSL/Zsh | ✅ |
| E-29 | git add -A + commit (los "modified" masivos eran cambios de permisos por /mnt/c) | ✅ |
| E-30 | Push por SSH | ❌ FALLO-07 |
| E-31 | Push por HTTPS con credenciales inválidas / token sin permisos | ❌ FALLO-08 |
| E-32 | Token nuevo con permiso correcto + limpiar credencial cacheada | ✅ |
| E-33 | git push -u origin main → 45 objetos | ✅ |
| E-34 | Vercel create_git_project (vincular repo) | ⚠️ FALLO-09 (vinculó, no pudo disparar deploy) |
| E-35 | Usuario dispara deploy manual + apaga Require Log In (proyecto y team) | ✅ SITIO LIVE |

### Fallos documentados
**FALLO-07 — Push SSH: Permission denied (publickey)**
- Causa: WSL sin llave SSH registrada en GitHub.
- Fix: cambiar remote a HTTPS: `git remote set-url origin https://github.com/DavinsonR/proyecto-davirson.git`.

**FALLO-08 — Push HTTPS: invalid credentials / 403 denied**
- Causa doble: (a) "Password" en el prompt de Git = Personal Access Token, NO la contraseña de la cuenta; (b) el primer token no tenía permiso de escritura; (c) una credencial inválida quedó cacheada y repetía el 403.
- Fix: `git config --global --unset credential.helper` + generar token con permiso correcto → **fine-grained: "Contents: Read and write"** (no existe casilla "repo" ahí) / **classic: scope "repo"**. Usuario `DavinsonR` + token como password.
- Lección: al pegar el token en la terminal no se ve nada (normal). Guardar con `git config --global credential.helper store` tras el primer éxito.

**FALLO-09 — Conector Vercel: 403 al disparar deployment**
- Síntoma: `create_git_project` crea y vincula el proyecto, pero el deploy automático falla; `list_projects` devuelve vacío; `get_project`/`update_project_deployment_protection` → 404/403.
- Causa: el token del conector MCP tiene rol restringido en el team — puede crear/vincular proyectos, NO puede disparar deployments de producción, listar, leer config ni modificar Deployment Protection.
- Fix: el primer deploy lo dispara el usuario desde el dashboard; los siguientes son automáticos por push.
- Lección permanente: NO reintentar deploys/config vía conector en este team. El canal es: push a GitHub → autodeploy.

### Nota crítica de verificación (para futuras sesiones)
La verificación por `curl` desde la sandbox devuelve **403 falso** contra vercel.app, incluso con User-Agent de navegador. NO es indicador del estado real del sitio. La prueba válida es navegador real en red real (incógnito / otra red / datos móviles). No diagnosticar "sitio caído" por curl.

---

## ANEXO — SESIÓN 3: Paquete de traspaso para agente de IA

### Qué se hizo
- Se clonó el repo público para partir del estado real en GitHub.
- **Hallazgo:** el repo solo tenía 2 commits; los commits de bitácora de la sesión 2 nunca se pushearon (se perdieron con el reset de la sandbox). Se reconstruyó el anexo de sesión 2 (arriba) desde el historial de conversación.
- Se armó el paquete de traspaso completo: prompt de onboarding para agente (01), esta bitácora actualizada (02), Discovery fundacional (03), y el código completo (proyecto/).

### Acción pendiente del usuario (importante)
- [ ] Copiar `02_BITACORA_MAESTRA.md` de este paquete sobre `BITACORA_MAESTRA.md` en la carpeta local del repo → `git add -A && git commit -m "Bitácora: anexos sesiones 2-3" && git push`. Así la bitácora completa queda a salvo en GitHub (y dispara de paso el primer deploy de producción).
- [ ] Limpiar proyectos Vercel duplicados de los deploys por API (conservar solo `proyecto-davirson-git`).

### Estado del proyecto al cierre de sesión 3
| Ítem | Estado |
|---|---|
| Repo público | ✅ github.com/DavinsonR/proyecto-davirson |
| Sitio público | ✅ proyecto-davirson-git.vercel.app (verificado en 3 redes) |
| Autodeploy por push | ✅ activo |
| Bitácora en GitHub | ⚠️ desactualizada (v1.0) — pendiente push de esta versión |
| Siguiente fase | Fase 4: motor Python trading_sim (20% → ~45%) |

---

## ANEXO — SESIÓN 4 (16-17 ago 2026): Validaciones + replaneación de Fase 4 como plataforma de datos

> Sesión ejecutada en Claude Code (WSL local). Primera sesión con acceso directo al repo local, a Git y a los conectores Vercel/Supabase.

### Ejecuciones (E-36 a E-40)
| Paso | Acción | Resultado |
|---|---|---|
| E-36 | Validar push de bitácora del usuario: `ff0ea71` en `origin/main` | ✅ historia a salvo en GitHub |
| E-37 | Validar limpieza Vercel (indirecta: URLs viejas → `DEPLOYMENT_NOT_FOUND`; sitio 200) | ✅ solo queda `proyecto-davirson-git`. Conector sigue 403 en el team (FALLO-09 vigente, no reintentar) |
| E-38 | Descubrir Supabase del usuario vía conector: proyecto `Davinson_Project` (Postgres 17, ca-central-1, ACTIVE_HEALTHY) | ✅ Postgres gratuito ya aprovisionado |
| E-39 | Investigación 5 frentes con fuentes de ago 2026: repo inspiración (AzureDatabricksMedallion), hosting Postgres free, Power BI free, APIs de mercado, orquestación | ✅ hallazgos abajo |
| E-40 | Decisiones D-13 a D-17 con el usuario; Fase 4 replanteada en sub-fases 4a/4b/4c | ✅ plan aprobado |
| — | El usuario guardó la credencial Git (`credential.helper store`) tras su push | ✅ sesiones futuras pueden pushear directo |

### Contexto del cambio
El usuario (con consejo de un amigo data engineer, repo inspiración: github.com/DAVID316CORDOVA/AzureDatabricksMedallion) quiere que la Fase 4 demuestre skills de data engineering — SQL/PostgreSQL, ETL, orquestación, Power BI — no solo el backtester. Cadena imaginada: API → PostgreSQL → ETL → Orquestación → Power BI → Playground interactivo. Veredicto: viable en $0, con un solo recorte (Power BI interactivo público no es gratis).

### Decisiones nuevas (D-13 a D-17)
| # | Decisión | Por qué |
|---|---|---|
| D-13 | Fase 4 se expande a plataforma de datos medallion (bronze/silver/gold como esquemas Postgres + dbt-core + naming `stg_/dim_/fct_/mart_`) en **repo nuevo público, 100% en inglés: `market-data-medallion`** | Demostrar skills tech reclutables; código/repo en inglés para audiencia internacional; el sitio (este repo) no cambia de arquitectura: sigue SSG consumiendo JSON |
| D-14 | Postgres = **Supabase existente** (`Davinson_Project`), con ping REST diario como keep-alive | Ya aprovisionado y conectado a las herramientas del agente. Riesgo conocido: free tier se pausa tras ~7 días sin actividad (el ping lo mitiga; si pausa, resume manual en dashboard). Sin backups gratis, pero irrelevante: warehouse 100% reproducible desde APIs + migraciones. Alternativa documentada: Neon (auto-wake, sin pausas) si la pausa se vuelve molesta |
| D-15 | Power BI se muestra como **PBIP + .pbix en el repo** (abrible gratis en Desktop) + video corto/PNGs en el sitio. La interactividad pública la da el playground del sitio con el JSON de gold | Verificado (docs Microsoft jul 2026): "Publish to web" exige Pro (~US$14/mes) + email corporativo + admin de tenant → imposible en $0. Decirlo abiertamente en el sitio = alfabetización en licenciamiento |
| D-16 | Fuentes de datos: **Coinbase Exchange** (crypto, sin key, primario) + Kraken (fallback) · **Tiingo** (ETFs, key gratis 1000 req/día, primario) + Alpha Vantage (fallback, 25/día). Descartados para CI: api.binance.com (HTTP 451 desde IPs de EE.UU. = runners de Actions), Stooq (challenge anti-bot), yfinance (429 crónico desde datacenter) | Verificación ago 2026 con pruebas en vivo; el pipeline corre desatendido desde GitHub Actions |
| D-17 | Orquestación: **GitHub Actions cron** (minuto impar, `workflow_dispatch`, keepalive por la regla de 60 días, backfill idempotente) + **Prefect 3 OSS** in-process (flows/tasks/retries/logs). **Airflow descartado deliberadamente** (≥4 GB RAM, 5+ contenedores para un DAG diario — overhead sin señal extra a este tamaño; decirlo en el README lee senior) | $0, corre solo, y cubre las señales que miran reclutadores: orquestador + dbt tests + pandera + idempotencia + historial verde público |

### Fase 4 replanteada (sustituye la fila "Fase 4" del §10)
- **4a — Motor local (1-2 sesiones):** scaffold `market-data-medallion` · ingesta Coinbase/Tiingo → bronze (raw JSONB inmutable, naming con timestamp) → silver (OHLCV limpio: dbt `stg_` + pandera) → gold (indicadores SMA/RSI/MACD **en SQL window functions** + métricas de backtest `dim_/fct_/mart_`) · backtester Python (4 estrategias vs buy & hold: retorno, drawdown máx, Sharpe) · export JSON · end-to-end local (docker-compose) y contra Supabase.
- **4b — Automatización (1 sesión):** cron diario en Actions con secrets · dbt tests + pandera como gates · tabla de auditoría de corridas · CI corre el pipeline en PRs contra Postgres efímero.
- **4c — Showcase (1-2 sesiones):** informe Power BI (PBIP en repo + video/PNGs) · página `/[lang]/projects/trading-sim` en el sitio: playground interactivo (activo/estrategia/parámetros → curva equity, drawdown, Sharpe; fetch client-side del JSON público de gold) + widget de salud del pipeline · narrativa honesta del overfitting · TRADING_SIM 20% → ~45% en dictionaries.
- **Calidad de datos con honestidad (mejora sobre la inspiración):** nada de datos sucios artificiales — controles sobre problemas *reales*: días de mercado faltantes, reconciliación cruzada Coinbase vs Kraken, splits/restatements.

### Estado al cierre de sesión 4
| Ítem | Estado |
|---|---|
| Validaciones GitHub + Vercel | ✅ ambas confirmadas |
| Plan Fase 4 v2 | ✅ aprobado por el usuario (decisiones D-13 a D-17) |
| Siguiente paso | Arrancar 4a: crear repo `market-data-medallion` y construir el motor local |

---

## ANEXO — SESIÓN 5 (17 ago 2026): Fase 4a construida — pipeline medallion funcionando end-to-end

### Resultado
**`market-data-medallion` existe y funciona con datos reales**, en local: 51 archivos, 4,363 líneas, commit inicial `b852398` en `/home/coderdav/personalprojects/market-data-medallion` (WSL). Pendiente solo el push (el usuario debe crear el repo vacío en GitHub — el PAT no tiene permiso de Administration para crearlo por API, verificado 403).

- **Entorno sin sudo ni Docker:** Python 3.12 vía `uv` (el sistema tiene 3.8) + PostgreSQL 18 local vía conda en `:5433`. Docker Desktop no está habilitado en WSL.
- **Datos reales:** 1,689 velas diarias por símbolo (BTC-USD, ETH-USD, 2022-01-01 → 2026-08-16) de Coinbase + 720 de Kraken para reconciliación. SPY/QQQ esperan la key de Tiingo.
- **Verificación:** 77 tests unitarios (incl. guardas anti look-ahead con valores de forma cerrada) + 33 checks de dbt, todo verde. Ruff limpio.
- **8 backtests persistidos y exportados** (`exports/trading_sim.json`, 103 KB, curvas de 400 puntos): resultados honestos — en BTC `sma_cross` PERDIÓ -5.2% vs +35.8% de buy & hold; `macd` ganó +47.6%; en ETH buy & hold -49.1% y `volume_breakout` +56.3%. Ese contraste es exactamente la narrativa anti-humo del proyecto.
- **Reconciliación cruzada real:** desacuerdo máximo Coinbase↔Kraken de 0.16% en cierres diarios, 0 días discrepantes (>0.5%).
- **Supabase espejado:** migración 001 aplicada a `Davinson_Project` vía conector (esquemas bronze/silver/gold/meta + 4 tablas). ⚠️ Aviso de Supabase: RLS deshabilitado en esas tablas — no urgente (los esquemas no-public no se exponen por REST por defecto y el pipeline conecta como rol postgres), decisión del usuario pendiente (§ pendientes).

### Fallos nuevos (FALLO-10 a 12) — los tres los atrapó la propia infraestructura de calidad
**FALLO-10 — Watermark envenenado por seed sintético.** El agente que construyó la ingesta dejó su seed de prueba (130 velas hasta 2025-07-09) aplicado en el Postgres local; la ingesta real leyó ese watermark y solo pidió datos desde 2025-07-10. Detección: la tabla de auditoría `meta.ingest_runs` mostró 3 runs a las 00:00:00 exactas. Fix: truncar bronze/meta y re-correr (backfill completo). Lección: **los datos sintéticos jamás se aplican a una base compartida sin rollback**; el test correspondiente ahora limpia sus claves dentro de una transacción con rollback.
**FALLO-11 — Fechas del export corridas un día.** psycopg devuelve timestamptz en el timezone del servidor (America/Bogota); `.date()` truncaba las medianoches UTC al día anterior → las ~400 etiquetas de cada curva salían un día antes (el "candle del 2021-12-31" que delató el bug). Fix: `SET TIME ZONE 'UTC'` en la conexión del export. Lección: fijar timezone de sesión en cualquier conexión que serialice fechas.
**FALLO-12 — Parseo Kraken como array.** El modelo dbt parseaba el payload de Kraken con índices de array (`payload ->> 1`) pero el cliente lo guarda como dict etiquetado → 100% NULLs en silver para Kraken. Dos agentes paralelos interpretaron el contrato distinto; el seed de uno no representaba la forma real del otro. Fix: parseo por claves (idéntico para las 3 fuentes) + **5 tests `not_null` nuevos en staging para que esta clase de regresión reviente `dbt build` en voz alta**. Lección: los contratos entre componentes se validan contra la forma REAL del dato, no contra la suposición de cada lado.

### Revisión adversarial (10 agentes: 3 lentes + 7 refutadores)
6 hallazgos confirmados y arreglados (los de arriba + aislamiento del test de seed, `unquote` de credenciales para dbt con passwords especiales de Supabase, Bollinger con stddev poblacional canónica), 1 refutado, 5 menores (arreglados: partición por granularity en dedup, `dbt source freshness` cableado en daily.yml y Makefile, `.env` honrado por Makefile; aceptados como están: commit diario del JSON —es el comportamiento deseado—).

### Visión del usuario registrada: bot de trading (fase futura, post-4c)
El usuario quiere llevar esta arquitectura a un bot (scalping/day/swing, estrategias cruzadas, análisis de traders famosos, posible capital real pequeño). Evaluación honesta acordada como criterio de diseño:
- **Ya incorporado hoy para no cerrar esa puerta:** fees+slippage modelados desde el día 1, ejecución next-open sin look-ahead, interfaz de estrategia agnóstica de temporalidad, timestamps UTC, config declarativa.
- **Realismo free-first:** scalping NO es viable con infra gratuita (requiere proceso siempre-encendido, latencia baja, datos tick); swing trading con velas 1d/4h SÍ es compatible con esta arquitectura y es el objetivo realista. Camino obligado: backtest → paper trading meses → capital pequeño con kill-switches. Las "estrategias de traders famosos" son discrecionales: se codifican como reglas *inspiradas* y se reporta honestamente si sobreviven a las comisiones.

### Pendientes
- [ ] **(Usuario, 30 seg)** Crear repo público vacío `market-data-medallion` en GitHub (sin README/.gitignore) y avisar para push — o pushear él mismo. Si el PAT fine-grained está restringido por repo, añadirle el repo nuevo.
- [ ] **(Usuario, opcional)** Key gratis de Tiingo (tiingo.com, email) → `.env` local y secret en GitHub → activa SPY/QQQ.
- [ ] **(Usuario, decisión)** Habilitar RLS en las 4 tablas de Supabase (SQL listo, no rompe el pipeline) o dejarlo para 4b.
- [ ] **(4b)** Secrets en GitHub: `DATABASE_URL` (connection string de Supabase), `TIINGO_API_KEY`, `SUPABASE_URL`, `SUPABASE_ANON_KEY` → activa el cron diario.
- [ ] **(4c)** Página `/[lang]/projects/trading-sim` en el sitio + Power BI (PBIP) + TRADING_SIM 20% → ~45%.

### Estado al cierre de sesión 5
| Ítem | Estado |
|---|---|
| Fase 4a (motor local end-to-end) | ✅ completa y verificada |
| Repo `market-data-medallion` | ✅ commit `b852398` local — push pendiente de crear repo en GitHub |
| Supabase (esquema espejado) | ✅ migración 001 aplicada |
| Fase 4b (cron diario en Actions) | ⏳ siguiente — solo faltan secrets + push |

### Addendum sesión 5 (misma noche)
- ✅ **Tiingo activo:** el usuario creó su key (guardada en `.env`, gitignored — jamás commitearla). SPY y QQQ ingestados: 1,158 velas c/u desde 2022 (los 47 "missing days" son festivos bursátiles de EE.UU.; gap máx 4 = fines de semana largos). **16 backtests** en 4 activos. Hallazgo honesto ampliado: en los ETFs NINGUNA estrategia le ganó al buy & hold (SPY +62.8% B&H vs +36.8% la mejor; QQQ +82.9% vs +45.3%) — timing activo pierde en mercado alcista; commit local `data: enable Tiingo ETFs`.
- ✅ **RLS habilitado en Supabase** (migración 002, decisión del usuario): las 4 tablas protegidas; el pipeline no se afecta (conecta como rol dueño).
- ✅ Usuario creó el repo GitHub y amplió el token al repo nuevo. ⚠️ **FALLO-13 — push rechazado por permiso `workflow`:** el PAT no puede crear/modificar `.github/workflows/*` sin ese permiso. Fix (mañana, 30 seg): en el token → si es fine-grained: Permissions → **Workflows: Read and write**; si es classic: marcar scope **workflow** → Update → `git push -u origin main`. El push escribió los 70 objetos y solo rechazó la ref — con el permiso, entra a la primera.
- Nota operativa: `psql` muestra los `timestamptz` en hora Bogotá (medianoche UTC aparece como 19:00 del día anterior) — NO es el FALLO-11, que ya está corregido en el export con `SET TIME ZONE 'UTC'`. No "arreglar" lo que solo es visualización.

---

## ANEXO — SESIÓN 6 (17 ago 2026): universo ampliado a 45 activos

### Resultado
El pipeline pasó de 4 a **45 activos** (2 cripto, 40 acciones/ETFs, 3 divisas · 55.470 velas diarias · **177 backtests**), todo pusheado a `market-data-medallion` (commits `a5336ae` + docs). Repo público y funcionando: el usuario resolvió el FALLO-13 dando permiso `workflow` al token.

**Cartera:** 20 ETFs (índices US, sectoriales, Latam: ILF/EWZ/EWW/ECH, oro/plata/bonos) · 10 acciones US (AAPL, MSFT, NVDA…) · **10 ADRs Latam incluidos Ecopetrol (EC) y Bancolombia (CIB)** · 3 divisas (USDCOP, USDBRL, EURUSD). 16 de los 45 activos son latinoamericanos.

### Decisiones nuevas (D-18 a D-21)
| # | Decisión | Por qué |
|---|---|---|
| D-18 | Nueva fuente `tiingo_fx` para divisas; `volume` pasa a ser opcional (`float \| None`) | FX spot es OTC: no existe volumen consolidado. Se guarda NULL honesto, nunca un cero inventado. Las estrategias de volumen se **excluyen** en FX (no se corren sobre datos ausentes) |
| D-19 | Dimensión real `silver.dim_assets` (seed de dbt generado desde config.yaml) reemplaza la heurística `symbol LIKE '%-USD'` | La heurística se rompía con `USDCOP` (parece cripto y no lo es). Ahora hay modelo dimensional (hechos + dimensión), joins INNER + test `relationships` para que un símbolo sin catalogar falle ruidosamente. Habilita análisis por región |
| D-20 | Nuevo `gold.mart_strategy_leaderboard` (beat-rate y exceso por estrategia/clase/región, con totales vía `grouping sets`) | Convierte 177 backtests en estadística agregada. Es el mart que alimentará Power BI y la página del sitio |
| D-21 | Export partido en `index.json` (83 KB, todos los activos + leaderboard) + `backtests/<SÍMBOLO>.json` (curvas, ~50 KB c/u) | 45×4×400 puntos = 2,4 MB en un archivo era inviable para carga inicial. El playground carga curvas bajo demanda |

### Fallos nuevos (FALLO-14 y 15) — ambos solo aparecen a escala
**FALLO-14 — Reintentar un HTTP 429 empeora el 429.** Primera corrida con 45 activos: 28 símbolos fallaron pero la auditoría registró 47 fallos. Causa: ante un 429, el cliente reintentaba 3× (backoff de segundos) y Prefect reintentaba el task 2× más → hasta **9 llamadas desperdiciadas por símbolo** (~250 contra un techo de 50/hora). Contra una cuota *horaria*, ningún reintento en segundos puede tener éxito. Fix en tres piezas: (a) `RateLimitError` propia, lanzada sin reintentos (los 5xx sí siguen reintentándose, ahí sí es transitorio); (b) **circuit breaker por fuente**: al primer 429 se dejan de llamar los símbolos restantes de esa fuente; (c) el task devuelve el resultado en vez de lanzar excepción, para que Prefect no reintente. Resultado medido: `31 ok, 0 failed, 16 deferred` con watermarks intactos. **Lección: "diferido por cuota" no es un error — es una decisión operativa; confundirlos produce alertas que nadie lee.**
**FALLO-15 — Columna enteramente NULL llega como dtype `object`.** El volumen de FX (que no existe) hacía que pandas infiriera `object` en vez de `float64` y pandera rechazara el frame. Con 4 activos nunca ocurrió porque todos tenían volumen. Fix: cast explícito `astype("float64")` de las columnas numéricas + backtests tolerantes a fallos por símbolo (un activo malformado no puede costarle el backtest a los otros 44).

### Hallazgo de negocio (el más valioso del proyecto hasta ahora)
**De 177 combinaciones estrategia-activo, solo 40 (22,6%) le ganaron a comprar y mantener.** Ninguna de las 4 estrategias tiene exceso promedio positivo: rsi_reversion −19,6 pp · sma_cross −35,4 pp · macd −41,9 pp · volume_breakout −54,1 pp (Sharpe mediano negativo). Por región: global 30,4% · EE.UU. 26,2% · Latam 16,1% · emergentes 12,5%. Con comisiones, slippage y sin mirar el futuro, **el timing activo pierde de forma consistente**. Publicar las 137 que perdieron —con la metodología que lo hace creíble— es el diferenciador.

### Limitación declarada
Los ADRs latinos (EC, CIB, VALE, PBR, ITUB, ABEV, AMX, FMX, BAP, SQM) cotizan en NYSE/NASDAQ **en dólares**, no en BVC/B3/BMV (el free tier de Tiingo no cubre bolsas locales). Su retorno mezcla desempeño de la empresa con movimiento cambiario. Oportunidad derivada: con USDCOP y USDBRL en el mismo warehouse se puede **descomponer** cuánto del retorno de Ecopetrol en USD fue la empresa y cuánto el peso — análisis que aporta el economista, no el ingeniero de datos puro.

### Estado al cierre de sesión 6
| Ítem | Estado |
|---|---|
| Repo `market-data-medallion` | ✅ público y pusheado (45 activos, 177 backtests) |
| Calidad | ✅ 81 tests pytest + 57 checks dbt (49 tests), ruff limpio |
| `BITACORA_TECNICA.md` §9 | ✅ documenta la expansión y los FALLOS 14-15 |
| Fase 4b (cron diario) | ⏳ siguiente: 4 secrets en GitHub (`DATABASE_URL`, `TIINGO_API_KEY`, `SUPABASE_URL`, `SUPABASE_ANON_KEY`) |
| Supabase | ⚠️ solo tiene el esquema (migraciones 001+002); los datos viven en el Postgres local. Sincronizar en 4b |

---

## ANEXO — SESIÓN 7 (17 ago 2026): Fase 4b + estrategias combinadas y validación fuera de muestra

### Parte A — Fase 4b: el pipeline corre contra la nube
- ✅ **Supabase operativo end-to-end**: 55.470 velas copiadas de local a la nube en 7 segundos con `scripts/sync_bronze_to_remote.py` (COPY en streaming, idempotente, sin gastar cuota de Tiingo); `dbt build` verde contra Supabase; 1.347 backtests y export generados desde la nube. BD en **133 MB de 500 MB**.
- ⚠️ **FALLO-16 — La conexión directa de Supabase es IPv6-only.** `db.<ref>.supabase.co` no tiene registro A; los runners de GitHub Actions son IPv4 → desde el cron jamás conectaría. Fix: usar el **Session pooler** (`aws-0-ca-central-1.pooler.supabase.com:5432`, sí resuelve IPv4 y soporta prepared statements, que psycopg y dbt necesitan; el Transaction pooler del 6543 los rompería) + `sslmode=require`. `dbt_env()` ahora deriva el `sslmode` del `DATABASE_URL`.
- ⚠️ **FALLO-17 — Sin retención, el free tier muere en menos de una semana.** Cada corrida reescribía ~212k puntos de curva. Fix: `pipeline/retention.py` conserva las 2 corridas más recientes por par (activo, estrategia). No se pierde nada: bronze nunca se purga y todo es reproducible desde ahí.
- Añadidos: `uv.lock` (sin él `uv sync` falla en CI), migración `002_enable_rls.sql` en el repo (era reproducibilidad faltante), `dbt source freshness` cableado, pasos redundantes del `daily.yml` eliminados.
- **Pendiente del usuario:** poner los 4 secrets en GitHub (le fueron entregados). El token no tiene permiso de *secrets*, así que no pueden crearse por API.

### Parte B — 5ª estrategia (Fibonacci) + todas las combinaciones + split de validación
A petición del usuario: Fibonacci como estrategia individual y **todas las combinaciones AND posibles** ("luz verde en MACD + Volumen", etc.). Resultado: 31 combinaciones por activo con volumen, 15 en divisas → **1.347 variantes** (222 individuales + 1.125 combinadas).

**Decisiones (D-22 a D-25):**
| # | Decisión | Por qué |
|---|---|---|
| D-22 | Solo las 222 individuales guardan curva de equity; las 1.125 combinaciones guardan solo métricas. Impuesto por un `CHECK` en la BD, no solo en Python | Medido: 174 KB por backtest con curva → 1.347 curvas = 229 MB/corrida, 458 MB con retención, sobre el techo de 500 MB |
| D-23 | Señales calculadas **una vez por activo**; las combinaciones son AND vectoriales sobre series precalculadas | 5 cálculos en vez de 80 por activo: 3,8× más rápido, medido |
| D-24 | **Split 70/30 de entrenamiento/validación** en cada variante | Probar 1.347 variantes y quedarse con la mejor es *data dredging*; sin ventana ciega la cifra no vale nada |
| D-25 | "Ganarle a buy & hold" exige haber operado (`n_trades > 0`) | Una combinación que nunca entra rinde 0% y se anotaba una victoria cada vez que el mercado caía — premiando a las más inútiles |

**FALLO-18 — Warm-up asimétrico entre ventanas (crítico).** Los indicadores están en NaN durante su calentamiento y toda estrategia lee NaN como "plano". La ventana de entrenamiento cargaba con **todo** ese periodo muerto y la de validación con ninguno → no eran regímenes comparables. Habría movido la métrica principal en un tercio. Fix: cada estrategia declara su `warmup_bars` (una combinación hereda el del componente más lento) y el split se toma después del calentamiento; el backtest completo sí cubre todas las barras.
**FALLO-19 — Sharpe degenerado.** En una ventana larga con muy pocas barras de movimiento, `mean = r/N` y `std = r/√N`: **r se cancela** y el Sharpe colapsa a `√(periodos/N)` sin importar el tamaño del movimiento. Ahora devuelve `None` en esas condiciones.
**FALLO-20 — Los tests de Python leían `DATABASE_URL`**, que puede apuntar a Supabase, e insertaban 4.041 filas y corrían un purgado de tabla completa. Ahora leen `MDM_TEST_DATABASE_URL`: los tests tienen su propia base o ninguna. (Además: los tests de dbt que protegen las métricas de honestidad nunca corrían sobre los datos que protegen — `dbt run` no ejecuta tests; ahora es `dbt build --select`.)

### EL HALLAZGO (el más valioso del proyecto)
**De 349 variantes que le ganaron a comprar-y-mantener dentro de muestra, solo 40 siguieron ganando fuera de muestra: 11,5% de supervivencia. El 88,5% de las "ganadoras" eran ilusiones del backtest.**

| Señales | Variantes | Ganaron dentro | Siguieron ganando | Supervivencia | Tiempo en mercado |
|---|---|---|---|---|---|
| 1 | 222 | 75 | 10 | 13,3% | 39,7% |
| 2 | 438 | 139 | 14 | 10,1% | 13,7% |
| 3 | 432 | 109 | 13 | 11,9% | 3,7% |
| 4 | 213 | 26 | 3 | 11,5% | 0,5% |
| **5** | 42 | **0** | 0 | — | **0,0%** |
| **TOTAL** | **1.347** | **349** | **40** | **11,5%** | — |

Dos conclusiones publicables: (1) **exigir las cinco señales en verde da cero operaciones** en 45 activos y 4,5 años — nunca coinciden; cada filtro adicional no mejora las entradas, saca del mercado. (2) La supervivencia es plana en ~11,5% sin importar cuántas señales se combinen: **la complejidad no compra robustez**.

### Estado al cierre de sesión 7
| Ítem | Estado |
|---|---|
| Pipeline contra Supabase | ✅ end-to-end verificado (133 MB / 500 MB) |
| Variantes | ✅ 1.347 (222 individuales + 1.125 combinadas) en local y en la nube |
| Calidad | ✅ 161 tests pytest + 87 checks dbt, ruff limpio |
| Revisión adversarial | ✅ 16 defectos hallados y corregidos (3 críticos) |
| `BITACORA_TECNICA.md` §10 | ✅ documenta combinaciones, split y resultados |
| Pendiente usuario | ⏳ 4 secrets en GitHub → cron diario activo. Rotar la contraseña de Supabase (pasó por el chat) |
| Fase 4c | ⏳ página del sitio + Power BI + **descomposición cambiaria** (añadir USDMXN/USDCLP/USDPEN) + TRADING_SIM → 45% |

---

## ANEXO — SESIÓN 8 (17-18 ago 2026): Fase 4C — la página en vivo + descomposición cambiaria + CRON CONFIRMADO

### 🎉 El cron diario FUNCIONA (confirmado con evidencia)
El primer intento del usuario falló con "Repository access blocked". Diagnóstico: **FALLO-21 — GitHub bloqueó la action de terceros `keepalive-workflow` por violación de sus ToS** (abril 2025); un job cuyas actions no se pueden descargar muere en "Set up job", antes del primer paso (por eso el CI, que no la usa, sí pasaba). Fix: eliminarla — era redundante, porque el commit diario del export ES la actividad que resetea el timer de 60 días de GitHub. Tras el fix y el re-run del usuario: **commit `858b11e "data: daily refresh"` hecho por `github-actions[bot]`** — secrets correctos, Supabase alcanzable desde CI, ciclo completo en la nube. Lección: cada dependencia de terceros en CI es un punto de fallo que puede desaparecer sin aviso.

### Descomposición cambiaria (D-26) — construida y verificada CLEAN
3 divisas nuevas (USDMXN, USDCLP, USDPEN → 46 requests Tiingo/hora de 50) y mapeo `fx_pair` en los 10 ADRs. Nuevo `gold.mart_fx_decomposition`: separa el retorno USD de cada ADR en empresa vs moneda con la identidad **(1+r_USD)×(1+r_FX)=(1+r_local)**, ventanas 30d/90d/365d/completa, anclas de fecha auditables por serie, y un test dbt que exige la identidad a 1e-9 en las 40 filas. Verificador adversarial: **0 defectos**; recalculó Ecopetrol a mano: **+96,9% en USD = +53,6% en pesos + 43,4pp de apreciación del peso** — la mayor parte del retorno en dólares del último año fue la moneda, no la empresa. dbt: 100 checks. pytest: 161.

### La página `/[lang]/projects/trading-sim` — EN VIVO (commit `94505d3`)
Primera pieza visual del proyecto con datos reales: el sitio sigue 100% estático y lee los JSON publicados del repo del pipeline (raw.githubusercontent), que el cron refresca a diario. Secciones: 4 stat tiles + **embudo de la honestidad** (1.347→349→40) · supervivencia y exposición por nº de señales · **explorador de backtests** (45 activos agrupados por región, 5 estrategias, curvas de equity reales vs buy & hold con crosshair, tooltip, marcador del corte 70/30 y vista tabla) · las 31 combinaciones por activo ordenadas por exceso fuera de muestra · leaderboard de estrategias · **descomposición cambiaria de los ADRs** · salud del pipeline en ventana terminal · 6 tarjetas de metodología. Bilingüe completo. TRADING_SIM: 20% → **45%** (honesto: el motor + la página existen; falta Power BI). El proyecto destacado de la home ahora enlaza a la página real.

**Detalles técnicos de la sesión:** node instalado en WSL vía nvm (el npm que había era el de Windows); build de producción verde a la primera (8 páginas SSG); paleta de gráficas validada con el checker de accesibilidad del skill dataviz sobre la superficie oscura — 5 candidatas iteradas hasta pasar: serie `#3E9BD6`, benchmark gris punteado (identidad por forma → legible en escala de grises); `role="img"` retirado de componentes con texto real (a11y).

### Estado al cierre de sesión 8
| Ítem | Estado |
|---|---|
| Cron diario en la nube | ✅ **FUNCIONANDO** — commit automático `858b11e` del bot |
| Descomposición cambiaria | ✅ mart + export verificados CLEAN (48 activos ahora) |
| Página del laboratorio | ✅ en vivo en `/es/projects/trading-sim` y `/en/...` |
| TRADING_SIM | ✅ 45% |
| Falta de 4C | ⏳ informe Power BI (PBIP) — próxima sesión |
| Pendiente usuario | ⏳ rotar contraseña de Supabase cuando quiera |

---

## ANEXO — SESIÓN 9 (18 ago 2026): FASE 4C CERRADA — informe Power BI (PBIP/PBIR/TMDL)

### Resultado
**`powerbi/MedallionInsights.pbip`** en el repo del pipeline (commit `53a975d`): informe interactivo de 4 páginas + modelo semántico de 7 tablas y 17 medidas DAX, conectado al warehouse de Supabase vía el session pooler IPv4. **Todo en formato texto versionable (TMDL + PBIR), cero binarios, cero credenciales en el repo** — la contraseña se ingresa una sola vez en Desktop y `PgHost`/`PgDatabase` son parámetros del modelo (el informe se re-apunta al Postgres local sin tocar M).

**Páginas:** The Verdict (embudo de supervivencia con medidas vivas — al filtrar por región se recalcula) · Strategy Explorer (slicers sobre las 1.347 variantes, scatter exposición-vs-exceso-OOS, leaderboard) · FX Decomposition (empresa vs moneda por ADR con slicer de ventana) · Equity Curves (estrategia vs buy & hold por activo).

### Cómo se verificó SIN tener Power BI (no hay Windows en WSL) — D-27
1. Los 31 JSON del reporte validados contra **los esquemas oficiales publicados por Microsoft** (resolución completa de $ref); el validador atrapó 1 error real antes de entregar.
2. El modelo TMDL deserializado con **el parser del propio Microsoft** (`Tabular.TmdlSerializer`, AMO 19.x — el revisor adversarial instaló el SDK de .NET para correrlo): OK.
3. Cada `sourceColumn`, query nativa y referencia de medida verificada contra el warehouse vivo (psql).
4. Riesgo RLS cerrado empíricamente: las tablas gold en Supabase son propiedad de `postgres` (el mismo rol del login de Power BI → bypass de dueño), y la query nativa de curvas devuelve filas por el pooler.
Hallazgos de la revisión: 0 altos, 0 medios, 1 cosmético (título del scatter, corregido).

### ✅ CIERRE CONFIRMADO DE FASE 4 (20 ago 2026)
El usuario cargó el informe Power BI completo contra Supabase — las 7 tablas, ~283k filas de curvas incluidas. Con esto, **la Fase 4 está 100% terminada y validada por el usuario en cada eslabón**: pipeline medallion con cron diario ✓ · 1.347 variantes con validación fuera de muestra ✓ · página pública bilingüe en vivo ✓ · descomposición cambiaria ✓ · informe Power BI interactivo ✓. Camino recorrido para llegar aquí: FALLOS 21, 22 y 23 — cada uno detectado por una capa distinta (logs de CI, reporte de error de Desktop, refresh de datos), que es exactamente como debe funcionar la defensa en profundidad.

**FALLO-23 (el refresh de Power BI lo destapó):** el cron diario llevaba 3 días fallando en silencio — `dbt seed` no altera tablas existentes, así que cuando `dim_assets` ganó la columna `fx_pair`, el build contra Supabase (cuya tabla era anterior al cambio) murió con "column fx_pair does not exist" y `mart_fx_decomposition` nunca llegó a la nube (de ahí "la clave no coincidió con ninguna fila" en Power BI). La ingesta corría ANTES del fallo, así que no se perdió ni una vela. Fix inmediato: seed `--full-refresh` + dbt build contra Supabase (100 PASS). Fix permanente: el flow usa `dbt build --full-refresh` (sin modelos incrementales, solo recrea seeds — 48 filas). Lección: un cron verde hoy no es un cron verde mañana; los cambios de esquema de seeds necesitan full-refresh en TODOS los entornos, no solo donde se desarrolló.

**FALLO-22 (encontrado por el usuario al abrirlo en Desktop):** `The 'Equity' measure cannot be created because a column with the same name already exists`. Causa: los nombres de objetos en Tabular son **insensibles a mayúsculas dentro de una tabla** — la medida `Equity` colisionaba con la columna `equity` de `equity_curves`. La trampa: el deserializador TMDL de Microsoft (que usamos para validar) acepta el archivo; la unicidad solo la exige **el motor** al crear la base de datos — la única capa que no podíamos ejecutar sin Windows. Fix: medida renombrada a `Strategy Equity` + proyección del gráfico actualizada + scan programático de colisiones medida↔columna en todo el modelo (era la única). Dato positivo del reporte de error: Desktop saltó el login sin cuenta de trabajo, abrió por `\\wsl.localhost` y parseó todo el proyecto — murió en el último paso, ya corregido (`b2feb77`).

### Estado al cierre de sesión 9 — FASE 4 COMPLETA (4a+4b+4c)
| Ítem | Estado |
|---|---|
| Pipeline + 1.347 variantes + validación OOS | ✅ corriendo solo cada día (cron confirmado) |
| Página del laboratorio en el sitio | ✅ en vivo, bilingüe |
| Descomposición cambiaria | ✅ mart + página + Power BI |
| Informe Power BI (PBIP) | ✅ en el repo, validado con parser oficial — el usuario lo abre en Desktop y refresca |
| Pendiente usuario | ⏳ abrir el .pbip en Desktop (instrucciones en powerbi/README.md) · rotar contraseña de Supabase |
| Siguiente fase | Fase 5: /historia (redacción con lente de propósito) — o lo que el usuario decida |

---

## ANEXO — SESIÓN 10 (20 ago 2026): REDISEÑO COMPLETO DEL SITIO

### Por qué
Feedback estructurado de cuatro personas reales (Felix — data engineer con mucha experiencia en filtros de RRHH; Simón — ingeniero en transición a datos; Nicol, 15 años — usuaria no técnica; Mateo — economista con la misma transición). El patrón fue inequívoco y **el contenido no era el problema**: confianza 8–10, diseño 5–7. Quejas independientes y repetidas: *muy oscura* · *demasiadas cosas, uno se pierde* · *los proyectos no muestran qué problema resuelven* · *letras muy chiquitas y casi no se ven* · *el selector de idioma no se nota* · *debería estar en inglés*.

### Qué se hizo
Se corrió el protocolo `impeccable` completo (PRODUCT.md → concept-seed → craft-floor → build → finish review → documenter) y salió un mundo visual nuevo: **hoja de análisis (research tear sheet)** — fondo papel blanco, tinta casi negra, azul institucional `#0F4C81` para lo técnico, ámbar `#96551A` reservado **solo** para lo humano, Archivo + Source Serif 4, reglas de un pixel y bandas a sangre en lugar de tarjetas. Modo claro por defecto (con oscuro re-escalonado, no invertido), inglés por defecto, y todo el posicionamiento movido de *"economista en transición a data science"* a **Finance Data Analyst** — un rol cruzado que se cobra completo en vez de empezar de cero.

La revisión de acabado (agente independiente) encontró 8 defectos materiales antes de publicar; los dos que más importaban: la **regla del ámbar estaba invertida** (el ámbar estaba sobre una afirmación estadística y el azul sobre el contenido humano) y **el azul no era dueño de ninguna banda** pese a que el contrato de dirección lo prometía. Ambos corregidos. `DESIGN.md` y `.impeccable/design.json` quedan como registro del sistema **tal como se construyó**, no como se pensó.

**Commits:** `f126a2f` (rediseño) · `9f69f19` (DESIGN.md + piso tipográfico de 14px aplicado en 62 tamaños).

---

## ANEXO — SESIÓN 11 (21 ago 2026): EL CV, LA VITALIDAD Y UN NÚMERO QUE NO CUADRABA

Tres encargos del usuario tras revisar el sitio: *los CV están mal y desactualizados* · *quitar el mensaje del 80% con IA* · *la página se siente estática*.

### 1. El CV estaba mintiendo, y la causa era mecánica
Los PDF descargables **nunca se habían regenerado desde el MVP** (`a18013e`). Decían literalmente `Analista FP&A → Data Analyst / Junior Data Scientist` y *"Busco un rol 100% remoto como Data Analyst / Junior Data Scientist"* — es decir, el documento que el reclutador se lleva contradecía todo el reposicionamiento de la sesión 10. La causa raíz: el script `npm run pdf` importaba `pdfkit` y `tsx`, y **ninguno de los dos estaba declarado en `package.json`**, así que el comando no podía correr. Un generador que no corre es un generador que no existe.

Corregido a fondo:
- **Title mapping en el encabezado** — los tres nombres con que las vacantes llaman al mismo rol: *Finance Data Analyst · Financial BI Analyst · Analytics Engineer*, como titular, no como subtítulo.
- **Sección de proyectos en producción** — el CV no mencionaba `market-data-medallion` en ninguna parte. Ahora lleva las plataformas (PostgreSQL, medallion, dbt, Prefect, GitHub Actions, Supabase, Power BI TMDL/PBIP) con las cifras verificables.
- **Narrativa reescrita**: *"No estoy cambiando de carrera: estoy cobrando por lo que ya hago."*
- **Una sola escala de habilidades.** El CV declaraba Power BI 55% "intermedio" mientras la portada decía 8/10. Dos autoevaluaciones distintas de la misma persona en el mismo sitio, y la del CV era la más baja. Ahora ambas superficies leen las mismas filas.
- **"Social Data Analyst Jr" → "Analista de datos sociales"** — el "Jr" era del 2023 y ya no describe nada.

### 2. Formato LaTeX, la sugerencia de Felix, entregada de verdad
Felix fue explícito: *"para tu cv usa overleaf, latex, ese formato es más decente"*. En lugar de imitar el aspecto, se generan **fuentes `.tex` reales** desde el mismo diccionario (`npm run latex`), autocontenidas, que compilan en Overleaf con pdfLaTeX sin instalar nada — y que el usuario puede editar ahí mismo. `scripts/compile-cv.mjs` las compila localmente con el motor que haya (tectonic / latexmk / xelatex / pdflatex) y, si no hay ninguno, no rompe: dice cómo hacerlo en Overleaf.

Se compilaron y verificaron con tectonic: **2 páginas exactas** en ambos idiomas, sin rastro de "Junior Data Scientist". Dos fallos que solo aparecieron al compilar de verdad: `\spanishdeactivate` no existe en el babel-spanish actual (se cambió por la opción `es-noshorthands`), y la regla de escape de comillas tenía la misma expresión dos veces, así que la segunda nunca corría.

### 3. Vitalidad: movimiento en registro de imprenta
El sitio tenía **una sola animación** (la cabecera al cargar) y nada más. Ahora hay cuatro primitivas, todas colgando de **un único `IntersectionObserver`** a nivel de documento, para que los componentes de servidor sigan siendo de servidor: las reglas **se trazan** de izquierda a derecha (`scaleX`), las filas **se asientan** en orden de lectura, los segmentos del indicador **se llenan** uno a uno, y las cifras **se cuentan** hasta su valor. Las series de las gráficas se dibujan con la Web Animations API (el largo de un path solo se conoce en ejecución). Nada rebota, nada escala bajo el cursor: el hover vale un pixel de levantada.

**Tres garantías que el sistema no puede romper**, y una de ellas era un fallo real que encontré al auditar: los estados ocultos viven bajo `.js` (puesto antes del primer pintado), un temporizador de 3 s lo revela todo si el bundle nunca corre, y **`@media print` fuerza todo visible — el papel no tiene scroll, así que sin esa regla el CV se habría impreso en blanco.**

### 4. Cifras que no cuadraban entre sí (encontradas al escribir el CV)
La portada decía *100 pruebas de datos automáticas*, la metodología decía *87*, y el warehouse decía otra cosa. Contado contra el manifiesto compilado de dbt: **89 nodos de test** + **139 pruebas unitarias en Python**. También *55.000+ velas* → **59.800** reales, y *"tres APIs"* → **cuatro fuentes**. Todo alineado en ambos idiomas. En un sitio cuya tesis es *"cada número enlaza a lo que lo prueba"*, dos cifras para el mismo hecho cuestan exactamente la confianza que la banda de cifras existe para comprar.

### Estado al cierre de sesión 11
| Ítem | Estado |
|---|---|
| CV en el sitio (ES/EN) | ✅ title mapping, proyectos en producción, una sola escala |
| PDF descargables | ✅ regenerados desde LaTeX, 2 páginas, formato Overleaf |
| Fuente `.tex` para editar en Overleaf | ✅ publicada junto al PDF (`npm run cv`) |
| Mensaje del 80% con IA | ✅ retirado de ambos idiomas |
| Animaciones | ✅ 4 primitivas, seguras sin JS, en papel y con reduced-motion |
| Cifras del pipeline | ✅ 89 tests / 59.800 velas / 4 fuentes, verificadas contra el warehouse |
| ⚠️ Pendiente de vigilar | El cron llevaba sin publicar desde el **17 ago** (FALLO-23); el fix `3489025` está pusheado pero aún no había corrido al cierre. La página muestra "última actualización 17 ago" hasta que corra. |
| Pendiente usuario | ⏳ rotar contraseña de Supabase · foto profesional para la portada |

---

## Sesión 12 — 21 ago 2026 · El cron volvió, y trajo malas noticias

Al abrir la Fase 6 hice la comprobación rutinaria de si el cron se había recuperado tras el FALLO-23. Se había recuperado: commit `1ee31e9` a las 12:09 UTC. Pero los totales publicados habían **bajado** — 48 activos → 45, 59.800 velas → 55.486 — y en un warehouse append-only eso no debería poder pasar. Tirar de ese hilo destapó cuatro fallos encadenados.

### FALLO-24 — El secreto de GitHub contenía su propio nombre (causa raíz, del usuario)
`meta.ingest_runs.error` guardaba, literalmente:

```
HTTPError: 403 Client Error: Forbidden for url:
https://api.tiingo.com/tiingo/daily/DIA/prices?...&token=TIINGO_API_KEY
```

El `token=` no llevaba la llave: llevaba **la cadena `TIINGO_API_KEY`**. En Settings → Secrets se pegó el *nombre* en la casilla del *valor*. El YAML del workflow siempre estuvo bien (`${{ secrets.TIINGO_API_KEY }}`). La misma llave probada localmente responde HTTP 200 sin problema, incluidos los tres pares FX que nunca habían entrado.

Histórico en `meta.ingest_runs`, que no deja lugar a interpretación:

| día | success | failed |
|---|---|---|
| 17 ago | 122 | 205 |
| 18 ago | **4** | 138 |
| 19 ago | **4** | 138 |
| 20 ago | **4** | 138 |
| 21 ago | **4** | 138 |

138 = 46 símbolos de Tiingo × 3 intentos. Los 4 éxitos diarios son BTC y ETH por Coinbase y Kraken, que no usan llave. Los 3 activos "perdidos" (USDMXN, USDCLP, USDPEN) nunca se perdieron: se añadieron el 18, cuando la llave ya estaba rota, y jamás llegaron a ingerir. No se borró un solo dato — simplemente llevábamos cuatro días sin recibir ninguno.

### FALLO-25 — Un 403 se reintentaba como si fuera transitorio
`request_json` frenaba en seco ante un 429 (FALLO-14) pero dejaba caer el 403 hasta `raise_for_status`, y encima `ingest_asset` es un `@task(retries=2, retry_delay_seconds=30)`. Resultado: 46 símbolos × 3 intentos × 30 s = **46 minutos por noche re-preguntando por el mismo rechazo**. Es el FALLO-14 otra vez con otro código de estado. Fix: `AuthError` se une a `RateLimitError` como rechazo que ningún reintento contesta, y un solo 403 cortocircuita el resto de esa fuente.

### FALLO-26 — El run publicaba igual (el peor de los cuatro)
La compuerta de aborto era `succeeded == 0`. Coinbase y Kraken no necesitan llave, así que **4 éxitos sobre 142 la pasaban de largo**: corría dbt, corrían los backtests, y se sobrescribía `exports/index.json`. La página lee `generated_at` de ese archivo, así que anunciaba una actualización fresca sobre precios de hace cuatro días.

Un fallo que parece salud es peor que uno que parece fallo: no dispara ninguna alarma y además destruye la evidencia del estado anterior. Ahora el flow aborta **antes de dbt y antes del export** cuando una fuente rechaza las credenciales — lo que además pone el run de Actions en rojo, que es el único canal de alerta que tiene este proyecto.

### FALLO-27 — La llave se escribía en la base en texto plano
El query string lleva `token=…`, `requests` mete la URL completa en el mensaje del `HTTPError`, y ese mensaje se persiste en `meta.ingest_runs.error`. Esta vez filtró un placeholder inofensivo; **con la llave correcta habría escrito el secreto real de Tiingo en una fila por cada fallo**. Ahora todo mensaje construido a partir de una URL se redacta en el punto donde nace la cadena, no en el punto donde se publica.

### Lo que se corrigió en la página
El `PipelineStamp` mostraba `generated_at` — *cuándo se escribió el export*, no *hasta cuándo llegan los datos*. Por eso enseñaba una fecha fresca durante cuatro días de datos rancios. Ahora reporta la vela más reciente del warehouse y dice "Pipeline detenido" cuando la mayoría de los activos están obsoletos, reutilizando la definición que ya vive en `mart_asset_summary.sql` (`now() - last_candle_ts > 3 días`) en lugar de inventar una segunda que pudiera contradecirla. Cuando está detenido el punto verde que late se vuelve un cuadro rojo quieto: si el pipeline paró, la marca también tiene que parar.

### La lección
Los FALLOS 21, 23 y 24 son el mismo fallo tres veces: **el cron pasa de verde a rojo sin avisar a nadie**. Un cron sin alerta no es automatización, es una apuesta a que alguien mire. Las tres veces lo descubrimos por casualidad — la primera al revisar el CI, la segunda al refrescar Power BI, esta al abrir otra fase. La diferencia es que ahora el modo de fallo silencioso ya no existe: si no entran datos, no se publica y el run se pone rojo.

### FALLO-28 — Las cifras publicadas venían de la base local, no de producción
Perseguía por qué las velas habían "bajado" de 59.800 a 55.486 sin que exista un solo `DELETE` sobre bronze. No bajaron nunca. Los blobs de git lo dicen sin ambigüedad:

| commit | autor | `generated_at` | totales publicados |
|---|---|---|---|
| `858b11e` | `github-actions[bot]` | 17 ago **22:23** | 45 activos · **55.470** velas |
| `6b12430` | `DavinsonR` | 17 ago **22:04** | 48 activos · **59.800** velas |

El commit humano tiene una marca de tiempo *anterior* pero se **commiteó después**, y sobrescribió el export del bot. Es decir: durante cuatro días la página publicó las cifras de un **warehouse de desarrollo local**, no las de producción. Producción siempre tuvo 45 activos y ~55.470 velas; hoy tiene 55.486 — exactamente 16 más, que son los 4 ingests diarios de BTC y ETH por dos fuentes durante cuatro días. Todo cuadra, y nunca se borró nada.

Los 3 activos "perdidos" tampoco se perdieron: USDMXN, USDCLP y USDPEN se añadieron el 18, cuando la llave ya estaba rota, y solo existían en la base local donde la llave sí servía.

Este es el fallo más instructivo de los cinco, porque es el que le cuesta el puesto a un ingeniero de datos: **publicar cifras de desarrollo como si fueran de producción**. Y en un sitio cuya tesis es *"cada cifra enlaza a lo que la prueba"*, es el fallo exacto que la tesis existe para impedir. Corregido: el sitio y los CV dicen ahora 45 activos y "más de 55.000 velas" — verdad en producción, y una redacción que no caduca porque bronze solo crece. `exports/` no vuelve a commitearse a mano: lo escribe el bot o no se escribe.

**Pendiente del usuario (2 minutos, bloquea la recuperación):** Settings → Secrets and variables → Actions → `TIINGO_API_KEY` → Update, y pegar la llave real. El watermark hace el resto solo: el siguiente cron recupera los cuatro días y hace el backfill de los tres pares FX. Cuando corra, los 3 pares FX harán backfill y producción llegará por primera vez a 48 activos reales; ahí se regeneran los CV con `npm run cv`.

---

## Sesión 13 — 21 ago 2026 · Auditoría del diccionario: la fuente única contra la fuente real

Pregunta de entrada del usuario: si el hackathon BodyTech (2024, Tableau) merece entrar al portafolio o si quedó por debajo de lo que hace hoy. **Decisión: entra como reconocimiento con enlace, no como proyecto.** La sección se llama "Proyectos en producción" y su subtítulo promete código abierto y verificable; poner al lado un tablero de un fin de semana no suma un proyecto, recalibra hacia abajo lo que la palabra significa en esta página. Pero el premio es la única validación *externa* del sitio —todo lo demás lo construyó y lo evaluó él mismo— y es BI puro, que es la mitad del título que vende (*Financial BI Analyst*). Estaba en el CV como texto plano, sin evidencia. Ahora el título del premio enlaza al tablero público, en el sitio y en el PDF.

Aprovechando el paso por `dictionaries.ts` se auditó el archivo completo contra la fuente real, no contra la memoria: el `index.json` **publicado** (no la base local — lección del FALLO-28), el `manifest.json` de dbt y `pytest --collect-only`.

### Lo que no cuadraba

| # | Decía | Es | Dónde |
|---|---|---|---|
| 1 | "una de cada nueve" sobrevive | 47/365 = **12,9%** → una de cada ocho | embudo ES/EN |
| 2 | "supervivencia plana en ~11%" | 15,5 / 11,4 / 13,2 / 11,1% por nº de señales | gráfico de supervivencia |
| 3 | "cero operaciones en 4,5 años" con 5 señales | exposición media 0,004%, no cero | gráfico de exposición |
| 4 | 139 pruebas unitarias en Python | **171** recolectadas por pytest | metodología + CV |
| 5 | "23 fallos" en la bitácora | **28** | divulgaciones |
| 6 | LEE Javeriana "2023 — 2024" | jul–dic 2023, como ya decía el CV | trayectoria |
| 7 | "Las 31 combinaciones de este activo" | hay activos con 15 (sin volumen) | explorador |
| 8 | "60.000 velas" | son filas bronce (la misma vela por dos fuentes) y la cifra caduca mañana → "más de 58.000" | metodología + CV |

Los cuatro primeros son el mismo problema: **prosa estática describiendo cifras que el cron recalcula cada noche**. La página mostraba "12,9% tasa de supervivencia" en el panel dinámico y, dos centímetros abajo, un párrafo estático diciendo "una de cada nueve". En un sitio cuya tesis es *"cada cifra enlaza a lo que la prueba"*, la contradicción se ve en la misma pantalla. La corrección no fue solo actualizar los números: donde se pudo, se quitó la cifra del texto y se dejó la afirmación cualitativa que sigue siendo verdad aunque el dato se mueva; y el título de combinaciones ahora es `{n}`, resuelto contra el activo abierto, como ya hacía `health.totals`.

89 pruebas de dbt sí eran 89 (manifest), y 1.392 variantes / 47 supervivientes también estaban bien.

### Notas de ejecución

- **No hay motor LaTeX en el WSL**; los PDF se recompilaron con el `pdflatex.exe` de MiKTeX (Windows). Mismo `.tex`, 2 páginas cada uno, enlaces vivos. Pesan 242 KB contra los 49 KB anteriores: pdfTeX incrusta las fuentes completas donde el motor anterior las subconjuntaba. Si molesta el peso, se recompilan con tectonic.
- **Sesión concurrente**: mientras se auditaba, otra sesión commiteó `f3a4264` sobre el mismo archivo (45 → 48 activos). Se rebasó el trabajo sobre ese estado en vez de sobrescribirlo. Dos agentes en el mismo repo a la vez es una forma barata de perder trabajo.
- Estos hallazgos **no** se numeran como FALLO-XX: son deuda de contenido, no fallos de ingeniería, y renumerarlos volvería a romper la cifra de la divulgación.

**Pendiente del usuario:** el workbook de Tableau se llama `BodyTrends-ADataAnalysisProyect` — "Proyect" no existe en inglés, y está en la URL y en el título visible. Renombrarlo cambia la URL: al hacerlo hay que actualizar el `href` del premio en `dictionaries.ts` (hay un comentario en el archivo advirtiéndolo).

### Anexo sesión 13 — el tablero del hackathon, republicado y enlazado

El workbook se bajó de Tableau Public (`public.tableau.com/workbooks/<slug>.twb` entrega el `.twbx` completo cuando la descarga está permitida), se corrigió sobre su XML y el usuario lo republicó. Lo que se arregló: tildes en todos los títulos, `Nom Oferta` → `Oferta` y demás nombres de columna crudos, el typo del dashboard `BodyTrends Anaysis` → `BodyTrends Analytics`, un carácter `Æ` suelto en el título de portada, cinco paneles que salían mudos porque tenían el título oculto, la clave de color escrita en el título (el color de las barras es la hora del día; el tamaño de las burbujas, la facturación de la sede), moneda declarada en el eje de ingreso, y fuera el panel de facturación cuyo eje "Date 0–32" era día-del-mes tratado como continuo — su forma era un artefacto, no un hallazgo.

Hallazgo que vale para cualquier publicación futura en Tableau Public: **el estado de resaltado y selección se publica con el libro**. Los rectángulos azules que se veían pegados a los ejes eran `<highlight>` y `<selection-collection>` guardados dentro de `<windows>` — 5.470 caracteres de estado de sesión viajando al público. Se limpian antes de publicar.

Verificación: no se confía en el código HTTP. Tableau Public devuelve 200 incluso para vizzes inexistentes (es una SPA), así que la comprobación válida fue **descargar el workbook publicado** y contar las correcciones dentro del XML servido: 0 resaltados, 0 selecciones, 0 zonas del panel roto, dashboard renombrado, títulos presentes. El enlace nuevo (`BodyTrendsADataAnalysisProject`, sin guion — Tableau lo comió al armar el slug) quedó en las cuatro posiciones del diccionario y en los dos CV.

**Pendiente del usuario:** el título del mapa volvió a quedar oculto al republicar (`show-title='false'`); se activa con clic derecho sobre el mapa → Mostrar título. Y borrar la viz vieja (`...Proyect`) del perfil, que sigue publicada.
