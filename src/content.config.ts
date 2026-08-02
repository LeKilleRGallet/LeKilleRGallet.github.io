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
    subtitle: z.string().optional(),
    type: z.string(),
    status: z.string(),
    year: z.number().int(),
    authors: z.array(z.string()).min(1),
    summary: z.string(),
    topics: z.array(z.string()).default([]),
    pdf: z.string().optional(),
    public: z.boolean().default(false),
    featured: z.boolean().default(false),
    updated: z.coerce.date(),
  }),
});

export const collections = { proyectos };
