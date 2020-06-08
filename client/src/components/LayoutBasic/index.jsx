import React from "react";
import styled from "styled-components";

export default function LayoutBasic(props) {
  // PENDING needs default props
  // This component is going to be handed 2 props
  // a title for the h2
  // and content for the paragraph
  // optional paragraph 2 and 3
  // prop names
  // h2Tag
  // pTag
  // pTag2
  // pTag3

  let titleProp;
  let paragraphProp;
  let paragraphProp2;
  let paragraphProp3;

  // check for title first
  props.h2Tag ? (titleProp = props.h2Tag) : (titleProp = ``);

  // check for first paragraph
  props.pTag ? (paragraphProp = props.pTag) : (paragraphProp = ``);

  // check for first paragraph
  props.pTag2 ? (paragraphProp2 = props.pTag2) : (paragraphProp2 = ``);

  // check for first paragraph
  props.pTag3 ? (paragraphProp3 = props.pTag3) : (paragraphProp3 = ``);

  // return the final product
  return (
    <StyledRoot className="layout_basic_root">
      <div>
        <h2>{titleProp}</h2>
        <p>{paragraphProp}</p>
        <p>{paragraphProp2}</p>
        <p>{paragraphProp3}</p>
      </div>
    </StyledRoot>
  );
}

// ========== //
//   STYLES   //
// ========== //
const StyledRoot = styled.section`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding: 1em;
  box-sizing: border-box;

  div {

    h2 {
      font-weight: 800;
      font-size: 2.5em;
      color: #a6988d;
      padding-bottom: 0.5em;
    }

    p {
      font-size: 1.1em;
      line-height: 1.2em;
      font-weight: 400;

      a,
      a:visited,
      a:hover,
      a:link,
      a:active {
        font-weight: 600;
        text-decoration: underline;
        color: #c0392b;
      }

      em {
        font-style: italic;
      }
    }
  }

  @media (max-width: 768px) {
    div {
      h2 {
        font-size: 1.8em;
      }
    }
  }

`;
