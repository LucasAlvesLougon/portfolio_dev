import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['completed', 'in-development', 'planning']),
    featured: z.boolean().default(false),
    date: z.string().optional(),
    summary: z.string(),
    technologies: z.array(z.string()).default([]),
    skills: z.array(z.string()).default([]),
    metrics: z
      .object({
        architecture: z.string().optional(),
        tests: z.string().optional(),
        documentation: z.string().optional(),
      })
      .optional(),
    links: z
      .object({
        demo: z.string().optional(),
        repository: z.string().optional(),
      })
      .optional(),
  }),
});

const milestones = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/milestones' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string().default('milestone'),
    summary: z.string(),
  }),
});

export const collections = {
  projects,
  milestones,
};
