import { configureStore } from '@reduxjs/toolkit';
import { carsReducers, paginationReducers } from '.';

export const makeStore = () => configureStore({
  reducer: {
    cars: carsReducers,
    pagination: paginationReducers,
  }
});
export type TAppStore = ReturnType<typeof makeStore>;
export type TRootState = ReturnType<TAppStore['getState']>;
export type TAppDispatch = TAppStore['dispatch'];