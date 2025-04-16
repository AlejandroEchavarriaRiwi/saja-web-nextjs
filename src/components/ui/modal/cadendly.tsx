"use client";

import { motion } from "framer-motion";

export default function CalendlyPopupButton() {
  const handleOpenCalendly = () => {
    window.open(
      "https://calendly.com/contactanos-saja/cita-de-servicio-tecnico",
      "CalendlyPopup",
      "width=800,height=700,scrollbars=yes,resizable=yes"
    );
  };

  return (
    <motion.button
      onClick={handleOpenCalendly}
      className="mt-4 px-5 py-3 text-sm md:text-lg font-semibold text-white bg-primary rounded-md hover:bg-blue-800 transition-colors duration-300"
      whileTap={{ scale: 0.95 }}
      aria-label="Agendar cita con Saja"
    >
      Agendar cita
    </motion.button>
  );
}
