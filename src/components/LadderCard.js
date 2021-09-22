import styled from "styled-components";
import React from "react";

console.clear();

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


function LadderCard({ladder}) {
    const rating = ladder?.last.rating;
    const { win, loss, draw } = ladder?.record;
    const { mode } = ladder;

    return (
        <LadderDiv>

            <p>{mode}</p>
            <LadderStats>
                <LadderRating>{rating}</LadderRating>
                <LadderRecords>{win}W {loss}L {draw}D</LadderRecords>
            </LadderStats>
        </LadderDiv>
    )
}

export default LadderCard;