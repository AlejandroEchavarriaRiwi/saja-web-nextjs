"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import CalendlyModal from "@/components/ui/modal/cadendly";

export default function RepairHero() {
  const phoneNumber = "573004001077";
  const message = "Hola BlueByte!";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="flex w-full justify-center items-center py-8 md:py-12 bg-white overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row w-11/12 md:w-9/12 lg:w-9/12 justify-center items-center gap-8">
        <motion.div
          className="flex flex-col justify-center items-center md:items-start text-center md:text-left gap-3 w-full md:w-2/5"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl md:text-5xl font-bold text-gray-800 leading-tight">
            Centro de servicios tecnológicos
          </h1>
          <p className="mt-2 text-base md:text-lg text-gray-700 max-w-md">
            Llevando el soporte técnico y el desarrollo a otro nivel.
          </p>
          <div className="flex gap-8 justify-around w-full">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-5 py-3 text-sm md:text-lg font-semibold text-white bg-primary rounded-md hover:bg-blue-800 transition-colors duration-300"
              >
                Habla con Bluebyte
              </motion.button>
            </a>
            <CalendlyModal />
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/bluebyte/bluebytereparando.png"
            alt="Bluebyte saja"
            width={300}
            height={300}
            className="w-3/4 md:w-full max-w-xs rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
}
