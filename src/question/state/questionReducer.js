import { LOAD_QUESTIONS } from "./questionActions";
import initialState from './questionInit';

export default (state = initialState, action) => {
    const {type, questions} = action;

    switch(type) {
        case LOAD_QUESTIONS:
            return {...state, questions: Object.values(questions)};
        default:
            return state;
    }
}