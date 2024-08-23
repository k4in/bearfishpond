import Button from '../ui/Button';

import { useBearStore } from '../store/useBearStore';

export default function Buttons() {
  console.log('[re-rendering: Buttons]');

  const bears = useBearStore((state) => state.bears);
  const increase = useBearStore((state) => state.increase);

  return (
    <div className="flex gap-5 justify-center mt-3">
      <Button type="button">New Pond</Button>
      <Button type="button" onClick={increase}>
        New Bear
      </Button>
      <Button type="button">Reset Ponds</Button>
      <Button type="button" onClick={() => console.log(bears)}>
        Log Bears
      </Button>
    </div>
  );
}
