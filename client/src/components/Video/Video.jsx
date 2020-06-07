import React from "react";
import styled from "styled-components";

export default function Video() {
  return (
    <StyledVideo>
      <iframe
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/4z8_NZgf6ZU"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </StyledVideo>
  );
}

const StyledVideo = styled.section`
  margin: 0 auto;
  max-width: none;
  padding: 3em 1em;
  background-color: #a6988d;
  display: flex;
  justify-content: center;
  align-items: center;

  iframe {
      width: 80vw;
      height: 45vw;
  }
`;
