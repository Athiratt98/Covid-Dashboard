import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapView({ stateDataList }) {
  const defaultPosition = [20.5937, 78.9629];
  return (
    <MapContainer center={defaultPosition} zoom={5} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stateDataList.map((stateData, index) => (
        <Marker
          key={index}
          position={[stateData.lat, stateData.lng]}
        >
          <Popup>
            <strong>{stateData.state}</strong><br />
            Total Cases: {stateData.totalCases}<br />
            Active Cases: {stateData.activeCases}<br />
            Recovered: {stateData.recovered}<br />
            Deaths: {stateData.deaths}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;