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
    key: 'home',
    icon: 'home',
    text: 'home',
  },
  {
    key: 'readBible',
    icon: 'open-book',
    text: 'readBible',
  },
  {
    key: 'chat',
    icon: 'chat',   // message
    text: 'messages',
  },
];

class SideMenuComponent extends React.Component {
  constructor() {
    super();

    this.getColor = this.getColor.bind(this);
  }

  getColor(key) {
    // baseStyles.text.color
    return (this.props.router.get('scene').sceneKey === key) ?
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
  drawer: React.PropTypes.object,
  router: React.PropTypes.object,
  messages: React.PropTypes.object,
};

function props(state) {
  return {
    drawer: state.drawer,
    router: state.router,
    messages: state.messages,
  };
}

export default connect(props)(SideMenuComponent);