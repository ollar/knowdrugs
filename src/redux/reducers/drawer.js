import { Map } from 'immutable';

const initialState = Map({
  drawerIsOpen: false,
  drawerIsEnabled: true,
});

export default function drawerReducer(state = initialState, action) {
  switch (action.type) {
    case 'DRAWER_OPEN':
      return state.merge({ drawerIsOpen: true });

    case 'DRAWER_CLOSE':
      return state.merge({ drawerIsOpen: false });

    case 'DRAWER_TOGGLE':
      return state.merge({ drawerIsOpen: !state.get('drawerIsOpen') });

    case 'DRAWER_DISABLE':
      return state.merge({ drawerIsEnabled: false });

    case 'DRAWER_ENABLE':
      return state.merge({ drawerIsEnabled: true });

    default:
      return state;
  }
}
