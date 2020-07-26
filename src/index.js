import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const commentsReducer = (state = '', action) => {
  if (action.type === 'SET_COMMENTS') {
    return action.payload;
  } else if (action.type === 'CLEAR_COMMENTS') {
    return '';
  }
  return state;
};

const feelingReducer = (state = '', action) => {
  if (action.type === 'SET_FEELING') {
    return action.payload;
  } else if (action.type === 'CLEAR_FEELING') {
    return '';
  }
  return state;
};

const supportReducer = (state = '', action) => {
  if (action.type === 'SET_SUPPORT') {
    return action.payload;
  } else if (action.type === 'CLEAR_SUPPORT') {
    return '';
  }
  return state;
};

const understandingReducer = (state = '', action) => {
  if (action.type === 'SET_UNDERSTANDING') {
    return action.payload;
  } else if (action.type === 'CLEAR_UNDERSTANDING') {
    return '';
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    commentsReducer,
    feelingReducer,
    understandingReducer,
    supportReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
