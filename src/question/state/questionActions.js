import * as fakeAPI from '../../_DATA';

export const LOAD_QUESTIONS = 'LOAD_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export function loadQuestions() {
    return (dispatch) => {
        return fakeAPI._getQuestions().then(questions => {
            dispatch({
                type: LOAD_QUESTIONS,
                questions
            });
        });
    }
}
export function answerQuestion({user, id, answer}) {
    return (dispatch) => {
        return fakeAPI._saveQuestionAnswer({authedUser: user, qid: id, answer}).then(result => {
            dispatch({
                type: ANSWER_QUESTION,
                user,
                id,
                answer,
                result
            });
        });
    }
}