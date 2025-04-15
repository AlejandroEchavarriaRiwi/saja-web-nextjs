import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Configurar iconos de marcador
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapLeafletProps {
  lat: number;
  lng: number;
}

const mapContainerStyle = {
  height: '400px',
  width: '100%',
};

const MapLeaflet: React.FC<MapLeafletProps> = ({ lat, lng }) => {
  return (
    <MapContainer center={[lat, lng]} zoom={13} style={mapContainerStyle}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, lng]}>
        <Popup>Aquí estamos!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapLeaflet;
