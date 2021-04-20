import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  pageWrapper: {flex: 1, paddingTop: Platform.OS === 'android' ? 50 : 0},
});
