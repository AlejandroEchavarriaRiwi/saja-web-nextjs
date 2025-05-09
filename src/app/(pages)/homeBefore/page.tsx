import MainBanner from "@/components/ui/banner/mainBanner";
import BottomFooter from "@/components/ui/footer/bottonFooter";
import MainHero from "@/components/ui/hero/mainHero";
import Navbar from "@/components/ui/navbar/navbar";
import { Toaster } from "@/components/ui/toaster";
import { motion} from "framer-motion"
import MyGoogleMap from "@/components/ui/googleMaps";


export default function HomeBeforeView(){
    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col min-h-screen justify-center items-center"
        >
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full flex justify-center"
          >
            <Navbar />
          </motion.header>
    
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <MainHero />
          </motion.div>
    
          <main className="container flex flex-col justify-center items-center flex-1 px-4 md:px-6">
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="w-full pt-12 md:pt-24 flex"
            >
              <MainBanner />
            </motion.section>
    
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="w-full pt-12 md:pt-24 flex flex-col items-center"
            >
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:text-3xl w-full text-xl flex justify-center align-middle text-center font-bold text-gray-800 mb-6"
              >
                Ubicación
              </motion.h1>
    
              
              <MyGoogleMap lat={6.20659} lng={-75.58634} zoom={16} className=" w-full" />
                  {/* <LocationCard title="Aquí estamos!" lat={6.20659} lng={-75.58634} /> */}
            </motion.section>
          </main>
    
          <BottomFooter />
          <Toaster />
        </motion.div>
      );
}