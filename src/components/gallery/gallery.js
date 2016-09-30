import React, { PropTypes } from 'react';
import './gallery.scss';

export const Gallery = ({ data }) => (
  <div className="container">
    <div className="row galleryContainer">
      <div className="galleryHeader">
      </div>
      <div className="container gallery">
        <div className="row">
          {
            data && data.map(item =>
              <div key={item} className="col-lg-6 col-md-6 col-xs-12">
                <div className="imgContainer">
                  <img src={item} alt="item" />
                </div>
              </div>
            )
          }
        </div>
      </div>
      <div className="galleryFooter">
      </div>
    </div>
  </div>
);

Gallery.propTypes = {
  data: PropTypes.array
};
