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
    <div className="flex flex-col items-center justify-center w-full">
      <MapLeaflet lat={lat} lng={lng} />
    </div>
  );
};

export default LocationCard;