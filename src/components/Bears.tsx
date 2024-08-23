import Bear from '../components/Bear';

import { useBearStore } from '../store/useBearStore';

export default function Bears() {
  console.log('[re-rendering: Bears]');

  const bears = useBearStore((state) => state.bears);

  return (
    <main className="mt-10">
      {bears.length > 0 ? (
        bears.map((bear) => <Bear bear={bear} key={bear.name} />)
      ) : (
        <div>Click "New Bear" to add your first bear!</div>
      )}
    </main>
  );
}
