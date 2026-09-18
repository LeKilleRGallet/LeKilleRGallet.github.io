import { getCollection } from "astro:content";

const esc = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

export const GET = async ({ site }: any) => {
  const proyectos = (
    await getCollection("proyectos", ({ data }) => data.public)
  ).sort((a, b) => b.data.updated.getTime() - a.data.updated.getTime());

  const items = proyectos
    .map((p) => {
      const link = new URL(`/proyectos/${p.id}/`, site).toString();
      return `<entry>
  <title>${esc(p.data.title)}</title>
  <id>${link}</id>
  <link href="${link}" />
  <updated>${p.data.updated.toISOString()}</updated>
  <summary>${esc(p.data.summary)}</summary>
</entry>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Augusto Rico — Research & Portfolio</title>
  <id>${new URL("/", site).toString()}</id>
  <link href="${new URL("/feed.xml", site).toString()}" rel="self" />
  <link href="${new URL("/", site).toString()}" />
  <updated>${proyectos[0]?.data.updated.toISOString() ?? new Date("2026-09-18").toISOString()}</updated>
  <author><name>Augusto Rico</name></author>
  ${items}
</feed>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
