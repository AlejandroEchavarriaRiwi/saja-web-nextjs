import dynamic from 'next/dynamic';

interface LocationCardProps {
  title: string;
  lat: number;
  lng: number;
}

// Cargamos el componente del mapa sin SSR
const MapLeaflet = dynamic(() => import('../../MapLeaflet'), {
  ssr: false, // Desactiva SSR
});

const LocationCard: React.FC<LocationCardProps> = ({ title, lat, lng }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 w-full mb-8">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h2>
      <MapLeaflet lat={lat} lng={lng} />
    </div>
  );
};

export default LocationCard;