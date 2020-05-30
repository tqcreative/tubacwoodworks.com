import React, { Component } from "react";
import styled from "styled-components";
import LightBox from "../LightBox/LightBox";

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
  const colGroup = [[], [], []];
  let colFlag = 0;

  for (let i = 0; i < props.theArray.length; i++) {
    // add item from array into the col it will be displayed in.

    switch (colFlag) {
      case 0:
        console.log("0");
        colGroup[0].push(props.theArray[i]);
        colFlag++;
        break;
      case 1:
        console.log("1");
        colGroup[1].push(props.theArray[i]);
        colFlag++;
        break;
      case 2:
        console.log("2");
        colGroup[2].push(props.theArray[i]);
        colFlag = colFlag - 2;
        break;
      default:
        console.log("memory leak");
        break;
    }
  }

  return (
    <StyledRoot>
      <StyledWrap>
        <StyledCol>
          {colGroup[0].map((imageName, index) => {
            return (
              <img
                key={index}
                style={{ width: "100%" }}
                src={`/cms/images/${imageName}`}
                alt="Photo of wood work."
              />
            );
          })}
        </StyledCol>
        <StyledCol>
          {colGroup[1].map((imageName, index) => {
            return (
              <img
                key={index}
                style={{ width: "100%" }}
                src={`/cms/images/${imageName}`}
                alt="Photo of wood work."
              />
            );
          })}
        </StyledCol>
        <StyledCol>
          {colGroup[2].map((imageName, index) => {
            return (
              <img
                key={index}
                style={{ width: "100%" }}
                src={`/cms/images/${imageName}`}
                alt="Photo of wood work."
              />
            );
          })}
        </StyledCol>
      </StyledWrap>
    </StyledRoot>
  );
}

const StyledRoot = styled.section`
  width: auto;
  max-width: none;
  min-width: none;
`;

const StyledWrap = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const StyledCol = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 33%;

  img {
    padding: 0.5em;

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
