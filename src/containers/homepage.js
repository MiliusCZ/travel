import React, { Component, PropTypes } from 'react';
import { TripSelector } from 'components';
import { connect } from 'react-redux';
/*
export const Homepage = (trips) => (
  <div>
    <TripSelector trips={trips} />
  </div>
);

Homepage.propTypes = {
  trips: PropTypes.array
};

const mapStateToProps = state => ({
  trips: state.app.trips
});

export default connect(mapStateToProps)(Homepage);
*/

export class Homepage extends Component {
  static propTypes = {
    data: PropTypes.object
  };

  render() {
    const trips = this.props.data && this.props.data.trips || [];

    return (
      <div>
        <TripSelector trips={trips} />
      </div>
    );
  }
}

function mapStateToProperties(state) {
  return {
    data: state.app.data 
  };
}

export default connect(mapStateToProperties)(Homepage);

