# Licencia de los datos del atlas

Las series de `public/atlas/` son **material adaptado** en el sentido de la
Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0): se
derivan de datos abiertos de la Superintendencia Financiera de Colombia, que se
publican bajo esa licencia. La cláusula ShareAlike (§3.b) obliga a que el
derivado se publique bajo la misma licencia, y la de atribución (§3.a.1) a
nombrar la fuente en el medio donde se publica.

## Qué cubre esta licencia

| Fichero | Contenido | Licencia |
|---|---|---|
| `public/atlas/series_departamento.json` | Series derivadas por departamento, 2018–2025 | CC BY-SA 4.0 |
| `public/atlas/series_municipio.json` | Series derivadas por municipio, 2018–2025 | CC BY-SA 4.0 |
| `public/atlas/atlas_meta.json` | Metadatos, catálogo de indicadores y atribución | CC BY-SA 4.0 |
| `public/atlas/geo_departamentos.json` | Geometría simplificada, Marco Geoestadístico Nacional | Ver «Geometría» |
| `public/atlas/geo_municipios.json` | Geometría simplificada, Marco Geoestadístico Nacional | Ver «Geometría» |

Texto completo de la licencia: https://creativecommons.org/licenses/by-sa/4.0/deed.es

## Atribución de las fuentes

- **Superintendencia Financiera de Colombia** — datos de acceso, uso y
  profundidad financiera. Publicados bajo CC BY-SA 4.0. Es esta licencia la que
  se propaga a las series derivadas.
- **DANE** — Marco Geoestadístico Nacional (geometría de departamentos y
  municipios) y series de contexto poblacional.
- **MinTIC** — indicadores de conectividad.
- **Ministerio de Educación Nacional (MEN)** — indicadores educativos.

Índice compuesto: ADR-015 del repositorio de la tesis.

## Geometría

La geometría procede del Marco Geoestadístico Nacional del DANE y aquí aparece
simplificada: se descartan las islas menores que la tolerancia de
simplificación, y `islas_descartadas` en `atlas_meta.json` dice cuántas por
nivel. Ninguna unidad territorial se queda sin geometría. Un valor ausente en
las series es una unidad no observada, nunca un cero.

## Qué NO cubre

El código de este repositorio (`app/`, `components/`, `lib/`, `scripts/`) y el
contenido editorial del sitio no están bajo CC BY-SA 4.0. Esta licencia se
aplica solo a los datos enumerados arriba.

## Reutilización

Puedes copiar, redistribuir y adaptar estas series, incluso comercialmente,
siempre que (a) atribuyas las fuentes de arriba, (b) indiques si hiciste
cambios, y (c) distribuyas tu derivado bajo CC BY-SA 4.0.
