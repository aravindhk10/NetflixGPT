import React from "react";

function Video_details({ movietitle, movieoverview }) {
  return (
    <div className="w-full pl-20 aspect-video pt-65 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{movietitle}</h1>
      <p className="w-1/5 text-lg mt-2">{movieoverview}</p>

      <div className="mt-4 flex gap-4">
        <button className=" text-black text-lg bg-white p-2 w-20 font-semibold cursor-pointer hover:bg-white/80">
          Play
        </button>
        <button className="bg-gray-500/40 p-2 w-30 font-semibold  cursor-pointer text-white text-lg">
          More Info
        </button>
      </div>
    </div>
  );
}

export default Video_details;
