import React, {useEffect, useState} from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import teslaData from "./data/tesla-sites.json"
import "leaflet/dist/leaflet.css";
import './App.css';

import L from "leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

function App() {
    
const filteredStations = teslaData.filter(tsla => tsla.address.country === "Sweden")
    
  return (
   
    <MapContainer center={[20.039422, 17.794818]} zoom={3} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
          
          {filteredStations.map(tsla => (
              < Marker
                  key={tsla.id}
                  position={[
                      tsla.gps.latitude,
                      tsla.gps.longitude
                  ]}
               />          
          ))}
          
      <Marker position={[4.389955, 18.548918]}>
        <Popup>
          It starts <br /> here!
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;
