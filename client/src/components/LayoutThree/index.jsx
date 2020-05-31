import React from "react";
import UploadPhoto from "../../sub_component/UploadPhoto";
import styled from "styled-components";

export default function LayoutThree(props) {
  return (
    <StyledRoot className="layout_three_root">
      <div className="image_wrap">
        <div className="left">
          <div
            className="image_1"
            style={{ backgroundImage: `url(/cms/images/${props.image1}.jpg)` }}
          >
            {props.login === "Peter" ? (
              <UploadPhoto __parent_image_name={props.image1} />
            ) : (
              <noscript></noscript>
            )}
          </div>
        </div>
        <div className="right">
          <div
            className="img"
            style={{ backgroundImage: `url(/cms/images/${props.image2}.jpg)` }}
          >
            {props.login === "Peter" ? (
              <UploadPhoto __parent_image_name={props.image2} />
            ) : (
              <noscript></noscript>
            )}
          </div>
          <div
            className="img"
            style={{ backgroundImage: `url(/cms/images/${props.image3}.jpg)` }}
          >
            {props.login === "Peter" ? (
              <UploadPhoto __parent_image_name={props.image3} />
            ) : (
              <noscript></noscript>
            )}
          </div>
        </div>
      </div>
    </StyledRoot>
  );
}

// ========== //
//   STYLES   //
// ========== //
const StyledRoot = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0;

  .image_wrap {
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    overflow: hidden;

    .left {
      position: relative;
      padding: 1em;
      display: flex;
      justify-content: center;
      height: 60vh;
      width: 50vw;

      .image_1 {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: $dark;
        background-size: cover;
        background-position: center;
        z-index: 8;
      }
    }

    .right {
      position: relative;
      padding: 1em;
      display: flex;
      justify-content: center;
      height: 60vh;
      width: 50vw;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .img {
        position: relative;
        background-color: $dark;
        background-size: cover;
        background-position: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        width: 40vw;
        height: 48.5%;
        z-index: 8;

        &:first-child {
          margin-bottom: 2%;
        }

        &:last-child {
          margin-top: 2%;
        }
      }
    }
  }

  @media (max-width: 1020px) {
    .image_wrap {
      flex-wrap: wrap;
      overflow: hidden;

      .left {
        width: 100vw;
        height: 40vh;
      }

      .right {
        width: 100vw;
        height: 20vh;
        padding-top: 0;

        .img {
          width: 48%;
          height: auto;

          &:first-child {
            margin: 0 2% 1% 0;
          }

          &:last-child {
            margin: 0 0 2% 1%;
          }
        }
      }
    }
  }
`;
