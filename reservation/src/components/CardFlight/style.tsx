import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 390,
    height: 150,
    justifyContent: 'center',
    padding: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: 'gray',
  },
  subcontainer1: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    flex: 1,
  },
  subcontainer2: {
    alignItems: 'flex-end',
    flexDirection: 'column',
    flex: 1,
  },
  subcontainer3: {
    alignItems: 'flex-end',
    flexDirection: 'column',
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    color: '#000000',
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    margin: 10,
  },
  text2: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
  },
  icon: {
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 30,
    zIndex: 1,
    left: 185,
  },
});

export default styles;
