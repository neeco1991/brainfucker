import type { difficulties } from '../lib/difficulty';

export default function DifficultyBadge({
  difficulty,
}: {
  difficulty: (typeof difficulties)[number];
}) {
  switch (difficulty) {
    case 'brainfucker':
      return (
        <span class="inline-flex font-rubik items-center rounded-md bg-brainfucker/10 px-2 py-1 text-brainfucker ring-1 ring-inset ring-brainfucker/20">
          Brainfucker
        </span>
      );
    case 'intense':
      return (
        <span class="inline-flex font-rubik items-center rounded-md bg-intense/10 px-2 py-1 text-intense ring-1 ring-inset ring-intense/20">
          Intense
        </span>
      );
    case 'moderate':
      return (
        <span class="inline-flex font-rubik items-center rounded-md bg-moderate/10 px-2 py-1 text-moderate ring-1 ring-inset ring-moderate/20">
          Moderate
        </span>
      );
    case 'ez':
      return (
        <span class="inline-flex font-rubik items-center rounded-md bg-ez/10 px-2 py-1 text-ez ring-1 ring-inset ring-ez/20">
          Ez
        </span>
      );
  }
}
