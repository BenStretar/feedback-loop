import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

//Redux Imports
import { createStore, combineReducers, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'

const reviewItems = (state = [], action) => {
    if(action.type === `GET_REVIEW`) {
        return action.payload;
    }
    return state;
}

const feelingReducer = (state = [], action) => {
    if(action.type === 'FEELING') {
        return action.payload;
    }
    return state;
}

const understandingReducer = (state = [], action) => {
    if(action.type === 'UNDERSTANDING') {
        return action.payload;
    }
    return state;
}

const supportReducer = (state = [], action) => {
    if(action.type === 'SUPPORT') {
        return action.payload;
    }
    return state;
}

const commentsReducer = (state =[], action) => {
    if(action.type === 'COMMENT') {
        return action.payload;
    }
    return state
}

const reduxStore = createStore(
    combineReducers({
        reviewItems,
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
