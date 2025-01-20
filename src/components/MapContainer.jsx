import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
    const position = [46.752855, 14.287658]; //Koordinaten Pulst

    return (
        <MapContainer center={position} zoom={13} style={{ height: "400px", width: "80%", margin: "80px auto" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>Schnitzereien Müller </Popup>
            </Marker>
        </MapContainer>
    );
}

export default MapComponent;
