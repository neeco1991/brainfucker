import { createSignal } from 'solid-js';

type Props = {
  texts: string[];
};

export default function Hints({ texts }: Props) {
  const [clicks, setClicks] = createSignal<number>(0);

  const getButtonText = () => {
    if (clicks() === 0) {
      return 'Give me an hint';
    } else if (clicks() === 1) {
      return 'I am sure';
    } else if (clicks() < texts.length + 1) {
      return 'Gimme another one';
    } else {
      return 'No other hints';
    }
  };

  return (
    <>
      <div class="flex justify-between mt-8">
        <h2 class="m-0">Hints</h2>
        <button
          disabled={clicks() === texts.length + 1}
          class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:invert"
          onClick={() => setClicks(clicks() + 1)}
        >
          {getButtonText()}
        </button>
      </div>
      {clicks() > 0 && (
        <div>
          <p class="text-red-500">
            Caution: Some hints may be extremely revealing and make the riddle
            easier. Click again if you are sure you want to proceed.
          </p>
          <ul>
            {texts.slice(0, clicks() - 1).map((text, index) => (
              <li>{text}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
