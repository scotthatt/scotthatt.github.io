import React, { Component } from 'react';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      menuVisible: false,
    };
  }

  clickHandler = () => {
    this.setState({ menuVisible: !this.state.menuVisible });
  }

  render() {
    const classes = this.state.menuVisible ? 'menu' : 'menu closed';

    return (
      <div className={ classes }>
        <button onClick={ this.clickHandler } />
        <ul>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </div>
    );
  }
}

export default Menu;
