"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useEffect, useState } from "react";

const customMarkerIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

export const Map = () => {
  const position: [number, number] = [52.27831114831534, 21.12762613481187];
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    isMounted && (
      <div className="h-[400px] rounded-lg overflow-hidden shadow-lg z-0">
        <MapContainer
          center={position}
          zoom={15}
          style={{ height: "100%", width: "100%", zIndex: 0 }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customMarkerIcon}>
            <Popup>
              Centrum Rozwoju Dziecka &ldquo;Zgrane Dzieciaki&ldquo;
              <br />
              ul. Kościelna 9<br />
              05-091 Ząbki
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    )
  );
};
