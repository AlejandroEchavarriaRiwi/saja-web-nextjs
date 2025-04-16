import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";

// Variants para las animaciones de cada paso
const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const lineVariants = {
  hidden: { width: "0%" },
  show: { width: "80%", transition: { duration: 1, delay: 0.3 } },
};

const NuestroProceso: FC = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-around w-full md:w-10/12 py-10 gap-10 md:gap-0">
      {/* Paso 1 */}
      <motion.div
        variants={stepVariants}
        initial="hidden"
        whileInView="show"
        className="flex flex-col items-center text-center gap-4 z-10 px-4"
      >
        <Image
          src="/iconos/analisis.png"
          alt="nuestro proceso"
          width={1000}
          height={500}
          className="h-20 w-20"
        />
        <p className="w-10/12 md:w-2/3">Analizamos tus ideas y requerimientos</p>
      </motion.div>

      {/* Paso 2 */}
      <motion.div
        variants={stepVariants}
        initial="hidden"
        whileInView="show"
        className="flex flex-col items-center text-center gap-4 z-10 px-4"
      >
        <Image
          src="/iconos/diseno.png"
          alt="nuestro proceso"
          width={1000}
          height={500}
          className="h-20 w-20"
        />
        <p className="w-10/12 md:w-2/3">Creamos el prototipo y la interfaz inicial</p>
      </motion.div>

      {/* Paso 3 */}
      <motion.div
        variants={stepVariants}
        initial="hidden"
        whileInView="show"
        className="flex flex-col items-center text-center gap-4 z-10 px-4"
      >
        <Image
          src="/iconos/desarrollo.png"
          alt="nuestro proceso"
          width={1000}
          height={500}
          className="h-20 w-20"
        />
        <p className="w-10/12 md:w-2/3">Desarrollamos la funcionalidad completa</p>
      </motion.div>

      {/* Paso 4 */}
      <motion.div
        variants={stepVariants}
        initial="hidden"
        whileInView="show"
        className="flex flex-col items-center text-center gap-4 z-10 px-4"
      >
        <Image
          src="/iconos/despliegue.png"
          alt="nuestro proceso"
          width={1000}
          height={500}
          className="h-20 w-20"
        />
        <p className="w-10/12 md:w-2/3">Publicamos y optimizamos el proyecto</p>
      </motion.div>

      {/* Línea solo visible en escritorio */}
      <motion.div
        variants={lineVariants}
        initial="hidden"
        whileInView="show"
        className="hidden md:block absolute top-[80px] left-1/2 -translate-x-1/2 w-3/4 h-1 bg-grisdetalles z-0"
      />
    </section>
  );
};

export default NuestroProceso;
