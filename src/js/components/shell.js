import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import MainNav from './main-nav';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleGoToAbout = this.handleGoToAbout.bind(this);
  }

  handleGoToAbout() {
    browserHistory.push('/about');
  }

  render() {
    const mainNavItems = [{
      icon: 'list-ul', id: '2', desc: 'My Orders'
    }, {
      icon: 'user', id: '1', desc: 'My Account'
    }];

    return (
      <div className="app-container">
        <MainNav
          brand="My Brand"
          items={mainNavItems}
        />
        <div className="main-stage">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Home.displayName = 'Home';

export default Home;