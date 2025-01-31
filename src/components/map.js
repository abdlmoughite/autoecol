import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./styleMap.css";
import Contact from "./ContactForm";

const customIcon = new L.Icon({
  iconUrl:
    "/image/LogoDark.png",
  iconSize: [65, 50], // حجم الأيقونة
  className: "rounded-icon",
});

const BranchMap = () => {
  // المواقع ديال الفروع
  const branchLocations = [
    { id: 1, lat: 33.5731, lng: -7.5898, name: "فرع الدار البيضاء" }, // Casablanca
    { id: 2, lat: 31.6295, lng: -7.9811, name: "فرع مراكش" }, // Marrakech
    { id: 3, lat: 35.7595, lng: -5.8339, name: "فرع طنجة" }, // Tanger
    { id: 4, lat: 30.4278, lng: -9.5981, name: "فرع أكادير" }, // Agadir
  ];

  return (
    <div>
      <h2 className="h2-map-cantact">Si vous avez <span>des questions</span></h2>
      <div className="container-map-contact">
        <Contact />
        <MapContainer
          center={[33.5731, -7.5898]} // مركز الخريطة (الدار البيضاء - المغرب)
          zoom={6}
          style={{ height: "500px", width: "50%" }} // حجم الخريطة
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; Map contributors'
          />
          {branchLocations.map((branch) => (
            <Marker
              key={branch.id}
              position={[branch.lat, branch.lng]}
              icon={customIcon}
            >
              <Popup>{branch.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default BranchMap;
