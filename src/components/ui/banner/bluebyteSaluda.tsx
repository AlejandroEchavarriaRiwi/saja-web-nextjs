import Image from "next/image";

export default function BluebyteSaluda() {
  return (
    <section className="flex flex-col md:flex-row bg-primary justify-center items-center w-11/12 md:w-9/12 my-12 gap-8 rounded-lg shadow-md">
      <div className="pl-12 flex flex-col items-start justify-center w-full md:w-1/2 gap-2">
        <p className="mt-8 md:mt-0 mr-8 md:mr-0 text-3xl md:text-4xl text-right md:text-left text-white">
            Llevemos tu idea al siguiente nivel
        </p>
        <p className="md:text-2xl text-2xl text-right md:text-left text-white">
          Contactanos hoy mismo!
        </p>
      </div>
      <div className="rounded-lg flex flex-col items-center justify-center w-full md:w-1/2">
            <Image src="/iconos/sajasaludo.png" alt="nuestro proceso" width={1000} height={500} className="w-80" />
      </div>
    </section>
  );
}