import React from 'react';

import './style.less';
import Logo from '../../assets/logo.svg';
import Strawberry from '../../assets/strawberry.png';
import Page1 from '../../assets/page1.svg';



const HomePage = props => {
  return (
    <div className="home-page">

      <div className="left">
        <img src={Logo}/>
        <h3 className="highlight">garden simulator</h3>
        <h1 className="h1">Ceres</h1>
        <h2 className="h2">Grow the garden of your dreams</h2>
        <h4 className="h4">predict, analyze, simulate</h4>
        <a href="">grow now</a>
      </div>

      <img className="page1" src={Page1}/>
      <img className="strawberry" src={Strawberry}/>


    </div>
  );
};

export default HomePage;
