import { useEffect } from "react";
import { MOVIE_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addtopratedmovies } from "../utils/moviesSlice";

const useTopRated = () => {
  const dispatch = useDispatch();
  const toprated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      MOVIE_options
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addtopratedmovies(json.results));
  };

  useEffect(() => {
    toprated();
  }, []);
};

export default useTopRated;
