import { memo, useState } from 'react';

import { X, Check } from 'lucide-react';

import Button from '../ui/Button';

import { useBearStore } from '../store/useBearStore';

const Bear = memo(({ bear }: { bear: string }) => {
  console.log('[re-rendering: Bear]', bear);

  const eatFish = useBearStore((state) => state.eatFish);

  const [isActive, setIsActive] = useState<boolean>(true);
  const [fishEaten, setFishEaten] = useState<number>(0);

  function handleEatFish() {
    setFishEaten((prev) => prev + 1);
    eatFish();
  }

  return (
    <article className={`flex flex-col w-48 gap-2 p-5 ${isActive ? 'bg-blue-400' : 'bg-neutral-300 text-neutral-500'}`}>
      <header className="flex items-center justify-between">
        <h2>{bear}</h2>
        <button type="button" onClick={() => setIsActive((prev) => !prev)} className="text-xl text-red-500">
          {isActive ? <X className="w-6 h-6 text-red-500" /> : <Check className="w-6 h-6 text-green-600" />}
        </button>
      </header>
      <p>Fish Eaten: {fishEaten}</p>
      {isActive && (
        <Button type="button" onClick={handleEatFish}>
          Eat Fish
        </Button>
      )}
    </article>
  );
});

export default Bear;
