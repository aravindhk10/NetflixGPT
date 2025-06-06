import { useEffect } from "react";
import { MOVIE_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcoming = () => {
  const dispatch = useDispatch();
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
    upcoming();
  }, []);
};

export default useUpcoming;
