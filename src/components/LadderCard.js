import styled from "styled-components";
import blitzPng from "../images/blitz.png";
import bulletPng from "../images/bullet.png";
import rapidPng from "../images/rapid.png";
import React from "react";


const LadderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    height: 71px;
    background-color: var(--background-3);
    margin-bottom: 10px;
    border-radius: 15px;
    padding-left: 19px;
    padding-right: 15px;
`;

const LadderStats = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    align-self: center;
`;

const LadderRating = styled.p`
    font-weight: 700;
    font-size: 32px;
    color: white;
`;

const LadderRecords = styled.p`
    font-size: 12px;
    
`;

const LadderMode = styled.div`
    display: flex;
    text-transform: capitalize;
    font-size: 18px;
    color: var(--grey-light);
    align-self: center;
`

const LadderImg = styled.img`
    height: 30px;
    margin-right: 15px;
    align-self: center;
`

const Win = styled.span`
    color: var(--blue-win);
`

const Loss = styled.span`
    color: var(--red-loss);
`

const Draw = styled.span`
    color: var(--grey-draw);
`

function LadderCard({ladder}) {
    const rating = ladder?.last.rating;
    const { win, loss, draw } = ladder?.record;
    const { mode } = ladder;
    
    let image;
    if (mode === "blitz") {
        image = blitzPng;
    } else if (mode === "bullet") {
        image = bulletPng;
    } else {
        image = rapidPng;
    }


    return (
        <LadderDiv>

            <LadderMode>
                <LadderImg src={image} alt={`Colorful icon for ${mode} category.`} />
                <p style={{alignSelf: "center"}}>{mode}</p>
            </LadderMode>
            <LadderStats>
                <LadderRating>{rating}</LadderRating>
                <LadderRecords>
                    <Win>{win}W</Win> <Loss>{loss}L</Loss> <Draw>{draw}D</Draw>
                </LadderRecords>
            </LadderStats>
        </LadderDiv>
    )
}

export default LadderCard;