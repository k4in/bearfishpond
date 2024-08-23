import { create } from 'zustand';
import { bearNames } from '../data/bearNames';

export interface BearType {
  name: string;
  fishEaten: number;
}
interface InitialBearStateType {
  bears: BearType[];
}
interface BearStateType extends InitialBearStateType {
  increase: () => void;
  remove: (name: string) => void;
}

const initialState: InitialBearStateType = {
  bears: [],
};

export const useBearStore = create<BearStateType>((set) => ({
  ...initialState,
  increase: () =>
    set((state) => {
      const filteredNames = bearNames.filter((name) => !state.bears.find((bear) => bear.name === name));
      const newName = filteredNames[Math.floor(Math.random() * filteredNames.length - 1)];

      return { bears: [...state.bears, { name: newName, fishEaten: 0 }] };
    }),
  remove: (name: string) => set((state) => ({ bears: state.bears.filter((bear) => bear.name != name) })),
}));

// export const useBearName = create
