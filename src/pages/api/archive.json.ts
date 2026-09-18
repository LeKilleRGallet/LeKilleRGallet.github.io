import { archiveDocuments } from "../../data/archive";

export const GET = ({ site }: any) => {
  const items = archiveDocuments.map((doc) => ({
    ...doc,
    href: doc.href.startsWith("http")
      ? doc.href
      : new URL(doc.href, site).toString(),
  }));

  return new Response(
    JSON.stringify(
      {
        schemaVersion: "1.0",
        canonicalSource: new URL("/api/archive.json", site).toString(),
        disclaimer:
          "Los trabajos de curso y ensayos se etiquetan como archivo académico y no como publicaciones revisadas por pares.",
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
