// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
import { supportedLanguages } from '../lib/lang';
// 2. Define your collection(s)
const riddlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    difficulty: z.enum(['ez', 'moderate', 'intense', 'brainfucker']),
    lang: z.enum(supportedLanguages.map(({ id }) => id) as [string, ...string[]])
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  riddles: riddlesCollection,
};
