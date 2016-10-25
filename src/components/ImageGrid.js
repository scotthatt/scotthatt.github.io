import React from 'react';
import Image from './Image';
import images from '../data/images';

const ImageGrid = () => (
  <section>
    {
      images.map(image => (
        <Image image={ image.image } />
      ))
    }
  </section>
);

export default ImageGrid;
