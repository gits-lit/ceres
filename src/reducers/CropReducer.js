import { ADD_CROP, REMOVE_CROP, WEEK_UPDATE } from '../actions/types';

const initialState = {
  tomatoes: 0,
  potatoes: 0,
  onions: 0,
  carrots: 0,
  cabbage: 0,
  bellPepper: 0,
  crops: [null, null, null, null, null, null, null, null, null],
  currentWeek: 0,
  currentIndex: 0
}

const CropReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CROP:
      let newCrops = state.crops;
      newCrops[state.currentIndex] = [action.payload.name, action.payload.week]
      return {
        ...state,
        [action.payload.name]: state[action.payload.name][0] + 1,
        crops: newCrops,
        currentIndex: state.currentIndex + 1
      }
    case REMOVE_CROP:
      let newCrops2 = state.crops;
      for(let i = 0; i < newCrops.length; i++ ) {
        if (newCrops2[i] === action.payload.name) {
          newCrops2[i] = null
          break;
        }
      }

      return {
        ...state,
        [action.payload.name]: state[action.payload.name][0] - 1,
        crops: newCrops2
      }
    case WEEK_UPDATE:
      return {
        ...state,
        week: action.payload
      }
  default:
      return state;
  }
};

export default CropReducer;
