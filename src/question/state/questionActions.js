import * as fakeAPI from '../../_DATA';

export const LOAD_QUESTIONS = 'LOAD_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const SAVE_QUESTION = 'SAVE_QUESTION';
export const SAVE_QUESTION_SUCCESS = 'SAVE_QUESTION_SUCCESS';

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

export function saveQuestion({optionOneText, optionTwoText, author}) {
    return (dispatch) => {
        dispatch({
            type: SAVE_QUESTION
        });
        return fakeAPI._saveQuestion({optionOneText, optionTwoText, author}).then(formattedQuestion => {
            dispatch({
                type: SAVE_QUESTION_SUCCESS,
                formattedQuestion
            });
        });
    }
}
