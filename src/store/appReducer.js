import { combineReducers } from 'redux';
// import { socketReducer } from './socket/reducer'
import { authReducer as user } from './auth/reducer'
import { bookReducer as book } from './book/reducer'
// import { gameReducer as game } from './socket/reducer'

const rootReducer = combineReducers({
  user,
  book
  // quest,
  // game
});

export default (state, action) => {
  return rootReducer(state, action);
};