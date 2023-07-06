import React, {useState} from 'react';
import {DimensionValue, View} from 'react-native';
import {styles} from './styles';
import {Dropdown} from 'react-native-element-dropdown';

interface DropDownProps {
  width?: number;
  data: {label: string; value: {country: string; city: string}}[];
}

export const DropDown: React.FC<DropDownProps> = ({width, data}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Dropdown
        style={[
          styles.dropdown,
          isFocus && {borderColor: '#5C6EF8'},
          {width: width},
        ]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.label);
          setIsFocus(false);
          console.log(item.value.country);
          console.log(item.value.city);
        }}
      />
    </View>
  );
};
