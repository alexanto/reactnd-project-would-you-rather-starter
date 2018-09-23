import { LOAD_USERS } from "./loginActions";
import initialState from './loginInit';
import { ANSWER_QUESTION, SAVE_QUESTION_SUCCESS } from "../../question/state/questionActions";

export default (state = initialState, action) => {
    const {type, users, user,id, answer, formattedQuestion} = action;

    switch(type) {
        case LOAD_USERS:
            return {...state, users: Object.values(users)};
        case ANSWER_QUESTION:
            const indexOfUser = state.users.findIndex(item => item.id === user);
            const newUser = Object.assign({}, state.users[indexOfUser]);
            newUser.answers[id] = answer;
            const newUsers = state.users.slice(0, indexOfUser).concat([newUser]).concat(state.users.slice(indexOfUser + 1));
            return {
                ...state,
                users: newUsers
            };
        case SAVE_QUESTION_SUCCESS:
            const authedUserIndex = state.users.findIndex(item => item.id === formattedQuestion.author);
            const newAuthor = Object.assign({}, state.users[authedUserIndex]);
            newAuthor.questions = newAuthor.questions.concat(formattedQuestion.id);
            const newAuthors = state.users.slice(0, authedUserIndex).concat([newAuthor]).concat(state.users.slice(authedUserIndex + 1));
            return {...state, users: newAuthors};
        default:
            return state;
    }
}