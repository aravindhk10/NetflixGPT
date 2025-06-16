import { useEffect } from "react";
import { MOVIE_options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularmovies } from "../utils/moviesSlice";

const usePopular = () => {
  const dispatch = useDispatch();
  const selected = useSelector((store) => store.movies.popularmovies);
  const popular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      MOVIE_options
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularmovies(json.results));
  };

  useEffect(() => {
    !selected && popular();
  }, []);
};

export default usePopular;
