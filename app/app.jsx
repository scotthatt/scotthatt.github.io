import React from 'react';
import Router, {DefaultRoute, Link, Route, RouteHandler} from 'react-router';

import jQuery from 'jquery';
global.jQuery = jQuery;
import bootstrap from 'bootstrap';

// var DefaultRoute = Router.DefaultRoute;
// var Link = Router.Link;
// import Route = Router.Route;
// import RouteHandler from Router.RouteHandler;

var routes = (
  <Route handler={HelloWorld} path="/" />
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler />, document.getElementById('app'));
});

class HelloWorld extends React.Component{

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h1>Hello World</h1>
          </div>
        </div>
      </div>
    );
  }
};


React.render(<HelloWorld />, document.getElementById('app'));
