import { LOAD_USERS } from "./loginActions";
import initialState from './loginInit';
import { ANSWER_QUESTION } from "../../question/state/questionActions";

export default (state = initialState, action) => {
    const {type, users, user,id, answer} = action;

    switch(type) {
        case LOAD_USERS:
            return {...state, users: Object.values(users)};
        case ANSWER_QUESTION:
            const indexOfUser = state.users.findIndex(item => item.id === user);
            const newUser = state.users[indexOfUser];
            newUser.answers[id] = answer;
            const newUsers = state.users.slice(0, indexOfUser).concat([newUser]).concat(state.users.slice(indexOfUser + 1));
            return {
                ...state,
                users: newUsers
            };
        default:
            return state;
    }
}