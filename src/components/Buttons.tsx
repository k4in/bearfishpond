import Button from '../ui/Button';

import { useBearStore } from '../store/useBearStore';

export default function Buttons() {
  console.log('[re-rendering: Buttons]');

  const addBear = useBearStore((state) => state.addBear);

  return (
    <div className="flex justify-center gap-5 mt-3">
      <Button type="button">New Pond</Button>
      <Button type="button" onClick={addBear}>
        New Bear
      </Button>
      <Button type="button">Reset Ponds</Button>
    </div>
  );
}
