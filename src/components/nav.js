import React from 'react';
import {Link} from 'react-router';

export default class Nav extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className='navbar navbar-default navbar-fixed-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#nav-collapse' aria-expanded='false'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <a className='navbar-brand' href='#'>scott hatt</a>
          </div>
          <div className='collapse navbar-collapse' id='nav-collapse'>
            <ul className='nav navbar-nav'>
              <li className='dropdown'>
                <a href='#' className='dropdown-toggle' data-toggle='dropdown' role='button'>
                  Galleries
                  <span className='caret'></span>
                </a>
                <ul className='dropdown-menu'>
                  <li><Link to='/gallery/2015'>2015</Link></li>
                  <li><Link to='/gallery/2014'>2014</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

// <li><Link to='bio'>Bio</Link></li>
// <li><Link to='exhibitions'>Previous Exhibitions</Link></li>
// <li><Link to='statement'>Statement</Link></li>
