import {createStore, combineReducers} from 'redux';

import {todoReducer as todos} from './todos/reducers';

const rootReducer = combineReducers({
  todos,
});

const store = createStore(rootReducer);

export {store};
