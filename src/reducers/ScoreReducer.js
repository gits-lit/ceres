import { SCORE_UPDATE, TIP_UPDATE } from '../actions/types';

const initialState = {
  carbon: '',
  water: '',
  pounds: '',
  score: '',
  tip: ''
}

const ScoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SCORE_UPDATE:
      return {
        ...state,
        carbon: action.payload.carbon,
        water: action.payload.water,
        pounds: action.payload.pounds,
        score: action.payload.score
      }
    case TIP_UPDATE:
      return {
        ...state,
        tip: action.payload
      }
  default:
      return state;
  }
};

export default ScoreReducer;
