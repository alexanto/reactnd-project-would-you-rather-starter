import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom';
import NotFound from './notfound/NotFound';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="app">
            <Switch>
              <Route path="*" render={()=><NotFound/> } />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
