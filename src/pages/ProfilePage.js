import styled from "styled-components";
import React, { useState, useEffect } from "react";
import chessApi from "../helpers";
import "../App.css";
import TitleCard from "../components/TitleCard";
import LadderCard from "../components/LadderCard";

const PageDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--background-1);
    height: 100vh;
`;

const HeaderImg = styled.img`
    width: 95px;
    margin-bottom: 22px;
`;

const HeaderTitle = styled.h1`
    font-size: 28px;
    font-weight: 700;
    color: white;
    margin-bottom: 30px;
`;

const ContentDiv = styled.div`
    width: 100vw;
    height: 100vh;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
    background-color: var(--background-2);
    display: flex;
    flex-direction: column;
    /* align-items: center; */
`

const RankingDiv = styled.div`
    padding-top: 32px;
    padding-left: 42px;
    padding-right: 42px;
`

const SectionTitle = styled.h1`
    font-weight: medium;
    color: white;
    font-size: 18px;
    text-align: left;
    align-self: baseline;
    margin-bottom: 34px;
`


function ProfilePage() {
    const [profile, setProfile] = useState([]);
    const username = "DanielNaroditsky";
    // const { username } = useParams();

    if (profile) {
        var { 
            avatar,
            chess_blitz,
            chess_bullet,
            chess_rapid,
        } = profile;

        chess_blitz.mode = "blitz";
        chess_bullet.mode = "bullet";
        chess_rapid.mode = "rapid";

        var ladders = [chess_blitz, chess_bullet, chess_rapid];
    }

    useEffect(() => {
        async function getPlayerProfile() {
            const info = await chessApi.getPlayer(username);
            const stats = await chessApi.getPlayerStats(username);
            const archives = await chessApi.getPlayerMonthlyArchives(username);
            const profile = {...info.body, ...stats.body, ...archives.body};
            setProfile(profile);
        }

        getPlayerProfile()
    }, [])

    return (
        <PageDiv>
            {!profile ? "..." : <>
                <HeaderImg src={avatar} alt="Test" />
                <HeaderTitle>{username}</HeaderTitle>
                <ContentDiv>
                    <RankingDiv>
                        <SectionTitle>Ranking</SectionTitle>
                        <TitleCard ladders={ladders} />
                        {ladders.map((ladder, i) => <LadderCard key={i} ladder={ladder} />)}
                    </RankingDiv>
                </ContentDiv>
                
            </>}
        </PageDiv>
    )
}

export default ProfilePage

