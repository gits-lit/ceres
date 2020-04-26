import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import './style.less';
import Logo from '../../assets/logo.svg';
import Strawberry from '../../assets/strawberry.png';
import RightBar from '../../assets/right_bar.svg';
import SecondPage from '../SecondPage';

const HomePage = props => {

  function scrolltobottom() {
    scroll.scrollToBottom();
  }

  return (
    <div>
      <div className="home-page">
        <div className="flex_wrapper">
        <img className="logo" src={Logo} />

          <div className="left">
            <div className="text_wrap">
              <p className="tag">garden simulator</p>
              <h1>Ceres</h1>
              <h2>Grow the garden of</h2>
              <br />
              <h2>your dreams</h2>
              <h3>predict, analyze, simulate</h3>
                <div className="button" onClick={scrolltobottom}>
                  <h2>grow now</h2>
                </div>
            </div>
          </div>
          <div className="right">
            <img className="strawberry" src={Strawberry} />
            <img className="rightbar" src={RightBar} />
          </div>
        </div>
      </div>
      <SecondPage name="pg2" />
    </div>
  );
};

export default HomePage;
