import { useEffect } from "react";
import { MOVIE_options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcoming = () => {
  const dispatch = useDispatch();
  const selected = useSelector((store) => store.movies.topratedmovies);
  const upcoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      MOVIE_options
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !selected && upcoming();
  }, []);
};

export default useUpcoming;
