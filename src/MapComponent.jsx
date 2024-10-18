import { useEffect, useRef } from "react";
import "leaflet";
import "leaflet/dist/leaflet.css";
import "esri-leaflet";
import { vectorBasemapLayer } from "esri-leaflet-vector"; //arcgis basemap styles

const MapComponent = () => {
  const mapRef = useRef(null);
  useEffect(() => {
    if (mapRef.current === null) {
      mapRef.current = L.map("map").setView([38.9072, -77.0369], 13); //latitude, longitude
      vectorBasemapLayer("arcgis/community", {
        token: import.meta.env.VITE_ARCGIS_API_KEY
      }).addTo(mapRef.current);
    }
  }, []);

  return <div id="map" style={{ height: "70vh"}}></div>;
};

export default MapComponent;