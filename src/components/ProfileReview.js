import { Doughnut } from 'react-chartjs-2';
import styled from "styled-components";
import React from "react";

const ReviewDiv = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: var(--background-1);
    padding-left: 18px;
    padding-right: 18px;
    height: 134px;
    border-radius: 15px;
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
    align-self: center;
    width: 114px;
    height: 114px;
`
const Winrate = styled.h1`
    color: white;
    font-weight: 700;
    position: absolute;
    font-size: 18px;
    left: 93px;
    padding-top: 47px;

`

function ProfileReview({review}) {
    const { 
        abandons,
        checkmates,
        games,
        losses,
        resigns,
        timeouts,
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
                <Doughnut style={{marginTop: "-3px", marginLeft: "-8px"}} data={chart} />
            </Chart>
            <div style={{alignSelf: "center"}}>
                <h1 style={{fontSize: "18px", fontWeight: "400"}}><Win>{wins}W</Win> <Loss>{losses}L</Loss> <Games>{games}G</Games></h1>
                <ReviewList>
                    <li>{checkmates} Checkmates</li>
                    <li>{resigns} Resigns</li>
                    <li>{timeouts} Timeouts</li>
                    <li>{abandons} Abandons</li>
                </ReviewList>
            </div>
        </ReviewDiv>
    )
}

export default ProfileReview;