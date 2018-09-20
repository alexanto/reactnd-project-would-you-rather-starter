import initialState from './authInit';
import { AUTHENTICATE, SIGNOUT } from "./authActions";

export default (state = initialState, action) => {
    const {type, userId} = action;

    switch(type) {
        case AUTHENTICATE:
            sessionStorage.setItem('authenticatedUser', userId);
            return {...state, isAuthenticated: true, authenticatedUser: userId};
        case SIGNOUT:
            sessionStorage.removeItem('authenticatedUser');
            return {...state, isAuthenticated: false};
        default:
            return state;
    }
}