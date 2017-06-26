import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from 'actions/auth/authActions';
import * as alertHandling from 'actions/alerts/alerts';
import * as navigationActions from 'actions/navigation';
import * as productListActions from 'actions/products';
import * as productEditActions from 'actions/products/edit';
import * as productCategoriesActions from 'actions/products/categories';
import App from 'routes/app';

function mapStateToProps(state) {
  return {
    systemAlerts: state.systemAlerts,
    navigation: state.navigation,
    users: state.users,
    login: state.login,
    products: state.products,
    productFilter: state.productFilter,
    productCategories: state.productCategories
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    Object.assign(
      {},
      authActions,
      alertHandling,
      navigationActions,
      productListActions,
      productEditActions,
      productCategoriesActions
    ), dispatch);
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;