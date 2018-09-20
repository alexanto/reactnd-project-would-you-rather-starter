import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import authenticationReducer from './auth/state/authReducer';
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
    authentication: authenticationReducer
});

const store = createStore(reducers, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
