import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Column, Row, Card } from '@salocreative/react-ui';
import SaloFormInput from 'components/forms/input';
import SaloFormSelect from 'components/forms/select';

import * as Rule from 'actions/forms/validation/rules';
import { validate, runValidation } from 'actions/forms/validation/validator';

import * as productEditActions from 'actions/products/edit';

const fieldValidations = [
  validate('title', 'Title', Rule.required),
  validate('slug', 'Url', Rule.required),
  validate('sku', 'SKU', Rule.required),
  validate('category_id', 'Category', Rule.required)
];

class ProductDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      validationErrors: {}
    };
    // Run validations on initial state
    this.state.validationErrors = runValidation(this.props.product.data, fieldValidations);
  }

  onChange(field) {
    return (e) => {
      this.props.productFieldChanged(field, e.target.value);
      let newState = this.state;
      setTimeout(() => {
        newState.validationErrors = runValidation(this.props.product.data, fieldValidations);
        let errorCount = Object.keys(this.state.validationErrors).length;
        this.setState(newState);
        return this.props.productValidationChange('details', errorCount);
      }, 10);
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
      <Column customClasses='is-4'>
        <Card customClasses='product-details__card'>
          <SaloFormInput
            name='title'
            label='Product title'
            value={ product.data.title }
            onFieldChanged={ this.onChange('title') }
            validation={ this.errorFor('title') }
            requiredAsterisk={ true }
          />
          <SaloFormInput
            name='slug'
            label='Product url'
            value={ product.data.slug }
            onFieldChanged={ this.onChange('slug') }
            validation={ this.errorFor('slug') }
            requiredAsterisk={ true }
          />
          <SaloFormInput
            name='sku'
            label='Product SKU'
            value={ product.data.sku }
            onFieldChanged={ this.onChange('sku') }
            validation={ this.errorFor('sku') }
            requiredAsterisk={ true }
          />
          <SaloFormInput
            icon='gbp'
            type='number'
            name='price'
            label='Product price'
            value={ product.data.price }
            onFieldChanged={ this.onChange('price') }
          />
          <SaloFormSelect
            name='category_id'
            label='Product category'
            value={ product.data.category_id }
            onFieldChanged={ this.onChange('category_id') }
            validation={ this.errorFor('category_id') }
            requiredAsterisk={ true }>
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
  productFieldChanged: PropTypes.func,
  productValidationChange: PropTypes.func,
  showErrors: PropTypes.bool
};

ProductDetails.defaultProps = {
  product: {
    data: {}
  },
  categories: [],
  showErrors: false
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(productEditActions, dispatch);
}

export default connect(null, mapDispatchToProps)(ProductDetails);