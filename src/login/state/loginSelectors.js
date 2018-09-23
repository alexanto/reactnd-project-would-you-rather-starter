import {createSelector} from 'reselect';

const usersSelector = state => state.users;

export const getUsers = createSelector(
    usersSelector,
    state => state.users
);

export const getUserLeaderBoard = createSelector(
    usersSelector,
    state => {
        return state.users.map(user => {
            return {
                name: user.name,
                id: user.id,
                avatarURL: user.avatarURL,
                answered: Object.keys(user.answers).length,
                created: user.questions.length
            }
        }).sort((a, b) => (b.answered + b.created) > (a.answered + a.created))
    }
);