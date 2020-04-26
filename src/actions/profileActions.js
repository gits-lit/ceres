import { PROFILE_UPDATE } from './types';

export const updateProfile = (name, location, sqFt) => async dispatch => {
  dispatch({
    type: PROFILE_UPDATE,
    payload: {
      name: name,
      location: location,
      sqFt: sqFt
    }
  });
}
