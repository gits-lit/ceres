import { PROFILE_UPDATE } from '../actions/types';

const initialState = {
  name: '',
  location: '',
  sqFt: 0
}

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_UPDATE:
      return {
        ...state,
        name: action.payload.name,
        location: action.payload.locaton,
        sqFt: action.payload.sqFt
      }
  default:
    return state;
  }
};

export default ProfileReducer;
