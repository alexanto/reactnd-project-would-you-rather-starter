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

const routes = [
    {
        path: "/",
        exact: true,
        navBar: () => <NavigationBar/>,
        main: () => <Home/>
    },
    {
        path: "/login",
        navBar: () => null,
        main: () => <LoginPage/>
    },
    {
        path: "/signup",
        navBar: () => null,
        main: () => <SignUpPage/>
    },
    {
        path: "/leaderboard",
        navBar: () => <NavigationBar/>,
        main: () => <LeaderBoardPage/>
    },
    {
        path: "/createquestion",
        navBar: () => <NavigationBar/>,
        main: () => <CreateQuestion/>
    },
    {
        path: "/question/:id",
        navBar: () => <NavigationBar/>,
        main: () => <PollPage/>
    },
    {
        path: "*",
        navBar: () => <NavigationBar/>,
        main: () => <NotFound/>
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
                      <Route
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
