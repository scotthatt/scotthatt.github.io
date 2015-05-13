import React from 'react';
import {Link} from 'react-router';
import {images} from '../data/images'

class ImageGridDisplay extends React.Component{
  render() {
      var url = "./assets/images/" + this.props.image.file;
      var link = "/image/"+this.props.page
      return (
        <div className="col-md-3">
          <Link to={link}><image src={url} className="img-responsive" /></Link>
        </div>
      );
  }
}


export default class ImageGrid extends React.Component{
  render() {
    var iArr = Object.keys(images);
    return (
          <div className="col-md-12">
          {
            iArr.map(function(i) {
              return(<ImageGridDisplay image={images[i]} page={i} key={i} />);
            })
          }
          </div>
    );
  }
};
