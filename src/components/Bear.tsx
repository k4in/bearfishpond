import { memo } from 'react';

import { X, Check } from 'lucide-react';

import Button from '../ui/Button';

import { BearType, useBearStore } from '../store/useBearStore';

const Bear = memo(({ bear }: { bear: BearType }) => {
  console.log('[re-rendering: Bear]', bear.name);

  const changeActivityState = useBearStore((state) => state.changeActivityState);
  const eatFish = useBearStore((state) => state.eatFish);

  return (
    <article
      className={`flex flex-col w-48 gap-2 p-5 ${bear.isActive ? 'bg-blue-400' : 'bg-neutral-300 text-neutral-500'}`}
    >
      <header className="flex items-center justify-between">
        <h2>{bear.name}</h2>
        <button type="button" onClick={() => changeActivityState(bear.name)} className="text-xl text-red-500">
          {bear.isActive ? <X className="w-6 h-6 text-red-500" /> : <Check className="w-6 h-6 text-green-600" />}
        </button>
      </header>
      <p>Fish Eaten: {bear.fishEaten}</p>
      {bear.isActive && (
        <Button type="button" onClick={() => eatFish(bear.name)}>
          Eat Fish
        </Button>
      )}
    </article>
  );
});

export default Bear;
