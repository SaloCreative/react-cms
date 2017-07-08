import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { Column, Row, Card } from 'components/core/grid';
import SaloFormInput from 'components/forms/input';
import SaloFormSelect from 'components/forms/select';

import * as Rule from 'actions/forms/validation/rules';
import { validate, runValidation } from 'actions/forms/validation/validator';

const fieldValidations = [
  validate('title', 'Title', Rule.required),
  validate('slug', 'Url', Rule.required),
  validate('sku', 'SKU', Rule.required),
  validate('price', 'Price', Rule.required),
  validate('category_id', 'Category', Rule.required)
];

export default class ProductDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      validationErrors: {}
    };
    // Run validations on initial state
    this.state.validationErrors = runValidation(this.props.product, fieldValidations);
  }

  onChange(field) {
    return (e) => {
      console.log(e.target.value);
      /*const newState = update(this.state, {
        [field]: { $set: e.target.value }
      });*/
      newState.validationErrors = runValidation(newState, fieldValidations);
      this.setState(newState);
    };
  }

  errorFor(field) {
    if (this.props.showErrors) {
      return this.state.validationErrors[field];
    }
    return null;
  }

  render() {
    const { product, categories } = this.props;
    return (
      <Column classes='is-4'>
        <Card classes='product-details__card'>
          <SaloFormInput
            name='title'
            label='Product title'
            value={ product.title }
            onFieldChanged={ this.onChange('title') }
            validation={ this.errorFor('title') }
          />
          <SaloFormInput
            name='slug'
            label='Product url'
            value={ product.slug }
            onFieldChanged={ this.onChange('slug') }
            validation={ this.errorFor('slug') }
          />
          <SaloFormInput
            name='sku'
            label='Product SKU'
            value={ product.sku }
            onFieldChanged={ this.onChange('sku') }
            validation={ this.errorFor('sku') }
          />
          <SaloFormInput
            icon='gbp'
            type='number'
            name='price'
            label='Product price'
            value={ product.price }
            onFieldChanged={ this.onChange('price') }
            validation={ this.errorFor('price') }
          />
          <SaloFormSelect
            name='category_id'
            label='Product category'
            value={ product.category_id }
            onFieldChanged={ this.onChange('order') }
            validation={ this.errorFor('category_id') }>
            {categories.map((category, i) =>
              <option key={ i } value={ category.id }>{ category.title }</option>
            )}
          </SaloFormSelect>
        </Card>
      </Column>
    );
  }
}

ProductDetails.propTypes = {
  product: PropTypes.object,
  categories: PropTypes.array,
  showErrors: PropTypes.bool
};

ProductDetails.defaultProps = {
  product: {},
  categories: [],
  showErrors: true
};

