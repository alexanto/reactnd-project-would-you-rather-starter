import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom';
import './App.scss';
import NotFound from './notfound/NotFound';
import Home from './homepage/Home';
import LoginPage from './login/LoginPage';
import CreateQuestion from './question/CreateQuestion';
import LeaderBoardPage from './leaderboard/LeaderBoardPage';
import NavigationBar from './navigation/NavigationBar';
import PollPage from './question/PollPage';
import PrivateRoute from './auth/PrivateRoute';
import { connect } from "react-redux";
import { loadUsers } from "./login/state/loginActions";

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
        exact: true,
        navBar: () => null,
        main: () => <LoginPage/>,
        private: false
    },
    {
        path: "/leaderboard",
        exact: true,
        navBar: () => <NavigationBar/>,
        main: () => <LeaderBoardPage/>,
        private: true
    },
    {
        path: "/add",
        exact: true,
        navBar: () => <NavigationBar/>,
        main: () => <CreateQuestion/>,
        private: true
    },
    {
        path: "/question/:id",
        exact: true,
        navBar: () => <NavigationBar/>,
        main: () => <PollPage/>,
        private: true
    },
    {
        path: "*",
        navBar: () => <NavigationBar/>,
        main: () => <NotFound/>,
        private: true
    }
];


class App extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(loadUsers());
    }

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

export default connect()(App);
