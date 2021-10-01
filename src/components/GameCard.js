import { colors, blankAvatar } from "../helpers";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import React from "react";
import blitzIcon from "../images/blitz.png";
import bulletIcon from "../images/bullet.png";
import otherIcon from "../images/other.png";
import rapidIcon from "../images/rapid.png";

const CardDiv = styled.div`
    margin: 0 auto;
    display: grid;
    height: 80px;
    border-radius: 15px;
    background: ${props => props.background};
    grid-template-columns: 20px 26px 16px 20px 42px 1fr 50px 12px 26px 13px 11px 26px 7px 23px;
    grid-template-rows: 10px 10px 10px 40px 10px;
    margin-bottom: 7px;
    filter: drop-shadow(0 0 3px #000);

    @media (min-width: 768px) {
        grid-template-columns: 20px 26px 30px 20px 42px 1fr 50px 12px 26px 13px 11px 26px 10px 23px;
        grid-template-rows: 12px 12px 12px 42px 12px;
        height: 90px;
    }
`

const VerticalBar = styled.div`
    border-radius: 50px;
    height: 60px;
    width: 3px;
    grid-area: 1 / 1 / 6 / 2;
    background: ${props => props.background};
    justify-self: center;
    align-self: center;

    @media (min-width: 768px) {
        height: 70px;
    }
`

const ResultDiv = styled.div`
    grid-area: 2 / 2 / 3 / 5;
    align-self: center;
`

const Result = styled.h1`
    display: inline;
    color: ${props => props.color};
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    align-self: baseline;
    margin-right: 4px;

    @media (min-width: 768px) {
        font-size: 14px;
    }
`

const StatusDiv = styled.div`
    grid-area: 2 / 8 / 3 / 13;
    justify-self: end;
    align-self: center;
`

const Outcome = styled.p`
    display: inline;
    color: var(--grey-light);
    font-size: 12px;
    text-transform: capitalize;
    align-self: baseline;

    @media (min-width: 768px) {
        font-size: 14px;
    }
`

const Mode = styled.h1`
    display: inline;
    color: white;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    align-self: baseline;
    margin-right: 4px;

    @media (min-width: 768px) {
        font-size: 14px;
    }
`

const When = styled.p`
    display: inline;
    font-size: 10px;
    text-transform: lowercase;
    color: var(--grey-light);
    align-self: baseline;

    @media (min-width: 768px) {
        font-size: 12px;
    }
`

const ImgPlayer = styled.img`
    grid-area: 4 / 2 / 5 / 4;
    width: 42px;
    align-self: end;

    @media (min-width: 768px) {
        width: 46px;
    }
`

const ImgMode = styled.img`
    grid-area: 4 / 4 / 5 / 5;
    height: 14px;
    align-self: center;
    justify-self: center;

    @media (min-width: 768px) {
        justify-self: baseline;
        height: 18px;
    }
`

const ImgEnemy = styled.img`
    grid-area: 4 / 5 / 5 / 6;
    width: 42px;
    align-self: end;

    @media (min-width: 768px) {
        width: 46px;
    }
`

const Players = styled.div`
    width: 47px;
    overflow-x: hidden;
    grid-area: 4 / 7 / 5 / 9;
    font-size: 11px;
    color: white;
    align-self: center;
    justify-self: center;

    @media (min-width: 414px) {
        justify-self: baseline;
        
    }

    @media (min-width: 768px) {
        font-size: 13px;
        width: 80px;
        position: relative;
        left: -35px;
    }

    
`

const Ratings = styled.div`
    grid-area: 4 / 9 / 5 / 10;
    font-size: 11px;
    color: var(--grey-light);
    align-self: center;

    @media (min-width: 768px) { 
        font-size: 13px;
    }
`

