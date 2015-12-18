import React from 'react';
import {Link} from 'react-router';
import {images} from '../data/images'

class Thumbnail extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    let image = this.props.image;
    let src = 'assets/images/thumbnails/' + image.image + '-thmb.jpg';
    let href = '/image/' + image.link;
    return (
      <div className='col-lg-2 col-md-3 col-sm-4 col-xs-12 box'>
        <Link to={href}>
          <img src={src} className='img-responsive' />
        </Link>
      </div>
    );
  }
}


export default class ImageGrid extends React.Component{
  constructor(props) {
    super(props);
  }
  filterImageByGallery(images) {
    return _.sortBy(_.filter(images, {gallery: [this.props.params.galleryId]}), 'order');
  }
  createKeyPath(title) {
    return _.kebabCase(title);
  }
  render() {
    var self = this;
    return (
      <div className='col-md-12'>
      {
        _.map(this.filterImageByGallery(images), function(image) {
          var key = self.createKeyPath(image.title);
          image.link = key;
          return (<Thumbnail image={image} key={key} />);
        })
      }
      </div>
    );
  }
};
