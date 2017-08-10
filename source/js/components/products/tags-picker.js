import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getObjectByKey, getIndexByKey } from 'actions/global/utilityFunctions';
import { Column, Row, Card } from '@salocreative/react-ui';
import TypeAhead from 'components/core/typeahead';
import Tag from 'components/core/tag';

import * as tagActionCreators from 'actions/products/tags/associate';

class ProductTagsPicker extends Component {

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

  render() {
    const { product, productTags } = this.props;
    return (
      <Column customClasses='is-4 tag-picker__wrapper'>
        <Card>
          <TypeAhead
            items={ productTags.data }
            placeholder='Assign tags...'
            selectedItem={ (id) => this.addTag(id) }
          />
          <div className='tags-picker__tags-wrapper'>
            {product.data.tags.map((tag, i) =>
              <Tag
                key={ tag.slug }
                tag={ tag }
                removeTag={ (id) => this.removeTag(id) }
              />
            )}
          </div>
        </Card>
      </Column>
    );
  }
}

ProductTagsPicker.propTypes = {
  productTags: PropTypes.object,
  product: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(tagActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    product: state.product,
    productTags: state.productTags
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductTagsPicker);