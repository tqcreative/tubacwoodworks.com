import React from "react";
import styled from "styled-components";

function Toast(props) {
  let classes = "toast_root"; // I dont think we need this
  props.show ? (classes += " toast-show") : (classes += " toast-hide");

  return (
    <StyledRoot className={classes}>
      <div className="background" onClick={props.onClose}>
        <button
          type="button"
          className="close closeBtn"
          onClick={(event) => {
            event.preventDefault();
            props.onClose();
          }}
        >
          <span>&times;</span>
        </button>
      </div>

      <div className="message">
        <div className="body">{props.children}</div>
      </div>
    </StyledRoot>
  );
}

export default Toast;

const StyledRoot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: hidden;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  .background {
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    font-size: 1.5em;
    height: 100vh;
    width: 100vw;

    button {
      position: absolute;
      top: 0;
      right: 4px;
      padding: 8px;
      opacity: 1;

      span {
        color: #fff;
      }
    }
  }

  .message {
    display: flex;
    position: relative;
    min-height: 25%;
    min-width: 25%;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: #fff;
    overflow: hidden;

    .body {
      display: block;

      div {
        img {
          max-height: 100vh;
          padding: 1em;
        }
      }
    }

    p {
      display: block;
    }
  }

  &.toast-hide {
    display: none;
  }

  &.toast-show {
    display: flex;
  }
`;
