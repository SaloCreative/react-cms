import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class Dashboard extends Component {

  render() {
    return (
      <div className='page__dashboard'>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <div className='dashboard__wrapper'>

        </div>
      </div>
    );
  }
}

