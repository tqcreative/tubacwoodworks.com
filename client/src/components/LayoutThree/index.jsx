import React, { useState } from "react";
import UploadPhoto from "../../sub_component/UploadPhoto";
import Toast from "../Toast";
import styled from "styled-components";

LayoutThree.defaultProps = {
  image_info: [
    {
      title: "",
      body: "",
      image_uri:
        "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_gallery.jpg",
    },
    {
      title: "",
      body: "",
      image_uri:
        "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_pro_tips.jpg",
    },
    {
      title: "",
      body: "",
      image_uri:
        "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_error.jpg",
    },
  ],
};

export default function LayoutThree(props) {
  // ========= //
  //   HOOKS   //
  // ========= //
  const [showToast, updateShowToast] = useState(false);
  const [toastImage, updateToastImage] = useState("");

  // ==================== //
  //   HELPER FUNCTIONS   //
  // ==================== //
  const toggleToast = () => {
    updateShowToast(!showToast);
  };

  return (
    <React.Fragment>
      <StyledRoot className="layout_three_root">
        {props.image_info.map((info, index) => {
          return (
            <StyledBox
              key={index}
              className={info.mobile ? "mobile" : ""}
              style={{
                background: `url(${info.image_uri})`,
                backgroundSize: "cover",
                index,
              }}
              onClick={() => {
                if (info.mobile) {
                  // dont display toast, just remove shadow box.
                } else {
                  // go to toast if not mobile
                  updateShowToast(true);
                  updateToastImage(info.image_uri);
                }
              }}
            >
              <div
                className="cover_box"
                style={
                  info.title && info.body
                    ? { display: "flex" }
                    : { display: "none" }
                }
              >
                <div>
                  <h3>{info.title}</h3>
                  <p>{info.body}</p>
                </div>
              </div>
            </StyledBox>
          );
        })}
      </StyledRoot>
      <Toast show={showToast} onClose={toggleToast}>
        <StyledImageWrap>
          <img src={toastImage} alt="Tubac Woodworks AZ" />
        </StyledImageWrap>
      </Toast>
    </React.Fragment>
  );
}

// ========== //
//   STYLES   //
// ========== //

const StyledBox = styled.div`
  position: relative;
  width: 25%;
  height: 25vw;
  min-height: 35vh;
  padding: 0;
  margin: 0 auto;
  flex-grow: 1;

  &.mobile {
    max-width: 50%;
    max-height: 50vw;
  }

  .cover_box {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    transition: opacity 0.3s;
    color: #fff;
    text-align: center;
    box-sizing: border-box;
    padding: 2vw;
    justify-content: center;
    align-items: center;

    div {
      box-sizing: border-box;

      h3 {
        text-transform: uppercase;
        font-size: 1.7em;
        font-weight: 900;
        width: 100%;
      }

      p {
        font-style: italic;
        font-weight: 200;
        width: 100%;
      }
    }

    &:hover {
      cursor: pointer;
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100vw;
    max-height: 100vh;
  }

`;

const StyledImageWrap = styled.div`
  img {
    max-width: 100%;
    padding: 0;
    margin: 0;
  }
`;

const StyledRoot = styled.section`
  position: relative;
  width: 100%;
  max-width: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 1em 0;

  @media (max-width: 1020px) {
    .image_box {
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    .image_box {
      width: 100%;
    }
  }
`;
