import ServicesCard from "../cards/servicescard";
import { LuAppWindow, LuHeadphones } from "react-icons/lu";
import { GiAutoRepair } from "react-icons/gi";



export default function MainBanner() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full p-4">
        <h1 className="md:text-5xl w-full text-xl flex justify-center align-middle text-center font-bold text-gray-800">
          Nuestros Servicios
        </h1>
        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3"> 
          <ServicesCard icon={LuAppWindow} title="Desarrollo" description="Desarrollo web o movil adaptado a tus necesidades" />
          <ServicesCard icon={GiAutoRepair} title="Reparacion" description="Servicio técnico especializado en celulares, computadores y consolas de videojuegos"/>
          <ServicesCard icon={LuHeadphones} title="Accesorios" description="Todos los gadgets que necesitas en tu mundo tecnológico"/>
        </div>
      </div>
    </>
  );
}
