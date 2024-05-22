import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for marker icons not showing
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent: React.FC = () => {
    const center = [48.8566, 2.3522]; 
    const markerPosition = [48.8328, 2.3205]; 

    return (
        <MapContainer center={center} zoom={13} style={{ height: '224px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='© OpenStreetMap contributors'
            />
            <Marker position={markerPosition}>
                <Popup>
                    96 Rue Didot, 75014 Paris
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;
