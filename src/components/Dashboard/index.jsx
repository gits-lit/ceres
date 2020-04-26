import React from 'react';

import './style.less';

import ItemCard from '../../containers/ItemCard';

const Dashboard = props => {
  return (
    <div className="dashboard">
      <div className="dashboard_wrapper">
        <h1 className="title">
          Step 1: <span className="title_1">Select your produce</span>
        </h1>
        <ItemCard emoji="🥔" id="potatoes" name="Potatoes"/>
        <ItemCard emoji="🍅" id="tomatoes" name="Tomatoes"/>
        <ItemCard emoji="🥭" id="onions" name="Onions"/>
        <ItemCard emoji="🥕" id="carrots" name="Carrots"/>
        <ItemCard emoji="🥬" id="cabbages" name="Cabbages"/>
        <ItemCard emoji="🌶`" id="bellPeppers" name="Bell Peppers"/>
      </div>
    </div>
  );
};

export default Dashboard;
