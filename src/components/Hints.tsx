import { createSignal } from 'solid-js';

type Props = {
  texts: string[];
};

export default function Hints({ texts }: Props) {
  const [clicks, setClicks] = createSignal<number>(0);

  console.log(texts);

  return (
    <>
      <div class="flex justify-between mt-8">
        <h2 class="m-0">Hints</h2>
        <button
          class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:invert"
          onClick={() => setClicks(clicks() + 1)}
        >
          Give me an hint
        </button>
      </div>
    </>
  );
}
