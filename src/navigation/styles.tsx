import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  firstTitle: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Roboto',
    textAlign: Platform.OS === 'android' ? 'left' : 'center',
  },
  secondTitle: {
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '700',
    textAlign: Platform.OS === 'android' ? 'left' : 'center',
  },
  headerTitle: {
    textAlign: 'center',
    width: 230,
  },
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    height: 100,
  },
  cardStyle: {
    elevation: 0,
    opacity: 1,
  },
});
