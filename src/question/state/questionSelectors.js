import {createSelector} from 'reselect';
import memoize from 'lodash.memoize'

const questionsSelector = state => state.questions;

export const getQuestions = createSelector(
    questionsSelector,
    state => state.questions
);

export const getUnansweredByUser = createSelector(
    state => state.questions.questions,
    questions => memoize(
        user => questions.filter(question => !question.optionOne.votes.includes(user) && !question.optionTwo.votes.includes(user)).sort((a,b) => b.timestamp - a.timestamp)
    )
);

export const getAnsweredByUser = createSelector(
    state => state.questions.questions,
    questions => memoize(
        user => questions.filter(question => question.optionOne.votes.includes(user) || question.optionTwo.votes.includes(user)).sort((a,b) => b.timestamp - a.timestamp)
    )
);