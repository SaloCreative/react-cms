import React, { Component } from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';

import { routeCodes } from 'routes';
import FontAwesome from 'react-fontawesome';

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

                <Link to={ routeCodes.PAGES } className='navigation-overlay__link navigation-overlay__link--inverse' title='name' onClick={ () => this.clicked('Pages') }>
                    <span className='navigation-overlay__icon'><FontAwesome name='pencil' size='3x' /></span>
                    <span className='navigation-overlay__link-text'>Pages</span>
                </Link>
                <Link to={ routeCodes.PRODUCTS } className='navigation-overlay__link navigation-overlay__link--inverse' onClick={ () => this.clicked('Products') }>
                    <span className='navigation-overlay__icon'><FontAwesome name='shopping-cart' size='3x' /></span>
                    <span className='navigation-overlay__link-text'>Products</span>
                </Link>

            </div>
          </div>
        </div>
    );
  }
}