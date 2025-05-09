"use client";
import { AnimatePresence, motion } from "framer-motion";

export default function ContentServiceTab(): React.ReactNode {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
        className="absolute top-16 left-0 bg-[var(--color-white)] p-2 rounded-[var(--border-radius-small)] shadow-content text-[var(--color-black)]"
      >
        SOFTWARE
      </motion.div>
    </AnimatePresence>
  );
}
