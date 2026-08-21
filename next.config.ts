import type { NextConfig } from "next";

/** English is the default: most decision-makers for these roles read English,
 *  and the Spanish routes stay one click away from every page. */
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/", destination: "/en", permanent: false },
      { source: "/cv", destination: "/en/cv", permanent: false },
      { source: "/projects/trading-sim", destination: "/en/projects/trading-sim", permanent: false },
    ];
  },
  /** Cabeceras de seguridad. No hay CSP de scripts a propósito: el sitio usa
   *  scripts en línea (tema antes del primer pintado, hidratación de Next) y una
   *  CSP con nonce obligaría a renderizar en servidor, que es justo lo que este
   *  sitio no hace. Lo que sí se cierra: enmarcado, sniffing de tipo, fuga de
   *  referer y permisos de dispositivo que esta página no usa. */
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
            value: "frame-ancestors 'none'; base-uri 'self'; object-src 'none'; form-action 'self'",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
