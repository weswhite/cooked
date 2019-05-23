import React from "react"
import styled from "styled-components";

function Home() {
    
    return (
        <>
            <ContentArea>
                Test
            </ContentArea>
        </>
    )
}

const ContentArea = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 5px;
    background-color: blue;    
`

export default Home;