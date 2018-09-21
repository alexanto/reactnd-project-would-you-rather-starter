import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import authenticationReducer from './auth/state/authReducer';
import { composeWithDevTools } from "redux-devtools-extension";
import usersReducer from './login/state/Reducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    authentication: authenticationReducer,
    users: usersReducer
});


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
