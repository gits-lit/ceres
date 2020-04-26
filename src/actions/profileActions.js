import { PROFILE_UPDATE } from './types';
import { replace } from 'connected-react-router';

export const updateProfile = (name, location, sqFt) => async dispatch => {
  dispatch({
    type: PROFILE_UPDATE,
    payload: {
      name: name,
      location: location,
      sqFt: sqFt
    }
  });

  dispatch(replace('/garden'));
}
