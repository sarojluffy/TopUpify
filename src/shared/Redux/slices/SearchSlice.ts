import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface Searchitems {
  src: string;
  alt: string;
  name: string;
}

export interface Searchstate {
  items: Searchitems[];
  searcheditems: Searchitems[];
}

const initialState: Searchstate = {
  items: [], // Initialize as an empty array
  searcheditems: [],
};

export const SearchArraySlice = createSlice({
  name: "DisplayArr",
  initialState,
  reducers: {
    initialArray: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items = action.payload;

      //   console.log(state.value);
    },
    searchedArray: (state, action) => {
      const searchedkey = action.payload;

      //   state.searcheditems = state.items.filter(
      //     (abc) => abc.name === searchedkey

      state.searcheditems = state.items.filter((abc) =>
        abc.name
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(searchedkey.toLowerCase().replace(/\s/g, ""))
      );
      console.log(state.searcheditems);
    },
  },
});

// Action creators are generated for each case reducer function
export const { initialArray, searchedArray } = SearchArraySlice.actions;

export default SearchArraySlice.reducer;
