import {
  NAVIGATION_STATE_CHANGE
} from 'actions/navigation';

const initialState = {
  text: 'Menu',
  menuOpen: false,
  icon: 'bars'
};

// Nav reducer
function navigation(state = initialState, action) {
  switch (action.type) {

    case NAVIGATION_STATE_CHANGE :
      return {
        text: action.navState.text,
        menuOpen: action.navState.menuOpen,
        managerMenuOpen: false,
        icon: action.navState.icon
      };

    case 'MANAGER_NAVIGATION_STATE_CHANGE' :
        return {
          text: action.navState.text,
          menuOpen: false,
          managerMenuOpen: action.navState.managerMenuOpen,
          icon: 'menu'
        };

    default :
      return state;
  }
}

export default navigation;