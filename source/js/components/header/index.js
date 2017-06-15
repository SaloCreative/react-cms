'use strict';

import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router';
import { routeCodes } from 'routes';

import Icon from '@lushdigital/manager-icons';
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

                            <div className='navigation__notification'>
                                <Link to={ routeCodes.DASHBOARD } className='navigation__notification'>
                                    <Icon icon='grid' size='21px' fill='#fff' />
                                </Link>
                            </div>

                            <Link className='navigation__notification'>
                                <Icon icon='notification' size='21px' fill='#fff' />
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
    login: PropTypes.object.isRequired,
};