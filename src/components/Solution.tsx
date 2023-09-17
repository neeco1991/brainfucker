import { createSignal } from 'solid-js';
import { useTranslations, type LangId } from '../lib/i18n';

interface Props {
  text: string;
  lang: LangId;
}

export default function Solution({ text, lang }: Props) {
  const [clicks, setClicks] = createSignal<number>(0);

  const t = useTranslations(lang);

  const getButtonText = () => {
    if (clicks() === 0) {
      return t('solution.button.0');
    } else {
      return t('solution.button.1');
    }
  };

  return (
    <>
      <div class="flex justify-between mt-8">
        <h2 class="m-0">{t('solution.title')}</h2>
        <button
          disabled={clicks() === 2}
          class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:invert"
          onClick={() => setClicks(clicks() + 1)}
        >
          {getButtonText()}
        </button>
      </div>
      <div>
        {clicks() === 1 && <p class="text-red-500">{t('solution.warning')}</p>}
        {clicks() === 2 && <p>{text}</p>}
      </div>
    </>
  );
}
