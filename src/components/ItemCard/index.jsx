import React from 'react';

import './style.less';

const ItemCard = props => {
  return (
    <div className="itemcard">
      <h1>{props.emoji}</h1>
      <div className="col">
        <h2>
          <span className="score">{props.value}</span> | {props.name}
        </h2>
        <div className="button_row">
          <button className="left" onClick={props.decrement}><span className="text">-</span></button>
          <button className="right" onClick={props.increment}><span className="text">+</span></button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
