import { create } from 'zustand';
import { bearNames } from '../data/bearNames';

export interface BearType {
  name: string;
  fishEaten: number;
}

interface BearsType {
  [id: string]: BearType;
}

interface BearStateType {
  bears: BearsType;
  increase: () => void;
  remove: (name: string) => void;
}

const initialState = { bears: {} as BearsType };

export const useBearStore = create<BearStateType>((set) => ({
  ...initialState,
  increase: () =>
    set((state) => {
      const namesInUse = Object.keys(state.bears);
      const filteredNames = bearNames.filter((name) => !namesInUse.includes(name));
      const name = filteredNames[Math.floor(Math.random() * filteredNames.length)];

      return { bears: { ...state.bears, [name]: { name: name, fishEaten: 0 } } };
    }),
  remove: (name) => console.log(name),
}));

// export const useBearName = create
