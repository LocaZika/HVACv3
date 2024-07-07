/*** store ***/
export { makeStore } from './store';
export type { TAppDispatch, TAppStore, TRootState } from './store';
export { default as StoreProvider } from './StoreProvider';
/*** Hooks ***/
export { useAppDispatch, useAppSelector, useAppStore } from './hooks';
/*** Car Slice ***/
export { default as carsReducers ,changeCars, changeOrder, changeQuantity, carsState } from './features/carSlice';
export type { ICarState } from './features/carSlice';
/*** Pagination Slice ***/
export { default as paginationReducers, changePage, changeTotalPages, paginationState } from './features/paginationSlice';
export type { IPagination } from './features/paginationSlice';