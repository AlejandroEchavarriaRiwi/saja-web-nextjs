"use client";
import { useState } from "react";
import { IconArrowDown } from "../../../public/icons";
import { AnimatePresence, motion } from "framer-motion";

interface IItemTabInformationProps {
  text: string;
  textActive: string;
}
export default function ItemTabInformation({
  text,
  textActive,
}: IItemTabInformationProps): React.ReactNode {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <AnimatePresence>
      <div className="flex flex-col gap-6">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsActive(!isActive)}
        >
          <p>{text}</p>
          <IconArrowDown />
        </div>
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <p>{textActive}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="w-full h-[.9px] bg-[var(--color-black)]"></div>
      </div>
    </AnimatePresence>
  );
}
