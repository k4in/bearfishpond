import { BearType } from '../store/useBearStore';

import { useBearStore } from '../store/useBearStore';

interface BearComponentType {
  bear: BearType;
}

export default function Bear({ bear }: BearComponentType) {
  console.log('[re-rendering: Bear]', bear.name);

  const remove = useBearStore((state) => state.remove);

  return (
    <article className="w-48 bg-blue-400 px-3 py-1 flex items-center justify-between">
      <p>{bear.name}</p>
      <button type="button" onClick={() => remove(bear.name)} className="text-red-500 text-xl">
        X
      </button>
    </article>
  );
}
