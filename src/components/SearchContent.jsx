import React from "react";
import { useSelector } from "react-redux";
import MoviesSection from "./MoviesSection";

const SearchContent = () => {
  const selector = useSelector((store) => store.gpt);
  const { movieTitles, searchedMovieResults } = selector;
  if (!movieTitles || !searchedMovieResults) {
    return (
      <div className="text-white m-7 p-4 bg-black text-2xl text-center">
        No results found
      </div>
    );
  }
  return (
    <div className="text-white m-7 p-4 bg-black opacity-90">
      {movieTitles.map((movie, index) => (
        <MoviesSection title={movie} data={searchedMovieResults[index]} />
      ))}
    </div>
  );
};

export default SearchContent;
