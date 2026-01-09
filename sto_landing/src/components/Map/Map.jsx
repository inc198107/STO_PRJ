import React from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Polyline, Marker } from 'react-leaflet';

export default function LeafMap({ route, center, position, ...props }) {
  
  return (
    <MapContainer
      center={center}
      zoom={15}
      maxZoom={18}
      attributionControl={true}
      zoomControl={true}
      doubleClickZoom={true}
      scrollWheelZoom={false}
      dragging={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {route && <Polyline color='#d64b0a' positions={route} weight={4} />}
      {position && <Marker position={position} />}
    </MapContainer>
  );
}

LeafMap.propTypes = {
  route: PropTypes.arrayOf(PropTypes.array),
  center: PropTypes.array.isRequired,
  position: PropTypes.array
}
