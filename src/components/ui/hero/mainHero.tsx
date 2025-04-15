import Image from "next/image";

export default function MainHero() {

  const phoneNumber = "573004001077";
  const message = "Hola BlueByte!";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="flex w-full md:w-full justify-center items-center py-8 md:py-0 lg:py-0 align-middle bg-white">
      <div className="flex flex-row w-11/12 md:w-9/12 lg:w-9/12 justify-center">
        <div className="flex flex-col justify-center text-center md:text-center gap-3 md:w-2/5 w-4/6">
          <h1 className="text-xl md:text-5xl font-bold text-gray-800">
            Centro de servicios tecnológicos
          </h1>
          <p className="mt-4 text-sm md:text-lg text-gray-800">
            Soluciones integrales para tus necesidades digitales.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button className="mt-2 md:mt-8 px-4 py-1 md:px-6 md:py-3 md:text-lg font-semibold text-white bg-blue-900/90 rounded-md hover:bg-blue-800">
              Habla con BlueByte
            </button>
          </a>
        </div>
        <Image
          src="/bluebyte/bluebyte_saludando.png"
          alt="Bluebyte saja"
          width={1000}
          height={1000}
          className="md:w-1/4 w-2/5 px-2"
        />
      </div>
    </div>
  );
}