"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import MyGoogleMap from "@/components/ui/googleMaps";
import Image from "next/image";
 

const faqData = [
  {
    question: "¿Cuál es el tiempo de reparación?",
    answer:
      "Nuestras reparaciones normalmente son para entrega el mismo día si tu equipo está en nuestras manos antes de las 2pm, de lo contrario será para el siguiente día hábil siguiente.",
  },
  {
    question: "¿Ofrecen garantía?",
    answer:
      "Todas nuestras reparaciones tienen garantía, la cual se definirá en el momento de reparación de acuerdo a la calidad del repuesto que el cliente decida instalar o el servicio a realizar.",
  },
  {
    question: "¿Tiene algún costo el diagnóstico?",
    answer:
      "Dependiendo del tipo de daño se advierte antes si tiene algún costo.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: "easeInOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, type: "spring" }}
      className="border-b w-full overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto", opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-sm text-gray-700 px-1">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function RepairBanner2() {
  return (
    <motion.section
      className="flex flex-col md:flex-row justify-center items-start w-11/12 md:w-9/12 mt-8 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Columna izquierda: Testimonio + Mapa */}
      <motion.div className="flex flex-col gap-6 w-full md:w-1/2" variants={cardVariants}>
        {/* Testimonio */}
        <motion.div
          className="bg-white p-6 md:p-14 rounded-lg shadow-md flex flex-col items-start justify-center gap-2 h-full min-h-[180px]"
          variants={cardVariants}
        >
          <p className="text-lg text-left">
            Excelente servicio y atención! Repararon mi laptop rápidamente y a un precio justo.
          </p>
          <p className="text-sm font-thin text-left text-primary">Juliana Carvajal</p>
        </motion.div>

        {/* Mapa */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md h-full min-h-[260px]"
          variants={cardVariants}
        >
          <h2 className="text-xl font-semibold mb-2">Encuéntranos</h2>
          <div className="w-full rounded-md flex items-center justify-center">
            <MyGoogleMap lat={6.20659} lng={-75.58634} zoom={16} className=" w-full" />
          </div>
        </motion.div>
      </motion.div>

      {/* Columna derecha: FAQ + adicional */}
      <motion.div className="flex flex-col gap-6 w-full md:w-1/2" variants={cardVariants}>
        {/* FAQ */}
        <motion.div
          className="p-6 rounded-lg flex flex-col items-center justify-center bg-white shadow-lg"
          variants={cardVariants}
        >
          <h1 className="text-3xl font-bold text-center mb-4">Preguntas frecuentes</h1>
          <div className="w-full flex flex-col gap-2">
            {faqData.map((faq, idx) => (
              <AccordionItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </motion.div>

        {/* Bloque adicional */}
        <motion.div
          className="bg-primary rounded-lg shadow-md h-full min-h-[160px] relative md:mt-20"
          variants={cardVariants}
        >
          <h2 className="text-xl pt-6 pl-6 font-semibold mb-2 text-white">¿Tienes otra duda?</h2>
          <p className="text-sm text-white pl-6">
            Contáctanos por WhatsApp o visítanos directamente, ¡estamos para ayudarte!
          </p>
          <button className="absolute bottom-3 md:bottom-5 right-1/2 z-50 hover:bg-blue-800 hover:text-white bg-white text-primary px-4 py-2 rounded-md  transition duration-300">Contactanos</button>
          <Image src={"/bluebyte/bluebytebanner.png"} alt="WhatsApp" width={500} height={500} className="right-0 bottom-0 absolute rounded-lg w-1/3" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
