import { combineReducers } from 'redux';
// import { socketReducer } from './socket/reducer'
import { authReducer as user } from './auth/reducer'
import { questReducer as quest } from './quest/reducer'
import { gameReducer as game } from './socket/reducer'
import {navigateReducer as navigate} from './navigate/reducer'
const rootReducer = combineReducers({
  user,
  quest,
  game,
  navigate
});

export default (state, action) => {
  return rootReducer(state, action);
};