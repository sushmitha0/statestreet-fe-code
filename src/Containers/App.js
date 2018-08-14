
import React, { Component } from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';
/* eslint-disable no-unused-vars */
import Styles from '../Stylesheets/style.css';
import { BrowserRouter as Router, Route, Link, hashHistory, Switch  } from "react-router-dom";
import TransactionsList from './TransactionsList';
import TransactionDetails from './TransactionDetails';
const reducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={hashHistory}>
                    <Switch>
                        <Route exact path="/" component={TransactionsList} />
                        <Route path="/:id" component={TransactionDetails} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

