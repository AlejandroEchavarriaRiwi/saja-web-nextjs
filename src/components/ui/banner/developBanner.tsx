import DevelopServicesCard from "../cards/developServiceCard";

export default function DevelopBanner() {
  return (
    <div className="flex flex-row justify-center items-center w-9/12 mt-8 gap-8">
        <DevelopServicesCard icon="/iconos/web_estatico.png" title={"Sitios Web Informativos"} description={"Llamativos sitios web para mostrar y promover desde un servicio hasta un proyecto."} />
        <DevelopServicesCard icon="/iconos/ecommerce.png" title={"Tiendas Online (E-commerce)"} description={"Plataformas de venta en linea automatizadas para la venta de tus productos y servicios."} />
        <DevelopServicesCard icon="/iconos/alamedida.png" title={"Aplicaciones Web a Medida"} description={"Soluciones Web flexibles, programas de acuerdo a tus requerimientos."} />
    </div>
  );
}