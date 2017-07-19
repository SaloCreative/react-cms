import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import { routeCodes } from 'routes';

export default class Navigation extends Component {

    toggleList(label) {
        let text = label;
        if (this.props.navigation.menuOpen) {
            return this.props.setNavigationState({ menuOpen: false, icon: 'bars' });
        }
        return this.props.setNavigationState({ menuOpen: true, icon: 'times' });
    }

    clicked(label) {
        return this.props.setNavigationState({ menuOpen: false, icon: 'bars' });
    }

    render() {
        return (
            <div className='navigation-overlay'>
                <a className='navigation-overlay__toggle' onClick={ () => this.toggleList() }>
                    <FontAwesome name={ this.props.navigation.icon } size='2x' />Menu
                </a>
            </div>
        );
    }
}

Navigation.propTypes = {
    setNavigationState: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
};
