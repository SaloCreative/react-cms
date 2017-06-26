import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Price extends Component {

  addCommas(nStr = '') {
    let x = nStr.split('.');
    let x1 = x[0];
    let x2 = x.length > 1 ? '.' + x[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
  }

  renderPrice() {
    const { price, currency } = this.props;
    if ( isNaN( parseFloat( String(price) )) || ! isFinite( price ) || price === 0 ) {
      return <span>-</span>;
    } else {
      return <span>{ currency + ` ` + this.addCommas(price.toFixed(2)) }</span>;
    }
  }

  render() {
    return (
      <div className={ `price__wrapper ${ this.props.priceClass }` }>
        { this.renderPrice() }
      </div>
    );
  }
}

Price.defaultProps = {
  price: '',
  currency: '£',
  priceClass: ''
};

Price.propTypes = {
  currency: PropTypes.string
};