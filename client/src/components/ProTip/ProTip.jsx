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
        {/* {props.tipNumber ? <h2>Pro Tip #{props.tipNumber}</h2> : ""} */}
        <h3>{props.title}</h3>
        <h4>{props.subtitle}</h4>
        <div>{props.children}</div>
      </div>
    </StyledRoot>
  );
}

const StyledRoot = styled.section`
  display: flex;
  flex-wrap: wrap;
  min-height: 55vh;
  margin: auto;
  padding: 0;
  max-width: none;

  .left {
    position: relative;
    order: 1;
    flex: auto;
    overflow: hidden;
  }

  .right {
    order: 2;
    width: 50%;
    padding: 1em 2em;
    color: #4a5559;
    background-color: #fefefe;

    h2 {
      font-weight: 900;
      color: #c0392b;
      margin: 0;
    }

    h3 {
      color: #a6988d;
      text-transform: uppercase;
      font-weight: 900;
      font-size: 2.5em;
    }

    h4 {
      color: #a6988d;
      font-style: italic;
      font-size: 1em;
      padding: 0 0 0.5em 0;
      margin: 0;
      border-bottom: 1px solid #a6988d;
      font-family: "Times New Roman", Times, serif;
    }

    a,
    a:visited,
    a:hover,
    a:link,
    a:active {
      font-weight: 600;
      text-decoration: underline;
      color: inherit;
      color: #c0392b;
    }

    em {
      font-style: italic;
    }
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
      outline: none;
    }

    .right {
      width: 100%;
      padding: 1em;

      h3 {
        font-size: 1.5em;
      }
    }

    &:nth-child(even) {
      .left {
        order: 1;
      }

      .right {
        order: 2;
      }
    }
  }
`;
