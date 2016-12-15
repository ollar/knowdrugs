import React from 'react';

import {
  View,
  Text,
} from 'react-native';

import baseStyles from '../../components/styles/main';
import { Button } from '../../components/mkButtons';

class DrugCheckingPage extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <View style={baseStyles.container}>
        <View style={baseStyles.content}>
          <Text>DrugCheckingPage</Text>
          <Button
            style={{ padding: 20, borderRadius: 30, backgroundColor: '#e3e' }}
            onPress={() => console.log('hello')}
          >
            test
          </Button>
        </View>
      </View>
    );
  }
}

export default DrugCheckingPage;
