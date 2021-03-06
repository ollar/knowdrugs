import React from 'react';

import { Provider } from 'react-redux';
import { Scene } from 'react-native-router-flux';

import store from './redux/createStore';

import Drawer from './components/sideMenu/drawer';
import NavigationComponent from './components/navbar/navigation';

import RouterWithRedux from './components/router';

import DrugCheckingPage from './pages/drugchecking';
import SubstanceInfoPage from './pages/substanceInfo';
import EmergencyHelpPage from './pages/emergencyHelp';
import CounsellingPage from './pages/counselling';
import SupportUsPage from './pages/supportUs';
import AboutPage from './pages/about';

function Knowdrugs() {
  return (
    <Provider store={store}>
      <Drawer>
        <RouterWithRedux>
          <Scene key="root" navBar={NavigationComponent}>
            <Scene
              initial
              key="drugchecking"
              component={DrugCheckingPage}
              title="drugchecking"
            />
            <Scene
              key="substanceInfo"
              component={SubstanceInfoPage}
              title="substanceInfo"
            />
            <Scene
              key="emergencyHelp"
              component={EmergencyHelpPage}
              title="emergencyHelp"
            />
            <Scene
              key="counselling"
              component={CounsellingPage}
              title="counselling"
            />
            <Scene
              key="supportUs"
              component={SupportUsPage}
              title="supportUs"
            />
            <Scene
              key="about"
              component={AboutPage}
              title="about"
            />
          </Scene>
        </RouterWithRedux>
      </Drawer>
    </Provider>
  );
}

export default Knowdrugs;
