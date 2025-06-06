import React from "react";
import MoviesSection from "./MoviesSection";
import { useSelector } from "react-redux";

function SecondarySection() {
  const movieSelector = useSelector((state) => state.movies);

  return (
    <div className=" bg-black">
      <div className="-mt-56 relative z-20">
        <MoviesSection
          title={"Now Playingmovies"}
          data={movieSelector.nowPlayingmovies}
        />
        <MoviesSection title={"Popular"} data={movieSelector.popularmovies} />
        <MoviesSection
          title={"Top Rated"}
          data={movieSelector.topratedmovies}
        />
        <MoviesSection title={"Upcoming"} data={movieSelector.upcomingmovies} />
      </div>
    </div>
  );
}

export default SecondarySection;
