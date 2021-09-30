import styled from "styled-components";
import React from "react";

const Content = styled.footer`
    background: black;
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100vw;
    padding-top: 10px;
    padding-bottom: 10px;
`

const Link = styled.a`
    color: white;
    text-transform: uppercase;
    text-align: center;
    font-size: 10px;
    font-weight: 500;
`

function Footer() {

    return (
        <Content>
            <Link href="https://github.com/JMMFL">Designed by Jordan</Link>
        </Content>
    )
}

export default Footer;