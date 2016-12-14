import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    backgroundColor: '#f1f1f1',
    height: 56,
  },
  icon: {
    marginLeft: -16,
    marginRight: 16,
    padding: 16,
    fontSize: 24,
    lineHeight: 24,
  },
  titleWrapper: {
    alignSelf: 'flex-end',
    paddingBottom: 16,
  },
  titleText: {
    color: '#000',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 26,
  },
});

export default styles;
