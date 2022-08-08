import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar, Grid, IconButton } from '@mui/material';
import SearchBar from '../component/SearchBar';
import { Link } from 'react-router-dom';
import IconList from '../component/IconList';

function Homepage() {
    const [visibleIconList, setVisibleIconList] = useState(false);
    const IconListDiv = document.getElementsByClassName("iconListContainer");
    const AllIconButton = document.getElementsByClassName("allAppButton");

    document.addEventListener("click", (e) => {
        const withinBoundaries = e.composedPath().includes(IconListDiv[0])
        const IconButtton = e.composedPath().includes(AllIconButton[0])
        if (!withinBoundaries && !IconButtton) {
            document.getElementsByClassName("iconListContainer")[0].style.display = "none"
        } else if (IconButtton) {
            setVisibleIconList(!visibleIconList)
        }

    })

    return (
        <>
            <div className="mainContent">
                <HomeMainSection>
                    <HomeLeftSection>
                        {/* <a href='/' className="homepageLink">data</a> */}
                    </HomeLeftSection>
                    <HomeRightSection>
                        <a href='/' className="homepageLink">Gmail</a>
                        <a href='/' className="homepageLink">Images</a>
                        <div className="appIcon">
                            <IconButton className="allAppButton" >
                                <AppsIcon />
                            </IconButton>
                        </div>
                        <Avatar className="homepageIcon avatarIcon" alt="S" sx={{ width: 34, height: 34 }} src="https://lh3.googleusercontent.com/ogw/AOh-ky1nG3y6cqwvlmkMU_YBp-svos4OpX5esw3c-Vk7=s32-c-mo" />
                        {visibleIconList && <div className="iconListContainer">
                            <Grid container spacing={{ xs: 2, sm: 4, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                <IconList title="Youtube" image="youtube.png" />
                                <IconList title="Map" image="map.png" />
                                <IconList title="Play" image="play.png" />
                                <IconList title="drive" image="drive.png" />
                                <IconList title="Meet" image="meet.png" />
                                <IconList title="Classroom" image="classroom.png" />
                                <IconList title="Forms" image="forms.png" />
                                <IconList title="Meet" image="meet.png" />
                                <IconList title="Assistent" image="assistent.png" />
                            </Grid>
                        </div>}
                    </HomeRightSection>
                </HomeMainSection>
                <div>

                    <HomeBodySection>
                        <img src="images/google.png" alt="google" />
                        <SearchBar buttonVisible={true} />
                        <div className="languages">
                            <p>Google offered in :
                                <Link to="/">हिन्दी</Link>
                                <Link to="/">বাংলা</Link>
                                <Link to="/">తెలుగు</Link>
                                <Link to="/">मराठी</Link>
                                <Link to="/">தமிழ்</Link>
                                <Link className="gujarati" to="/">ગુજરાતી</Link>
                                <Link to="/">ಕನ್ನಡ</Link>
                                <Link to="/">മലയാളം</Link>
                                <Link to="/">ਪੰਜਾਬੀ</Link>
                            </p>
                        </div>
                    </HomeBodySection>
                </div>
            </div>
        </>
    )
}

export default Homepage

const HomeMainSection = styled.div`
        display: flex;
    justify-content: space-between;
    margin-left: 30px;
   padding: 20px 20px;
`
const HomeLeftSection = styled.div`
    
`
const HomeRightSection = styled.div`
    display: flex;
    >.avatarIcon{
        margin-top: -5px;
        cursor: pointer;
    }
    >a{
        font-size: 16px;
        font-weight: 400;
    color: rgba(0,0,0,.87);
    }
    .iconListContainer{
        display: flex;
    justify-content: space-around;
    position: absolute;
    max-width: 10vw;
    border: 1px solid #72767A;
    border-radius: 10px;
    top: 53px;
    right: 84px;
    padding: 30px;
        height: 130px;
        overflow-y: scroll;
        ::-webkit-scrollbar {
  width: 5px;
}
        ::-webkit-scrollbar-thumb {
    background-color: #8F8F8F;
    border-radius: 50px;
}
@media (max-width: 768px) {
    height: 52px;
    padding: 22px;
    top: 45px;
    overflow-x: hidden;
    
  }

    }
`

const HomeBodySection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 63vh;
    >img{
        object-fit: contain;
        height: 10vh;
    }
    >.languages>p{
        color: #4d5156;
        font-size: 15px;
        >:active ~ a{
            color: transparent;
        }
        @media (max-width: 768px) {
    display: none;
    
  }
        >a{
            margin-right: 11px;
            :active{
                color: green;
            }
        }
    }
`

