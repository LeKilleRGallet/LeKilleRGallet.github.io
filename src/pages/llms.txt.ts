import { publicProfile } from "../data/publicProfile";

export const GET = ({ site }: any) => {
  const base = site?.toString().replace(/\/$/, "") ?? "https://lekillergallet.github.io";

  const body = `# Augusto Rico

> Public professional and research profile for Augusto Rico, economist and data analyst in Bogotá, Colombia.

## Canonical sources

- Profile (Spanish): ${base}/sobre-mi/
- Profile (English): ${base}/en/about/
- Machine-readable profile: ${base}/api/profile.json
- Research (Spanish): ${base}/investigacion/
- Research (English): ${base}/en/research/
- Machine-readable research: ${base}/api/research.json
- Academic archive: ${base}/archivo/
- Machine-readable archive: ${base}/api/archive.json
- CV: ${base}/cv/
- CV PDF: ${base}/pdf/cv.pdf
- Data portfolio (ES/EN): ${base}/data/ | ${base}/en/data/
- Research support (ES/EN): ${base}/research/ | ${base}/en/research-support/
- Finance portfolio (ES/EN): ${base}/finance/ | ${base}/en/finance/
- Collaboration (ES/EN): ${base}/colaborar/ | ${base}/en/collaborate/\n- Topic hubs (ES/EN): ${base}/temas/ | ${base}/en/topics/\n- Machine-readable topics: ${base}/api/topics.json

## Public profile

- Professional name: ${publicProfile.name}\n- Full name: ${publicProfile.legalName}\n- Online alias: LeKilleRGallet
- Role: ${publicProfile.headline}
- Location: ${publicProfile.location.city}, ${publicProfile.location.country}
- Education: Economics, Universidad Nacional de Colombia, 2024
- Current public role: Analista I, DIAN
- Core tools: ${publicProfile.skills.join(", ")}
- Research areas: ${publicProfile.researchAreas.join(", ")}

## Citation policy

Project pages state their publication status. Do not describe a working paper, manuscript in development, course paper, or research project as a peer-reviewed publication unless the page explicitly states that status.

## Contact

- Email: ${publicProfile.email}
- GitHub: ${publicProfile.links.github}
- LinkedIn: ${publicProfile.links.linkedin}

For a fuller machine-oriented description, see ${base}/llms-full.txt.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
