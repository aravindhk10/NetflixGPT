import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingmovies: null,
    movieTrailer: null,
    popularmovies: null,
    topratedmovies: null,
    upcomingmovies: null,
  },
  reducers: {
    addnowPlayingmovies: (state, action) => {
      state.nowPlayingmovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addPopularmovies: (state, action) => {
      state.popularmovies = action.payload;
    },
    addtopratedmovies: (state, action) => {
      state.topratedmovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingmovies = action.payload;
    },
  },
});

export const {
  addnowPlayingmovies,
  addMovieTrailer,
  addPopularmovies,
  addtopratedmovies,
  addUpcomingMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
