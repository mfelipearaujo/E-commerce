import React from "react"
import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #c6e7ff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500px;
`

const Announcement = () => {
    return <Container>Free Shipping on Orders Over $75!</Container>
}

export default Announcement
