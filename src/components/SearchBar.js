import React from "react";
import { useState } from "react";

function SearchBar() {
    const [input, setInput] = useState("");

    const submit = event => {
        event.preventDefault();
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