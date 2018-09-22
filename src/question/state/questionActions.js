import * as fakeAPI from '../../_DATA';

export const LOAD_QUESTIONS = 'LOAD_QUESTIONS';

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