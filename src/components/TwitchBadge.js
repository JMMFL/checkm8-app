import React from "react";
import twitchLogo from "../images/twitch.png";
import { LargeBadge, Logo, Heading } from "./ChessBadge";





function TwitchBadge({url}) {
    return (
        <a href={url ? url : "https://www.chess.com/streamers"} style={{textDecoration: "none", justifySelf: "end"}} target="_blank" rel="noreferrer">
            <LargeBadge>
                <Logo src={twitchLogo} style={{opacity: `${url ? 1 : 0.25}`}} alt="Twitch.tv logo"/>
                <Heading>twitch.tv</Heading>
            </LargeBadge>
        </a>
    )


}

export default TwitchBadge;