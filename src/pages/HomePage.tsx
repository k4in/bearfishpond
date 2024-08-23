import Buttons from '../components/Buttons';

import Bears from '../components/Bears';

export default function HomePage() {
  console.log('[re-rendering: HomePage]');
  // const increase = useBearStore((state) => state.increase);

  return (
    <div className="flex gap-3 flex-col items-center mt-3 px-20">
      <Buttons />
      <div className="h-[1px] bg-blue-500 w-3/4"></div>
      <Bears />
    </div>
  );
}
