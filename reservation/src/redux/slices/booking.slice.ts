import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
  originCountry: string;
  originCity: string;
  destinationCountry: string;
  destinationCity: string;
  passengers: string;
}

const initialState: CounterState = {
  value: 0,
  originCountry: '',
  originCity: '',
  destinationCountry: '',
  destinationCity: '',
  passengers: '',
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    addOriginCountry: (state, action: PayloadAction<string>) => {
      state.originCountry = action.payload;
    },
    addOriginCity: (state, action: PayloadAction<string>) => {
      state.originCity = action.payload;
    },
    addDestinationCity: (state, action: PayloadAction<string>) => {
      state.destinationCity = action.payload;
    },
    addDestinationCountry: (state, action: PayloadAction<string>) => {
      state.destinationCountry = action.payload;
    },
    addPassengers: (state, action: PayloadAction<string>) => {
      state.passengers = action.payload;
    }
  },
});

export const { incrementByAmount, addOriginCountry, addOriginCity, addDestinationCity, addDestinationCountry, addPassengers } = counterSlice.actions;
export default counterSlice.reducer;