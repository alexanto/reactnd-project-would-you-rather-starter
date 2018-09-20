import { LOAD_USERS } from "./Actions";
import initialState from './Init';

export default (state = initialState, action) => {
    const {type, users} = action;

    switch(type) {
        case LOAD_USERS:
            return {...state, users}
        default:
            return state;
    }
}