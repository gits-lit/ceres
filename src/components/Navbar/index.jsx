import React from 'react';
import { NavLink } from 'react-router-dom';

import logo2 from '../../assets/logo2.svg';
import './style.less';

const Navbar = props => {
  return (
    <div className="nav">
      <div className="wrapper">
        <NavLink to="/">
          <img className="logo2" src={logo2} alt="logo" />
        </NavLink>
        <div className="items">
          <h1>analytics</h1>
          <h1>home</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
