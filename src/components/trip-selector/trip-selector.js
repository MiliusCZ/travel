import React, { PropTypes } from 'react';

export const TripSelector = (trips) => {
  if (!trips)
    return (<div></div>);

  const tripsSelector = trips.map((trip, index) => (
    <div>
      <h2>{trip.heading}</h2>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">
        {tripSelector}
      </div>
    </div>
  )
};

TripSelector.propTypes = {
  trips: PropTypes.array
};
