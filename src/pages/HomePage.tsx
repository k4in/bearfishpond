import Buttons from '../components/Buttons';
import Bear from '../components/Bear';

import { useBearStore } from '../store/useBearStore';

export default function HomePage() {
  const bears = useBearStore((state) => state.bears);
  // const increase = useBearStore((state) => state.increase);

  return (
    <div className="flex gap-3 flex-col items-center mt-3 px-20">
      <Buttons />
      <div className="h-[1px] bg-blue-500 w-3/4"></div>
      <main className="mt-10">
        {bears.length > 0 ? (
          bears.map((bear) => <Bear bear={bear} key={bear.name} />)
        ) : (
          <div>Click "New Bear" to add your first bear!</div>
        )}
      </main>
    </div>
  );
}
