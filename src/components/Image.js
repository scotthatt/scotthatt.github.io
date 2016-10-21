import React, { PropTypes } from 'react';

const Image = ({ image }) => (
  <article>
    <img alt='' src={ `assets/images/thumbnails/${image}` } />
  </article>
);

Image.propTypes = {
  image: PropTypes.string,
};

export default Image;
