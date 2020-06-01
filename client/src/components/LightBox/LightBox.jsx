import React from "react";
import styled from "styled-components";

// NOTE currently not being used.

export default function LightBox(props) {
  return (
    <React.Fragment>
      <StyledBackDrop />
      <StyledLightBox>{props.children ? props.children : ""}</StyledLightBox>
    </React.Fragment>
  );
}

const StyledLightBox = styled.div`
  z-index: 1;
`;

const StyledBackDrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const StyledPropChild = styled.div`
  position: fixed;
  background-color: #fff;
  z-index: 3;
  color: #555;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;
