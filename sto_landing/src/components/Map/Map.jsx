import React from "react";
import { Map as LeafletMap, TileLayer, Polyline, Marker } from "react-leaflet";

export default function LeafMap({ ...props }) {
  const center = [49.82658, 23.97589];
  const polyline = [
    [49.82412, 23.977298],
    [49.827695, 23.97347],
    [49.828145, 23.974521],
    [49.82792, 23.974838],
    [49.82782, 23.97509],
    [49.82793, 23.97519],
    [49.82799, 23.97506],
  ];

  return (
    <LeafletMap
      center={center}
      zoom={15}
      maxZoom={18}
      attributionControl={true}
      zoomControl={true}
      doubleClickZoom={true}
      scrollWheelZoom={false}
      dragging={true}
      animate={true}
      easeLinearity={0.35}
      trackResize={true}
    >
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" // colored maps
      />
      <Polyline color="#d64b0a" positions={polyline} weight={4} />
      <Marker position={[49.82799, 23.97506]} />
    </LeafletMap>
  );
}
