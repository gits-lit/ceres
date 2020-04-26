import React from 'react';

import logo from '../../assets/icon.svg';
import './style.less';

const FinalScore = props => {
  return (
    <div className="finalscore">
      <img src={logo} alt={logo} />
      <div className="col">
        <h2>Overall Ceres Score: <span className="score">232</span></h2>
        <h3>Very good! Yummy owo</h3>
      </div>
    </div>
  );
};

export default FinalScore;
