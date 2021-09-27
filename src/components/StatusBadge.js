import React from "react";
import styled from "styled-components";
import img from "../images/status.png";
import { SmallBadge } from "./CountryBadge";

const Badge = styled(SmallBadge)`
    grid-area: 2 / 1 / 2 / 1;
`


function StatusBadge({status}) {
    const opacity = status === "basic" ? 0.25 : 1;

    return (
        <Badge>
            <img style={{opacity: opacity, width: "35px", alignSelf: "center"}} src={img} alt="A shiny diamond." />
        </Badge>
    )
}

export default StatusBadge;