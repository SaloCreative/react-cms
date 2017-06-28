import React, { Component, PropTypes } from 'react';

import Dropdown from 'components/core/dropdown';

export default class AccountDropdown extends Component {

    dropdownLabel() {
        return (
            <div className='account-dropdown__label'>
                <span className='sr-only'>Account</span>
                <div className='account-dropdown__userImage'>
                    <img src={ this.props.user.image } />
                </div>
            </div>
        );
    }

    dropdownItems() {
        return (
            <div className='account-dropdown__options'>
                <div className='dropdown__item'>
                    <span>My account</span>
                </div>
                <div className='dropdown__item'>
                    <span>Settings</span>
                </div>
                <div className='dropdown__item dropdown__button' onClick={ this.props.logOutUser.bind(null) }>
                    <span>Logout</span>
                </div>
            </div>
        );
    }

    render() {
        return (
            <Dropdown label={ this.dropdownLabel() } items={ this.dropdownItems() } class='account-dropdown' />
        );
    }
}

AccountDropdown.propTypes = {
    children: PropTypes.any,
    user: PropTypes.object.isRequired,
    logOutUser: PropTypes.func
};
