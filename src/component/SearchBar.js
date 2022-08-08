import { IconButton, Button } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from '../store/searchSlice';

function SearchBar({ buttonVisible }) {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState("");
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchValue.length > 0) {
            dispatch(add(searchValue))
            history("/search", { replace: true })
        } else {
            e.preventDefault();
            // alert("search value cants be null")
        }
    }
    return (
        <SearchBarComponent onSubmit={handleSubmit}>
            <GoogleSearch>
                <IconButton onClick={handleSubmit} >
                    <SearchIcon />
                </IconButton>
                <input className="searchInput" placeholder='Searech Google or type a Url' value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                <IconButton>
                    <KeyboardVoiceIcon />
                </IconButton>
            </GoogleSearch>
            {buttonVisible && <GooleButtons>
                <Button type="submit" className="googleButton">Google Search</Button>
                <Button className="googleButton">I'm Feeling Lucky</Button>
            </GooleButtons>}
        </SearchBarComponent>
    )
}

export default SearchBar;

const GoogleSearch = styled.div`
        border:1px solid #dfe1e5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: .2;
    width: 31vw;
    max-width: 638px;
    border-radius: 100px;
    min-width: 300px;
    max-height: 42px;
    margin-top: 24px;
    >.searchInput{
        flex: 0.9;
    border: none;
    padding: 10px 20px;
    
    &:focus {
        outline: none;
        /* box-shadow: 0px 0px 2px red; */
    }
    :focus::placeholder{
        color: transparent;
    }
    }
    :hover{
    background-color: #fff;
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: rgba(223,225,229,0);
}
`
const GooleButtons = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    >.googleButton{
        background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
    border-radius: 4px;
    color: #3c4043;
    margin: 6px;
    font-size: 14px;
    font-weight: 200;
    :hover{
        box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
    background-color: #f8f9fa;
    border: 1px solid #dadce0;
    color: #202124;
    }
    }
`
const SearchBarComponent = styled.form`

`