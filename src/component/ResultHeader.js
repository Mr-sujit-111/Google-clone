
import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from './SearchBar';
import ImageIcon from '@mui/icons-material/Image';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ArticleIcon from '@mui/icons-material/Article';
import LocalOfferSharpIcon from '@mui/icons-material/LocalOfferSharp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from "react-router-dom";

function ResultHeader() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/")
    }
    return (
        <>
            <Header>
                <HeaderTopSection>
                    <img title='home' onClick={handleClick} src="images/google.png" alt="" />
                    <SearchBar buttonVisible={false} />
                </HeaderTopSection>
                <div className="HeaderLink">
                    <div className="headerLinkItem">
                        <SearchIcon fontSize="small" /> <a href='/'>All</a>
                    </div>
                    <div className="headerLinkItem">
                        <ImageIcon fontSize="small" /> <a href='/'>Images</a>
                    </div>
                    <div className="headerLinkItem">
                        <SlideshowIcon fontSize="small" /> <a href='/'>Video</a>
                    </div>
                    <div className="headerLinkItem">
                        <ArticleIcon fontSize="small" /> <a href='/'>News</a>
                    </div>
                    <div className="headerLinkItem">
                        <LocalOfferSharpIcon fontSize="small" /> <a href='/'>Shoping</a>
                    </div>
                    <div className="headerLinkItem">
                        <MoreVertIcon fontSize="small" /> <a href='/'>More</a>
                    </div>
                </div>
            </Header>

        </>
    )
}

export default ResultHeader;

const HeaderTopSection = styled.div`
     padding: 15px;
     display: flex;
    >img{
        cursor: pointer;
        object-fit: contain;
        height: 30px;
    width: 92px;
    padding: 30px 10px;
    }
`

const Header = styled.div`
    height: 150px;
    border-bottom: 1px solid #EBEBEB;
    >.HeaderLink{
        display: flex;
        margin: 0px 0px 0px 120px;
        >.headerLinkItem{
           cursor: pointer;
            display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-right: 13px;
    >a{
        text-decoration: none;
    color: #5F6368;
    }
        }
    }
`