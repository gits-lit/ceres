import React from 'react';

import './style.less';

const StatsCard = props => {
  return (
    <div className="statscard">
      <h1 className="icon">{props.emoji}</h1>
      <div className="col">
        <h2>{props.name}</h2>
        <h3>{props.val} {props.unit}</h3>
      </div>
    </div>
  );
};

export default StatsCard;
