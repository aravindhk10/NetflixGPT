import React from "react";
import { useSelector } from "react-redux";
import Bckgrnd_video from "./Bckgrnd_video";
import Video_details from "./Video_details";

function MainSection() {
  const movies_data = useSelector((state) => state.movies?.nowPlayingmovies);
  // console.log(movies_data);
  if (!movies_data) {
    return;
  }
  const { title, overview, id } = movies_data[0];
  return (
    <div>
      <Video_details movietitle={title} movieoverview={overview} />
      <Bckgrnd_video movieid={id} />
    </div>
  );
}

export default MainSection;
