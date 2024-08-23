import Buttons from '../components/Buttons';
import Bears from '../components/Bears';
import Ponds from '../components/Ponds';

export default function HomePage() {
  console.log('[re-rendering: HomePage]');
  // const increase = useBearStore((state) => state.increase);

  return (
    <div className="flex flex-col items-center px-20">
      <Buttons />
      <div className="h-[1px] bg-blue-500 w-3/4 mb-6 mt-3"></div>
      <main className="flex gap-10">
        <Bears />
        <Ponds />
      </main>
    </div>
  );
}
