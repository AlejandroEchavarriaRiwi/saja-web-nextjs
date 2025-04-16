    "use client"; // Asegúrate de esto si estás en Next.js App Router

    import { motion } from "framer-motion";
    import RepairServicesCard from "../cards/repairServiceCard";

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
    export default function RepairBanner() {
      return (
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center w-11/12 md:w-9/12 mt-8 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div variants={cardVariants}>
            <RepairServicesCard
              icon="/iconos/celular.png"
              title="Celulares y Tablets"
              description="Reparamos celulares de todas las marcas y modelos, a nivel software y hardware."
            />
          </motion.div>

          <motion.div variants={cardVariants}>
            <RepairServicesCard
              icon="/iconos/computador.png"
              title="Computadoras y laptops"
              description="Reparación, manteminimiento, ensamblaje y actualización de computadoras y laptops."
            />
          </motion.div>

          <motion.div variants={cardVariants}>
            <RepairServicesCard
              icon="/iconos/consolas.png"
              title="Consolas de videojuegos"
              description="Reparamos consolas y controles de videojuegos como PS4, PS5, Xbox One, Xbox Series X/S y Nintendo Switch."
            />
          </motion.div>

        </motion.div>
      );
    }
