import { getCollection } from "astro:content";

export const GET = async ({ site }: any) => {
  const projects = (
    await getCollection("proyectos", ({ data }) => data.public)
  ).sort((a, b) => b.data.year - a.data.year);

  const items = projects.map((p) => ({
    id: p.id,
    es: {
      title: p.data.title,
      subtitle: p.data.subtitle ?? null,
      type: p.data.type,
      status: p.data.status,
      summary: p.data.summary,
      topics: p.data.topics,
      url: new URL(`/proyectos/${p.id}/`, site).toString(),
    },
    en: {
      title: p.data.titleEn ?? p.data.title,
      subtitle: p.data.subtitleEn ?? p.data.subtitle ?? null,
      type: p.data.typeEn ?? p.data.type,
      status: p.data.statusEn ?? p.data.status,
      summary: p.data.summaryEn ?? p.data.summary,
      topics: p.data.topicsEn ?? p.data.topics,
      url: new URL(`/en/projects/${p.id}/`, site).toString(),
    },
    year: p.data.year,
    authors: p.data.authors,
    contributors: p.data.contributors,
    augustoRole: {
      es: p.data.role ?? null,
      en: p.data.roleEn ?? p.data.role ?? null,
    },
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
        schemaVersion: "2.0",
        languages: ["es", "en"],
        canonicalSource: new URL("/api/research.json", site).toString(),
        disclaimer:
          "Statuses, authorship and contributor roles are preserved across both languages. Working papers, manuscripts, projects and coursework are not peer-reviewed publications unless explicitly stated.",
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
