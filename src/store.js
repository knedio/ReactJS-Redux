import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middeware = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middeware));

export default store;
