import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCrop, removeCrop } from '../actions/cropActions';
import { updateScore, updateTip } from '../actions/scoreActions';
import { getData, getAdvice } from '../utils.js';

import ItemCard from '../components/ItemCard';

const ItemCardContainer = props => {
  const addCrop = () => {
    props.addCrop(props.id, props.week);

    const data =
    [
      ['potatoes', props.potatoes, Math.floor(props.sqFt / 9)],
      ['tomatoes', props.tomatoes, Math.floor(props.sqFt / 9)],
      ['onions', props.onions, Math.floor(props.sqFt / 9)],
      ['carrots', props.carrots, Math.floor(props.sqFt / 9)],
      ['bellPeppers', props.bellPeppers, Math.floor(props.sqFt / 9)],
      ['cabbages', props.cabbages, Math.floor(props.sqFt / 9)]
    ]
    const returnData = getData(data);
    const returnTip = getAdvice(data);

    let tip = 'Try different plants so I can give you feedback!'
    if (returnTip[0][0] !== null) {
      tip = `${returnTip[0][0]} and ${returnTip[0][1]} do not pair! ${returnTip[0][2]}
      `;
    } else if (returnTip[1][0] !== null) {
      tip = `${returnTip[1][0]} and ${returnTip[1][1]} pair well! ${returnTip[0][2]}`;
    }

    tip = tip.charAt(0).toUpperCase() + tip.slice(1);
    props.updateScore(returnData);
    props.updateTip(tip);
  }

  const removeCrop = () => {
    props.removeCrop(props.id);
    const data =
    [
      ['potatoes', props.potatoes, Math.floor(props.sqFt / 9)],
      ['tomatoes', props.tomatoes, Math.floor(props.sqFt / 9)],
      ['onions', props.onions, Math.floor(props.sqFt / 9)],
      ['carrots', props.carrots, Math.floor(props.sqFt / 9)],
      ['bellPeppers', props.bellPeppers, Math.floor(props.sqFt / 9)],
      ['cabbages', props.cabbages, Math.floor(props.sqFt / 9)]
    ]
    const returnData = getData(data);
    const returnTip = getAdvice(data);

    let tip = 'Try different plants so I can give you feedback!'
    if (returnTip[0][0] !== null) {
      tip = `${returnTip[0][0]} and ${returnTip[0][1]} do not pair! ${returnTip[0][2]}
      `;
    } else if (returnTip[1][0] !== null) {
      tip = `${returnTip[1][0]} and ${returnTip[1][1]} pair well! ${returnTip[0][2]}`;
    }

    tip = tip.charAt(0).toUpperCase() + tip.slice(1);
    props.updateScore(returnData);
    props.updateTip(tip);
  }

  return (
    <ItemCard
      name={props.name}
      increment={addCrop}
      decrement={removeCrop}
      value={props.value[props.id]}
      emoji={props.emoji}
    />
  );
}

const mapStateToProps = state => ({
  week: state.crops.currentWeek,
  value: state.crops,
  potatoes: state.crops.potatoes,
  tomatoes: state.crops.tomatoes,
  onions: state.crops.onions,
  carrots: state.crops.carrots,
  bellPeppers: state.crops.bellPeppers,
  cabbages: state.crops.cabbages,
  sqFt: state.profile.sqFt
})

export default connect(
  mapStateToProps,
  { addCrop, removeCrop, updateScore, updateTip }
)(ItemCardContainer);
