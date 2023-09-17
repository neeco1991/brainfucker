// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
import { supportedLanguages } from '../lib/i18n';
import { difficulties } from '../lib/difficulty';
// 2. Define your collection(s)
const riddlesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      difficulty: z.enum(difficulties),
      lang: z.enum(
        supportedLanguages.map(({ id }) => id) as [string, ...string[]]
      ),
      image: image(),
      hints: z.array(z.string()),
      solution: z.string(),
    }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  riddles: riddlesCollection,
};
