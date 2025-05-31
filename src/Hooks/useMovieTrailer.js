import { useDispatch } from "react-redux";
import { MOVIE_options } from "../utils/constants";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieid) => {
  const dispatch = useDispatch();
  const fetchMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieid +
        "/videos?language=en-US",
      MOVIE_options
    );
    const json = await data.json();
    const videoData = json.results.filter((vid) => vid.type === "Trailer");
    const trailer = videoData.length ? videoData[0] : json[0];
    dispatch(addMovieTrailer(trailer));
    // console.log(trailer);
  };
  useEffect(() => {
    fetchMovieVideos();
  }, []);
};

export default useMovieTrailer;
