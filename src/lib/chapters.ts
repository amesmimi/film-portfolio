import { getCollection, type CollectionEntry } from 'astro:content';
import type { FrameShape } from '../components/Frame.astro';

export type Chapter = CollectionEntry<'chapters'>;

/** Published chapters, in reading order. Drafts show up only in `npm run dev`. */
export async function getChapters(): Promise<Chapter[]> {
  const all = await getCollection('chapters', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => a.data.number - b.data.number);
}

/** Placeholder tints used until real photographs arrive. */
export const TONES = [
  'var(--tone-sage)',
  'var(--tone-peach)',
  'var(--tone-blue)',
  'var(--tone-ochre)',
  'var(--tone-rose)',
  'var(--tone-moss)',
];
export const tone = (i: number) => TONES[i % TONES.length];

/** A pleasing rotation of frames for galleries. */
export const FRAME_CYCLE: FrameShape[] = ['polaroid', 'stamp', 'arch', 'album', 'oval', 'snapshot'];
