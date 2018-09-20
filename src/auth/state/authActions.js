export const AUTHENTICATE = 'AUTHENTICATE';
export const SIGNOUT = 'SIGNOUT';

export function authenticate(userId) {
    return {
        type: AUTHENTICATE,
        userId
    }
}

export function signOut() {
    return {
        type: SIGNOUT
    }
}