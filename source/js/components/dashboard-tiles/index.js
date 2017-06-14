import React, { Component } from 'react';
import { Link } from 'react-router';
import { routeCodes } from 'routes';
import PropTypes from 'prop-types';

import Icon from '@lushdigital/manager-icons';

export default class DashboardTiles extends Component {
  render() {
    let applicationRoutes;
    if (this.props.development) {
      applicationRoutes = {
        ANALYTICS: 'http://localhost:3004',
        CREATOR: 'http://localhost:3001',
        PEOPLE: 'http://localhost:3003',
        SHOP_MANAGER: 'http://localhost:3002',
        STOCK: 'http://localhost:3005'
      };
    } else {
      const prodUrl = 'lush.com';
      const http = 'https://';
      applicationRoutes = {
        ANALYTICS: `${ http }analytics.${ prodUrl }`,
        CREATOR: `${ http }creator.${ prodUrl }`,
        PEOPLE: `${ http }people.${ prodUrl }`,
        SHOP_MANAGER: `${ http }tills.${ prodUrl }`,
        STOCK: `${ http }stock.${ prodUrl }`
      };
    }
    return (
      <div className='container'>
        <a href={ applicationRoutes.ANALYTICS } className='manager-navigation__link'>
          <span className='manager-navigation__icon'><Icon icon='analytics' size='55px' fill='#000' /></span>
          <span className='manager-navigation__link-text'>Analytics</span>
        </a>
        <a href={ applicationRoutes.CREATOR } className='manager-navigation__link'>
          <span className='manager-navigation__icon'><Icon icon='creator' size='55px' fill='#000' /></span>
          <span className='manager-navigation__link-text'>Creator</span>
        </a>
        <a href={ applicationRoutes.PEOPLE } className='manager-navigation__link'>
          <span className='manager-navigation__icon'><Icon icon='profile' size='45px' fill='#000' /></span>
          <span className='manager-navigation__link-text'>People</span>
        </a>
        <a href={ applicationRoutes.SHOP_MANAGER } className='manager-navigation__link'>
          <span className='manager-navigation__icon'><Icon icon='smartphone-landscape' size='55px' fill='#000' /></span>
          <span className='manager-navigation__link-text'>Shop Manager</span>
        </a>
        <a href={ applicationRoutes.STOCK } className='manager-navigation__link'>
          <span className='manager-navigation__icon'><Icon icon='chart' size='45px' fill='#000' /></span>
          <span className='manager-navigation__link-text'>Stock</span>
        </a>
      </div>
    );
  }
}

DashboardTiles.defaultProps = {
  development: false
};