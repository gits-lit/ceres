import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCrop, removeCrop } from '../actions/cropActions';

import ItemCard from '../components/ItemCard';

const ItemCardContainer = props => {
  const addCrop = () => {
    props.addCrop(props.id, props.week);
  }

  const removeCrop = () => {
    props.removeCrop(props.id);
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
  value: state.crops
})

export default connect(
  mapStateToProps,
  { addCrop, removeCrop }
)(ItemCardContainer);
