import React from "react";
import { Link } from "react-router-dom"


function Ladder({ players }) {
    return (
        <>
        <h1>HELLO</h1>
        <ul>
            {players.map(({username}, i) => 
            <Link key={i} to={`/profile/${username}`}>{username}</Link>)}
        </ul>
        </>
    )

}

export default Ladder;