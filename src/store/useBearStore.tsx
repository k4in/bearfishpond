import { create } from 'zustand';
import { bearNames } from '../data/bearNames';

export interface BearType {
  name: string;
  isActive: boolean;
  fishEaten: number;
}

interface BearsType {
  [id: string]: BearType;
}

interface BearStateType {
  bears: BearsType;
  fish: number;
  addBear: () => void;
  changeActivityState: (name: string) => void;
  eatFish: (name: string) => void;
}

const initialState = { bears: {} as BearsType, fish: 987 };

export const useBearStore = create<BearStateType>((set) => ({
  ...initialState,
  addBear: () =>
    set((state) => {
      const namesInUse = Object.keys(state.bears);
      const filteredNames = bearNames.filter((name) => !namesInUse.includes(name));
      const name = filteredNames[Math.floor(Math.random() * filteredNames.length)];

      return { bears: { ...state.bears, [name]: { name: name, fishEaten: 0, isActive: true } } };
    }),
  changeActivityState: (name) =>
    set((state) => ({
      bears: { ...state.bears, [name]: { ...state.bears[name], isActive: !state.bears[name].isActive } },
    })),
  eatFish: (name) =>
    set((state) => ({
      fish: state.fish - 1,
      bears: { ...state.bears, [name]: { ...state.bears[name], fishEaten: state.bears[name].fishEaten + 1 } },
    })),
}));

// export const useBearName = create
