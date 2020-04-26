import React from 'react';

import './style.less';

const StatsCard = props => {
  return (
    <div className="statscard">
      <h1 className="icon">💧</h1>
      <div className="col">
        <h2>Water Usage</h2>
        <h3>23 Gal</h3>
      </div>
    </div>
  );
};

export default StatsCard;
