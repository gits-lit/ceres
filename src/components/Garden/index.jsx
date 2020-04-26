import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

import './style.less';
import Field from '../Field';
import Navbar from '../Navbar';
import Tips from '../Tips';
import Slider from '../Slider';

import tips from '../../assets/tips.svg';
import time from '../../assets/time.svg';
import bg2 from '../../assets/bg-page3.svg';

const Garden = props => {
  return (
    <div className="garden">
      <Navbar />
      <div className="side_div">
        <div className="side_wrapper">
          <div className="c_wrapper">
            <Canvas>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Field />
            </Canvas>
          </div>
          <div className="side_row">
            <div className="ceres_text">
              <img src={tips} alt={tips} />
              <Tips />
            </div>
            <div className="slider_text">
              <div style={{ height: '43px' }}>
                <img style={{ marginTop: '14px'}}src={time} alt={time} />
              </div>
              <Slider />
            </div>
          </div>
        </div>
      </div>
      <img className="bg" src={bg2} alt="bg" />
    </div>
  );
};

export default Garden;
