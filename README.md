# Proyecto Davirson

Sitio personal bilingüe (ES/EN) y punto de entrada a tres proyectos con código abierto y datos en vivo: una investigación econométrica, una plataforma de datos de mercado y una app de registro diario.

### ▶ [proyecto-davirson-git.vercel.app](https://proyecto-davirson-git.vercel.app)

No es un portafolio de capturas: cada página del sitio se alimenta del repositorio que la sostiene, y cada cifra que aparece se puede rastrear hasta el commit que la produjo.

## Qué hay dentro

| Proyecto | En el sitio | Repositorio | Estado |
| --- | --- | --- | --- |
| **Inclusión financiera y crecimiento regional** — warehouse de 19 fuentes públicas, índice por dimensiones, panel de efectos fijos y atlas de los 1.123 municipios | [`/es/research/fintech-inclusion`](https://proyecto-davirson-git.vercel.app/es/research/fintech-inclusion) | [financial-inclusion-colombia](https://github.com/DavinsonR/financial-inclusion-colombia) | Resultado principal publicado |
| **Plataforma de datos de mercado** — APIs públicas → medallion en Postgres con dbt → backtester sin look-ahead → refresh diario automatizado | [`/es/projects/trading-sim`](https://proyecto-davirson-git.vercel.app/es/projects/trading-sim) | [market-data-medallion](https://github.com/DavinsonR/market-data-medallion) | 48 activos, refresh diario |
| **Informe Power BI** — modelo, medidas y páginas del informe construido sobre la capa gold | [`/es/projects/powerbi`](https://proyecto-davirson-git.vercel.app/es/projects/powerbi) | catálogo en `lib/powerbi-model.ts` | Catálogo publicado |
| **JARVIS** — registro diario de hábitos, cuerpo, sueño y gasto en menos de noventa segundos | — | privado; [demo público sin cuenta](https://jarvis-app-psi-sable.vercel.app/demo) | v1 en uso |

## El CV

`/[lang]/cv` publica el CV completo en las dos lenguas. El texto vive una sola vez en `lib/dictionaries.ts`; de ahí salen la página, la fuente LaTeX y el PDF. Editar el diccionario y correr `npm run cv` regenera los tres: no hay una versión del CV que pueda quedarse atrás de otra.

## Cómo está hecho

Next.js 16 (App Router) · React · TypeScript · Tailwind v4 · Vercel. Todo estático: sin backend y sin base de datos. Los datos del laboratorio de mercado entran como JSON exportado por el pipeline, no por una consulta en tiempo de render. Costo de operación: $0.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000 → redirige a /es
```

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run lint` | ESLint con la configuración de Next |
| `npm run latex` | Regenera `public/*.tex` desde el diccionario |
| `npm run cv` | Lo anterior y además compila a PDF si hay tectonic/latexmk/xelatex/pdflatex |

### Dónde editar

- **Todo el texto (ES/EN):** `lib/dictionaries.ts` — fuente única de verdad.
- **Colores y tipografías:** `app/globals.css`, bloques `@theme`.
- **Estado y progreso de los módulos:** `lib/dictionaries.ts` → `sistema.modules`.
- **Catálogo de Power BI:** `lib/powerbi-model.ts`, copiado de `market-data-medallion/powerbi/` con el commit de origen en la cabecera.

## Documentación

`BITACORA_MAESTRA.md` — hoja de ruta, arquitectura, decisiones y el historial de fallos con su causa raíz. Es el documento que hay que leer primero para trabajar sobre este repositorio.
