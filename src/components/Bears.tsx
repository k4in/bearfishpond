import Bear from '../components/Bear';

import { useBearStore } from '../store/useBearStore';

export default function Bears() {
  console.log('[re-rendering: Bears]');

  const bears = useBearStore((state) => state.bears);

  return (
    <section className="bg-blue-200 p-10 flex flex-col gap-3 flex-1">
      {bears.length > 0 ? (
        bears.map((bear) => <Bear bear={bear} key={bear.name} />)
      ) : (
        <div>Click "New Bear" to add your first bear!</div>
      )}
    </section>
  );
}
