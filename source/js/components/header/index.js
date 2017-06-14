'use strict';

import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router';

import Icon from '@lushdigital/manager-icons';
import AccountDropdown from '@lushdigital/manager-account-dropdown';

import Navigation from 'components/navigation';

export default class Header extends Component {

    render() {
        return (
            <div className='navigation'>
                <div className='navigation__wrapper'>
                    <nav className='navigation__menu'>

                        <Navigation { ...this.props } items={ this.props.dashboard } />

                        <h1 className='navigation__logo'>Salo Creative CMS</h1>

                        <div className='manager-navigation'>
                            <Link to='/' className='manager-navigation__toggle'>
                                <Icon icon='grid' size='21px' fill='#fff' />
                            </Link>
                        </div>

                        <div className='navigation__account'>

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

Header.defaultProps = {
    dashboard: null
};

Header.propTypes = {
    login: PropTypes.object.isRequired,
    dashboard: PropTypes.any
};