const Colors = styled.div`
    grid-area: 4 / 11 / 5 / 12;
    align-self: center;
    justify-self: end;
    
`
const ColorBlock = styled.div`
    margin-top: 6px;
    margin-bottom: 6px;
    height: 8px;
    width: 8px;
    background: ${props => props.color};

    @media (min-width: 768px) { 
        margin-top: 8px;
        margin-bottom: 8px;
        height: 10px;
        width: 10px;
        position: relative;
        left: -4px;
    }
`

const Scores = styled.div`
    grid-area: 4 / 12 / 5 / 13;
    font-size: 11px;
    color: var(--grey-light);
    align-self: center;
    justify-self: end;

    @media (min-width: 768px) { 
        font-size: 13px;
    }
`

const ScoreText = styled.p`
    color: ${props => props.score !== "??" && props.score > 90 ? colors.highScore : colors.score };
`

const Button = styled.a`
    display: flex;
    justify-content: center;
    align-content: center;
    grid-area: 1 / 14 / 7 / 15;
    width: 23px;
    background-color: var(--background-1);
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    justify-self: end;
`

function GameCard({game, username, avatar, enemyAvatar}) {    
    const { white, black, time_class, end_time, accuracies, url } = game;
    const { username: color } = white;
    const player = username === color ? white : black;

    const { winText, winBg, lossText, lossBg, drawText, drawBg} = colors;
    
    let result, fadeColor, fullColor;
    switch(player.result) {
        case "win":
            result = "win";
            fullColor = winText;
            fadeColor = winBg;
            break;
        case "agreed":
        case "insufficient":
        case "repetition":
            result = "draw";
            fullColor = drawText;
            fadeColor = drawBg;
            break;
        default:
            result = "loss";
            fullColor = lossText;
            fadeColor = lossBg;
            break;
    }

    const { result: resultW } = white;
    const { result: resultB } = black;
    const outcome = resultW === "win" ? resultB : resultW;

    const time = new Date(end_time * 1000);
    const day = time.getDate();
    const month = time.getMonth() + 1;
    const date = `${day}/${month}`;

    let whiteScore, blackScore;
    if (accuracies !== undefined) {
        let { white, black } = accuracies;
        whiteScore = Math.round(white);
        blackScore = Math.round(black);
    } else {
        whiteScore = blackScore = "??";
    }

    let icon;
    switch(time_class) {
        case "rapid":
            icon = rapidIcon;
            break;
        case "blitz":
            icon = blitzIcon;
            break;
        case "bullet":
            icon = bulletIcon;
            break;
        default:
            icon = otherIcon;
    }

    return (
        <CardDiv background={fadeColor}>
            <VerticalBar background={fullColor} />
            <ResultDiv>
                <Result color={fullColor}>{result}</Result>
                <Outcome>{outcome}</Outcome>
            </ResultDiv>
            <StatusDiv>
                <Mode>{time_class}</Mode>
                <When>{date}</When>
            </StatusDiv>
            <ImgPlayer style={{background: fullColor}} src={avatar} alt={`Avatar of ${username}.`} />
            <ImgMode src={icon} alt={`Icon for game mode.`} />
            <ImgEnemy style={{background: fullColor}} src={enemyAvatar ? enemyAvatar : blankAvatar} alt={`Avatar of enemy`} />
            <Players>
                <p>{white.username}</p>
                <p>{black.username}</p>
            </Players>
            <Ratings>
                <p>{white.rating}</p>
                <p>{black.rating}</p>
            </Ratings>
            <Colors>
                <ColorBlock color={"#fff"}/>
                <ColorBlock color={"#000"}/>
            </Colors>
            <Scores>
                <ScoreText score={whiteScore}>{whiteScore}%</ScoreText>
                <ScoreText score={blackScore}>{blackScore}%</ScoreText>
            </Scores>
            <Button href={url} target="_blank"><FaSearch style={{color: "white", alignSelf: "center", fontSize: "12px", transform: "scaleX(-1)"}} /></Button>
       </CardDiv>
    )
}

export default GameCard;