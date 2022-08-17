import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height
  },

  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 100
  },

  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },

  thumbnail: {
    width: '100%',
    height
  }
});
