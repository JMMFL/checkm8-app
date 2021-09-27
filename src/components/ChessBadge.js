import React from "react";
import styled from "styled-components";
import chessLogo from "../images/chess.png";

export const LargeBadge = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 100px;
    height: 100px;
    background-color: var(--background-3);
    border-radius: 15px;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5));

`

export const Logo = styled.img`
    align-self: center;
    width: 34px;
    margin-bottom: 9px;
`

export const Heading = styled.h1`
    font-size: 12px;
    color: var(--grey-light);
    font-weight: 400;
    text-align: center;
`

function ChessBadge({url}) {
    return (
        <a href={url} style={{textDecoration: "none", justifySelf: "end"}} target="_blank" rel="noreferrer">
            <LargeBadge>
                <Logo src={chessLogo} alt="Chess.com logo." />
                <Heading>chess.com</Heading>
            </LargeBadge>
        </a>
    )
}

export default ChessBadge;