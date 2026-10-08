import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.string(),
    icon: z.string().default('✨'),
    category: z.enum(['main', 'addon']).default('main'),
    weight: z.number().default(100),
    featured: z.boolean().default(false),
  }),
});

const beforeafter = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/beforeafter' }),
  schema: z.object({
    beforeImage: z.string(),
    afterImage: z.string(),
    caption: z.string(),
    vehicle: z.string().optional(),
    weight: z.number().default(100),
    featured: z.boolean().default(false),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gallery' }),
  schema: z.object({
    image: z.string(),
    caption: z.string(),
    category: z
      .enum(['interior', 'exterior', 'wheels', 'engine', 'other'])
      .default('other'),
    weight: z.number().default(100),
    featured: z.boolean().default(false),
  }),
});

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reviews' }),
  schema: z.object({
    name: z.string(),
    location: z.string(),
    rating: z.number().min(1).max(5).default(5),
    weight: z.number().default(100),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    weight: z.number().default(100),
  }),
});

export const collections = { services, beforeafter, gallery, reviews, faq };
