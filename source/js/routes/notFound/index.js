import React, { Component } from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';

import Icon from '@lushdigital/manager-icons';

export default class NotFound extends Component {
  render() {
    return (
        <div className='error-message'>
          <Helmet>
            <title>404 Error</title>
          </Helmet>

          <div className='error-message__container'>
            <h1 className='error-message__title'>404</h1>
            <h2 className='error-message__text'>Sorry, we can't find the page you are looking for...</h2>
            <p className='error-message__support'>Perhaps one of the links below will point you in the direction.</p>
            <div className='error-navigation--links'>


              <Link to='/' className='navigation-overlay__link navigation-overlay__link--inverse' title='name' onClick={ () => this.clicked('Add') }>
                <span className='navigation-overlay__icon'><Icon icon='profile' size='35px' fill='#fff' /></span>
                <span className='navigation-overlay__link-text'>My Account</span>
              </Link>

              <Link to='/' className='navigation-overlay__link navigation-overlay__link--inverse' onClick={ () => this.clicked('Edit') }>
                <span className='navigation-overlay__icon'><Icon icon='edit' size='35px' fill='#fff' /></span>
                <span className='navigation-overlay__link-text'>Settings</span>
              </Link>

            </div>
          </div>
        </div>
    );
  }
}