import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from 'actions/auth/authActions';
import * as mediaActions from 'actions/media';
import * as navigationActions from 'actions/navigation';
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
    productCategories: state.productCategories,
    productTags: state.productTags
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    Object.assign(
      {},
      authActions,
      mediaActions,
      navigationActions
    ), dispatch);
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;