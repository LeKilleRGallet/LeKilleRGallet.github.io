import { getCollection } from "astro:content";
import { publicProfile } from "../data/publicProfile";

const esc = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

export const GET = async ({ site }: any) => {
  const proyectos = await getCollection("proyectos", ({ data }) => data.public);

  const staticPages = [
    "/",
    "/investigacion/",
    "/research/",
    "/data/",
    "/finance/",
    "/archivo/",
    "/agenda/",
    "/colaborar/",
    "/cv/",
    "/sobre-mi/",
    "/contacto/",
  ].map((path) => ({
    path,
    lastmod: publicProfile.lastUpdated,
  }));

  const projectPages = proyectos.map((p) => ({
    path: `/proyectos/${p.id}/`,
    lastmod: p.data.updated.toISOString().slice(0, 10),
  }));

  const pdfPages = proyectos
    .filter((p) => Boolean(p.data.pdf))
    .map((p) => ({
      path: p.data.pdf!,
      lastmod: p.data.updated.toISOString().slice(0, 10),
    }));

  const urls = [...staticPages, ...projectPages, ...pdfPages]
    .map(({ path, lastmod }) => {
      const loc = new URL(path, site).toString();
      return `  <url>
    <loc>${esc(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
