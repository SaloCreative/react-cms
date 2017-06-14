import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Header from 'components/header';
import Auth from 'actions/auth/auth';
import Alerts from 'components/alerts';
import DashboardTiles from 'components/dashboard-tiles';

export default class App extends Component {

  constructor(props) {
    super(props);
    if (Auth.loggedIn() && Object.keys(this.props.login.user).length <= 0) {
      // Make sure user object is available in the state
      this.props.setUserState();
      // Make current date is set
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const text = this.props.routes[this.props.routes.length - 1].name;
    const newText = nextProps.routes[nextProps.routes.length - 1].name;
    if (text !== newText && nextProps.navigation.menuOpen === false) {
      this.props.setNavigationState({ menuOpen: false, managerMenuOpen: false, icon: 'menu', text: newText });
    }
    // return a boolean value always to make sure other updates aren't blocked
    return true;
  }

  children = () => {
    const { children } = this.props;

    // Map for rending child components and adding context which contains
    // child component routing information.
    return React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        ...this.props,
        context: child.props
      });
    });
  };

  render() {
    const navigationItems = <DashboardTiles { ...this.props } />;
    return (
      <div className='App'>
        <Helmet titleTemplate='%s | LUSH Manager' />


        { Auth.loggedIn() &&
          <Header { ...this.props } dashboard={ navigationItems } development={ process.env.NODE_ENV === 'development' }>
            <h1 className='navigation__logo'>Salo CMS</h1>
          </Header>
        }

        <div className='page'>
          <Alerts { ...this.props } />
          { this.children() }
        </div>
      </div>
    );
  }
}