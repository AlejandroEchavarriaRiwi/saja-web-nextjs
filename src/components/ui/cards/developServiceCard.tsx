import Image from "next/image";

interface DevelopServicesCardProps {
  icon: string
  title: string;
  description: string;
}

export default function DevelopServicesCard({
  icon,
  title,
  description,
}: DevelopServicesCardProps) {
  return (
    <div className="flex flex-col h-80 items-center text-center md:text-left lg:text-left justify-center p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <Image src={icon} alt={"Icono"} width={100} height={100} />
      <div className="flex flex-row items-center mb-4 px-5 pt-3 w-full justify-center text-center md:justify-start lg:justify-start">
        <h2 className="text-lg md:text-4xl font-bold ml-4 text-gray-800 dark:text-white">{title}</h2>
      </div>
      <p className="mt-2 px-3 pb-3 text-gray-600 dark:text-gray-400 text-center">{description}</p>
    </div>
  );
}