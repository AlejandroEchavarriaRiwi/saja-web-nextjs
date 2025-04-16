import { IconType } from 'react-icons';

interface ServicesCardProps {
  icon: IconType;
  title: string;
  description: string;
}

export default function ServicesCard({
  icon: Icon,
  title,
  description,
}: ServicesCardProps) {
  return (
    <div className="flex flex-col items-center text-center md:text-left lg:text-left justify-center p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex flex-row items-center mb-4 px-5 pt-3 w-full justify-center md:justify-start lg:justify-start">
        <Icon className="w-10 h-10 md:w-16 md:h-16 text-primary" aria-hidden="true" />
        <h2 className="text-lg md:text-3xl lg:text-xl font-bold ml-4 text-gray-800 dark:text-white">{title}</h2>
      </div>
      <p className="mt-2 px-3 pb-3 text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}