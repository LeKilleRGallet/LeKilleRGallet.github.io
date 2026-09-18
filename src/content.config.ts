import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const proyectos = defineCollection({
  loader: glob({
    base: "./src/content/proyectos",
    pattern: "**/*.{md,mdx}",
  }),

  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    seoTitle: z.string().optional(),
    seoTitleEn: z.string().optional(),
    subtitle: z.string().optional(),
    subtitleEn: z.string().optional(),
    type: z.string(),
    typeEn: z.string().optional(),
    status: z.string(),
    statusEn: z.string().optional(),
    year: z.number().int(),
    authors: z.array(z.string()).min(1),
    contributors: z
      .array(
        z.object({
          name: z.string(),
          role: z.string(),
          roleEn: z.string().optional(),
        })
      )
      .default([]),
    role: z.string().optional(),
    roleEn: z.string().optional(),
    summary: z.string(),
    summaryEn: z.string().optional(),
    seoDescription: z.string().optional(),
    seoDescriptionEn: z.string().optional(),
    topics: z.array(z.string()).default([]),
    topicsEn: z.array(z.string()).optional(),
    sectionsEn: z
      .array(
        z.object({
          heading: z.string(),
          body: z.string(),
        })
      )
      .default([]),
    pdf: z.string().optional(),
    repository: z.string().url().optional(),
    citekey: z.string().optional(),
    citationType: z.enum(["unpublished", "misc", "techreport"]).optional(),
    public: z.boolean().default(false),
    featured: z.boolean().default(false),
    updated: z.coerce.date(),
  }),
});

export const collections = { proyectos };
