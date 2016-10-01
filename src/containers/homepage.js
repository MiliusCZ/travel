import React, { PropTypes } from 'react';
import { TripSelector, TopImage } from 'components';
import { connect } from 'react-redux';

import travelTopImage from 'assets/images/travel-topimage.jpg';

export const Homepage = ({ trips }) => (
  <div>
    <TopImage data={{ image: travelTopImage, heading: 'Travel photo gallery' }} />
    <TripSelector trips={trips} />
  </div>
);

Homepage.propTypes = {
  trips: PropTypes.array
};

const mapStateToProps = state => ({
  trips: state.trips.data
});

export default connect(mapStateToProps)(Homepage);

