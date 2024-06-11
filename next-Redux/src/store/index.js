"use client"

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers'; // Assuming you have your reducers

export const store = createStore(rootReducer, composeWithDevTools());

