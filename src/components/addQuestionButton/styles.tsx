import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  buttonStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 30,
    bottom: 50,
    borderRadius: 25,
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowColor: 'grey',
    shadowRadius: 10,
    backgroundColor: 'white',
    width: 50,
    height: 50,
  },
});
