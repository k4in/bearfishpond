import { usePondStore } from '../store/usePondStore';

export default function Ponds() {
  const fish = usePondStore((state) => state.fish);

  return <section className="p-10 bg-blue-200 flex-1">Currently {fish} fish swimming in the pond.</section>;
}
