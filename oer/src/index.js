import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { Provider, } from 'react-redux';

import {reducer as bookReducer} from './reducer/allBooks'
import App from './App';

const allReducers = combineReducers({bookReducer});

const store = createStore(allReducers)
ReactDOM.render(
    <Provider store= {store}>
        <Router>
        <App />
    </Router>    
    </Provider>,
    document.getElementById('root')
    );
