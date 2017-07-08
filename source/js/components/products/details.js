import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { Column, Row, Card } from 'components/core/grid';
import SaloFormInput from 'components/forms/input';
import SaloFormSelect from 'components/forms/select';

export default class ProductDetails extends Component {

  constructor() {
    super();
    this.state = {
      showErrors: false,
      validationErrors: {}
    };
    // Run validations on initial state
    // this.state.validationErrors = runValidation(this.state, fieldValidations);
  }

  onChange(field) {
    return (e) => {
      console.log(e.target.value);
      const newState = update(this.state, {
        [field]: { $set: e.target.value }
      });
      //newState.validationErrors = runValidation(newState, fieldValidations);
      this.setState(newState);
    };
  }

  errorFor(field) {
    if (this.state.showErrors) {
      // return this.state.validationErrors[field];
    }

    return null;
  }

  render() {
    const { product } = this.props;
    return (
      <Column classes='is-4'>
        <Card>
          <Row>
            <SaloFormInput
              name='title'
              label='Product title'
              value={ product.title }
              onFieldChanged={ this.onChange('password') }
              validation={ this.errorFor('password') }
            />
            <SaloFormInput
              name='slug'
              label='Product url'
              value={ product.slug }
              onFieldChanged={ this.onChange('password') }
              validation={ this.errorFor('password') }
            />
            <SaloFormInput
              name='sku'
              label='Product SKU'
              value={ product.sku }
              onFieldChanged={ this.onChange('password') }
              validation={ this.errorFor('password') }
            />
            <SaloFormInput
              type='number'
              name='price'
              label='Product price'
              value={ product.price }
              onFieldChanged={ this.onChange('password') }
              validation={ this.errorFor('password') }
            />
            <SaloFormSelect
              name='category_id'
              label='Product category'
              value={ product.category_id }
              onFieldChanged={ this.onChange('order') }
              validation={ this.errorFor('password') }>
              <option value="created_at-DESC">Newest product</option>
              <option value="created_at-ASC">Oldest product</option>
              <option value="price-DESC">Highest price</option>
              <option value="price-ASC">Lowest price</option>
            </SaloFormSelect>
          </Row>
        </Card>
      </Column>
    );
  }
}

ProductDetails.propTypes = {
  product: PropTypes.object
};

ProductDetails.defaultProps = {
  product: {}
};

