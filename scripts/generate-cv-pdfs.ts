// ============================================================
// Generador de PDFs del CV — lee lib/dictionaries.ts (fuente única)
// Uso: npm run pdf   →  genera public/*.pdf en ES y EN
// ============================================================
import PDFDocument from "pdfkit";
import fs from "node:fs";
import path from "node:path";
import { dictionaries, type Locale } from "../lib/dictionaries";

const C = {
  ink: "#1A1D23",
  body: "#3C444E",
  dim: "#7A828C",
  cold: "#2C6E8F",
  warm: "#A9713A",
  line: "#D8DCE1",
};

const strings = {
  es: {
    file: "Davirson_Novoa_CV_ES.pdf",
    docTitle: "CV — Davirson Novoa Ramírez",
    skills: "HABILIDADES",
    finance: "Dominio financiero",
    tech: "Stack técnico (niveles honestos)",
    experience: "EXPERIENCIA",
    pivot: "LA TRANSICIÓN",
    awards: "RECONOCIMIENTOS",
    education: "EDUCACIÓN",
    certs: "CERTIFICACIONES",
    remote: "PREPARADO PARA REMOTO",
    generated: "Generado desde davirson.vercel.app — versión sincronizada con el sitio.",
  },
  en: {
    file: "Davirson_Novoa_Resume_EN.pdf",
    docTitle: "Resume — Davirson Novoa Ramírez",
    skills: "SKILLS",
    finance: "Finance domain",
    tech: "Technical stack (honest levels)",
    experience: "EXPERIENCE",
    pivot: "THE TRANSITION",
    awards: "RECOGNITION",
    education: "EDUCATION",
    certs: "CERTIFICATIONS",
    remote: "REMOTE-READY",
    generated: "Generated from davirson.vercel.app — kept in sync with the site.",
  },
} as const;

function generate(lang: Locale) {
  const dict = dictionaries[lang];
  const cv = dict.cv;
  const t = strings[lang];
  const out = path.join(process.cwd(), "public", t.file);

  const doc = new PDFDocument({ size: "A4", margins: { top: 46, bottom: 46, left: 50, right: 50 } });
  doc.pipe(fs.createWriteStream(out));
  const W = doc.page.width - 100; // usable width

  const rule = () => {
    doc.moveDown(0.6);
    doc.moveTo(50, doc.y).lineTo(50 + W, doc.y).lineWidth(0.5).strokeColor(C.line).stroke();
    doc.moveDown(0.6);
  };
  const sectionTitle = (txt: string, color = C.cold) => {
    ensure(60);
    doc.font("Helvetica-Bold").fontSize(9.5).fillColor(color).text(txt, { characterSpacing: 1.5 });
    doc.moveDown(0.5);
  };
  const ensure = (space: number) => {
    if (doc.y + space > doc.page.height - 46) doc.addPage();
  };

  // ===== Header =====
  doc.font("Helvetica-Bold").fontSize(21).fillColor(C.ink).text(cv.title);
  doc.font("Helvetica").fontSize(11.5).fillColor(C.cold).text(cv.subtitle);
  doc.moveDown(0.35);
  doc.font("Helvetica").fontSize(8.5).fillColor(C.dim).text(cv.metaLine);
  doc.moveDown(0.2);
  doc.fontSize(8.5).fillColor(C.dim).text(
    `${dict.profile.email}  ·  ${dict.profile.linkedin.replace("https://", "")}  ·  ${dict.profile.github.replace("https://", "")}  ·  ${dict.profile.kaggle.replace("https://", "")}`
  );
  rule();

  // ===== Profile =====
  doc.font("Helvetica").fontSize(9.5).fillColor(C.body).text(cv.profileText, { lineGap: 2.2 });
  rule();

  // ===== Skills =====
  sectionTitle(t.skills);
  doc.font("Helvetica-Bold").fontSize(9).fillColor(C.ink).text(`${t.finance}: `, { continued: true });
  doc.font("Helvetica").fontSize(9).fillColor(C.body).text(cv.skillsFin.join(" · "), { lineGap: 2 });
  doc.moveDown(0.45);
  doc.font("Helvetica-Bold").fontSize(9).fillColor(C.ink).text(`${t.tech}:`);
  doc.moveDown(0.2);
  for (const s of cv.skillsTech) {
    doc.font("Helvetica").fontSize(9).fillColor(C.body).text(`•  ${s.name} — `, { continued: true, indent: 6, lineGap: 1.8 });
    doc.fillColor(C.dim).text(s.note);
  }
  rule();

  // ===== Experience =====
  sectionTitle(t.experience);
  for (const company of cv.experience) {
    ensure(90);
    const mode = company.mode === "remote" ? cv.remoteTag : cv.hybridTag;
    doc.font("Helvetica-Bold").fontSize(10.5).fillColor(C.ink).text(company.company, { continued: true });
    doc.font("Helvetica").fontSize(8.5).fillColor(C.dim).text(`   ${company.location} · ${mode}`);
    if ("note" in company && company.note) {
      doc.font("Helvetica-Oblique").fontSize(8.5).fillColor(C.cold).text(company.note);
    }
    doc.moveDown(0.25);
    for (const role of company.roles) {
      ensure(60);
      doc.font("Helvetica-Bold").fontSize(9.5).fillColor(C.body).text(role.title, { continued: true });
      doc.font("Helvetica").fontSize(8.5).fillColor(C.dim).text(`   ${role.period}`);
      doc.moveDown(0.15);
      for (const b of role.bullets) {
        doc.font("Helvetica").fontSize(9).fillColor(C.body).text(`–  ${b}`, { indent: 10, lineGap: 1.8 });
      }
      doc.moveDown(0.35);
    }
    doc.moveDown(0.2);
  }
  rule();

  // ===== Pivot =====
  sectionTitle(t.pivot, C.warm);
  doc.font("Helvetica").fontSize(9.5).fillColor(C.body).text(cv.pivot.body, { lineGap: 2.2 });
  rule();

  // ===== Awards =====
  sectionTitle(t.awards);
  for (const a of cv.awards) {
    doc.font("Helvetica-Bold").fontSize(9).fillColor(C.ink).text(`${a.title} (${a.year})`, { continued: true });
    doc.font("Helvetica").fontSize(9).fillColor(C.body).text(` — ${a.desc}`, { lineGap: 1.8 });
  }
  rule();

  // ===== Education + Certs =====
  sectionTitle(t.education);
  for (const e of cv.education) {
    doc.font("Helvetica-Bold").fontSize(9).fillColor(C.ink).text(e.title, { continued: true });
    doc.font("Helvetica").fontSize(9).fillColor(C.body).text(` — ${e.inst} · ${e.period} (${e.statusText.toLowerCase()})`, { lineGap: 1.8 });
  }
  doc.moveDown(0.45);
  sectionTitle(t.certs);
  for (const c of cv.certs) {
    doc.font("Helvetica").fontSize(9).fillColor(C.body).text(`•  ${c.title} — ${c.inst}, ${c.year}`, { lineGap: 1.8 });
  }
  rule();

  // ===== Remote =====
  sectionTitle(t.remote);
  for (const p of cv.remote.points) {
    doc.font("Helvetica").fontSize(9).fillColor(C.body).text(`•  ${p}`, { lineGap: 1.8 });
  }

  doc.moveDown(1);
  doc.font("Helvetica-Oblique").fontSize(7.5).fillColor(C.dim).text(t.generated);

  doc.end();
  console.log(`✓ ${out}`);
}

fs.mkdirSync(path.join(process.cwd(), "public"), { recursive: true });
generate("es");
generate("en");
