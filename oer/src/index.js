import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { Provider, } from 'react-redux';
import thunk from 'redux-thunk';

import {reducer as bookReducer} from './reducer/allBooks'
import App from './App';

const allReducers = combineReducers({
    books: bookReducer,
});

const store = createStore(allReducers, applyMiddleware(thunk))
ReactDOM.render(
    <Provider store= {store}>
        <Router>
        <App />
    </Router>    
    </Provider>,
    document.getElementById('root')
    );
