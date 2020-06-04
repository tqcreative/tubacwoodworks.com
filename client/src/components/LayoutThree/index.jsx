import React from "react";
import UploadPhoto from "../../sub_component/UploadPhoto";
import styled from "styled-components";

LayoutThree.defaultProps = {
  image_uris: [
    "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_gallery.jpg",
    "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_pro_tips.jpg",
    "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_commercial.jpg",
    "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_error.jpg",
  ],
};

export default function LayoutThree(props) {
  return (
    <StyledRoot className="layout_three_root">
      {props.image_uris.map((imageUrl, index) => {
        return (
          <div
            key={index}
            style={{ background: `url(${imageUrl})`, backgroundSize: "cover" }}
            className="image_box"
          ></div>
        );
      })}
    </StyledRoot>
  );
}

// ========== //
//   STYLES   //
// ========== //
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

  .image_box {
    width: 25%;
    height: 40vh;
    padding: 0;
    margin: 0 auto;
    flex-grow: 1;
  }

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
