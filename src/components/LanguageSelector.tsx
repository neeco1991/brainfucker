import { createSignal, For } from 'solid-js';
import { supportedLanguages } from '../lib/lang';

export default function LanguageSelector() {
  const [open, setOpen] = createSignal<boolean>(false);

  const handleClick = (event: MouseEvent) => {
    setOpen(false);
  };

  const toggle = (_e: MouseEvent) => {
    setOpen(!open());

    if (open()) {
      document.addEventListener('click', handleClick, true);
    } else {
      document.removeEventListener('click', handleClick, true);
    }
  };

  return (
    <div class="relative">
      <button
        onClick={(e) => toggle(e)}
        aria-label="Theme"
        class="rounded-full p-1 hover:bg-gray-200 dark:hover:bg-gray-600 hover:ring-1 hover:ring-slate-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
          ></path>
        </svg>
      </button>
      {open() && (
        <ul class="absolute max-sm:right-0 bg-slate-900 dark:bg-slate-100 rounded-md">
          <For each={supportedLanguages}>
            {(lang, i) => (
              <li class="text-gray-100 dark:text-gray-900 hover:text-gray-600 dark:hover:text-gray-400 cursor-default select-none py-2 px-2">
                <a href={`/${lang.id}`}>{lang.name}</a>
              </li>
            )}
          </For>
        </ul>
      )}
    </div>
  );
}
