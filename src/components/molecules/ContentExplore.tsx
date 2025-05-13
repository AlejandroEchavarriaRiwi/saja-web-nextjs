"use client";
import { useState } from "react";
import { IconArrowRightLong } from "../../../public/icons";
import { AnimatePresence, motion } from "framer-motion";

export default function ContentExplore(): React.ReactNode {
  const [isActiveArrow, setIsActiveArrow] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setIsActiveArrow(true)}
      onMouseLeave={() => setIsActiveArrow(false)}
      className="bg-[var(--color-black)] p-4 rounded-[var(--border-radius-small)] w-[40%] text-[var(--color-white)] h-[60%] flex items-center justify-center gap-4 hover:bg-[var(--color-black-hover)] transition-colors duration-200 cursor-pointer"
    >
      <h2 className="text-[1.5rem]">Explore Portfolio</h2>
      <AnimatePresence>
        {isActiveArrow && (
          <motion.span
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <IconArrowRightLong />
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
