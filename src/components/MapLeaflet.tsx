import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Configurar iconos de marcador
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
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
        <Popup>Ubicación: [{lat}, {lng}]</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapLeaflet;
