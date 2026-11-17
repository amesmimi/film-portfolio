import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const frameShape = z.enum(['arch', 'oval', 'round', 'stamp', 'polaroid', 'snapshot', 'plate', 'album']);

/**
 * One chapter = one roll (or one little series).
 * Each lives in its own folder: src/content/chapters/<folder>/index.md,
 * with its photographs sitting right beside it.
 */
const chapters = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/chapters' }),
  schema: ({ image }) =>
    z.object({
      slug: z.string(),
      number: z.number().int().positive(),
      title: z.string(),
      draft: z.boolean().default(false),
      /** Show this chapter as the open-book spread on the home page. */
      featured: z.boolean().default(false),
      /** A few lines for the home page spread. */
      summary: z.string().optional(),

      place: z.string().optional(),
      season: z.string().optional(),
      exposures: z.number().int().positive().optional(),

      roll: z
        .object({
          number: z.string().optional(),
          camera: z.string().optional(),
          lens: z.string().optional(),
          film: z.string().optional(),
          developed: z.string().optional(),
          shot: z.string().optional(),
        })
        .default({}),

      cover: image().optional(),
      coverAlt: z.string().default(''),

      /** A pencilled note shown beside one of the photographs. */
      aside: z.string().optional(),
      /** A quiet line in the middle of the chapter. */
      quote: z.string().optional(),

      photos: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            title: z.string().optional(),
            frame: frameShape.optional(),
            /** Wide or tall, to pick sensible layouts. */
            orientation: z.enum(['landscape', 'portrait', 'square']).default('portrait'),
          }),
        )
        .default([]),
    }),
});

export const collections = { chapters };
