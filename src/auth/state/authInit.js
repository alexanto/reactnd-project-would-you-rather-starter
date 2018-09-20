const authUser = sessionStorage.getItem('authenticatedUser') || null;
const isAuthenticated = authUser ? true : false;

export default {
    isAuthenticated: isAuthenticated,
    authenticatedUser: authUser,
    protectedInitialPage: '/'
}