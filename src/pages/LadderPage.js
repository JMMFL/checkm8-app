import React, { useState, useEffect } from "react";
import Ladder from "../components/Ladder";
import chessApi from "../helpers";


function LadderPage() {
    const [ladders, setladders] = useState([]);

    useEffect(() => {
        async function fetchLadder() {
            const response = await chessApi.getLeaderboards();
            const { live_rapid, live_bullet, live_blitz } = response.body;
            setladders({ live_rapid, live_bullet, live_blitz});
        }

        fetchLadder();
    }, [])

    return (
        <div className="ladder-page">
            {!ladders ? <h1>Getting Data</h1>
            : Object.values(ladders).map(
                (ladder, i) => <Ladder key={i} players={ladder.slice(0, 10)} />
            )}
        </div>
    )
}

export default LadderPage;