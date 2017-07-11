import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from 'actions/auth/authActions';
import * as mediaActions from 'actions/media';
import * as navigationActions from 'actions/navigation';
import * as productListActions from 'actions/products';
import * as productGetActions from 'actions/products/get';
import * as productEditActions from 'actions/products/edit';
import * as productAddActions from 'actions/products/add';
import * as productCategoriesActions from 'actions/products/categories';
import App from 'routes/app';

function mapStateToProps(state) {
  return {
    systemAlerts: state.systemAlerts,
    navigation: state.navigation,
    users: state.users,
    login: state.login,
    media: state.media,
    products: state.products,
    product: state.product,
    productFilter: state.productFilter,
    productCategories: state.productCategories
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    Object.assign(
      {},
      authActions,
      mediaActions,
      navigationActions,
      productListActions,
      productGetActions,
      productEditActions,
      productAddActions,
      productCategoriesActions
    ), dispatch);
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;