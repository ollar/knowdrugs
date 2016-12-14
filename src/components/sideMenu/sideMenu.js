import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  InteractionManager,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';

import baseStyles from '../styles/main';

import { drawerClose } from '../../redux/actions/drawer';
import I18n from '../../translations';

const styles = StyleSheet.create({
  sideMenu: {
    flex: 1,
    backgroundColor: 'white',
  },
  menuButton: {
    padding: 16,
  },
  menuButtonText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '400',
  },
  newMessageBaloon: {
    backgroundColor: 'red',
    height: 20,
    width: 20,
    borderRadius: 10,
    marginLeft: 10,
    overflow: 'hidden',
  },
  newMessageBaloonText: {
    lineHeight: 20,
    color: 'white',
    textAlign: 'center',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});

const menuButtons = [
  {
    key: 'drugchecking',
    icon: 'home',
    text: 'drugchecking',
  },
  {
    key: 'substanceInfo',
    icon: 'open-book',
    text: 'substanceInfo',
  },
  {
    key: 'emergencyHelp',
    icon: 'chat',   // message
    text: 'emergencyHelp',
  },
  {
    key: 'counselling',
    icon: 'chat',   // message
    text: 'counselling',
  },
  {
    key: 'supportUs',
    icon: 'chat',   // message
    text: 'supportUs',
  },
  {
    key: 'about',
    icon: 'chat',   // message
    text: 'about',
  },
];

class SideMenuComponent extends React.Component {
  constructor() {
    super();

    this.getColor = this.getColor.bind(this);
  }

  getColor(key) {
    // baseStyles.text.color
    const router = this.props.router.toJS();
    return (router.scene.sceneKey === key) ?
      baseStyles.primaryColor : '#111';
  }

  handlePress(routeId) {
    this.props.dispatch(drawerClose());
    InteractionManager.runAfterInteractions(() => (Actions[routeId] ? Actions[routeId]() : false));
  }

  render() {
    return (
      <View style={[styles.sideMenu]}>
        {menuButtons.map((item, i) => (
          <View key={item.key}>
            <TouchableOpacity
              style={[baseStyles.buttonWithIcon, styles.menuButton]}
              onPress={() => this.handlePress(item.key)}
            >
              <Icon
                name={item.icon}
                size={30}
                color={this.getColor(item.key)}
              />
              <Text
                style={[styles.menuButtonText, { color: this.getColor(item.key) }]}
              >{I18n.t(item.text)}</Text>
            </TouchableOpacity>
            {(i !== menuButtons.length - 1) ? (
              <View style={styles.separator} />
            ) : null}
          </View>
          ))}
      </View>
    );
  }
}

SideMenuComponent.propTypes = {
  dispatch: React.PropTypes.func,
  router: React.PropTypes.shape(),
};

function props(state) {
  return {
    drawer: state.drawer,
    router: state.router,
  };
}

export default connect(props)(SideMenuComponent);
