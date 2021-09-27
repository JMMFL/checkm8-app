import styled from "styled-components";
import React from "react";
import ReactCountryFlag from "react-country-flag";

export const SmallBadge = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 45px;
    height: 45px;
    border-radius: 15px;
    background-color: var(--background-3);
    font-size: 28px;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5));
    grid-area: 1 / 1 / 1 / 1;
`

function CountryBadge({countryCode}) {
    
    return (
        <SmallBadge>
            <ReactCountryFlag style={{alignSelf: "center"}} countryCode={countryCode} />
        </SmallBadge>
    )
}

export default CountryBadge
