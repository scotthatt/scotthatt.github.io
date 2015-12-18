import React from 'react';
import Router, {DefaultRoute, Link, Route, RouteHandler, Redirect} from 'react-router';

import jQuery from 'jquery';
global.jQuery = require('jquery');
import bootstrap from 'bootstrap';
import _ from 'lodash';
global._ = _;


import Nav from './nav';
import ImageGrid from './image-grid';
import ImageDetail from './image-detail';
import Bio from './bio';
import Exhibitions from './exhibitions';
import Statement from './statement';
import {images} from '../data/images'

class App extends React.Component{
  getGalleries(images) {
    let galleries = _.pluck(images, 'gallery');
    let merged = [];
    merged = merged.concat.apply(merged, galleries);
    return _.uniq(merged);
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Nav galleries={this.getGalleries(images)} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <RouteHandler />
          </div>
        </div>
      </div>
    );
  }
};

var routes = (
  <Route handler={App} name="app" path="/">
    <Redirect from="/" to="/gallery/2015" />
    <Route name='gallery' path="/gallery/:galleryId" handler={ImageGrid} />
    <Route name="bio" handler={Bio} />
    <Route name="exhibitions" handler={Exhibitions}/>
    <Route name="statement" handler={Statement}/>
    <Route name="image-detail" path="/image/:imageKey" handler={ImageDetail} />
  </Route>
);

//bio, exhibition history, artist statement

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.getElementById('app'));
});
