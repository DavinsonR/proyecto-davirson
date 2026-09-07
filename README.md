# Proyecto Davirson — Sitio personal bilingüe (MVP)

CV interactivo + sistema de módulos con estado. Next.js 16 + Tailwind v4 + TypeScript. Bilingüe ES/EN. Deploy en Vercel, $0.

## Correr en local
```bash
npm install
npm run dev      # http://localhost:3000 → redirige a /es
```

## Rutas
- `/es` · `/en` — Home (tear sheet: cifras, proyecto destacado, también en la mesa, trayectoria, divulgaciones, contacto). `/` redirige a `/en`.
- `/es/cv` · `/en/cv` — CV completo (PDF y fuente LaTeX descargables)
- `/[lang]/projects/trading-sim` — laboratorio con los datos del pipeline
- `/[lang]/projects/powerbi` — catálogo del informe Power BI (modelo, medidas, páginas, licenciamiento)
- `/[lang]/research/fintech-inclusion` — proyecto de inclusión financiera y crecimiento regional

## Dónde editar
- **Todo el texto (ES/EN):** `lib/dictionaries.ts` — fuente única de verdad.
- **Colores/fuentes:** `app/globals.css` (bloques `@theme`).
- **Estados/progreso de módulos:** `lib/dictionaries.ts` → `sistema.modules`.
- **Regenerar el CV tras editar el diccionario:** `npm run latex` escribe `public/*.tex`; `npm run cv` además compila a PDF si hay tectonic/latexmk/xelatex/pdflatex, y si no, se compila en Overleaf.
- **Catálogo Power BI:** `lib/powerbi-model.ts`, copiado a mano de `market-data-medallion/powerbi/` (el commit va en la cabecera). Capturas opcionales en `public/powerbi/{verdict,explorer,fx,curves}.png`.

## Deploy recomendado (repo → Vercel)
1. `git init && git add . && git commit -m "MVP"` → crear repo en GitHub → push.
2. vercel.com → Add New Project → importar repo → Deploy.
3. Deploy automático en cada push.

## Deploy
Público en https://proyecto-davirson-git.vercel.app

## Licencias
- **Código:** de este repositorio.
- **Datos del atlas** (`public/atlas/`): CC BY-SA 4.0 heredada de la fuente. Ver `DATA-LICENSE.md`.
- **Fuentes tipográficas** (`public/fonts/`): SIL OFL 1.1. Ver `public/fonts/OFL.txt`.

## Documentación
- `BITACORA_MAESTRA.md` — hoja de ruta, arquitectura, historial de fallos y decisiones. **Léela primero.**
