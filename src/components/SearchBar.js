import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submit = event => {
        event.preventDefault();
        navigate(`profile/${input}`);
    }

    return (
        <form onSubmit={submit}>
            <input 
                type="search" 
                value={input} 
                onChange={event => setInput(event.target.value)}
                placeholder="Hikaru" 
                required
            />
            <input type="submit" value="search" />
        </form>
    )

}

export default SearchBar