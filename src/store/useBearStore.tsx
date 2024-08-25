import { create } from 'zustand';
import { bearNames } from '../data/bearNames';

interface BearStateType {
  bears: string[];
  fish: number;
  addBear: () => void;
  eatFish: () => void;
}

const initialState = { bears: [], fish: 987 };

export const useBearStore = create<BearStateType>((set) => ({
  ...initialState,
  addBear: () =>
    set((state) => {
      const filteredNames = bearNames.filter((name) => !state.bears.includes(name));
      const name = filteredNames[Math.floor(Math.random() * filteredNames.length)];

      return { bears: [...state.bears, name] };
    }),
  eatFish: () => set((state) => ({ fish: state.fish - 1 })),
}));

// export const useBearName = create
