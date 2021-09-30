import styled from "styled-components";
import React from "react";

const Content = styled.footer`
    background: black;
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100vw;
    height: 40px;
    padding-top: 12px;
    padding-bottom: 10px;
    justify-self: start;
`

const Link = styled.a`
    color: white;
    text-transform: uppercase;
    text-align: center;
    text-decoration: underline;
    font-size: 10px;
    font-weight: 500;
`

function Footer() {
    return (
        <Content>
            <Link href="https://github.com/JMMFL">Created by Jordan</Link>
        </Content>
    )
}

export default Footer;