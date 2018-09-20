export const AUTHENTICATE = 'AUTHENTICATE';
export const SIGNOUT = 'SIGNOUT';

export function authenticate() {
    return {
        type: AUTHENTICATE
    }
}

export function signOut() {
    return {
        type: SIGNOUT
    }
}