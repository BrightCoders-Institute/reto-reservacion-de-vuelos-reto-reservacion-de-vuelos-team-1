import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
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
    const {selectedStartDate} = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View>
        <CalendarPicker
          onDateChange={this.onDateChange as DateChangedCallback}
          width={Dimensions.get('window').width * 0.8}
          height={Dimensions.get('window').height * 0.7}
        />
        <View>
          <Text>SELECTED DATE: {startDate}</Text>
        </View>
      </View>
    );
  }
}
