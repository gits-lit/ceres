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
          Ceres utilizes datasets from the USDA, UNESCO, and NCBI to factors in reverse carbon footprint, water usage
          for product yield, and to calculate an overall score.{' '}
          <a href="https://docs.google.com/document/d/1xclN4QxHVW9QVxDyzwLrv_QnZFF18N5YirohxzBDIz8/edit">
            View our sources here.
          </a>
        </p>
        <StatsCard emoji="💧" />
        <StatsCard emoji="😷" />
        <StatsCard emoji="😋" />
        <FinalScore />
      </div>
    </div>
  );
};

export default Analytics;
