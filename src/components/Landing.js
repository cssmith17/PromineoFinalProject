import React from 'react';
import VideoGames from './VideoGames';

//Landing page for app, displays a name header and then displays the VideoGames component

export default function Landing() {
    return (
        <>
        <div className="flex flex-col justify-center items-center">
        <h2 className="text-8xl font-extrabold text-green-600 tracking-wider pb-2" id="emboss">GameGo</h2> <br></br>
        <h3 className="text-4xl font-extrabold text-green-600/75 tracking-wider pb-24" id="emboss">Video Game Reviews</h3>
        </div>
        <VideoGames />
        </>

    )
}