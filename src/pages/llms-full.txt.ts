import { getCollection } from "astro:content";
import { publicProfile } from "../data/publicProfile";
import { archiveDocuments } from "../data/archive";
import { topicHubs } from "../data/topics";

export const GET = async ({ site }: any) => {
  const base = site?.toString().replace(/\/$/, "") ?? "https://lekillergallet.github.io";
  const proyectos = (
    await getCollection("proyectos", ({ data }) => data.public)
  ).sort((a, b) => b.data.year - a.data.year);

  const research = proyectos
    .map(
      (p) => `### ${p.data.title}
- Type: ${p.data.type}
- Status: ${p.data.status}
- Year: ${p.data.year}
- Authors: ${p.data.authors.join(", ")}
- Contributors: ${p.data.contributors.length ? p.data.contributors.map((x) => `${x.name} (${x.role})`).join(", ") : "None listed"}
- Augusto Rico role: ${p.data.role ?? "N/A"}
- Summary: ${p.data.summary}
- Topics: ${p.data.topics.join(", ")}
- Spanish URL: ${base}/proyectos/${p.id}/
- English title: ${p.data.titleEn ?? p.data.title}
- English summary: ${p.data.summaryEn ?? p.data.summary}
- English URL: ${base}/en/projects/${p.id}/
- PDF: ${p.data.pdf ? base + p.data.pdf : "No public PDF listed"}
- Source: ${p.data.repository ?? "No public source repository listed"}
`
    )
    .join("\n");

  const topicText = topicHubs
    .map(
      (topic) => `- ${topic.title} / ${topic.titleEn}: ${topic.descriptionEn} ES: ${base}/temas/${topic.slug}/ EN: ${base}/en/topics/${topic.slug}/`
    )
    .join("\n");

  const archive = archiveDocuments
    .map(
      (d) => `- ${d.title} (${d.year}) — ${d.type}. Authors: ${d.authors.join(", ")}. ${d.note} URL: ${d.href.startsWith("http") ? d.href : base + d.href}`
    )
    .join("\n");

  const body = `# Augusto Rico — public canonical profile

Last updated: ${publicProfile.lastUpdated}

## Identity

Name: ${publicProfile.name}
Headline: ${publicProfile.headline}
Location: ${publicProfile.location.city}, ${publicProfile.location.country}
Website: ${publicProfile.links.website}
About: ${publicProfile.links.about}
GitHub: ${publicProfile.links.github}
LinkedIn: ${publicProfile.links.linkedin}
Professional email: ${publicProfile.email}
Academic email: ${publicProfile.academicEmail}

## Professional profile

${publicProfile.description}\nEnglish: ${publicProfile.descriptionEn}

Current role: Analista I at DIAN since January 2025.
Previous academic role: teaching assistant at Universidad Nacional de Colombia, 2022–2023.

Skills: ${publicProfile.skills.join(", ")}
Methods: ${publicProfile.methods.join(", ")}
Research areas: ${publicProfile.researchAreas.join(", ")}
Languages: ${publicProfile.languages.map((x) => `${x.language}: ${x.level}`).join("; ")}
Availability: ${publicProfile.availability.join(", ")}

## Education

Economics, Universidad Nacional de Colombia, 2024.

## Research and projects

${research}

## Topic hubs\n\n${topicText}\n\n## Academic archive\n\n${archive}

## Status, authorship and citation rule

Treat each item according to the status stated on its canonical project page.
Do not convert direction, co-direction or contribution into authorship.
A working paper, manuscript in development, research project, course paper, or
essay is not a peer-reviewed publication unless explicitly marked otherwise.

## Machine-readable endpoints

- ${base}/api/profile.json
- ${base}/api/research.json
- ${base}/api/archive.json\n- ${base}/api/topics.json\n- ${base}/feed.xml
- ${base}/sitemap.xml

## Public data policy

${publicProfile.publicDataPolicy}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
