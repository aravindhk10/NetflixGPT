import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gpttoggle: false,
    movieTitles: null,
    searchedMovieResults: null,
  },
  reducers: {
    togglinggpt: (state) => {
      state.gpttoggle = !state.gpttoggle;
    },
    addSearchResults: (state, action) => {
      const { movieNames, searchResults } = action.payload;
      state.movieTitles = movieNames;
      state.searchedMovieResults = searchResults;
    },
    clearSearch: (state) => {
      state.movieTitles = null;
      state.searchedMovieResults = null;
    },
  },
});

export const { togglinggpt, addSearchResults, clearSearch } = gptSlice.actions;

export default gptSlice.reducer;
