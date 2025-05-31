import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingmovies: null,
    movieTrailer: null,
  },
  reducers: {
    addnowPlayingmovies: (state, action) => {
      state.nowPlayingmovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});

export const { addnowPlayingmovies, addMovieTrailer } = moviesSlice.actions;

export default moviesSlice.reducer;
