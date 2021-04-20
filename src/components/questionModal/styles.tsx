import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modalContentWrapper: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 25,
    alignItems: 'center',
    height: 470,
  },
  modal: {flex: 1},
  title: {
    textAlign: 'center',
    width: '100%',
    fontWeight: '700',
    fontSize: 20,
  },
  description: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 25,
    lineHeight: 23,
  },
  inputWrapper: {
    width: '100%',
    marginBottom: 30,
  },
  autocompleteContainer: {
    marginTop: 15,
    width: '100%',
    height: 150,
  },
  buttonsRow: {justifyContent: 'space-between', paddingHorizontal: 10},
  searchAddressInput: {height: 38, fontSize: 14, color: 'grey'},
  inputContainer: {borderBottomWidth: 1},
  autocompleteList: {
    borderColor: '#c8c7cc',
    borderWidth: 1,
    borderRadius: 2,
  },
  autocomleteContainerBlock: {
    width: '100%',
    marginTop: 15,
  },
  button: {
    borderWidth: 1,
    padding: 15,
  },
});
