import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Shell from './components/shell';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route
          path="/"
          component={Shell}
        >
        </Route>
      </Router>
    );
  }
}

export default Routes;
