import { Avatar, Grid } from '@mui/material'
import React from 'react'
import styled from 'styled-components';

function IconList({ title, image }) {
    return (
        <Grid item xs={4} sm={4} md={4}>
            <AvatarContainer>
                <Avatar alt="Remy Sharp" src={`images/google-tool/${image}`} />
                <span>{title}</span>
            </AvatarContainer>
        </Grid>
    )
}

export default IconList;

const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`