import React from 'react';

import {
  View,
  Text,
} from 'react-native';

import { connect } from 'react-redux';

import baseStyles from '../../components/styles/main';
import { Button } from '../../components/mkButtons';

import { changeLocale } from '../../redux/actions/locale';

import I18n from '../../translations';

class DrugCheckingPage extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <View style={baseStyles.container}>
        <View style={baseStyles.content}>
          <Text>DrugCheckingPage</Text>
          <Text>{I18n.t('lorem')}</Text>
          <Button
            style={{ padding: 20, borderRadius: 30, backgroundColor: '#e3e' }}
            onPress={() => this.props.dispatch(changeLocale('en'))}
          >
            test
          </Button>
        </View>
      </View>
    );
  }
}

export default connect(({ locale }) => ({ locale }))(DrugCheckingPage);
