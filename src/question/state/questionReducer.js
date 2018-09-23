import { ANSWER_QUESTION, LOAD_QUESTIONS, SAVE_QUESTION, SAVE_QUESTION_SUCCESS } from "./questionActions";
import initialState from './questionInit';

export default (state = initialState, action) => {
    const {type, questions, user, id, answer, formattedQuestion} = action;

    switch(type) {
        case LOAD_QUESTIONS:
            return {...state, questions: Object.values(questions)};
        case ANSWER_QUESTION:
            const indexOfQuestion = state.questions.findIndex(question => question.id === id);
            const newQuestion = Object.assign({}, state.questions[indexOfQuestion]);
            newQuestion[answer].votes = state.questions[indexOfQuestion][answer].votes.concat([user]);
            const newQuestions = state.questions.slice(0, indexOfQuestion).concat(newQuestion).concat(state.questions.slice(indexOfQuestion + 1));
            return {
                ...state,
                questions: newQuestions
            };
        case SAVE_QUESTION:
            return {...state, saveInProgress: true};
        case SAVE_QUESTION_SUCCESS:
            return {...state, saveInProgress: false, questions: state.questions.concat(formattedQuestion)};
        default:
            return state;
    }
}