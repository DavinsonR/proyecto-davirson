#!/usr/bin/env python3
"""Genera las tarjetas de OpenGraph (public/og-es.png, og-en.png).

Se ejecuta a mano cuando cambia el copy de portada, no en cada build: el
sitio no debe depender de Python ni de la red para compilar.

    python3 -m pip install --user pillow
    npx tsx scripts/dump-dict.ts > /tmp/dict.json   # o el volcado equivalente
    python3 scripts/generate-og.py /tmp/dict.json <carpeta-con-los-ttf>

Los TTF de Archivo salen de la misma hoja de estilos que usa el sitio.
"""
import json, sys
from PIL import Image, ImageDraw, ImageFont

dict_path, font_dir = sys.argv[1], sys.argv[2]
D = json.load(open(dict_path, encoding="utf-8"))
W, H = 1200, 630
PAPER, INK, COLD, BODY, MUTED = "#ffffff", "#14181d", "#0f4c81", "#454e57", "#626c76"
F = lambda w, s: ImageFont.truetype(f"{font_dir}/archivo{w}.ttf", s)

def track(draw, xy, text, font, fill, spacing=0):
    """Dibuja con tracking manual: PIL no expone letter-spacing."""
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + spacing
    return x

def wrap(draw, text, font, maxw):
    out, line = [], ""
    for word in text.split():
        probe = f"{line} {word}".strip()
        if draw.textlength(probe, font=font) <= maxw:
            line = probe
        else:
            out.append(line); line = word
    if line: out.append(line)
    return out

for lang in ("es", "en"):
    sheet, profile = D[lang]["sheet"], D[lang]["profile"]
    img = Image.new("RGB", (W, H), PAPER)
    d = ImageDraw.Draw(img)

    # cabecera: la línea de clasificación de la hoja de análisis
    f_small = F(700, 20)
    track(d, (72, 60), sheet["classification"].upper(), f_small, COLD, 1.2)
    asof = sheet["asOf"].upper()
    f_asof = F(400, 20)
    d.text((W - 72 - d.textlength(asof, font=f_asof) - len(asof) * 1.2, 60), asof, font=f_asof, fill=MUTED)
    d.line([(72, 96), (W - 72, 96)], fill="#d8dde3", width=1)

    # cuerpo: nombre, veredicto, tesis
    d.text((72, 150), profile["name"], font=F(800, 52), fill=INK)
    d.text((72, 214), sheet["verdict"], font=F(700, 66), fill=COLD)
    y = 310
    for line in wrap(d, sheet["thesis"], F(400, 31), W - 144)[:2]:
        d.text((72, y), line, font=F(400, 31), fill=BODY); y += 42

    # el dato que un reclutador comprueba antes que nada
    f_av = F(400, 24)
    d.text((72, 400), sheet["availability"], font=f_av, fill=MUTED)

    # pie: tres cifras sobre una regla azul, como la banda del sitio
    d.line([(72, 470), (W - 72, 470)], fill=COLD, width=3)
    x = 72
    for m in sheet["metrics"][:3]:
        fv, fl = F(800, 40), F(400, 22)
        d.text((x, 500), m["value"], font=fv, fill=INK)
        for i, line in enumerate(wrap(d, m["label"], fl, 240)[:2]):
            d.text((x, 552 + i * 26), line, font=fl, fill=MUTED)
        x += max(d.textlength(m["value"], font=fv), min(240, d.textlength(m["label"], font=fl))) + 70

    out = f"public/og-{lang}.png"
    img.save(out, "PNG", optimize=True)
    print("✓", out)
