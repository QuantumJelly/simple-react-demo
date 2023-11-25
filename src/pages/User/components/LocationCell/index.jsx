import React from 'react';
import './index.css';

const LocationCell = ({ location }) => {
  const { city, country } = location;
  return (
    <span className="location-cell">{`${city}, ${country}`}</span>
  );
};

export default LocationCell;
