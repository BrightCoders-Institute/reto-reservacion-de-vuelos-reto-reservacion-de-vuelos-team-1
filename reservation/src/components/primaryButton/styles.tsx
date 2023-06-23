import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    buttonInActive: {
      backgroundColor: 'gray',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonActive:{
      backgroundColor:'#5C6EF8',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'center'
    },
    icon: {
      width: '8%',
      height: '100%',
      marginRight: '5%'
    }
  });

export default styles;
