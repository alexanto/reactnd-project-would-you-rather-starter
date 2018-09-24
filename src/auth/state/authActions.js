export const AUTHENTICATE = 'AUTHENTICATE';
export const SIGNOUT = 'SIGNOUT';
export const SET_PROTECTED_PATH = 'SET_PROTECTED_PATH';

export function authenticate(userId) {
    sessionStorage.setItem('authenticatedUser', userId);
    return {
        type: AUTHENTICATE,
        userId
    }
}

export function signOut() {
    sessionStorage.removeItem('authenticatedUser');
    return {
        type: SIGNOUT
    }
}

export function setProtectedInitialPage(path) {
    return {
        type: SET_PROTECTED_PATH,
        path
    }
}