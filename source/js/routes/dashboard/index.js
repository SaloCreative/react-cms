import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import DashboardTiles from 'components/dashboard-tiles';

export default class Dashboard extends Component {

  render() {
    return (
      <div className='page__dashboard'>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <div className='dashboard__wrapper'>
          <DashboardTiles { ...this.props } development={ process.env.NODE_ENV === 'development' } />
        </div>
      </div>
    );
  }
}

