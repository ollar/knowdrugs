import React from 'react';
import Drawer from 'react-native-drawer';

import { connect } from 'react-redux';

import SideMenu from './sideMenu';

import { drawerOpen, drawerClose } from '../../redux/actions/drawer';

const drawerStyles = {
  drawer: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  main: {
    paddingLeft: 3,
  },
  mainOverlay: {
    backgroundColor: '#000000',
    opacity: 0,
  },
};

function DrawerComponent(props) {
  return (
    <Drawer
      acceptTap
      acceptPan
      disabled={!props.drawer.get('drawerIsEnabled')}
      type="overlay"
      content={<SideMenu />}
      styles={drawerStyles}
      open={props.drawer.get('drawerIsOpen')}
      openDrawerOffset={0.1}
      panOpenMask={0.1}
      onOpen={() => props.dispatch(drawerOpen())}
      onClose={() => props.dispatch(drawerClose())}
      tweenHandler={ratio => ({
        mainOverlay: { opacity: (ratio - 0.2) },
      })}
    >
      {props.children}
    </Drawer>
  );
}

DrawerComponent.propTypes = {
  drawer: React.PropTypes.shape(),
  children: React.PropTypes.element,
  // dispatch: React.PropTypes.func,
};

export default connect(({ drawer }) => ({ drawer }))(DrawerComponent);
