import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function MapScreen({ onBack }) {
  const locations = [
    { name: "Hyderabad", position: [17.385, 78.4867] },
    { name: "Bengaluru", position: [12.9716, 77.5946] },
  ];

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <button
        onClick={onBack}
        style={{
          position: "absolute",
          zIndex: 1000,
          margin: 10,
          padding: "8px 14px",
          cursor: "pointer",
        }}
      >
        Back
      </button>

      <MapContainer center={[17.385, 78.4867]} zoom={6} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {locations.map((loc, index) => (
          <Marker key={index} position={loc.position}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapScreen;
