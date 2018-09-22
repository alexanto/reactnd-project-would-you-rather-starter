import { ANSWER_QUESTION, LOAD_QUESTIONS } from "./questionActions";
import initialState from './questionInit';

export default (state = initialState, action) => {
    const {type, questions, user, id, answer} = action;

    switch(type) {
        case LOAD_QUESTIONS:
            return {...state, questions: Object.values(questions)};
        case ANSWER_QUESTION:
            const indexOfQuestion = state.questions.findIndex(question => question.id === id);
            const newQuestion = state.questions[indexOfQuestion];
            newQuestion[answer].votes = state.questions[indexOfQuestion][answer].votes.concat([user]);
            const newQuestions = state.questions.slice(0, indexOfQuestion).concat(newQuestion).concat(state.questions.slice(indexOfQuestion + 1));
            return {
                ...state,
                questions: newQuestions
            };
        default:
            return state;
    }
}