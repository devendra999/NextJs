"use client"
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  
  // Add other reducers here
});

export default rootReducer;
