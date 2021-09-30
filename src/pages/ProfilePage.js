import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import chessApi, { blankAvatar, getCountryCode, getEnemyAvatars, getRecentGames, makeReview, sortLadders } from "../helpers";
import "../App.css";
import TitleCard from "../components/TitleCard";
import LadderCard from "../components/LadderCard";
import ProfileSummary from "../components/ProfileSummary";
import ProfileReview from "../components/ProfileReview";
import CountryBadge from "../components/CountryBadge";
import StatusBadge from "../components/StatusBadge";
import ChessBadge from "../components/ChessBadge";
import TwitchBadge from "../components/TwitchBadge";
import GameCard from "../components/GameCard";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

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
    height: max-content;
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

const ProfileBadges = styled.div`
    display: grid;
    grid-row-gap: 10px;
    grid-template-columns: 45px 1fr 1fr;
    grid-template-rows: 45px 45px;
`

function ProfilePage() {
    const [status, setStatus] = useState("loading");
    const [profile, setProfile] = useState(null);
    const [games, setGames] = useState(null);
    const [avatars, setAvatars] = useState(null);
    const { username } = useParams();


    useEffect(() => {
        async function getPlayerProfile() {
            try {
                const info = await chessApi.getPlayer(username).then(r => r.body);
                const stats = await chessApi.getPlayerStats(username).then(r => r.body);
                const archives = await chessApi.getPlayerMonthlyArchives(username).then(r => r.body.archives);
                
                const { followers, joined, last_online, country} = info;
                
                const { chess_blitz, chess_bullet, chess_rapid } = stats;
                chess_blitz.mode = "blitz";
                chess_bullet.mode = "bullet";
                chess_rapid.mode = "rapid";

                const games = await getRecentGames(archives, 10);
                const avatars = await getEnemyAvatars(games, username);
                const avatar = info.avatar ? info.avatar : blankAvatar;

                const profile = {
                    countryCode: await getCountryCode(country),
                    ladders: sortLadders([chess_blitz, chess_bullet, chess_rapid]),
                    review: makeReview(games, username),
                    summary: {followers, joined, last_online},
                    avatar: avatar,

                    ...info, ...stats, ...archives,
                }

                setGames(games);
                setProfile(profile);
                setAvatars(avatars);
                setStatus("success");
            } catch {
                setStatus("failure");
            }
        }

        getPlayerProfile()
    }, [username])


    if (status === "loading") {
        return (
            <PageDiv>
                <Loader />
            </PageDiv>
        )
    } else if (status === "success") {
        return (
            <PageDiv>
            <SearchBar />
            <HeaderImg src={profile.avatar} />
            <HeaderName>{profile.username}</HeaderName>
            <ContentDiv>
                <SectionDiv>
                    <SectionTitle>Ranking</SectionTitle>
                    <TitleCard ladders={profile.ladders} title={profile.title} />
                    {profile.ladders.map((ladder, i) =>
                        <LadderCard key={i} ladder={ladder} />
                    )}
                </SectionDiv>
                <SectionDiv>
                    <SectionTitle>Profile</SectionTitle>
                    <ProfileSummary summary={profile.summary} ladders={profile.ladders} />
                    <ProfileReview review={profile.review} />
                    <ProfileBadges>
                        <CountryBadge countryCode={profile.countryCode} />
                        <StatusBadge status={profile.status} />
                        <ChessBadge url={profile.url} />
                        <TwitchBadge url={profile.twitch_url} />
                    </ProfileBadges>
                </SectionDiv>
                <SectionDiv>
                    <SectionTitle>History</SectionTitle>
                    {
                        games.map((game, i) => {
                            return (
                                <GameCard
                                    game={game}
                                    username ={username}
                                    avatar={profile.avatar}
                                    enemyAvatar={avatars[i]}
                                    key={i}
                                />
                            )
                        })
                    }
                </SectionDiv>
            </ContentDiv>
            <Footer />
        </PageDiv>
        )
    } else {
        return (
            <PageDiv>
                <SearchBar />
                <p style={{
                    textAlign: "center",
                    color: "lightgrey",
                    fontSize: "64px",
                    marginBottom: "12px"
                }}>(◕︵◕)</p>
                <h1 style={{
                    textAlign: "center",
                    color: "lightgrey",
                    fontWeight: 400,
                    fontSize: "16px",
                }}>Player "{username}" doesn't exist on Chess.com.</h1>
            </PageDiv>
        )
    }
}

export default ProfilePage

