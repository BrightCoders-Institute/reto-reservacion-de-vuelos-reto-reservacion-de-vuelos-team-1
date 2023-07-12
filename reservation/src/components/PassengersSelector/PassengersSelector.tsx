import {Text, View} from 'react-native';
import {Picker} from 'react-native-wheel-pick';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import styles from './style';

export const PassengersSelector = () => {
  return (
    <View style={styles.container}>
      <View>
        <Picker
          style={styles.scroll}
          textSize={30}
          selectTextColor="#6170F7"
          isShowSelectBackground={false}
          isShowSelectLine={false}
          selectedValue="1"
          pickerData={[
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
          ]}
          onValueChange={(value: string) => {
            console.log(value);
          }}
        />
      </View>
      <View style={styles.containerArrow}>
        <Ionicons
          style={styles.arrowLeft}
          name="caret-forward"
          size={46}
          color="#6170F7"
        />
        <Ionicons
          style={styles.arrowRight}
          name="caret-back"
          size={46}
          color="#6170F7"
        />
      </View>
    </View>
  );
};
