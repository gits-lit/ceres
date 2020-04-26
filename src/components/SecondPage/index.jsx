import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.less';
import tri from '../../assets/tri.svg';
import numbers from '../../assets/numbers.svg';
import potato from '../../assets/potato.png';

const SecondPage = props => {
  return (
    <div className="second-page">
      <div className="flex_wrapper">
        <div className="left">
          <div className="signup-card">
            <h1>Sign Up</h1>
            <div className="fields" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
              <h2>Garden Name</h2>
              <input type="text" className="input" autofocus />
              <h2>Where do you live?</h2>
              <input type="text" className="input" autofocus />
              <h2>
                How much space do you have? <span style={{ fontSize: '1rem' }}>(sqft)</span>
              </h2>
              <input type="text" className="input" autofocus />
              <NavLink to="/garden">
                <div className="button">
                  <h2>begin</h2>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="right">
          <img className="tri" src={tri} alt={'triangle'} />
          <img className="numbers" src={numbers} alt="num" />
          <img className="potato" src={potato} alt="potato" />
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
