import React, { PropTypes } from 'react';
import { TopImage, TripMap, Gallery } from 'components';
import { connect } from 'react-redux';
import { getUrl } from 'utils/map-utils';
import _ from 'lodash';

import 'assets/images/cuba.jpg';
import 'assets/images/cuba/cuba-1.jpg';
import 'assets/images/cuba/cuba-2.jpg';
import 'assets/images/cuba/cuba-3.jpg';
import 'assets/images/cuba/cuba-4.jpg';
import 'assets/images/cuba/cuba-5.jpg';
import 'assets/images/cuba/cuba-6.jpg';

import 'assets/images/spain.jpg';
import 'assets/images/spain/spain-1.jpg';
import 'assets/images/spain/spain-2.jpg';
import 'assets/images/spain/spain-3.jpg';
import 'assets/images/spain/spain-4.jpg';
import 'assets/images/spain/spain-5.jpg';
import 'assets/images/spain/spain-6.jpg';
import 'assets/images/spain/spain-7.jpg';
import 'assets/images/spain/spain-8.jpg';
import 'assets/images/spain/spain-9.jpg';
import 'assets/images/spain/spain-10.jpg';
import 'assets/images/spain/spain-11.jpg';
import 'assets/images/spain/spain-12.jpg';
import 'assets/images/spain/spain-13.jpg';
import 'assets/images/spain/spain-14.jpg';

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
  params: PropTypes.object
};

const mapStateToProps = state => ({
  trips: state.trips.data
});

export default connect(mapStateToProps)(Trip);
