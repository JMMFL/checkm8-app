import React, { useState, useEffect } from "react";
import chessApi from "../helpers";


function ProfilePage({ username }) {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        async function getPlayerProfile() {
            const methods = [
              "getPlayer", 
              "getPlayerStats", 
              "getPlayerMonthlyArchives"
            ];

            const promises = methods.map(method => 
                chessApi[method](username)
                .then(response => response.body)
            );

            const responses = await Promise.all(promises);
            const [info, stats, archives] = responses;
            const data = {...info, ...stats, ...archives};
            setProfile(data);
        }

        getPlayerProfile()
    })

    return (
        <h1>{!profile ? "Getting Data" : profile.username}</h1>
    )
}

export default ProfilePage