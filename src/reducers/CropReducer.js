import { ADD_CROP, REMOVE_CROP, WEEK_UPDATE } from '../actions/types';

const initialState = {
  tomatoes: 0,
  potatoes: 0,
  onions: 0,
  carrots: 0,
  cabbages: 0,
  bellPeppers: 0,
  crops: [null, null, null, null, null, null, null, null, null],
  currentWeek: 0,
  currentIndex: 0
}

const CropReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CROP:
      if (state.currentIndex >= 9) {
        return {...state}
      }
      let newCrops = state.crops;
      newCrops[state.currentIndex] = [action.payload.name, action.payload.week]
      let currentIndex = newCrops.length;

      // Find next available current index
      for (let j = 0 ; j < newCrops.length; j++ ) {
        if ( newCrops[j] === null ) {
          currentIndex = j
        }
      }
      return {
        ...state,
        [action.payload.name]: state[action.payload.name] + 1,
        crops: newCrops,
        currentIndex: currentIndex
      }
    case REMOVE_CROP:
      let newCrops2 = state.crops;
      let currentIndex2 = state.currentIndex;
      if (state[action.payload.name] === 0) {
        return {
          ...state
        }
      }
      for(let i = 0; i < newCrops2.length; i++ ) {
        console.log('hi')
        if (newCrops2[i] != null && newCrops2[i][0] === action.payload.name) {
          newCrops2[i] = null;
          currentIndex2 = i;
          console.log('test remove')
          break;
        }
      }
      return {
        ...state,
        [action.payload.name]: state[action.payload.name] - 1,
        crops: newCrops2,
        currentIndex: currentIndex2
      }
    case WEEK_UPDATE:
      return {
        ...state,
        currentWeek: action.payload
      }
  default:
      return state;
  }
};

export default CropReducer;
