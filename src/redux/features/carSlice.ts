import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TRootState } from "../store";

export interface ICarState {
  quantity: number,
  order: string,
  cars: TCarItemMinData[],
}
const initialState: ICarState = {
  quantity: 9,
  order: 'ascending',
  cars: [],
};
export const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    changeQuantity: (state, action: PayloadAction<number>):void => {
      state.quantity = action.payload;
    },
    changeOrder: (state, action: PayloadAction<string>):void => {
      state.order = action.payload;
    },
    changeCars: (state, action: PayloadAction<TCarItemMinData[]>):void=> {
      state.cars = action.payload;
    },
  },
});
export const { changeCars, changeOrder, changeQuantity } = carSlice.actions;
export const carsState = (state: TRootState): ICarState => state.cars;
export default carSlice.reducer;