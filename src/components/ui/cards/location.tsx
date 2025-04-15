import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

interface LocationCardProps {
  title: string;
    lat: number;
    lng: number;
}


delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const LocationCard = ({ title, lat, lng }: LocationCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 w-full mb-8">
      <MapContainer center={[lat, lng]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>
            {title}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationCard;