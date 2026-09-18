import { topicHubs } from "../../data/topics";

export const GET = ({ site }: any) => {
  const items = topicHubs.map((topic) => ({
    slug: topic.slug,
    es: {
      title: topic.title,
      description: topic.description,
      url: new URL(`/temas/${topic.slug}/`, site).toString(),
    },
    en: {
      title: topic.titleEn,
      description: topic.descriptionEn,
      url: new URL(`/en/topics/${topic.slug}/`, site).toString(),
    },
    keywords: topic.keywords,
    projectIds: topic.projectIds,
  }));

  return new Response(
    JSON.stringify(
      {
        schemaVersion: "1.0",
        languages: ["es", "en"],
        canonicalSource: new URL("/api/topics.json", site).toString(),
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
