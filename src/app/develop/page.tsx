"use client";

import React from "react";
import { motion } from "framer-motion";

import Navbar from "@/components/ui/navbar/navbar";
import { Toaster } from "@/components/ui/toaster";
import BottomFooter from "@/components/ui/footer/bottonFooter";
import DevelopHero from "@/components/ui/hero/developHero";
import DevelopBanner from "@/components/ui/banner/developBanner";
import NuestroProceso from "@/components/ui/cards/nuestroProceso";
import DevelopBanner2 from "@/components/ui/banner/developBanner2";
import BluebyteSaluda from "@/components/ui/banner/bluebyteSaluda";

// Variants para animación general
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: "easeOut", delay },
  }),
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center w-full">
      <header className="w-full flex justify-center">
        <Navbar />
      </header>

      <main className="w-full flex flex-col justify-center items-center">
        <motion.div
          className="w-full flex justify-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          custom={0}
        >
          <DevelopHero />
        </motion.div>

        <motion.div
          className="w-full flex justify-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          custom={0.2}
        >
          <DevelopBanner />
        </motion.div>

        <motion.section
          className="w-full flex flex-col justify-center items-center mt-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          custom={0.4}
        >
          <h1 className="text-3xl font-bold mb-4">Nuestro Proceso</h1>
          <NuestroProceso />
        </motion.section>
        <motion.div
          className="w-full flex justify-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          custom={0.2}
        >
          <DevelopBanner2 />
        </motion.div>
        <motion.div
          className="w-full flex justify-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          custom={0.2}
        >
          <BluebyteSaluda />
        </motion.div>
        
        
      </main>

      <BottomFooter />
      <Toaster />
    </div>
  );
}
