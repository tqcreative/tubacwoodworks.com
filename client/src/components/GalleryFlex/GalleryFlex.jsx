import React from "react";
import styled from "styled-components";

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
  return (
    <StyledRoot>
      <StyledWrap>
        {props.theArray.map((imageName, index) => {
          return (
            <StyledImg key={index}>
              <img
                alt="Tubac Woodworks AZ"
                src={
                  imageName.indexOf("https") === -1
                    ? `https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/${imageName}`
                    : imageName
                }
                loading="lazy"
              />
            </StyledImg>
          );
        })}
      </StyledWrap>
    </StyledRoot>
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
  flex-grow: 1;
  padding: 3px;

  &:last-child {
    flex-grow: 10;
  }

  img {
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }

  @media (max-width: 768px) {
    /*  mobile  */
  }
`;