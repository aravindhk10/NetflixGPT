import { useEffect } from "react";
import { MOVIE_options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addnowPlayingmovies } from "../utils/moviesSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const selected = useSelector((store) => store.movies.nowPlayingmovies);
  const nowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      MOVIE_options
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addnowPlayingmovies(json.results));
  };

  useEffect(() => {
    !selected && nowPlaying();
  }, []);
};

export default useNowPlaying;
