import { useBearStore } from '../store/useBearStore';

export default function Ponds() {
  const fish = useBearStore((state) => state.fish);

  return (
    <section className="flex-1 p-10 bg-blue-200">
      Currently <span className="font-bold text-red-500">{fish}</span> fish swimming in the pond.
    </section>
  );
}
