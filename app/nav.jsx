import React from 'react';
import {Link} from 'react-router';

export default class Nav extends React.Component{
  render() {
    return (
          <div className="col-md-12">
            <h1 id="name">scott hatt</h1>
            <ul className="list-unstyled">
              <li><Link to="app">Gallery</Link></li>
              <li><Link to="bio">Bio</Link></li>
              <li><Link to="exhibitions">Previous Exhibitions</Link></li>
              <li><Link to="statement">Statement</Link></li>
            </ul>
          </div>
    );
  }
};
