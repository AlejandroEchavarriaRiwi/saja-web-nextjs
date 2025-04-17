"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

type MapProps = {
  lat: number;
  lng: number;
  zoom?: number;
  showMarker?: boolean;
  className?: string;
};

const containerStyle = {
  width: "100%",
  height: "400px",
};

const MyGoogleMap: React.FC<MapProps> = ({
  lat,
  lng,
  zoom = 15,
  showMarker = true,
  className = "",
}) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API!,
  });

  if (loadError) return <p>Error al cargar el mapa</p>;
  if (!isLoaded) return <p>Cargando mapa...</p>;

  return (
    <div className={`rounded-2xl overflow-hidden shadow-md ${className}`}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat, lng }}
        zoom={zoom}
      >
        {showMarker && <Marker position={{ lat, lng }} />}
      </GoogleMap>
    </div>
  );
};

export default React.memo(MyGoogleMap);
