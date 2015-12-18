import React from 'react';
import {Link, Navigation} from 'react-router';
import {images} from '../data/images';

export default class ImageDetail extends React.Component{
  constructor(props) {
    super(props);
    var key = this.props.params.imageKey;
    var image = _.find(images, function(img) {
      return _.kebabCase(img.title) === key;
    });

    this._clickHandler = this._clickHandler.bind(this);
    this.state = {
      image: image
    }
  }

  _clickHandler(e) {
    this.context.router.goBack();
  }

  render() {
    let image = this.state.image
    let src = 'assets/images/fullSize/' + image.image + '.jpg';
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12 text-right'>
            <h4><a onClick={this._clickHandler}><i className='fa fa-chevron-left'></i> Back</a></h4>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 col-md-offset-2'>
            <img src={src} className='img-responsive fullSize' />
          </div>
          <div className='col-md-4 image-detail'>
            <h2>{image.title}</h2>
            <p class='date'>{image.year}</p>
            <p class='medium'>{image.medium}</p>
            <p class='dimensions'>{image.height} x {image.width}</p>
            <p class='location'>{image.location}</p>
          </div>
        </div>
      </div>
    );
  }
};

ImageDetail.contextTypes = {
  router: React.PropTypes.func
}

ImageDetail.mixins = [Navigation];
