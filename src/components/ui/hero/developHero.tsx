"use client";

import { motion } from "framer-motion";

export default function DevelopHero() {
  const phoneNumber = "573004001077";
  const message = "Hola BlueByte!";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex w-full justify-center items-center py-8 md:py-12 align-middle bg-white"
    >
      <div className="flex flex-row w-11/12 md:w-9/12 lg:w-9/12 justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center text-center md:text-center gap-3 md:w-2/5 w-5/6"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Desarrollo Web a tu Medida
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 text-base md:text-lg text-gray-800"
          >
            Creamos soluciones web personalizadas para tu negocio, adaptadas a tus necesidades y objetivos específicos.
          </motion.p>

          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="mt-2 md:mt-8 px-4 py-1 text-xl md:px-6 md:py-3 md:text-lg font-semibold text-white bg-primary rounded-md hover:bg-blue-800 transition-all duration-300">
              Solicitar Cotización
            </button>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}
