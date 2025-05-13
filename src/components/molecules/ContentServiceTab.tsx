"use client";
import { AnimatePresence, motion } from "framer-motion";
import ServiceElement from "./ServiceElement";
import {
  DATA_SERVICE_ELEMENT,
  DATA_SERVICE_ELEMENT_ACCESSORIES,
  DATA_SERVICE_ELEMENT_REPAIR,
} from "@/utils/constanst/dataServiceElement";
import ContentExplore from "./ContentExplore";

export default function ContentServiceTab(): React.ReactNode {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="flex items-center absolute top-16 left-0 bg-[var(--color-white)] p-10 pl-16 pr-16 rounded-[var(--border-radius-small)] shadow-content text-[var(--color-black)] w-[80vw] h-[480px] gap-2"
      >
        <div className="flex items-center gap-20 w-full h-full">
          <ServiceElement data={DATA_SERVICE_ELEMENT} title="WEB DEVELOPMENT" />
          <ServiceElement data={DATA_SERVICE_ELEMENT_REPAIR} title="REPAIR" />
          <ServiceElement
            data={DATA_SERVICE_ELEMENT_ACCESSORIES}
            title="ACCESSORIES"
          />
        </div>
        <ContentExplore />
      </motion.div>
    </AnimatePresence>
  );
}
