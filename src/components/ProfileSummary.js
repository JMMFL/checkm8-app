import styled from "styled-components"
import React from "react";


const SummaryDiv = styled.div`
    height: 71px;
    border-radius: 15px;
    background-color: var(--background-1);
    display: flex;
    justify-content: space-between;
    padding-left: 18px;
    padding-right: 18px;
    margin-bottom: 16px;
`

const GamesTotal = styled.p`
    font-weight: 700;
    font-size: 32px;
    color: white;
`

const GamesText = styled.p`
    color: var(--grey-dark);
    font-size: 12px;
`

const StatusDiv = styled.div`
    text-align: right;
    font-size: 12px;
    line-height: 18px;
    color: var(--grey-dark);
    align-self: center;
`


function ProfileSummary({summary, ladders}) {
    const sum = (record) => record.win +record.loss + record.draw;
    const recordGames = ladders.map(ladder => sum(ladder.record));
    const totalGames = recordGames.reduce((x,y) => x+y, 0);
    
    const { followers, joined, last_online} = summary;

    const joinedYear = new Date(joined * 1000).getFullYear();
    const lastDate = new Date(last_online * 1000);



    return (
        <SummaryDiv>
            <div style={{alignSelf: "center", marginTop: "-4px"}}>
                <GamesTotal>{new Intl.NumberFormat().format(totalGames)}</GamesTotal>
                <GamesText>Total Games</GamesText>
            </div>
            <StatusDiv>
                <p>Joined {joinedYear}</p>
                <p>
                    {new Intl.NumberFormat().format(followers)} 
                    {followers > 2 ? " followers" : " follower"}
                </p>
                <p>Last online {`
                    ${lastDate.getDate()}/${lastDate.getMonth() + 1}/${lastDate.getYear() - 100}
                `}
                </p>
            </StatusDiv>
        </SummaryDiv>
    )
}

export default ProfileSummary