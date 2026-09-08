import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['concluido', 'em-desenvolvimento', 'planejamento']),
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
    category: z.string().default('marco'),
    summary: z.string(),
  }),
});

export const collections = {
  projects,
  milestones,
};
