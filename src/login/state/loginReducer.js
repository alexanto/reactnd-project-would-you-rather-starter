import { LOAD_USERS } from "./loginActions";
import initialState from './loginInit';

export default (state = initialState, action) => {
    const {type, users} = action;

    switch(type) {
        case LOAD_USERS:
            return {...state, users: Object.values(users)};
        default:
            return state;
    }
}