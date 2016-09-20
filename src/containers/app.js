import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './app.css';
import { getUrl } from 'utils/map-utils'

import { 
  Header, 
  Footer, 
  FakeComponent, 
  TopImage, 
  TripMap, 
  Gallery 
} from 'components';

import topImage from 'assets/images/top-image.png';
import gallery from 'assets/images/gallery.png';
import map from 'assets/images/map.png';
import cuba from 'assets/images/cuba.jpg';

import cuba1 from 'assets/images/cuba/cuba-1.jpg';
import cuba2 from 'assets/images/cuba/cuba-2.jpg';
import cuba3 from 'assets/images/cuba/cuba-3.jpg';
import cuba4 from 'assets/images/cuba/cuba-4.jpg';
import cuba5 from 'assets/images/cuba/cuba-5.jpg';
import cuba6 from 'assets/images/cuba/cuba-6.jpg';

const App = ({ children }) => {
  const data = {
    image: cuba,
    heading: 'Cuba 2016'
  };

  const mapData = {
    heading: 'Map',
    url: getUrl(['Havana', 'Vinales', 'Moron, Cuba', 'Matanza, Cuba', 'Cienfuegos, Cuba'])
  };

  const galleryData = [
    cuba1,
    cuba2,
    cuba3,
    cuba4,
    cuba5,
    cuba6
  ];

  return (
  <div className={styles.container}>
    <div className="container withShadow" style={{padding: '0'}}>
      <div class="row">
        <Header />
        <TopImage data={data} />
        <TripMap data={mapData} />
        <Gallery data={galleryData} />
        <Footer />
      </div>
    </div>
  </div>
)};

App.propTypes = {
  loaded: PropTypes.bool,
  data: PropTypes.object,
  children: PropTypes.object
}

const mapStateToProps = state => ({
  loaded: state.app.loaded,
    data: state.app.data
});

export default connect(mapStateToProps)(App);
