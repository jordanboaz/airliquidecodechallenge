import {combineReducers} from 'redux';

import {todoReducer as todos} from './todos/reducers';

const rootReducer = combineReducers({
  todos,
});

export default rootReducer;
