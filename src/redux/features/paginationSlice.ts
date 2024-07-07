import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TRootState } from "../store";

export interface IPagination {
  page: number,
  totalPages: number,
};

const initialState: IPagination = {
  page: 1,
  totalPages: 1,
};
const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<number>): void => {
      state.page = action.payload;
    },
    changeTotalPages: (state, action: PayloadAction<number>): void => {
      state.totalPages = action.payload;
    }
  }
});
export const paginationState = (state: TRootState): IPagination => state.pagination;
export const { changePage, changeTotalPages } = paginationSlice.actions;
export default paginationSlice.reducer;