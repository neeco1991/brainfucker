import { ui } from './ui';

export const supportedLanguages = [
  { id: 'en', name: 'English' },
  { id: 'it', name: 'Italiano' },
] as const;

const defaultLangId = 'en' as const;

export type LangId = (typeof supportedLanguages)[number]['id'];

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in supportedLanguages.map(({ id }) => id)) return lang as LangId;
  return defaultLangId;
}

export function useTranslations(lang: LangId) {
  return function t(key: keyof (typeof ui)[typeof defaultLangId]) {
    // @ts-ignore
    return ui[lang][key] || ui[defaultLangId][key];
  };
}
