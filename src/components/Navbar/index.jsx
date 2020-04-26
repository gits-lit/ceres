import React from 'react';

import logo from '../../assets/logo.svg';
import './style.less';

const Navbar = props => {
  return (
    <div className="nav">
      <div className="wrapper">
        <img className="logo" src={logo} alt="logo" />
        <div className="items">
          <h1>analytics</h1>
          <h1>home</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
