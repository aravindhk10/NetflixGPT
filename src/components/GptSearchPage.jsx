import SearchBar from "./SearchBar.jsx";
import SearchContent from "./SearchContent.jsx";
import { Backgrnd_img } from "../utils/constants.js";
const GptSearchPage = () => {
  return (
    <div className="relative">
      <div className="absolute -z-10">
        <img src={Backgrnd_img} />
      </div>
      <div className="pt-40 relative z-10">
        <SearchBar />
        <SearchContent />
      </div>
    </div>
  );
};

export default GptSearchPage;
