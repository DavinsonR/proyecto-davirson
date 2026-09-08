import type { NextConfig } from "next";

/** English is the default: most decision-makers for these roles read English,
 *  and the Spanish routes stay one click away from every page. */
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/", destination: "/en", permanent: false },
      { source: "/cv", destination: "/en/cv", permanent: false },
      { source: "/projects/trading-sim", destination: "/en/projects/trading-sim", permanent: false },
      { source: "/projects/powerbi", destination: "/en/projects/powerbi", permanent: false },
      { source: "/projects/tracking", destination: "/en/projects/tracking", permanent: false },
      { source: "/research/fintech-inclusion", destination: "/en/research/fintech-inclusion", permanent: false },
    ];
  },
  /** Cabeceras de seguridad.
   *
   *  Sobre `script-src 'unsafe-inline'`: es deliberado y es el único camino aquí.
   *  El HTML construido lleva tres scripts en línea — el del tema, el arranque de
   *  `__next_f` y el payload RSC de hidratación. El tercero es distinto en cada
   *  página (90–133 KB) y cambia con cada edición de `lib/dictionaries.ts`, así
   *  que una CSP por hash exigiría once hashes regenerados en cada commit, y
   *  `headers()` se evalúa antes de renderizar las páginas: no puede conocerlos.
   *  Un nonce obligaría a renderizar en servidor, que es justo lo que este sitio
   *  no hace. Y ojo: en cuanto se declara un hash, el navegador ignora
   *  `'unsafe-inline'` (CSP3) y la hidratación muere. No se pueden mezclar.
   *
   *  Lo que esta CSP sí compra —y era lo que faltaba— es `default-src 'none'` y
   *  `connect-src`: una dependencia comprometida (d3 corre en el navegador del
   *  visitante) no puede cargar un script de otro origen ni exfiltrar a un host
   *  arbitrario. Ese es el escenario realista en un sitio sin sesión ni datos;
   *  el XSS no lo es, porque aquí no hay nada que robar.
   *
   *  `style-src-attr` va aparte para que la hoja de estilo quede estricta: los
   *  43 atributos `style=` del HTML no obligan a abrir `style-src` entero. */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'none'",
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self'",
              "style-src-attr 'unsafe-inline'",
              "font-src 'self'",
              "img-src 'self' data:",
              // El laboratorio de trading lee los JSON del pipeline en cliente.
              "connect-src 'self' https://raw.githubusercontent.com",
              "manifest-src 'self'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "object-src 'none'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
