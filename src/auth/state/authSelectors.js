import {createSelector} from 'reselect';

const authenticationSelector = state => state.authentication;

export const getIsAuthenticated = createSelector(
    authenticationSelector,
    state => state.isAuthenticated
);