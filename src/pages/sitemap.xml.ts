import { getCollection } from "astro:content";

export const GET = async ({ site }: any) => {
  const proyectos = await getCollection("proyectos", ({ data }) => data.public);

  const paths = [
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
    ...proyectos.map((p) => `/proyectos/${p.id}/`),
  ];

  const urls = paths
    .map((path) => {
      const loc = new URL(path, site).toString();
      return `  <url><loc>${loc}</loc></url>`;
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
    },
  });
};
