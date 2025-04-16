"use client"; // Asegúrate de esto si estás en Next.js App Router

import { motion } from "framer-motion";
import DevelopServicesCard from "../cards/developServiceCard";

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
      ease: "easeInOut",
      type: "spring", // Puedes cambiar a "spring" si quieres un rebote ligero
    },
  },
};

export default function DevelopBanner() {
  return (
    <motion.div
      className="flex flex-col md:flex-row justify-center items-center w-11/12 md:w-9/12 mt-8 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.div variants={cardVariants}>
        <DevelopServicesCard
          icon="/iconos/web_estatico.png"
          title="Sitios Web Informativos"
          description="Llamativos sitios web para mostrar y promover desde un servicio hasta un proyecto."
        />
      </motion.div>

      <motion.div variants={cardVariants}>
        <DevelopServicesCard
          icon="/iconos/ecommerce.png"
          title="Tiendas Online (E-commerce)"
          description="Plataformas de venta en línea automatizadas para la venta de tus productos y servicios."
        />
      </motion.div>

      <motion.div variants={cardVariants}>
        <DevelopServicesCard
          icon="/iconos/alamedida.png"
          title="Aplicaciones Web a Medida"
          description="Soluciones Web flexibles, programas de acuerdo a tus requerimientos."
        />
      </motion.div>
    </motion.div>
  );
}
