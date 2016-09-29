import React, { PropTypes } from 'react';

export const TripSelector = (trips) => {
  const tripsSelector = trips.trips.trips.map((trip, index) => (
    <div key={index}>
      <h2>{trip.title}</h2>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">
        {tripsSelector}
      </div>
    </div>
  );
};

TripSelector.propTypes = {
  trips: PropTypes.array
};
