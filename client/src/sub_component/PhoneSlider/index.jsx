import React from "react";
import styled from "styled-components";

export default function Phone(props) {
  return (
    <StyledRoot id="phone" className="phone_slider_root">
      <a href={`tel:${props.phoneNumber}`}>
        <ion-icon name="ios-call"></ion-icon>
      </a>
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  display: none;
  position: fixed;
  left: 0;
  bottom: 8em;
  justify-content: center;
  align-items: center;
  background-color: #2ecc71;
  z-index: 9999;
  border-radius: 0 5px 5px 0;
  transform: translateX(-100px);
  transition: transform 0.5s;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8em;

    ion-icon {
      font-size: 2.4em;
      color: #fff;
    }
  }

  @media (max-width: 500px) {
    display: flex;
  }

`;
