import React from 'react';

import Icon from 'react-native-vector-icons/Entypo';

import { connect } from 'react-redux';

import {
  View,
  Text,
} from 'react-native';

import styles from './styles';

function NavigationComponent(props) {
  const router = props.router.toJS();
  return (
    <View style={styles.wrapper}>
      <Icon name="menu" color="#000" style={styles.icon} />

      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>{router.scene.title}</Text>
      </View>
    </View>
  );
}

NavigationComponent.propTypes = {
  router: React.PropTypes.shape(),
};

function reduxProps(state) {
  return {
    router: state.router,
  };
}

export default connect(reduxProps)(NavigationComponent);
