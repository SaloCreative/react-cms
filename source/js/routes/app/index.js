import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { Alerts } from '@salocreative/react-redux-alerts';

import Header from 'components/headers/primary';
import Auth from 'actions/auth/auth';
import AuthWrapper from 'containers/auth';
import { alertStyles } from 'constants/config';

export default class App extends Component {

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
    return (
      <div className='App'>
        <Helmet titleTemplate='%s | Salo CMS' />

        <AuthWrapper { ...this.props } >
          <Header { ...this.props } >
            <h1 className='navigation__logo'>Salo CMS</h1>
          </Header>
       </AuthWrapper>

        <div className='page'>
          <Alerts alerts={ this.props.systemAlerts } colours={ alertStyles } />
          { this.children() }
        </div>
      </div>
    );
  }
}