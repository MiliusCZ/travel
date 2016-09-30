import React, { PropTypes } from 'react';
import { TripSelector } from 'components';
import { connect } from 'react-redux';

export const Homepage = ({ trips }) => (
  <div>
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

