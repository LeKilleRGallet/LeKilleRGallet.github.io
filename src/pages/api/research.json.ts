import { getCollection } from "astro:content";

export const GET = async ({ site }: any) => {
  const proyectos = (
    await getCollection("proyectos", ({ data }) => data.public)
  ).sort((a, b) => b.data.year - a.data.year);

  const items = proyectos.map((p) => ({
    id: p.id,
    title: p.data.title,
    subtitle: p.data.subtitle ?? null,
    type: p.data.type,
    status: p.data.status,
    year: p.data.year,
    authors: p.data.authors,
    contributors: p.data.contributors,
    augustoRole: p.data.role ?? null,
    summary: p.data.summary,
    topics: p.data.topics,
    url: new URL(`/proyectos/${p.id}/`, site).toString(),
    pdf: p.data.pdf ? new URL(p.data.pdf, site).toString() : null,
    repository: p.data.repository ?? null,
    bibtex: p.data.citekey
      ? new URL(`/citations/${p.id}.bib`, site).toString()
      : null,
    updated: p.data.updated.toISOString().slice(0, 10),
  }));

  return new Response(
    JSON.stringify(
      {
        schemaVersion: "1.1",
        canonicalSource: new URL("/api/research.json", site).toString(),
        disclaimer:
          "Los estados, autoría y roles se mantienen separados. Working papers, manuscritos, proyectos y trabajos de curso no son publicaciones revisadas por pares salvo indicación explícita.",
        items,
      },
      null,
      2
    ),
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    }
  );
};
