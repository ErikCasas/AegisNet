import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngTuple } from "leaflet";
import Box from "@mui/material/Box";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const headquarters = [
  { name: "Sede Bogotá", coords: [4.711, -74.0721] },
  { name: "Sede Medellín", coords: [6.2442, -75.5812] },
  { name: "Sede Cali", coords: [3.4516, -76.532] },
  { name: "Sede Barranquilla", coords: [10.9685, -74.7813] },
];

export const MapNodesCenter: React.FC = () => {
  return (
    <Box sx={{ width: "100%", height: 500 }}>
      <MapContainer
        center={[4.711, -74.0721]}
        zoom={6}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {headquarters.map((hq, index) => (
          <Marker
            key={index}
            position={hq.coords as LatLngTuple}
            icon={customIcon}
          >
            <Popup>{hq.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};
