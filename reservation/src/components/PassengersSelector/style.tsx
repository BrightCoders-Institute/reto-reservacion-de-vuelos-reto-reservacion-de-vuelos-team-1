import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    marginBottom: 130,
    paddingTop: 50,
  },
  scroll: {
    backgroundColor: 'aa',
    width: 250,
    height: 215,
    top: 0,
  },
  containerArrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowLeft: {
    flex: 1,
    position: 'absolute',
    top: -132,
    zIndex: 1,
    left: -14,
  },
  arrowRight: {
    flex: 1,
    position: 'absolute',
    top: -132,
    zIndex: 1,
    left: 218,
  },
});
export default styles;
