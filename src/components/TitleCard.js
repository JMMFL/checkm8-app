import styled from "styled-components";
import React from "react";

const RankDiv = styled.div`
    font-weight: 700;
    font-size: 24px;
    color: var(--background-1);
    background-color: ${props => props.color};
    text-transform: uppercase;
    height: 71px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    border-radius: 15px;
    margin-bottom: 10px;
`

function TitleCard({ladders, title}) {
    let givenRank;

    if (title !== undefined) {
        switch(title) {
            case "CM":
            case "IM":
            case "FM":
            case "WCM":
            case "WIM":
            case "WFM":
                givenRank = "master";
                break;
            default:
                givenRank = "grandmaster";
                break;
        }

    } else {
        const ratings = ladders.map(ladder => ladder?.last.rating);
        const bestRating = Math.max(...ratings);

        if (bestRating < 1200) {
            givenRank = "beginner";
        } else if (bestRating < 1400) {
            givenRank = "novice";
        } else if (bestRating < 1800) {
            givenRank = "intermediate";
        } else {
            givenRank = "expert";
        }
    }
    
    return (
        <RankDiv color={`var(--${givenRank}-color)`}>{givenRank}</RankDiv>
    )
}

export default TitleCard;