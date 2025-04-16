export default function DevelopBanner2() {
  return (
    <section className="flex flex-col md:flex-row bg-white justify-center items-center w-11/12 md:w-9/12 mt-8 gap-8 p-8 rounded-lg shadow-md">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-start justify-center w-full md:w-1/2 gap-2">

            <p className="text-lg text-left">Excelente servicio! Desarrollaron nuestro e-commerce con alto nivel de calidad y profesionalismo, altamente recomendados!</p>
            <p className="text-sm font-thin text-left text-primary">Juliana Carvajal</p>
        </div>
        <div className="p-4 rounded-lg flex flex-col items-center justify-center w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-center mb-4">¿Por qué elegirnos?</h1>
            <p className="text-lg text-center">Nos enfocamos en la calidad, la atención al cliente y la innovación. Tu éxito es nuestro objetivo.</p>
        </div>
    </section>
  );
}