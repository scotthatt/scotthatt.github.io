import React from 'react';
import { Link } from 'react-router';
import Image from './Image';
import images from '../data/images';

function orderImages(a, b) {
  if (a.order < b.order) {
    return -1;
  }
  if (a.order > b.order) {
    return 1;
  }
  return 0;
}

const ImageGrid = () => (
  <section>
    {
      images.sort(orderImages).map(image => (
        <Link><Image image={ image.image } /></Link>
      ))
    }
  </section>
);

export default ImageGrid;
