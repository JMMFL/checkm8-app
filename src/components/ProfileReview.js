import { Doughnut } from 'react-chartjs-2';
import styled from "styled-components";
import React from "react";

const ReviewDiv = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: var(--background-1);
    padding-left: 10px;
    padding-right: 18px;
    height: 134px;
    border-radius: 15px;
    margin-bottom: 20px;
`

const ReviewList = styled.ul`
    font-size: 12px;
    color: var(--grey-dark);
    text-align: left;
    line-height: 18px;
    list-style: none;
    padding-left: 2px;
`

const Win = styled.span`
    color: var(--blue-win);
`

const Loss = styled.span`
    color: var(--red-loss);
`

const Games = styled.span`
    color: var(--grey-dark);
`

const Chart = styled.div`
    display: grid;
    align-self: center;
    grid-template-columns: 114px;
    grid-template-rows: 114px;
    width: 114px;
    height: 114px;

`
const Winrate = styled.h1`
    color: white;
    font-weight: 700;
    font-size: 18px;
    grid-area: 1 / 1 / 1 / 1;
    justify-self: center;
    align-self: center;
`

function ProfileReview({review}) {
    const { 
        abandoned,
        checkmated,
        games,
        losses,
        resigned,
        timeout,
        wins
    } = review;

    const winrate = Math.round(wins / games * 100);

    const chart = {
        datasets: [{
          data: [losses, wins],
          backgroundColor: [
            '#FF5A5F',
            '#1CA1F1'
          ],

          borderColor: 'rgba(0, 0, 0, 0)',
        }]
      };


    return (
        <ReviewDiv>
            <Chart>
                <Winrate>{winrate}%</Winrate>
                <Doughnut style={{gridArea: "1/1/1/1", marginTop: "-5px"}} data={chart} />
            </Chart>
            <div style={{alignSelf: "center"}}>
                <h1 style={{fontSize: "18px", fontWeight: "400"}}><Win>{wins}W</Win> <Loss>{losses}L</Loss> <Games>{games}G</Games></h1>
                <ReviewList>
                    <li>{checkmated} by mate</li>
                    <li>{resigned} by resign</li>
                    <li>{timeout} by time</li>
                    <li>{abandoned} by rage</li>
                </ReviewList>
            </div>
        </ReviewDiv>
    )
}

export default ProfileReview;