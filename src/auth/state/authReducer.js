import initialState from './authInit';
import { AUTHENTICATE, SIGNOUT } from "./authActions";

export default (state = initialState, action) => {
    const {type} = action;

    switch(type) {
        case AUTHENTICATE:
            return {...state, isAuthenticated: true};
        case SIGNOUT:
            return {...state, isAuthenticated: false};
        default:
            return state;
    }
}