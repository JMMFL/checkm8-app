import React from "react"
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="home-page">
            <nav>
                <Link to="streamers">Streamers</Link>
                <Link to="leaderboards">Leaderboards</Link>
            </nav>
            <SearchBar />
        </div>
    )
}

export default HomePage