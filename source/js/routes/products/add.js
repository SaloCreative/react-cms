import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import * as productAddActions from 'actions/products/add';
import * as productEditActions from 'actions/products/edit';

// General components
import { shouldUpdate } from '../../actions/global/utilityFunctions';
import { Column, Row, Card } from '@salocreative/react-ui';
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
import ProductSeoMeta from '../../components/products/seo/meta';

class AddProduct extends Component {

  constructor() {
    super();
    this.state = {
      sections: {
        details: false
      },
      valid: false,
      activeTab: 'general'
    }
  }

  componentWillMount() {
    this.props.addNewProduct();
  }

  checkAllValid() {
    const { product } = this.props;
    return product.meta.validations.details;
  }

  saveProduct() {
    if (this.checkAllValid()) {
      if (!this.props.product.meta.created) {
        this.props.createProduct(this.props.product.data);
      } else {
        this.props.editProduct(this.props.product.data);
      }
    } else {
      alert('There are validation errors');
    }
  }

  changeTab(tab) {
    this.setState({ activeTab: tab })
  }

  render() {
    const { productCategories, product } = this.props;
    return (
      <ProductWrapper { ...this.props } id='product-add'>
        <Helmet>
            <title>Add Product</title>
        </Helmet>

        <ProductsSecondaryHeader
          { ...this.props }
          saveEdits={ () => this.saveProduct() }
          changeTab={ (tab) => this.changeTab(tab) }
          activeTab={ this.state.activeTab }
        />

        <Row>
          <Tab item='general' currentItem={ this.state.activeTab }>
            <ProductFeaturedImage
              image={ product.data.main_image }
            />

            <ProductDetails
              product={ product }
              categories={ productCategories.data }
            />

            <ProductTagsPicker />

            <Gallery />

            <ProductDescription />

          </Tab>

          <Tab item='inventory' currentItem={ this.state.activeTab }>

            <ProductDimensionsPicker />

          </Tab>

          <Tab item='sales' currentItem={ this.state.activeTab }>

            Sale coming soon ...

          </Tab>

          <Tab item='seo' currentItem={ this.state.activeTab }>

            <ProductSeoMeta
              productValidationChange={ this.props.productValidationChange }
              productFieldChanged={ this.props.productFieldChanged }
              product={ product }
              showErrors={ true }
            />

          </Tab>

        </Row>
      </ProductWrapper>
    );
  }
}

AddProduct.propTypes = {
  addNewProduct: PropTypes.func,
  createProduct: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    Object.assign({},
      productAddActions,
      productEditActions
    ), dispatch);
}

export default connect(null, mapDispatchToProps)(AddProduct);