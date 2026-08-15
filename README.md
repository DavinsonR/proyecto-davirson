# Proyecto Davirson — Sitio personal bilingüe (MVP)

CV interactivo + sistema de módulos con estado. Next.js 16 + Tailwind v4 + TypeScript. Bilingüe ES/EN. Deploy en Vercel, $0.

## Correr en local
```bash
npm install
npm run dev      # http://localhost:3000 → redirige a /es
```

## Rutas
- `/es` · `/en` — Home (hero, sistema, proyecto, historia, CV 30s, contacto)
- `/es/cv` · `/en/cv` — CV interactivo completo

## Dónde editar
- **Todo el texto (ES/EN):** `lib/dictionaries.ts` — fuente única de verdad.
- **Colores/fuentes:** `app/globals.css` (bloques `@theme`).
- **Estados/progreso de módulos:** `lib/dictionaries.ts` → `sistema.modules`.
- **Regenerar PDFs tras editar el CV:** `npm run pdf` (requiere reinstalar tsx+pdfkit: `npm i -D tsx pdfkit @types/pdfkit`).

## Deploy recomendado (repo → Vercel)
1. `git init && git add . && git commit -m "MVP"` → crear repo en GitHub → push.
2. vercel.com → Add New Project → importar repo → Deploy.
3. Deploy automático en cada push.

## ⚠️ Nota sobre el deploy actual
El sitio ya está desplegado pero con "Vercel Authentication" activada (403 público). Para hacerlo público: Vercel → proyecto → Settings → Deployment Protection → desactivar Vercel Authentication. Ver BITACORA_MAESTRA.md §7 (FALLO-05).

## Documentación
- `BITACORA_MAESTRA.md` — hoja de ruta, arquitectura, historial de fallos y decisiones. **Léela primero.**
