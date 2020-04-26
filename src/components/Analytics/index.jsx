import React from 'react';

import StatsCard from '../StatsCard';
import FinalScore from '../FinalScore';

import './style.less';

const Analytics = props => {
  return (
    <div className="analytics">
      <div className="analytics_wrapper">
        <h1 className="title">
          Step 2: <span className="title_1">Optimize your garden with data</span>
        </h1>
        <p className="exp">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web
          designs. The passage is attributed to an unknown typesetter in the 15th century who is thought
        </p>
        <StatsCard />
        <StatsCard />
        <StatsCard />
        <FinalScore />
      </div>
    </div>
  );
};

export default Analytics;
