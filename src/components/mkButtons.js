import React from 'react';
import {
  Text,
} from 'react-native';

import { MKButton } from 'react-native-material-kit';

import baseStyles, { colourScheme } from './styles/main';

export function Button(props) {
  return (
    <MKButton
      style={[baseStyles.button, props.style]}
      backgroundColor={props.style.backgroundColor || colourScheme.primaryColor}
      onPress={props.onPress || (() => (false))}
    >
      <Text style={[baseStyles.buttonText, props.textStyle]}>props.children</Text>
    </MKButton>
  );
}

Button.propTypes = {
  onPress: React.PropTypes.func,
  style: React.PropTypes.shape({
    backgroundColor: React.PropTypes.string,
  }),
  textStyle: React.PropTypes.shape(),
};
