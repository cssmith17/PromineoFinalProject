import React from "react";
import { VideoGamesData } from "./VideoGamesData";

// This component takes the VideoGamesData array of video games and builds out the landing page, displaying each game


export default function VideoGames() {
  const VideoGameList = VideoGamesData.map(({id, title, thumbnail, summary}) => {
    return (
        <div className="mx-auto content-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={id}>
        <a href={"/videogame/" + id}>
    <img className="rounded-t-lg mx-auto" src={thumbnail} alt="" />
  </a>
  <div className="p-2">
    <a href={"/videogame/" + id}>
        <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{summary}</p>
        </div>
    </div>

    )
  });

  return (
    <div className="grid grid-cols-3">
      {VideoGameList}
      </div>
  );
}
