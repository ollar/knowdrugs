import { combineReducers } from 'redux';

// import { reducer as formReducer } from 'redux-form'

import modalReducer from './reducers/modal';

export default combineReducers({
  modal: modalReducer,
  // form: formReducer,
});
