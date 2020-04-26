import React from 'react';

import './style.less';

const ItemCard = props => {
  return (
    <div className="itemcard">
      <h1>🥔</h1>
      <div className="col">
        <h2>
          <span className="score">3</span> | Potato
        </h2>
        <div className="button_row">
          <button className="left"><span className="text">+</span></button>
          <button className="right"><span className="text">-</span></button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
