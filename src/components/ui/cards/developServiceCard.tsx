import Image from "next/image";
import { motion } from "framer-motion";

interface DevelopServicesCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function DevelopServicesCard({
  icon,
  title,
  description,
}: DevelopServicesCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left h-auto w-full max-w-3xl p-6 bg-white rounded-2xl shadow-lg dark:bg-gray-800 gap-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
    >
      {/* Icono */}
      <div className="flex-shrink-0">
        <Image
          src={icon}
          alt="Icono"
          width={80}
          height={80}
          className="mx-auto md:mx-0"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col justify-center">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
