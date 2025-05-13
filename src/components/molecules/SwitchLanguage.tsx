"use client";
import { useState } from "react";
import { IconArrowDown, IconCheck, IconLanguage } from "../../../public/icons";
import { AnimatePresence, motion } from "framer-motion";
import { useSwitchLanguage } from "@/app/core/application/global-state/switchLanguage";

export default function SwitchLanguage(): React.ReactNode {
  const [isActiveTab, setActiveTab] = useState<boolean>(false);
  const { setOpenSwitchLanguage, openSwitchLanguage } = useSwitchLanguage(
    (state) => state
  );
  return (
    <div
      className="flex items-center gap-2 cursor-pointer relative hover:bg-[var(--color-black-hover)] p-2 rounded-[--border-radius-small] transition-colors duration-200"
      onClick={() => setActiveTab(!isActiveTab)}
    >
      <IconLanguage />
      <span className="hidden md:flex">{openSwitchLanguage}</span>
      <IconArrowDown />
      <AnimatePresence>
        {isActiveTab && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-10 right-0 bg-white text-black p-2 rounded-[var(--border-radius-small)] shadow-lg"
          >
            <ul className="flex flex-col gap-2">
              <li
                className="cursor-pointer hover:bg-[var(--color-gray)] p-2 rounded-[var(--border-radius-small)] transition-colors duration-200 flex items-center gap-2"
                onClick={() => {
                  setOpenSwitchLanguage("en");
                }}
              >
                English {openSwitchLanguage === "en" && <IconCheck />}
              </li>
              <li
                className="cursor-pointer hover:bg-[var(--color-gray)] p-2 rounded-[var(--border-radius-small)] transition-colors duration-200 flex items-center gap-2"
                onClick={() => {
                  setOpenSwitchLanguage("es");
                }}
              >
                Español {openSwitchLanguage === "es" && <IconCheck />}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
