import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface BgScrollState {
  value: boolean;
}

const initialState: BgScrollState = {
  value: false,
};

export const BgScrollSlice = createSlice({
  name: "Bgscroll",
  initialState,
  reducers: {
    changeBG: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;

      //   console.log(state.value);
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeBG } = BgScrollSlice.actions;

export default BgScrollSlice.reducer;
