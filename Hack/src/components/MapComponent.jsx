import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ safeZones, userLocation }) => {
  useEffect(() => {
    const map = L.map('map').setView(userLocation, 13);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    // Add user location marker
    L.marker(userLocation).addTo(map).bindPopup('You are here').openPopup();

    // Add safe zone markers
    safeZones.forEach((zone) => {
      L.marker([zone.latitude, zone.longitude])
        .addTo(map)
        .bindPopup(`Safe Zone: ${zone.rating}`);
    });

    return () => {
      map.remove(); // Clean up the map instance on unmount
    };
  }, [safeZones, userLocation]);

  return <div id="map" style={{ height: '100%', width: '100%' }} />;
};

export default MapComponent;
