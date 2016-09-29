import React, { PropTypes } from 'react';
import { TopImage, TripMap, Gallery } from 'components';
import { connect } from 'react-redux';

export const Trip = (data, props) => {
  const trip = data.trips[props.params.tripId];

  const topImageData = {
    image: trip.topImage,
    heading: `${trip.title} ${trip.year}`
  };

  const mapData = {
    url: getUrl(trip.places)
  };

  return (
    <div>
      <TopImage data={topImageData} />
      <TripMap data={mapData} />
      <Gallery data={photos} />
    </div>
  )
};

Trip.propTypes = {
  data: PropTypes.array,
  props: PropTypes.object
};

const mapStateToProps = state => ({
  data: state.app.data
});

export default connect(mapStateToProps)(Trip);