import * as fakeAPI from '../../_DATA';

export const LOAD_USERS = 'LOAD_USERS';

export function loadUsers() {

        return (dispatch) => {
            return fakeAPI._getUsers().then(users => {
                dispatch({
                    type: LOAD_USERS,
                    users
                });
            });
        }

}

