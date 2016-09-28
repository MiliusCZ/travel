import React, { PropTypes } from 'react';
import { TopImage, TripMap, Gallery } from 'components';

export const Trip = (topImageData, mapData, photos) => (
  <div>
    <TopImage data={topImageData} />
    <TripMap data={mapData} />
    <Gallery data={photos} />
  </div>
);

Trip.propTypes = {
  topImageData: PropTypes.object,
  mapData: PropTypes.array,
  photos: PropTypes.array
};

export default Trip;
