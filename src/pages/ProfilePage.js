import styled from "styled-components";
import React, { useState, useEffect } from "react";
import chessApi, { sortLadders } from "../helpers";
import "../App.css";
import TitleCard from "../components/TitleCard";
import LadderCard from "../components/LadderCard";
import ProfileSummary from "../components/ProfileSummary";

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

const HeaderName = styled.h1`
    text-transform: capitalize;
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

const SectionDiv = styled.div`
    margin-bottom: 53px;
`

function ProfilePage() {
    const [profile, setProfile] = useState(null);
    const username = "Kourage";

    useEffect(() => {
        async function getPlayerProfile() {
            const info = await chessApi.getPlayer(username).then(r => r.body);
            const stats = await chessApi.getPlayerStats(username).then(r => r.body);
            const archives = await chessApi.getPlayerMonthlyArchives(username).then(r => r.body);

            const { followers, joined, last_online} = info;
            const { chess_blitz, chess_bullet, chess_rapid } = stats;
            chess_blitz.mode = "blitz";
            chess_bullet.mode = "bullet";
            chess_rapid.mode = "rapid";


            const profile = {
                ladders: sortLadders([chess_blitz, chess_bullet, chess_rapid]),
                summary: {followers, joined, last_online},
                ...info, ...stats, ...archives}

            setProfile(profile);
        }

        getPlayerProfile()
    }, [])

    if (profile === null) {
        return "Loading...";
    }

    return (
        <PageDiv>                
            <HeaderImg src={profile.avatar} />
            <HeaderName>{profile.username}</HeaderName>
            <ContentDiv>
                <SectionDiv>
                    <SectionTitle>Ranking</SectionTitle>
                    <TitleCard ladders={profile.ladders} />
                    {profile.ladders.map((ladder, i) =>
                        <LadderCard key={i} ladder={ladder} />
                    )}
                </SectionDiv>
                <SectionDiv>
                    <SectionTitle>Profile</SectionTitle>
                    <ProfileSummary summary={profile.summary} ladders={profile.ladders} />
                </SectionDiv>
            </ContentDiv>
        </PageDiv>
    );
}

export default ProfilePage

