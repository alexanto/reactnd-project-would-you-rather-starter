import initialState from './authInit';
import { AUTHENTICATE, SET_PROTECTED_PATH, SIGNOUT } from "./authActions";

export default (state = initialState, action) => {
    const {type, userId, path} = action;

    switch(type) {
        case AUTHENTICATE:
            return {...state, isAuthenticated: true, authenticatedUser: userId};
        case SIGNOUT:
            return {...state, isAuthenticated: false, authenticatedUser: null, protectedInitialPage: '/'};
        case SET_PROTECTED_PATH:
            return {...state, protectedInitialPage: path}
        default:
            return state;
    }
}