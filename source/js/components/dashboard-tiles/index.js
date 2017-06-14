import React, { Component } from 'react';
import { Link } from 'react-router';
import Icon from '@lushdigital/manager-icons';
import PropTypes from 'prop-types';

import { routeCodes } from 'routes';

class DashboardTiles extends Component {

    clicked(label) {
        let text = label;
        if (text === 'Menu') {
            text = this.props.routes[this.props.routes.length - 1].name;
        }
        return this.props.setNavigationState({ menuOpen: false, managerMenuOpen: false, icon: 'menu', text});
    }

    render() {
        return (
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
        );
    }
}

DashboardTiles.propTypes = {
    children: PropTypes.any,
    setNavigationState: PropTypes.func,
    navigation: PropTypes.object
};

export default DashboardTiles;