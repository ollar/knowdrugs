import { StyleSheet } from 'react-native';
import { MKColor } from 'react-native-material-kit';

export const colourScheme = {
  primaryColor: MKColor.Indigo,
  primaryColorRGB: MKColor.RGBIndigo,
  accentColor: MKColor.Teal,
};

const baseStyles = Object.assign({}, colourScheme, StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 56,
  },
  text: {
    fontSize: 16,
    color: '#111',
  },
  p: {
    marginBottom: 15,
  },
  content: {
    padding: 16,
    // backgroundColor: '#e3e',
    alignItems: 'stretch',
    // padding: 20,
  },
  centeredContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    color: this.primaryColor,
  },
  twoInputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  twoInputWrapperItem: {
    flex: 1,
    alignSelf: 'stretch',
  },
  modal: {
    backgroundColor: 'white',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 4,
    position: 'absolute',
    bottom: -10,
    left: 0,
    right: 0,
  },

  button: {
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 3,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  flatButtonText: {
    color: 'gray',
  },

  buttonWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

export default baseStyles;
