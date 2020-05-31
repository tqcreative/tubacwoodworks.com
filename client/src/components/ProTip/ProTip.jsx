import React from "react";
import styled from "styled-components";

ProTip.defaultProps = {
  defaultImage:
    "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/furniture_15.jpg",
  title: "Advice from the professionals",
  subtitle: "by Tubac Woodworks",
  children:
    "You've come to the right place to get tips on the how to take care of your wood furniture and wood products.",
};

export default function ProTip(props) {
  let background;

  if (props.backgroundImage && props.backgroundImage !== "") {
    background = props.backgroundImage;
  } else {
    background = props.defaultImage;
  }

  return (
    <StyledRoot>
      <div
        className="left"
        style={{
          background: `url(${background})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="right">
        {props.tipNumber ? <h2>Pro Tip #{props.tipNumber + 1}</h2> : ""}
        <h3>{props.title}</h3>
        <h4>{props.subtitle}</h4>
        {props.children}
      </div>
    </StyledRoot>
  );
}

const StyledRoot = styled.section`
  display: flex;
  flex-wrap: wrap;
  min-height: 35vh;
  margin: 1em;

  .left {
    order: 1;
    width: 35%;
  }

  .right {
    order: 2;
    width: 65%;
    padding: 1em;
  }

  &:nth-child(even) {
    .left {
      order: 2;
    }

    .right {
      order: 1;
    }
  }

  @media (max-width: 768px) {
    .left {
      width: 100%;
      height: 40vh;
    }

    .right {
      width: 100%;
    }
  }
`;
