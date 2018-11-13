import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import rootReducers from './store/modules/index';
import {Provider} from 'react-redux';
// import loggerMiddleware from './lib/loggerMiddleware';
import {createLogger} from 'redux-logger'

const logger = createLogger(); 

const store = createStore(rootReducers, applyMiddleware(logger)); //합쳐진 reducer
console.log(store.getState());

ReactDOM.render(
    <Provider store = {store}>
        <App /> 
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
