import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initiaState = {};

const middleware = [thunk];

const store = configureStore(
    rootReducer,
    initiaState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;