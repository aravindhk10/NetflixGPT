import React from "react";
import Header from "./Header";
import useNowPlaying from "../Hooks/useNowPlaying";
import MainSection from "./MainSection";
import SecondarySection from "./SecondarySection";
const Browse = () => {
  useNowPlaying();
  return (
    <div>
      <Header />
      <MainSection />
      <SecondarySection />
    </div>
  );
};

export default Browse;
