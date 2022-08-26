
import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from './SearchBar';
import ImageIcon from '@mui/icons-material/Image';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ArticleIcon from '@mui/icons-material/Article';
import LocalOfferSharpIcon from '@mui/icons-material/LocalOfferSharp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link, useNavigate } from "react-router-dom";

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
                <div className="HeaderLink" id="HeaderLink">
                    <div className="headerLinkItem">
                        <SearchIcon fontSize="small" /> <Link to='/All'>All</Link>
                    </div>
                    <div className="headerLinkItem">
                        <ImageIcon fontSize="small" /> <Link to='/Images'>Images</Link>
                    </div>
                    <div className="headerLinkItem">
                        <SlideshowIcon fontSize="small" /> <Link to='/Video'>Video</Link>
                    </div>
                    <div className="headerLinkItem" id="newsBlock">
                        <ArticleIcon fontSize="small" /> <Link to='/News'>News</Link>
                    </div>
                    <div className="headerLinkItem" id="shoppingBlock">
                        <LocalOfferSharpIcon fontSize="small" /> <Link to='/Shoping'>Shopping</Link>
                    </div>
                    <div className="headerLinkItem">
                        <MoreVertIcon fontSize="small" /> <Link to='/More'>More</Link>
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