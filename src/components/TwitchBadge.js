import React from "react";
import twitchLogo from "../images/twitch.png";
import { LargeBadge, Logo, Heading } from "./ChessBadge";

function TwitchBadge({url}) {
    if (url !== undefined) {
        return ( 
            <a href={url} style={{textDecoration: "none", justifySelf: "end"}} target="_blank" rel="noreferrer">
                <LargeBadge>
                    <Logo src={twitchLogo} alt="Twitch.tv logo"/>
                    <Heading>twitch.tv</Heading>
                </LargeBadge>
            </a>
        )

    }

    return <></>
}

export default TwitchBadge;