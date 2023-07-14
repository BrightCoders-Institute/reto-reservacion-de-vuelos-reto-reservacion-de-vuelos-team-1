export interface RootState {
  counter: {
    value: number;
    originCountry: string;
    originCity: string;
    destinationCountry: string;
    destinationCity: string;
    passengers: string;
    selectedDate: string;
  };
}
