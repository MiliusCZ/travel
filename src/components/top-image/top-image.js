import React, { PropTypes } from 'react';
import './top-image.scss';

export const TopImage = ({ data }) => (
  <div className='container withShadow'>
    <div className='row topImage'>
      <h1 className='overlayHeading'>{data.heading}</h1>
      <img src={data.image} alt='footer' width='100%' />
    </div>
  </div>
);

TopImage.propTypes = {
    data: PropTypes.object
};
