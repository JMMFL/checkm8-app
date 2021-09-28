import React from "react";
import styled from "styled-components";
import twitchLogo from "../images/twitch.png";
import { LargeBadge, Logo, Heading } from "./ChessBadge";

const Badge = styled(LargeBadge)`
    filter: none;
    background-color: var(--background-1);
    justify-self: end;
    color: var(--grey-dark);
    text-align: center;
    text-transform: lowercase;
`

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

    return (
        <Badge>
            <p>¯\(°_o)/¯</p>
            <p style={{fontSize: "10px"}}>no twitch</p>
        </Badge>
    )
}

export default TwitchBadge;