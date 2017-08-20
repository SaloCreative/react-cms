import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Column, Card } from '@salocreative/react-ui';
import SaloFormInput from '../../forms/input';
import SaloTextArea from '../../forms/textArea';

import * as Rule from '../../../actions/forms/validation/rules';
import { validate, runValidation } from '../../../actions/forms/validation/validator';

import * as productEditActions from 'actions/products/edit';

const fieldValidations = [
  validate('seo_title', 'SEO Title', Rule.maxLength(60)),
  validate('seo_description', 'SEO Description', Rule.maxLength(160))
];


export default class ProductSeoMeta extends Component {

  constructor(props) {
    super(props);
    this.state = {
      validationErrors: {}
    };
    // Run validations on initial state
    this.state.validationErrors = runValidation(this.props.product.data, fieldValidations);
  }

  errorFor(field) {
    if (this.props.showErrors) {
      return this.state.validationErrors[field];
    }
    return null;
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

  render() {
    const { product } = this.props;
    return (
      <Column customClasses='is-12'>
        <Card>
          <div className='seo_details__wrapper'>
            <h2>SEO</h2>
            <SaloFormInput
              name='seo_title'
              label='SEO title'
              value={ product.data.seo_title }
              onFieldChanged={ this.onChange('seo_title') }
              validation={ this.errorFor('seo_title') }
            />
            <SaloTextArea
              name='seo_description'
              label='SEO description'
              value={ product.data.seo_description }
              onFieldChanged={ this.onChange('seo_description') }
              validation={ this.errorFor('seo_description') }
            />
          </div>
        </Card>
      </Column>
    );
  }
}

ProductSeoMeta.defaultProps = {
  showErrors: false
};

ProductSeoMeta.propTypes = {
  product: PropTypes.object,
  productValidationChange: PropTypes.func,
  productFieldChanged: PropTypes.func,
  showErrors: PropTypes.bool
};