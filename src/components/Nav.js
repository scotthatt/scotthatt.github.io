import React from 'react';
import { Link } from 'react-router';
import Menu from './Menu';

const Nav = () => (
  <nav>
    <h1><Link to='/'>Scott Hatt</Link></h1>
    <Menu />
  </nav>
);

export default Nav;
