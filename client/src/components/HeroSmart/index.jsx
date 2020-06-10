import React from "react";
import styled from "styled-components";
import UploadPhoto from "../../sub_component/UploadPhoto";

function HeroSmart(props) {
  return (
    <StyledRoot className="herosmart_root">
      <div
        className="parallax"
        data-rellax-speed="-10"
        style={{
          backgroundImage: `url(${props.backgroundName})`,
        }}
      ></div>
      <span>
        {props.login === "Peter" ? (
          <UploadPhoto __parent_image_name={props.backgroundName} />
        ) : (
          <noscript></noscript>
        )}
      </span>
      <div>
        <h1>{props.title}</h1>
        <h2>{props.subTitle}</h2>
      </div>
    </StyledRoot>
  );
}

export default HeroSmart;

const StyledRoot = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
  padding: 1em;

  div:first-child {
    position: absolute;
    top: 0;
    left: 0;
    background-position: center 0px;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    z-index: -1;
  }

  div:last-child {
    h1,
    h2 {
      font-weight: 900;
      color: #fff;
      text-shadow: 0 0 28px $dark;
      user-select: none;
    }

    h1 {
      width: 100%;
      font-size: 5em;
    }

    h2 {
      width: 100%;
      display: block;
      font-size: 3em;
    }
  }

  span {
    position: absolute;
    left: 0;
    z-index: 8;
  }

  @media (max-width: 768px) {
    div:last-child {
      h1 {
        font-size: 3em;
      }

      h2 {
        font-size: 1.5em;
      }
    }
  }
`;
