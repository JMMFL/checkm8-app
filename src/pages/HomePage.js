import styled from "styled-components"
import React from "react"
import SearchBar from "../components/SearchBar"
import Footer from "../components/Footer"

const PageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    height: 100vh;
    background-color: var(--background-2);
`

const ContentDiv = styled.div`
    background-color: var(--background-3);
    position: relative;
    top: -200px;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5));
    width: 300px;
    padding: 30px;
    border-radius: 15px;
    align-self: center;
    color: white;
`

const Heading = styled.h1`
    text-transform: lowercase;
    margin-bottom: 2px;
`;

const Description = styled.p`
    color: var(--grey-light);
`;

function HomePage() {
    return (
        <PageDiv>
            <SearchBar />
            <ContentDiv>
                <Heading>checkm8.me</Heading>
                <Description>Look up users from <i>Chess.com</i> and analyze player stats.</Description>
            </ContentDiv>
            <Footer />
        </PageDiv>
    )
}

export default HomePage