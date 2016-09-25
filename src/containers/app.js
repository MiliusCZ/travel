import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './app.css';
import { getUrl } from 'utils/map-utils'
import { loadApp } from 'actions/app';

import {
  Header,
  Footer,
  TopImage,
  TripMap,
  Gallery
} from 'components';

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

export class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    loaded: PropTypes.bool,
    data: PropTypes.object,
    children: PropTypes.object
  };

  componentDidMount() {
    this.props.dispatch(loadApp());
  }

  render() {
    if (!this.props.data.trips) {
      return (
        <div>no data available</div>
      )
    }

    const trip = this.props.data.trips[this.props.params.tripId];

    const topImageData = {
      image: trip.topImage,
      heading: `${trip.title} ${trip.year}`
    };

    const mapData = {
      url: getUrl(trip.places)
    };
    return (
      <div className={styles.container}>
        <div className="container withShadow" style={{ padding: '0' }}>
          <div class="row">
            <Header />
            <TopImage data={topImageData} />
            <TripMap data={mapData} />
            <Gallery data={trip.photos} />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProperties(state) {
  return {
    loaded: state.app.loaded,
    data: state.app.data
  };
}

export default connect(mapStateToProperties)(App);

