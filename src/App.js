import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom';
import './App.scss';
import NotFound from './notfound/NotFound';
import Home from './homepage/Home';
import LoginPage from './signup-and-login/LoginPage';
import SignUpPage from './signup-and-login/SignUpPage';
import CreateQuestion from './question/CreateQuestion';
import LeaderBoardPage from './leaderboard/LeaderBoardPage';
import NavigationBar from './navigation/NavigationBar';
import PollPage from './question/PollPage';
import PrivateRoute from './auth/PrivateRoute';

const routes = [
    {
        path: "/",
        exact: true,
        navBar: () => <NavigationBar/>,
        main: () => <Home/>,
        private: true
    },
    {
        path: "/login",
        navBar: () => null,
        main: () => <LoginPage/>,
        private: false
    },
    {
        path: "/signup",
        navBar: () => null,
        main: () => <SignUpPage/>,
        private: false
    },
    {
        path: "/leaderboard",
        navBar: () => <NavigationBar/>,
        main: () => <LeaderBoardPage/>,
        private: true
    },
    {
        path: "/createquestion",
        navBar: () => <NavigationBar/>,
        main: () => <CreateQuestion/>,
        private: true
    },
    {
        path: "/question/:id",
        navBar: () => <NavigationBar/>,
        main: () => <PollPage/>,
        private: true
    },
    {
        path: "*",
        navBar: () => <NavigationBar/>,
        main: () => <NotFound/>,
        private: false
    }
];


class App extends Component {
  render() {
    return (
      <Router>
            <div className="app">
                <Switch>
                  {routes.map((route, index) => (
                      <Route
                          key={index}
                          path={route.path}
                          exact={route.exact}
                          component={route.navBar}
                      />
                  ))}
                </Switch>
                <Switch>
                  {routes.map((route, index) => (
                      route.private
                          ?   <PrivateRoute
                              key={index}
                              path={route.path}
                              exact={route.exact}
                              component={route.main}
                                />
                          : <Route
                          key={index}
                          path={route.path}
                          exact={route.exact}
                          component={route.main}
                      />
                  ))}
                </Switch>
            </div>
      </Router>
    );
  }
}

export default App;
