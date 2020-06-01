import React, { useState } from "react";
import styled from "styled-components";
import Toast from "../../components/Toast";

GalleryFlex.defaultProps = {
  theArray: [
    "kitchen_image_1.jpg",
    "kitchen_image_2.jpg",
    "kitchen_image_3.jpg",
    "kitchen_image_4.jpg",
    "kitchen_image_5.jpg",
    "kitchen_image_6.jpg",
    "kitchen_image_7.jpg",
    "kitchen_image_8.jpg",
    "kitchen_image_9.jpg",
    "kitchen_image_10.jpg",
    "kitchen_image_11.jpg",
    "kitchen_image_12.jpg",
    "kitchen_image_13.jpg",
    "kitchen_image_14.jpg",
    "kitchen_image_15.jpg",
  ],
};

export default function GalleryFlex(props) {
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
      <StyledRoot>
        <StyledWrap>
          {props.theArray.map((imageName, index) => {
            let randomNumber = Math.floor(Math.random() * 5);
            if (randomNumber < 3) {
              randomNumber = 1;
            }

            const imageUri =
              imageName.indexOf("https") === -1
                ? `https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/${imageName}`
                : imageName;

            return (
              <StyledImg key={index} style={{ flexGrow: randomNumber }}>
                <img
                  onClick={() => {
                    updateShowToast(true);
                    updateToastImage(imageUri);
                  }}
                  alt="Tubac Woodworks AZ"
                  src={imageUri}
                  loading="lazy"
                />
              </StyledImg>
            );
          })}
        </StyledWrap>
      </StyledRoot>

      <Toast show={showToast} onClose={toggleToast}>
        <StyledImageWrap>
          <img src={toastImage} alt="Tubac Woodworks AZ" />
        </StyledImageWrap>
      </Toast>
    </React.Fragment>
  );
}

const StyledRoot = styled.section`
  width: auto;
  max-width: none;
  min-width: none;
`;

const StyledWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const StyledImg = styled.li`
  height: 40vh;
  padding: 3px;

  &:last-child {
    flex-grow: 10 !important;
  }

  img {
    max-height: 100%;
    min-width: 100%;
    max-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    height: 30vh;
  }
`;

const StyledImageWrap = styled.div`
  img {
    max-width: 100%;
    padding: 0;
    margin: 0;
  }
`;
