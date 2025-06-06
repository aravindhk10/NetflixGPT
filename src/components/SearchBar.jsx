import React from "react";
import { useSelector } from "react-redux";
import languages from "../utils/languageConstants.js";
const SearchBar = () => {
  const selectLanguage = useSelector((store) => store.config.preferredLanguage);
  console.log(selectLanguage);

  return (
    <div>
      <div className="flex justify-center">
        <form className="grid grid-cols-12 w-1/2 ">
          <input
            type="text"
            className="col-span-8 p-4 text-black bg-white outline-none"
            placeholder={languages[selectLanguage].searh_inputbox_placeholder}
          />
          <button className="bg-red-700 col-span-4 text-lg p-4 font-semibold cursor-pointer hover:bg-red-900">
            {languages[selectLanguage].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
