import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { connect } from 'react-redux';

class MainPage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>test</Text>
      </View>
    );
  }
}

MainPage.propTypes = {};

function mapProps(state) {
  return {};
}

export default connect(mapProps)(MainPage);
