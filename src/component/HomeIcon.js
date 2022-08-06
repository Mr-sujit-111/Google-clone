import styled from 'styled-components';
import React from 'react'

function HomeIcon() {
    return (
        <>
            <div className="main" >
                <ImageWrapper>
                    <div className="insideWrapper">
                        <img className="threedots" src="./images/threedots.svg" alt="three dots" />
                        <ImageIcon src="https://lh3.googleusercontent.com/ogw/AOh-ky1nG3y6cqwvlmkMU_YBp-svos4OpX5esw3c-Vk7=s32-c-mo" alt="icon" />
                    </div>
                </ImageWrapper>
            </div>
        </>
    )
}

export default HomeIcon

const ImageWrapper = styled.div`
display: flex;
    height: 100px;
    width: 100px;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 10px;
    :hover{
        background-color: gray;
    }
    >.insideWrapper>.threedots{
        position: absolute;
    top: 0;
    right: 0;
    padding: 3px;
    }

`
const ImageIcon = styled.img`
    height: 40px;
        width: 40px;
        border-radius: 100px;
`