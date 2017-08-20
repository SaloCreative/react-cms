import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Column, Row, Card, TypeAhead, Tag } from '@salocreative/react-ui';

import SaloFormSelect from '../forms/select';

import { getObjectByKey, getIndexByKey } from '../../actions/global/utilityFunctions';
import * as Rule from '../../actions/forms/validation/rules';
import { validate, runValidation } from '../../actions/forms/validation/validator';
import * as productEditActions from '../../actions/products/edit';
import * as tagActionCreators from '../../actions/products/tags/associate';

const fieldValidations = [
  validate('category_id', 'Category', Rule.required)
];

class ProductTagsPicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      validationErrors: {}
    };
    // Run validations on initial state
    this.state.validationErrors = runValidation(this.props.product.data, fieldValidations);
  }

  getTagByID(tagID) {
    return getObjectByKey(this.props.productTags.data, tagID);
  }

  addTag(tagID) {
    let tagAssigned = getObjectByKey(this.props.product.data.tags, tagID);
    let productID = null;
    if (!tagAssigned) {
      if (this.props.product.data.id) {
        productID = this.props.product.data.id;
      }
      this.props.addTag(this.getTagByID(tagID), productID);
    }
  }

  removeTag(tagID) {
    let tagAssigned = getObjectByKey(this.props.product.data.tags, tagID);
    let productID = null;
    if (tagAssigned) {
      if (this.props.product.data.id) {
        productID = this.props.product.data.id;
      }
      this.props.removeTag(this.getTagByID(tagID), productID);
    }
  }

  onChange(field) {
    return (e) => {
      this.props.productFieldChanged(field, e.target.value);
      let newState = this.state;
      setTimeout(() => {
        newState.validationErrors = runValidation(this.props.product.data, fieldValidations);
        let errorCount = Object.keys(this.state.validationErrors).length;
        this.setState(newState);
        return this.props.productValidationChange('tags', errorCount);
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
    const { product, productTags, productCategories } = this.props;
    return (
      <Column customClasses='is-4 tag-picker__wrapper'>
        <Card>
          <SaloFormSelect
            name='category_id'
            label='Product category'
            value={ product.data.category_id }
            onFieldChanged={ this.onChange('category_id') }
            validation={ this.errorFor('category_id') }
            requiredAsterisk={ true }>
            { productCategories.data.map((category, i) =>
              <option key={ i } value={ category.id }>{ category.title }</option>
            ) }
          </SaloFormSelect>
          <TypeAhead
            items={ productTags.data }
            placeholder='Assign tags...'
            selectedItem={ (id) => this.addTag(id) }
            customClasses='tag-picker'
          />
          <div className='tags-picker__tags-wrapper'>
            {product.data.tags.map((tag, i) =>
              <Tag
                key={ tag.slug }
                title={ tag.title }
                id={ tag.id }
                removeTag={ (id) => this.removeTag(id) }
              />
            )}
          </div>
        </Card>
      </Column>
    );
  }
}

ProductTagsPicker.defaultProps = {
  product: {
    data: {}
  },
  showErrors: false
};

ProductTagsPicker.propTypes = {
  product: PropTypes.object,
  productTags: PropTypes.object,
  showErrors: PropTypes.bool
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    Object.assign({},
      tagActionCreators,
      productEditActions
    ), dispatch);
}

function mapStateToProps(state) {
  return {
    product: state.product,
    productCategories: state.productCategories,
    productTags: state.productTags
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductTagsPicker);