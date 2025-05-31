import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const Bckgrnd_video = ({ movieid }) => {
  useMovieTrailer(movieid);
  const selector = useSelector((store) => store.movies?.movieTrailer?.key);

  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          selector +
          "?&loop=1&controls=0&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Bckgrnd_video;
