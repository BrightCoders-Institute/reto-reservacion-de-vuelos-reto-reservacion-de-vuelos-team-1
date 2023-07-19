import {StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  column: {
    flex: 1,
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 26,
    color: '#5C6EF8',
    fontWeight: '800',
    marginBottom: 20,
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 30,
    color: '#000000',
    fontWeight: '800',
    marginBottom: 5,
    alignSelf: 'center',
  },
  subHeader: {
    fontSize: 20,
    color: 'gray',
    fontWeight: '800',
    marginBottom: 5,
    alignSelf: 'center',
  },
  noFlightsContainer: {
    height: windowHeight * 0.8,
    justifyContent: 'center',
    alignContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
});

export default styles;
