import React, { Component } from 'react';

import Nav from './Nav';
import ImageGrid from './ImageGrid';

export default class App extends Component {
  render() {
    return (
      <main className='wrapper'>
        <Nav />
        <ImageGrid />
      </main>
    );
  }
}
