import { SCORE_UPDATE, TIP_UPDATE } from './types';

export const updateScore = (crops) => async dispatch => {

  const scores = ['', '', '', '']
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

export const updateTip = (crops) => async dispatch => {
  const tip = ''

  dispatch({
    type: TIP_UPDATE,
    payload: tip
  });
}
