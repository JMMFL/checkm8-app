import React, { useState, useEffect } from "react";
import chessApi from "../helpers";

function StreamersPage() {
    const [streamers, setStreamers] = useState([]);

    useEffect(() => {
        async function fetchStreamers() {
            const response = await chessApi.getStreamers();
            const streamers = response.body.streamers;
            setStreamers(streamers.slice(0, 24));
        }

        fetchStreamers();
    }, [])
    
    return (
        <div className="streamers-page">
            {!streamers ? <h1>Getting Data...</h1>
             : streamers.map(({ username, avatar, twitch_url }, i) => 
                <div key={i}>
                    <h1>{username}</h1>
                    <img src={avatar} alt={`Chess.com profile of ${username}.`} />
                    <a href={twitch_url}>Twitch</a>
                </div>    
            )}
        </div>
    )
}

export default StreamersPage