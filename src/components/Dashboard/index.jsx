import React from 'react';

import './style.less';

import ItemCard from '../ItemCard';

const Dashboard = props => {
  return (
    <div className="dashboard">
      <div className="dashboard_wrapper">
        <h1 className="title">
          Step 1: <span className="title_1">Select your produce</span>
        </h1>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
};

export default Dashboard;
