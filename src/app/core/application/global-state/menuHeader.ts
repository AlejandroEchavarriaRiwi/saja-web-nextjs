import { create } from "zustand";

interface IMenuHeaderState {
  openMenuHeader: boolean;
  setOpenMenuHeader: (value: boolean) => void;
}

export const useMenuHeaderState = create<IMenuHeaderState>((set) => ({
  openMenuHeader: false,
  setOpenMenuHeader: (value) =>
    set((state) => ({ ...state, openMenuHeader: value })),
}));
