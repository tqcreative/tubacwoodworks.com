import React from 'react';
import styled from 'styled-components';

export default function index() {
    return (
        <StyledRoot className="cook_root">
            <a href="/privacy" target="_blank"><p>Cookies</p></a>
        </StyledRoot>
    )
}

const StyledRoot = styled.div`
   position: fixed;
    bottom: 2em;
    left: -3.5em;
    transform: rotate(90deg);
    background-color: rgba(0,0,0, .6);
    border-radius: 8px;
    transition: transform .3s;
    z-index: 9999;

    a {
        color: #fff;
        font-size: 1em;
        font-weight: 800;

        p{
            padding: .5em 1em 3em 1em;
        }

        &:hover {
            text-decoration: none;
        }

        &:active  p {
            transform: translateY(5px);
        }
    }
`;