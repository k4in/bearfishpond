import { create } from 'zustand';

interface PondInitialStateType {
  fish: number;
}

interface PondStateType extends PondInitialStateType {
  eatFish: () => void;
}

const initialState: PondInitialStateType = {
  fish: 987,
};

export const usePondStore = create<PondStateType>((set) => ({
  ...initialState,
  eatFish: () => set((state) => ({ fish: state.fish - 1 })),
}));
