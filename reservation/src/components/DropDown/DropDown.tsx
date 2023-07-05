import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
interface Place {
  country: string;
  city: string;
}
const placeData: Place[] = [
  {country: 'Mexico', city: 'Colima'},
  {country: 'Japon', city: 'Tokio'},
];
export const DropDown = () => {
  const [selectedPlace, setSelectedPlace] = useState();

  return (
    <>
      <Picker
        mode="dropdown"
        selectedValue={selectedPlace}
        onValueChange={(itemValue, itemIndex) => setSelectedPlace(itemValue)}>
        {placeData.map(place => (
          <Picker.Item
            label={place.country}
            value={place.city}
            key={place.country}
          />
        ))}
      </Picker>
    </>
  );
};
