import { StyleSheet } from 'react-native';
import { screenSize } from '../../Styles/globalStyles';

export const stylesRegister = StyleSheet.create({
  button: {
    backgroundColor: '#303F9F',
    padding: 10,
    width: screenSize.width * 0.8,
    alignItems: 'center',
    borderRadius: 15,
    elevation: 10,
  },
  textButton: {
    color: '#FFF',
    fontWeight: '900',
    letterSpacing: 2,
    fontSize: 20,
  },
  utilText: {
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: '500',
    textAlign: 'center',
  },
});
