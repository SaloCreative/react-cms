import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import Icon from '@lushdigital/manager-icons';
import { routeCodes } from 'routes';

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

    clicked(label) {
        let text = label;
        if (text === 'Menu') {
            text = this.props.routes[this.props.routes.length - 1].name;
        }
        return this.props.setNavigationState({ menuOpen: false, managerMenuOpen: false, icon: 'menu', text});
    }

    render() {
        return (
            <div className='navigation-overlay'>
                <a className={ `navigation-overlay__toggle${ this.props.navigation.menuOpen ? ' open' : '' }` } onClick={ () => this.toggleList('Menu') }>
                    <Icon icon={ this.props.navigation.icon } size={ this.props.navigation.icon === 'menu' ? '19px' : '13px' } fill='#fff' />{ this.props.navigation.text }
                </a>
                <div className={ `navigation-overlay__wrapper${ this.props.navigation.menuOpen ? ' open' : '' }` }>
                    <div className='container'>
                        <Link to={ routeCodes.TILLS } className='navigation-overlay__link' title='name' onClick={ () => this.clicked('Tills') }>
                            <span className='navigation-overlay__icon'><Icon icon='smartphone-landscape' size='55px' fill='#fff' /></span>
                            <span className='navigation-overlay__link-text'>TILLS</span>
                        </Link>
                        <Link to={ routeCodes.REPORTS } className='navigation-overlay__link' onClick={ () => this.clicked('Reports') }>
                            <span className='navigation-overlay__icon'><Icon icon='trending-up' size='55px' fill='#fff' /></span>
                            <span className='navigation-overlay__link-text'>REPORTS</span>
                        </Link>
                        <Link to={ routeCodes.PETTYCASH } className='navigation-overlay__link' onClick={ () => this.clicked('Petty Cash') }>
                            <span className='navigation-overlay__icon'><Icon icon='chart' size='45px' fill='#fff' /></span>
                            <span className='navigation-overlay__link-text'>PETTY_CASH</span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

Navigation.propTypes = {
    setNavigationState: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
};
