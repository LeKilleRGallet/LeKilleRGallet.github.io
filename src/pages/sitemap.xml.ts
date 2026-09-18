import { getCollection } from "astro:content";
import { publicProfile } from "../data/publicProfile";
import { topicHubs } from "../data/topics";

const esc = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

export const GET = async ({ site }: any) => {
  const projects = await getCollection("proyectos", ({ data }) => data.public);

  const pairs = [
    ["/", "/en/"],
    ["/sobre-mi/", "/en/about/"],
    ["/investigacion/", "/en/research/"],
    ["/research/", "/en/research-support/"],
    ["/data/", "/en/data/"],
    ["/finance/", "/en/finance/"],
    ["/archivo/", "/en/archive/"],
    ["/agenda/", "/en/research-agenda/"],
    ["/colaborar/", "/en/collaborate/"],
    ["/cv/", "/en/cv/"],
    ["/contacto/", "/en/contact/"],
    ["/temas/", "/en/topics/"],
  ];

  const pairedPages = pairs.flatMap(([esPath, enPath]) => [
    { path: esPath, esPath, enPath, lastmod: publicProfile.lastUpdated },
    { path: enPath, esPath, enPath, lastmod: publicProfile.lastUpdated },
  ]);

  const topicPages = topicHubs.flatMap((topic) => {
    const esPath = `/temas/${topic.slug}/`;
    const enPath = `/en/topics/${topic.slug}/`;
    return [
      { path: esPath, esPath, enPath, lastmod: publicProfile.lastUpdated },
      { path: enPath, esPath, enPath, lastmod: publicProfile.lastUpdated },
    ];
  });

  const projectPages = projects.flatMap((p) => {
    const esPath = `/proyectos/${p.id}/`;
    const enPath = `/en/projects/${p.id}/`;
    const lastmod = p.data.updated.toISOString().slice(0, 10);
    return [
      { path: esPath, esPath, enPath, lastmod },
      { path: enPath, esPath, enPath, lastmod },
    ];
  });

  const pdfPages = projects
    .filter((p) => Boolean(p.data.pdf))
    .map((p) => ({
      path: p.data.pdf!,
      lastmod: p.data.updated.toISOString().slice(0, 10),
    }));

  const pairedXml = [...pairedPages, ...topicPages, ...projectPages]
    .map(({ path, esPath, enPath, lastmod }) => {
      const loc = new URL(path, site).toString();
      const esUrl = new URL(esPath, site).toString();
      const enUrl = new URL(enPath, site).toString();
      return `  <url>
    <loc>${esc(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <xhtml:link rel="alternate" hreflang="es" href="${esc(esUrl)}" />
    <xhtml:link rel="alternate" hreflang="en" href="${esc(enUrl)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${esc(esUrl)}" />
  </url>`;
    })
    .join("\n");

  const pdfXml = pdfPages
    .map(({ path, lastmod }) => {
      const loc = new URL(path, site).toString();
      return `  <url>
    <loc>${esc(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pairedXml}
${pdfXml}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
