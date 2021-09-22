import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

let alertInitialState = true;

function reducer2(state = alertInitialState, action) {
  if (action.type === 'alertClose') {
    state = false;
    return state;
  } else {
    return state;
  }
}

let initialState = [
  { id: 0, name: '멋진 신발', quan: 2 },
  { id: 1, name: '제품22', quan: 4 },
];

function reducer(state = initialState, action) {
  if (action.type === 'ADD_PRODUCT') {
    let found = state.findIndex((data) => {
      return data.id === action.payload.id;
    });

    if (found >= 0) {
      let copy = [...state];
      copy[found].quan++;
      return copy;
    } else {
      let copy = [...state];
      copy.push(action.payload);
      return copy;
    }
  } else if (action.type === 'INCREASE_QUAN') {
    let changeState = [...state];
    changeState[action.payload].quan++;
    return changeState;
  } else if (action.type === 'DECREASE_QUAN') {
    let changeState = [...state];
    changeState[action.payload].quan--;
    return changeState;
  } else {
    return state;
  }
}

let store = createStore(combineReducers({ reducer, reducer2 }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
