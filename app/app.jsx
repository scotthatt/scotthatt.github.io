import React from 'react';
import Router, {DefaultRoute, Link, Route, RouteHandler} from 'react-router';

import jQuery from 'jquery';
global.jQuery = jQuery;
import bootstrap from 'bootstrap';


import Nav from './nav';
import ImageGrid from './image-grid';
import Bio from './bio';
import Exhibitions from './exhibitions';
import Statement from './statement';

class App extends React.Component{
  render() {
    return (
      <div>
        <div className="col-md-3">
          <Nav />
        </div>
        <div className="col-md-9">
          <RouteHandler />
        </div>
      </div>
    );
  }
};

var routes = (
  <Route handler={App} name="app" path="/">
    <DefaultRoute handler={ImageGrid} />
    <Route name="bio" handler={Bio} />
    <Route name="exhibitions" handler={Exhibitions}/>
    <Route name="statement" handler={Statement}/>
  </Route>
);

//bio, exhibition history, artist statement

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById('app'));
});
