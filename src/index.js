import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/createStore';

import MainPage from './pages/main';

function Knowdrugs() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default Knowdrugs;
