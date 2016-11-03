import React, { PropTypes } from 'react';

const Image = ({ image, fullSize = false }) => {
  let fullSizeUrl = `./assets/images/fullSize/${image}`;
  let thumbsUrl = `./assets/images/thumbnails/${image}-thmb`;

  if (process.env.NODE_ENV !== 'development') {
    fullSizeUrl = `http://res.cloudinary.com/kellyjandrews/image/upload/v1477231881/${image}`;
    thumbsUrl = `http://res.cloudinary.com/kellyjandrews/image/upload/t_thumbs/v1477231880/${image}`;
  }

  return (
    <figure>
      <img alt='' src={ `${fullSize ? fullSizeUrl : thumbsUrl}.jpg` } />
    </figure>
  );
};

Image.propTypes = {
  image: PropTypes.string,
  fullSize: PropTypes.bool,
};

export default Image;
