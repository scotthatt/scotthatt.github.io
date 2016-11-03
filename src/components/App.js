import React, { Component, PropTypes } from 'react';
import Nav from './Nav';

export default class App extends Component {
  render() {
    return (
      <main className='wrapper'>
        <Nav />
        { this.props.children }
      </main>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};
