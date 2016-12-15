import React from 'react';

import {
  View,
  Text,
} from 'react-native';

import baseStyles from '../../components/styles/main';

class AboutPage extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <View style={baseStyles.container}>
        <Text>AboutPage</Text>
      </View>
    );
  }
}

export default AboutPage;
