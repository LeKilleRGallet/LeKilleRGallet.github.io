import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const proyectos = await getCollection(
    "proyectos",
    ({ data }) => data.public && Boolean(data.citekey)
  );

  return proyectos.map((proyecto) => ({
    params: { id: proyecto.id },
    props: { proyecto },
  }));
}

export const GET = ({ props, site }: any) => {
  const { proyecto } = props;
  const {
    title,
    year,
    authors,
    status,
    pdf,
    citekey,
    citationType = "unpublished",
  } = proyecto.data;

  const canonical = new URL(`/proyectos/${proyecto.id}/`, site).toString();
  const pdfUrl = pdf ? new URL(pdf, site).toString() : null;

  const body = `@${citationType}{${citekey},
  author = {${authors.join(" and ")}},
  title = {${title}},
  year = {${year}},
  note = {${status}},
  url = {${canonical}}${pdfUrl ? `,
  pdf = {${pdfUrl}}` : ""}
}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/x-bibtex; charset=utf-8",
      "Content-Disposition": `inline; filename="${proyecto.id}.bib"`,
    },
  });
};
