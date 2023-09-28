import { createSignal } from 'solid-js';
import { useTranslations, type LangId } from '../lib/i18n';

type Props = {
  texts: string[];
  lang: LangId;
};

export default function Hints({ texts, lang }: Props) {
  const [clicks, setClicks] = createSignal<number>(0);
  const t = useTranslations(lang);

  const getButtonText = () => {
    if (clicks() === 0) {
      return t('hints.button.0');
    } else if (clicks() === 1) {
      return t('hints.button.1');
    } else if (clicks() < texts.length + 1) {
      return t('hints.button.2');
    } else {
      return t('hints.button.3');
    }
  };

  return (
    texts.length > 0 && (
      <>
        <div class="flex justify-between mt-8">
          <h2 class="m-0">{t('hints.title')}</h2>
          <button
            disabled={clicks() === texts.length + 1}
            class="rounded-md ml-2 bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:invert"
            onClick={() => setClicks(clicks() + 1)}
          >
            {getButtonText()}
          </button>
        </div>
        {clicks() > 0 && (
          <div>
            {clicks() === 1 && <p class="text-red-500">{t('hints.warning')}</p>}
            <ul>
              {texts.slice(0, clicks() - 1).map((text, index) => (
                <li>{text}</li>
              ))}
            </ul>
          </div>
        )}
      </>
    )
  );
}
