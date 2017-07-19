import {
  NAVIGATION_STATE_CHANGE
} from 'actions/navigation';

const initialState = {
  menuOpen: false,
  icon: 'bars'
};

// Nav reducer
function navigation(state = initialState, action) {
  switch (action.type) {

    case NAVIGATION_STATE_CHANGE :
      return {
        menuOpen: action.navState.menuOpen,
        icon: action.navState.icon
      };

    case 'MANAGER_NAVIGATION_STATE_CHANGE' :
        return {
          menuOpen: false,
          icon: 'menu'
        };

    default :
      return state;
  }
}

export default navigation;