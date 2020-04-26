import { ADD_CROP, REMOVE_CROP, WEEK_UPDATE } from './types';

export const addCrop = (name, week) => async dispatch => {
  dispatch({
    type: ADD_CROP,
    payload: {
      name: name,
      week: week
    }
  });
}

export const removeCrop = (name) => async dispatch => {
  dispatch({
    type: REMOVE_CROP,
    payload: {
      name: name,
    }
  });
}

export const changeWeek = ( week) => async dispatch => {
  dispatch({
    type: WEEK_UPDATE,
    payload: week
  });
}
