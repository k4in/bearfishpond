import Bear from '../components/Bear';

import { useBearStore } from '../store/useBearStore';

export default function Bears() {
  console.log('[re-rendering: Bears]');

  const bears = useBearStore((state) => Object.values(state.bears));

  return (
    <section className="flex flex-col flex-1 gap-3 p-10 bg-blue-200">
      {bears.length > 0 ? (
        bears.map((bear) => <Bear bear={bear} key={bear.name} />)
      ) : (
        <div>Click "New Bear" to add your first bear!</div>
      )}
    </section>
  );
}
