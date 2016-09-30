import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './trip-selector.scss';

const SelectorItem = (item) => (
  <div key={item.id} className="col-lg-6 col-md-6 col-xs-12">
    <div className="imgContainer text-center selectorItem">
      <h3>{`${item.title} ${item.year}`}</h3>
      <Link to={`/trip/${item.id}`}><img src={item.topImage} alt="item" /></Link>
      <div className="description">{`${item.photos.length} photos`}</div>
    </div>
  </div>
);

SelectorItem.propTypes = {
  item: PropTypes.object,
};

export const TripSelector = ({ trips }) => (
  <div className="container">
    <div className="row galleryContainer">
      <div className="galleryHeader">
      </div>
      <div className="container gallery">
        <div className="row">
          {
            trips && trips.map(SelectorItem)
          }
        </div>
      </div>
      <div className="galleryFooter">
      </div>
    </div>
  </div>
);

TripSelector.propTypes = {
  trips: PropTypes.array
};


