import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
    align-self: center;
    display: grid;
    grid-template-columns: 80vw;
    grid-template-rows: 30px;
    padding: 20px;
    padding-top: 30px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        grid-template-columns: 768px;
    }
`

const Search = styled.input`
    grid-area: 1 / 1 / 2 / 2;
    justify-self: end;
    align-self: end;
    background-color: white;
    border: none;
    width: 80vw;
    height: 30px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    text-align: left;
    padding-left: 20px;
    font-size: 16px;
    
    @media (min-width: 768px) {
        justify-self: center;
        width: 768px;
    }
`

const Submit = styled.button`
    grid-area: 1 / 1 / 2 / 2;
    width: 50px;
    border: none;
    color: white;
    background-color: black;
    font-weight: bold;
    justify-self: end;
    font-size: 14px;
`

function SearchBar() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submit = event => {
        event.preventDefault();
        navigate(`/profile/${input}`);
        window.location.reload();
    }

    return (
        <Form onSubmit={submit}>
            <Search 
                type="search" 
                value={input} 
                onChange={event => setInput(event.target.value)}
                placeholder="Hikaru, GothamChess ..." 
                required
            />
            <Submit type="submit">GO</Submit>
        </Form>
    )

}

export default SearchBar