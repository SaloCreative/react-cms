'use strict';

import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

import { Link } from 'react-router';
import { routeCodes } from 'routes';
import AccountDropdown from 'components/account-dropdown';
import Navigation from 'components/navigation';

export default class Header extends Component {

    render() {
        return (
            <div className='navigation'>
                <div className='navigation__wrapper'>
                    <nav className='navigation__menu'>

                        <Navigation { ...this.props } />

                        <Link className='navigation__logo' to={ routeCodes.DASHBOARD } >
                            <img src='/assets/img/logo.png' />
                        </Link>

                        <div className='navigation__account'>

                            <Link to={ routeCodes.DASHBOARD } className='navigation__notification'>
                                <FontAwesome name='tasks' size='lgr' />
                            </Link>

                            <Link className='navigation__notification'>
                                <FontAwesome name='envelope-o' size='lgr' />
                            </Link>

                            <Link className='navigation__notification'>
                                <FontAwesome name='bell' size='lgr' />
                            </Link>

                            <AccountDropdown { ...this.props } user={ this.props.login.user } />

                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    login: PropTypes.object.isRequired
};