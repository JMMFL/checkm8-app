import React from "react";


function Ladder({ players }) {
    return (
        <>
        <h1>HELLO</h1>
        <ul>
            {players.map((player, i) => <h1 key={i}>{player.username}</h1>)}
        </ul>
        </>
    )

}

export default Ladder;