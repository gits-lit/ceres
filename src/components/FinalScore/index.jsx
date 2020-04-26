import React from 'react';

import logo from '../../assets/icon.svg';
import './style.less';

const FinalScore = props => {
  let name = {}
  if (props.score > 0) {
    name = 'Great Score! Keep at it!';
  }
  else if (props.score === 0) {
    name = 'You can definitely keep improving, I believe in you!';
  }
  else {
    name = "Definitely take Ceros's advice into consideraton";
  }
  return (
    <div className="finalscore">
      <img src={logo} alt={logo} />
      <div className="col">
        <h2>Overall Ceres Score: <span className="score">{props.score}</span></h2>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default FinalScore;
