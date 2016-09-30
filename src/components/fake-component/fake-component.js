import React, { PropTypes } from 'react';

export const FakeComponent = ({ image }) => (
  <div className="container">
    <div className="row">
      <img src={image} alt="footer" width="100%" />
    </div>
  </div>
);

FakeComponent.propTypes = {
  image: PropTypes.string
};
