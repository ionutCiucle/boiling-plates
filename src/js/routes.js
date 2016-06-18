import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Shell from './components/shell';
import About from './components/about';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route
          path="/"
          component={Shell}
        >
          <Route path="about" component={About}/>
        </Route>
      </Router>
    );
  }
}

export default Routes;
