import React from 'react';
import {Link} from 'react-router';

export default class Nav extends React.Component{
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h1>scott hatt</h1>
            <ul>
              <li><Link to="app">Gallery</Link></li>
              <li><Link to="bio">Bio</Link></li>
              <li><Link to="exhibitions">Previous Exhibitions</Link></li>
              <li><Link to="statement">Statement</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};
