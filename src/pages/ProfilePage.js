import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import chessApi from "../helpers";


function ProfilePage() {
    const [profile, setProfile] = useState([]);
    const { username } = useParams();

    useEffect(() => {
        async function getPlayerProfile() {
            const info = await chessApi.getPlayer(username);
            const stats = await chessApi.getPlayerStats(username);
            const archives = await chessApi.getPlayerMonthlyArchives(username);
            const profile = {...info.body, ...stats.body, ...archives.body};
            console.log(profile);
            setProfile(profile);
        }

        getPlayerProfile()
    }, [username])

    return (
        <h1>{!profile ? "Getting Data" : profile.username}</h1>
    )
}

export default ProfilePage