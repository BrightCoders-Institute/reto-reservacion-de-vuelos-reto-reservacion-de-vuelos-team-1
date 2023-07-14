import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {View, Dimensions} from 'react-native';
import CalendarPicker, {
  DateChangedCallback,
} from 'react-native-calendar-picker';
import moment from 'moment';

interface State {
  selectedStartDate: Date | null;
}

export default class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date: moment.Moment, type: 'START_DATE' | 'END_DATE') {
    const selectedDate = date.toDate();
    this.setState({
      selectedStartDate: selectedDate,
    });
  }

  render() {
    return (
      <View>
        <CalendarPicker
          onDateChange={this.onDateChange as DateChangedCallback}
          width={Dimensions.get('window').width * 0.8}
          height={Dimensions.get('window').height * 0.7}
          minDate={new Date()}
          previousComponent={
            <Ionicons name="arrow-back-sharp" size={30} color="#6170f7" />
          }
          nextComponent={
            <Ionicons name="arrow-forward-sharp" size={30} color="#6170f7" />
          }
          selectedDayColor="#6170f7"
          selectedDayTextColor="#ffffff"
          todayBackgroundColor="lightgray"
          todayTextStyle={{color: '#000000'}}
        />
      </View>
    );
  }
}
