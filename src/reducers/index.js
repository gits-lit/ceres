import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import CropReducer from './CropReducer';
import ProfileReducer from './ProfileReducer';
import ScoreReducer from './ScoreReducer';

export default history =>
  combineReducers({
    crops: CropReducer,
    profile: ProfileReducer,
    score: ScoreReducer,
    router: connectRouter(history),
  });
