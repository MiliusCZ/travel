import React, { PropTypes } from 'react';
import './map.scss';

export const TripMap = ({ data }) => (
  <div className="container">
    <div className="row mapContainer">
      <img src={data.url} alt="map" width="100%" />
    </div>
  </div>
);

TripMap.propTypes = {
  data: PropTypes.object
};
