import React from 'react';
import styled from 'styled-components';

function Header() {

    return (
        <Heading className="app-header">
            LOGO
        </Heading>
    );
}

const Heading = styled.header`
    background-color: white;
    height: 60px;
    width: 100%;
    display: flex;
    align-content: center;
`

export default Header