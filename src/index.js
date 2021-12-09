import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { createStore, applyMiddleware } from 'redux'
import { reducer } from './Reducers/reducer'
import logger from 'react-logger'
import thunk from 'react-thunk'

const store = createStore(reducer, applyMiddleware(logger, thunk))

const rootElement = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
      <App />,
    </Provider>,
    rootElement
);
