import React from 'react';
import {Link, Navigation} from 'react-router';
import {images} from '../data/images';

export default class ImageDetail extends React.Component{
  constructor(props){
    super(props);
  }

  checkImage(key) {
    if (!images.hasOwnProperty(key)) {
      this.context.router.transitionTo("/");
    }
  }

  render() {
    this.checkImage(this.props.params.imageKey);
    var image = images[this.props.params.imageKey]
    var url = "./assets/images/" + image.file;
    return (
      <div className="col-md-12">
        <div className="pull-right"><Link to="app"><i className="fa fa-times fa-2x" /></Link></div>
        <div>
          <div className="col-md-6">
          <img src={url} className="img-responsive" />
          </div>
          <h1>{image.title}<br /><small>{image.year}</small></h1>
          <h3>{image.medium}</h3>
        </div>
      </div>
    );
  }
};

ImageDetail.contextTypes = {
  router: React.PropTypes.func
}

ImageDetail.mixins = [Navigation];
