import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function HeaderLink(props) {
    return (
        <>
            <Link to={"data"} className="LinkItem">{props.title}</Link>
        </>
    )
}

export default HeaderLink