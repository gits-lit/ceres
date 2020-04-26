import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

import './style.less';
import Field from '../Field';
import Navbar from '../Navbar';
import Tips from '../Tips';
import SliderCard from '../SliderCard';
import Dashboard from '../Dashboard';
import Analytics from '../../containers/Analytics';

import tips from '../../assets/tips.svg';
import time from '../../assets/time.svg';
import bg2 from '../../assets/bg-page3.svg';

const Garden = props => {

  const [crops, setCrop] = useState([]);
  return (
    <div className="garden">
      <Navbar />
      <div className="flex_wrapper">
        <div className="side_div">
          <div className="side_wrapper">
            <div className="c_wrapper">
              <Canvas>
                <Suspense fallback={null}>
                  <ambientLight />
                  <pointLight intensity={0.7} position={[10000, 10000, 10000]} />
                  <Field crops={props.crops}/>
                </Suspense>
              </Canvas>
            </div>
            <div className="side_row">
              <div className="ceres_text">
                <img src={tips} alt={tips} />
                <Tips />
              </div>
              <div className="slider_text">
                <div style={{ height: '43px' }}>
                  <img style={{ marginTop: '14px' }} src={time} alt={time} />
                </div>
                <SliderCard />
              </div>
            </div>
          </div>
        </div>
        <div className="right_div">
          <div className="right_wrapper">
            <h1>{props.gardenName}<span className="location">| Location: {props.locationName}</span></h1>
            <Dashboard />
            <Analytics />
          </div>
        </div>
      </div>
      <img className="bg" src={bg2} alt="bg" />
    </div>
  );
};

export default Garden;
