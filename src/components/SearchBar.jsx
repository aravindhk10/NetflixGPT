import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import languages from "../utils/languageConstants.js";
import ai from "../utils/gemini.js";
import { MOVIE_options } from "../utils/constants.js";
import { addSearchResults } from "../utils/gptSlice.js";
const SearchBar = () => {
  const selectLanguage = useSelector((store) => store.config.preferredLanguage);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  // console.log(selectLanguage);

  const searchForMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      MOVIE_options
    );
    const json = await data.json();
    return json.results;
  };

  const handleSearch = async () => {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents:
        "Act as a movie recommendation system and act upon the search query: " +
        searchText.current.value +
        ", also provide 5 movis in just comma seperated way only no other text need just give 5 movies, dont want any additional text in response, eg: movie1,movie2,movie3,movie4,movie5",
    });
    console.log(response.text);
    const movieResponse = response?.text.split(",");
    // console.log(movieResponse);
    const searchResults = movieResponse.map((movie) => searchForMovies(movie));
    const data = await Promise.all(searchResults);
    dispatch(
      addSearchResults({ movieNames: movieResponse, searchResults: data })
    );
  };

  return (
    <div>
      <div className="flex justify-center">
        <form
          className="grid grid-cols-12 w-1/2 "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            className="col-span-8 p-4 text-black bg-white outline-none"
            placeholder={languages[selectLanguage].searh_inputbox_placeholder}
          />
          <button
            className="bg-red-700 col-span-4 text-lg p-4 font-semibold cursor-pointer hover:bg-red-900"
            onClick={handleSearch}
          >
            {languages[selectLanguage].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
