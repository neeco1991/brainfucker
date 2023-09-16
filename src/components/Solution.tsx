import { createSignal } from 'solid-js';

export default function Solution({ text }: { text: string }) {
  const [clicks, setClicks] = createSignal<number>(0);

  const getButtonText = () => {
    if (clicks() === 0) {
      return 'Give me the solution';
    } else {
      return 'I am sure';
    }
  };

  return (
    <>
      <div class="flex justify-between mt-8">
        <h2 class="m-0">Solution</h2>
        <button
          disabled={clicks() === 2}
          class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:invert"
          onClick={() => setClicks(clicks() + 1)}
        >
          {getButtonText()}
        </button>
      </div>
      <div>
        {clicks() === 1 && (
          <p class="text-red-500">Are you sure you want the solution?</p>
        )}
        {clicks() === 2 && <p>{text}</p>}
      </div>
    </>
  );
}
