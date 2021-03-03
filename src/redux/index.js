import {configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import {counterReducer} from './reducers/counterReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
    reducer: {
        counterReducer
    }
})