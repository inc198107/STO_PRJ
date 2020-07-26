import React from 'react';
import PropTypes from 'prop-types';
import { Map as LeafletMap, TileLayer, Polyline, Marker } from 'react-leaflet';

export default function LeafMap({ route, center, position, ...props }) {
  
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
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' // colored maps
      />
      <Polyline color='#d64b0a' positions={route} weight={4} />
      <Marker position={position} />
    </LeafletMap>
  );
}

LeafMap.propTypes = {
  route: PropTypes.arrayOf(PropTypes.array),
  center: PropTypes.array.isRequired,
  position: PropTypes.array
}
