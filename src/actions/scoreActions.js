import { SCORE_UPDATE, TIP_UPDATE } from './types';

export const updateScore = (scores) => async dispatch => {
  dispatch({
    type: SCORE_UPDATE,
    payload: {
      carbon: scores[0],
      water: scores[1],
      pounds: scores[2],
      score: scores[3]
    }
  });
}

export const updateTip = (tip) => async dispatch => {
  dispatch({
    type: TIP_UPDATE,
    payload: tip
  });
}
