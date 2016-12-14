import { combineReducers } from 'redux';

// import { reducer as formReducer } from 'redux-form'

import modalReducer from './reducers/modal';
import routerReducer from './reducers/router';
import drawerReducer from './reducers/drawer';

export default combineReducers({
  modal: modalReducer,
  router: routerReducer,
  drawer: drawerReducer,
  // form: formReducer,
});
