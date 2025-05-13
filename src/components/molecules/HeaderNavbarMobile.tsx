"use client";
import { DATA_NAVBAR_HEADER } from "@/utils/constanst/dataNavbarHeader";
import { AnimatePresence, motion } from "framer-motion";
import ItemHeaderNavMobile from "../atoms/itemHeaderNavbarMobile";
import { useState } from "react";

export default function HeaderNavbarMobile(): React.ReactNode {
  const [isActiveTab, setActiveTab] = useState<boolean>(false);
  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -20, opacity: 0, scale: 0.2 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: -20, opacity: 0, scale: 0.2 }}
        transition={{ duration: 0.2 }}
        className=" w-[100vw] absolute bg-[var(--color-white)] top-20 left-0 text-[var(--color-black)] p-2 rounded-[var(--border-radius-small)]"
      >
        <ul className="flex flex-col gap-2">
          {DATA_NAVBAR_HEADER.map((item, index) => (
            <div key={index} className="overflow-y-auto">
              <ItemHeaderNavMobile
                isMobil
                name={item.name}
                content={item.content}
                icon={item.icon}
                setActiveTab={setActiveTab}
                isActiveTab={isActiveTab}
              />
              {item.content && isActiveTab && <div>ss</div>}
            </div>
          ))}
        </ul>
      </motion.nav>
    </AnimatePresence>
  );
}
