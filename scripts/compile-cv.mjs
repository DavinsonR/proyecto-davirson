// ============================================================
// Compila public/*.tex a public/*.pdf con el motor LaTeX que haya
// en la máquina. Si no hay ninguno, no rompe el build: dice cómo
// obtener el PDF en Overleaf y deja los PDF actuales intactos.
//
// Motores probados, en orden de preferencia:
//   tectonic  — un solo binario, descarga sus paquetes solo
//   latexmk   — el envoltorio estándar de TeX Live
//   xelatex / pdflatex — dos pasadas para resolver referencias
// ============================================================
import { execFileSync, spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const PUBLIC = path.join(process.cwd(), "public");
const sources = fs.readdirSync(PUBLIC).filter((f) => f.endsWith(".tex"));

const has = (bin) => spawnSync(bin, ["--version"], { stdio: "ignore" }).status === 0;

const engine = ["tectonic", "latexmk", "xelatex", "pdflatex"].find(has);

if (!engine) {
  console.log(
    "· Sin motor LaTeX instalado. Los .tex quedaron generados en public/.\n" +
      "  Para obtener el PDF: subir el .tex a overleaf.com y compilar (pdfLaTeX),\n" +
      "  o instalar tectonic (https://tectonic-typesetting.github.io) y repetir."
  );
  process.exit(0);
}

for (const tex of sources) {
  const args =
    engine === "tectonic"
      ? ["-X", "compile", tex, "--outdir", "."]
      : engine === "latexmk"
        ? ["-pdf", "-interaction=nonstopmode", "-halt-on-error", tex]
        : ["-interaction=nonstopmode", "-halt-on-error", tex];

  const runs = engine === "xelatex" || engine === "pdflatex" ? 2 : 1;
  for (let i = 0; i < runs; i++) {
    execFileSync(engine, args, { cwd: PUBLIC, stdio: "inherit" });
  }
  console.log(`✓ ${path.join("public", tex.replace(/\.tex$/, ".pdf"))}  (${engine})`);
}

// TeX deja rastro; el repositorio solo debe llevar la fuente y el PDF.
for (const f of fs.readdirSync(PUBLIC)) {
  if (/\.(aux|log|out|fls|fdb_latexmk|synctex\.gz)$/.test(f)) fs.rmSync(path.join(PUBLIC, f));
}
