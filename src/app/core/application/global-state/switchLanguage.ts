import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ISwitchLanguageState {
  openSwitchLanguage: "es" | "en";
  setOpenSwitchLanguage: (value: "es" | "en") => void;
}

export const useSwitchLanguage = create<ISwitchLanguageState>()(
  persist(
    (set) => ({
      openSwitchLanguage: "es",
      setOpenSwitchLanguage: (value) => set({ openSwitchLanguage: value }),
    }),
    {
      name: "switch-language-storage",
    }
  )
);
