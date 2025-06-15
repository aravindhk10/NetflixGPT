import React, { useRef } from "react";
import { useSelector } from "react-redux";
import languages from "../utils/languageConstants.js";
import ai from "../utils/gemini.js";
const SearchBar = () => {
  const selectLanguage = useSelector((store) => store.config.preferredLanguage);
  const searchText = useRef(null);
  // console.log(selectLanguage);

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
    console.log(movieResponse);
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
