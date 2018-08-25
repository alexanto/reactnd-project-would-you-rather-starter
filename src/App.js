import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom';
import NotFound from './notfound/NotFound';
import Home from './homepage/Home';
import LoginPage from './login/LoginPage';
import SignUpPage from './signup/SignUpPage';
import CreateQuestionPage from './create-question/CreateQuestionPage';
import LeaderBoardPage from './leaderboard/LeaderBoardPage';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="app">
            <Switch>
              <Route path="/"  exact={true} render={()=><Home/> } />
              <Route path="/login" render={()=><LoginPage/> } />
              <Route path="/signup" render={()=><SignUpPage/> } />
              <Route path="/leaderboard" render={()=><LeaderBoardPage/> } />
              <Route path="/createquestion" render={()=><CreateQuestionPage/> } />
              <Route path="*" render={()=><NotFound/> } />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
