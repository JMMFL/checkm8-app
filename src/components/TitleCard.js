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

function TitleCard({ladders}) {
    const ratings = ladders.map(ladder => ladder?.last.rating);
    const bestRating = Math.max(...ratings);
    
    let givenRank;
    if (bestRating < 1200) {
        givenRank = "beginner";
    } else if (bestRating < 1400) {
        givenRank = "novice";
    } else if (bestRating < 1800) {
        givenRank = "intermediate";
    } else if (bestRating < 2200) {
        givenRank = "expert";
    } else if (bestRating < 2500)  {
        givenRank = "master";
    } else {
        givenRank = "grandmaster";
    }

    return (
        <RankDiv color={`var(--${givenRank}-color)`}>{givenRank}</RankDiv>
    )
}

export default TitleCard;