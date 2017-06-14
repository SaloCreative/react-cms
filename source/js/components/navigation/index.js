import React, { Component, PropTypes } from 'react';

import Icon from '@lushdigital/manager-icons';

export default class Navigation extends Component {

    componentDidMount() {
        // Make sure menu is correct for load
        return this.props.setNavigationState({ menuOpen: false, icon: 'menu', text: this.props.routes[this.props.routes.length - 1].name });
    }

    toggleList(label) {
        let text = label;
        if (this.props.navigation.menuOpen) {
            if (label === 'Menu') {
                text = this.props.routes[this.props.routes.length - 1].name;
            }
            return this.props.setNavigationState({ menuOpen: false, managerMenuOpen: false, icon: 'menu', text: text });
        }
        return this.props.setNavigationState({ menuOpen: true, managerMenuOpen: false, icon: 'close', text: 'Menu' });
    }

    render() {
        return (
            <div className='navigation-overlay'>
                <a className={ `navigation-overlay__toggle${ this.props.navigation.menuOpen ? ' open' : '' }` } onClick={ () => this.toggleList('Menu') }>
                    <Icon icon={ this.props.navigation.icon } size={ this.props.navigation.icon === 'menu' ? '19px' : '13px' } fill='#fff' />{ this.props.navigation.text }
                </a>
                <div className={ `navigation-overlay__wrapper${ this.props.navigation.menuOpen ? ' open' : '' }` }>
                    { this.props.items }
                </div>
            </div>
        );
    }
}

Navigation.defaultProps = {
    items: null
};

Navigation.propTypes = {
    setNavigationState: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    items: PropTypes.any
};
