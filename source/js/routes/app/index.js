import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import { Alerts } from '@salocreative/react-redux-alerts';

import Header from 'components/headers/primary';
import Auth from 'actions/auth/auth';
import AuthWrapper from 'containers/auth';
import { alertStyles } from 'constants/config';
import { routeCodes } from 'routes';

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

        <div className={ `page ${ this.props.navigation.menuOpen ? 'menu-open' : '' }` }>
          <AuthWrapper { ...this.props } >
            <div id='menu' className={ this.props.navigation.menuOpen ? 'menu-open' : '' }>
              <div className='menu__wrapper'>
                <ul className='main-menu'>
                  <li className='divider'>Main</li>
                  <li><Link to={ routeCodes.DASHBOARD } activeClassName='active'><FontAwesome name='desktop' /> Dashboard</Link></li>
                  <li><Link><FontAwesome name='pencil' /> Pages</Link></li>
                  <li><Link><FontAwesome name='commenting-o' /> Blog</Link></li>
                  <li>
                    <Link to={ routeCodes.PRODUCT.INDEX } activeClassName='active'><FontAwesome name='shopping-cart' /> Products</Link>
                    <ul className='main-menu__dropdown'>
                      <li><Link>Categories</Link></li>
                      <li><Link>Tags</Link></li>
                      <li><Link>Dimensions</Link></li>
                    </ul>
                  </li>
                  <li><Link><FontAwesome name='image' /> Asset Library</Link></li>
                  <li className='divider'>CRM</li>
                  <li><Link><FontAwesome name='paper-plane' /> Forms</Link></li>
                  <li><Link><FontAwesome name='bar-chart-o' /> Leads</Link></li>
                  <li><Link><FontAwesome name='users' /> Contacts</Link></li>
                  <li><Link><FontAwesome name='tasks' /> Tasks</Link></li>
                  <li className='divider'>System</li>
                  <li><Link><FontAwesome name='cogs' /> Settings</Link></li>
                </ul>
              </div>
            </div>
          </AuthWrapper>
          <Alerts alerts={ this.props.systemAlerts } colours={ alertStyles } />
          { this.children() }
        </div>
      </div>
    );
  }
}