import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import * as productGetActions from 'actions/products/get';
import * as productEditActions from 'actions/products/edit';

// General components
import { shouldUpdate } from 'actions/global/utilityFunctions';
import { Column, Row, Card } from '@salocreative/react-ui';
import LoadingWrapper from '@salocreative/react-loading-wrapper';
import ErrorMessages from 'constants/messages/errorMessages';
import Tab from '../../components/core/tab';

// Containers
import ProductWrapper from 'containers/products';

// Product components
import ProductsHeader from '../../components/products/header';
import ProductsSecondaryHeader from '../../components/products/header-secondary';
import ProductDetails from '../../components/products/details';
import ProductTagsPicker from '../../components/products/tags-picker';
import Gallery from '../../components/products/gallery';
import ProductDescription from '../../components/products/description';
import ProductDimensionsPicker from '../../components/products/dimensions-picker';
import ProductFeaturedImage from '../../components/products/featured-image';

class EditProduct extends Component {

  constructor() {
    super();
    this.state = {
      activeTab: 'general'
    }
  }

  componentWillMount() {
    this.props.getProduct(this.props.params.id);
  }

  attemptProductFetch() {
    this.props.getProduct(this.props.params.id);
  }

  checkAllValid() {
    const { product } = this.props;
    return product.meta.validations.details;
  }

  saveProduct() {
   if (this.checkAllValid()) {
     this.props.editProduct(this.props.product.data);
   } else {
     alert('There are validation errors');
   }
  }

  changeTab(tab) {
    this.setState({ activeTab: tab })
  }

  render() {
    const { product, productCategories } = this.props;
    let displayContent = false;
    if (!product.meta.fetching && product.data.id) {
      displayContent = true;
    }
    return (
      <ProductWrapper { ...this.props } id='product-edit'>
        <Helmet>
          <title>Edit Product</title>
        </Helmet>

        <ProductsSecondaryHeader
          { ...this.props }
          saveEdits={ () => this.saveProduct() }
          changeTab={ (tab) => this.changeTab(tab) }
          activeTab={ this.state.activeTab }
        />

        <LoadingWrapper
          display={ displayContent }
          loading={ product.meta.fetching }
          error={ product.meta.failed }
          errorMessage={ ErrorMessages.getProductFailed.message }
          retryAction={ () => this.attemptProductFetch() } >

          <Tab item='general' currentItem={ this.state.activeTab }>

            <ProductFeaturedImage
              image={ product.data.main_image }
            />

            <ProductDetails
              product={ product }
              categories={ productCategories.data }
              showErrors={ true }
            />

            <ProductTagsPicker />

            <Gallery />

            <ProductDescription
              content={ product.data.content }
            />

          </Tab>

          <Tab item='inventory' currentItem={ this.state.activeTab }>
            
            <ProductDimensionsPicker />
            
          </Tab>

          <Tab item='sales' currentItem={ this.state.activeTab }>
            
            Sale coming soon ...
            
          </Tab>

          <Tab item='seo' currentItem={ this.state.activeTab }>
            
            Seo coming soon ...
            
          </Tab>

        </LoadingWrapper>
      </ProductWrapper>
    );
  }
}

EditProduct.propTypes = {
  getProduct: PropTypes.func,
  editProduct: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    Object.assign({},
      productGetActions,
      productEditActions
    ), dispatch);
}

export default connect(null, mapDispatchToProps)(EditProduct);