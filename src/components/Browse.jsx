import Header from "./Header";
import useNowPlaying from "../Hooks/useNowPlaying";
import MainSection from "./MainSection";
import SecondarySection from "./SecondarySection";
import usePopular from "../Hooks/usePopular";
import useTopRated from "../Hooks/useTopRated";
import useUpcoming from "../Hooks/useUpcoming";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";
const Browse = () => {
  useNowPlaying();
  usePopular();
  useTopRated();
  useUpcoming();
  const selector = useSelector((state) => state.gpt);
  return (
    <div className="">
      <Header />
      {selector?.gpttoggle ? (
        <GptSearchPage />
      ) : (
        <>
          <MainSection />
          <SecondarySection />
        </>
      )}
    </div>
  );
};

export default Browse;
