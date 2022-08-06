import styled from 'styled-components';
import React from 'react'
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function ResultBody({ data }) {
    return (
        <>
            <Resultbody className="result__body">
                {Object.keys(data).length > 0 > 0 && <>
                    <p>About {data.searchInformation.formattedTotalResults} results ({data.searchInformation.searchTime} seconds) </p>

                    {data.items.map((item, index) => {
                        const { link, displayLink, title, snippet } = item
                        return <ResultSection key={index}>
                            <LinkItem className="result__link" href={link}>
                                {displayLink}
                                <IconButton>
                                    <MoreVertIcon fontSize="small" />
                                </IconButton>
                            </LinkItem>
                            <a className="resultTitleLink" href={link}>
                                <span className="resultTitle">{title}</span>
                            </a>
                            <p className="resultPara">{snippet}</p>
                        </ResultSection>
                    })}
                </>
                }

            </Resultbody>
        </>

    )
}

export default ResultBody

const Resultbody = styled.div`
        padding: 0px 10px 0px 120px;
`
const LinkItem = styled.a`
    color: black;
    text-decoration: none;
    `
const ResultSection = styled.div`
margin: 30px 0px;
    >.resultTitleLink{
        text-decoration: none;
        >.resultTitle{
            display: block;
    font-size: 22px;
    margin-top: -7px;
        }
    }
    >.resultPara{
        margin-top: 3px;
    }
`