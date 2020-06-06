import React from 'react';
import styled from 'styled-components';

export default function Video() {
    return (
        <StyledVideo>
            video displayed here
        </StyledVideo>
    )
}

const StyledVideo = styled.section`
margin: 0;
max-width: none;
padding: 3em 1em;
background-color: #a6988d;

`;