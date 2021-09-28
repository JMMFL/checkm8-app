import React from "react";
import styled from "styled-components";
import premium from "../images/premium.png";
import basic from "../images/basic.png";
import { SmallBadge } from "./CountryBadge";

const Badge = styled(SmallBadge)`
    grid-area: 2 / 1 / 2 / 1;
`

const Icon = styled.img`
    width: 35px;
    align-self: center;
`

function StatusBadge({status}) {
    const icon = status === "basic" ? basic : premium;

    return (
        <Badge>
            <Icon src={icon} alt="A badge symbolizing a player's membership." />
        </Badge>
    )
}

export default StatusBadge;