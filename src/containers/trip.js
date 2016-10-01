import React, { PropTypes } from 'react';
import { TopImage, TripMap, Gallery } from 'components';
import { connect } from 'react-redux';
import { getUrl } from 'utils/map-utils';
import _ from 'lodash';

export const Trip = (props) => {
  const trip = _.find(props.trips, { id: props.params.tripId });
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
      <Gallery data={trip.photos} />
    </div>
  );
};

Trip.propTypes = {
  trips: PropTypes.array,
  params: PropTypes.object,
  dispatch: PropTypes.func,
  gallery: PropTypes.array
};

const mapStateToProps = state => ({
  trips: state.trips.data
});

export default connect(mapStateToProps)(Trip);
