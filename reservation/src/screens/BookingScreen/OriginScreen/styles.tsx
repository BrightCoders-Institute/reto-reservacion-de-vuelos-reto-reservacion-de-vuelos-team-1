import {StyleSheet, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginTop: windowHeight * 0.17,
    fontSize: 30,
    color: '#000000',
    fontWeight: '800',
    marginBottom: 20,
  },
});
export default styles;
