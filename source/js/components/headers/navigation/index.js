import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import { routeCodes } from 'routes';

export default class Navigation extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        const text = this.props.routes[this.props.routes.length - 1].name;
        const newText = nextProps.routes[nextProps.routes.length - 1].name;
        if (text !== newText && nextProps.navigation.menuOpen === false) {
            this.props.setNavigationState({ menuOpen: false, managerMenuOpen: false, icon: 'bars', text: newText });
        }
        // return a boolean value always to make sure other updates aren't blocked
        return true;
    }

    componentDidMount() {
        // Make sure menu is correct for load
        return this.props.setNavigationState({ menuOpen: false, icon: 'bars', text: this.props.routes[this.props.routes.length - 1].name });
    }

    toggleList(label) {
        let text = label;
        if (this.props.navigation.menuOpen) {
            if (label === 'Menu') {
                text = this.props.routes[this.props.routes.length - 1].name;
            }
            return this.props.setNavigationState({ menuOpen: false, managerMenuOpen: false, icon: 'bars', text: text });
        }
        return this.props.setNavigationState({ menuOpen: true, managerMenuOpen: false, icon: 'times', text: 'Menu' });
    }

    clicked(label) {
        let text = label;
        if (text === 'Menu') {
            text = this.props.routes[this.props.routes.length - 1].name;
        }
        return this.props.setNavigationState({ menuOpen: false, managerMenuOpen: false, icon: 'bars', text});
    }

    render() {
        return (
            <div className='navigation-overlay'>
                <a className={ `navigation-overlay__toggle${ this.props.navigation.menuOpen ? ' open' : '' }` } onClick={ () => this.toggleList('Menu') }>
                    <FontAwesome name={ this.props.navigation.icon } size='2x' />{ this.props.navigation.text }
                </a>
                <div className={ `navigation-overlay__wrapper${ this.props.navigation.menuOpen ? ' open' : '' }` }>
                    <div className='container'>
                        <Link to={ routeCodes.PAGES } className='navigation-overlay__link' title='name' onClick={ () => this.clicked('Pages') }>
                            <span className='navigation-overlay__icon'><FontAwesome name='pencil' size='3x' /></span>
                            <span className='navigation-overlay__link-text'>Pages</span>
                        </Link>
                        <Link to={ routeCodes.PRODUCT.INDEX } className='navigation-overlay__link' onClick={ () => this.clicked('Products') }>
                            <span className='navigation-overlay__icon'><FontAwesome name='shopping-cart' size='3x' /></span>
                            <span className='navigation-overlay__link-text'>Products</span>
                        </Link>
                        <Link to={ routeCodes.MEDIA } className='navigation-overlay__link' onClick={ () => this.clicked('Asset Library') }>
                            <span className='navigation-overlay__icon'><FontAwesome name='image' size='3x' /></span>
                            <span className='navigation-overlay__link-text'>Asset Library</span>
                        </Link>
                        <Link to={ routeCodes.SETTINGS } className='navigation-overlay__link' onClick={ () => this.clicked('Settings') }>
                            <span className='navigation-overlay__icon'><FontAwesome name='cogs' size='3x' /></span>
                            <span className='navigation-overlay__link-text'>Settings</span>
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
