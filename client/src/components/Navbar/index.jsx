import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

NavBarComponent.defaultProps = {
  isHidden: true,
};

function NavBarComponent({ toggle, isHidden, loggedIn, logout }) {
  return (
    <nav id="nav" className="">
      {loggedIn ? (
        <StyledRoot id="nav_root" className={isHidden ? "_hide" : ""}>
          <StyledMobileMenu id="mobile_menu" onClick={() => toggle()}>
            <div className="top_bar"></div>
            <div className="center_bar"></div>
            <div className="bottom_bar"></div>
          </StyledMobileMenu>
          <ul>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">
                <div>Services</div>
              </Link>
            </li>
            <li>
              <Link to="/showcase" className="nav-link">
                <div>Showcase</div>
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                <div>Our Story</div>
              </Link>
            </li>
            <li>
              <Link to="/protips" className="nav-link">
                <div>Pro Tips</div>
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="nav-link">
                <div>Gallery</div>
              </Link>
            </li>
            <li>
              <div to="/#" className="nav-link" onClick={logout}>
                <StyledNavButton>Log Out</StyledNavButton>
              </div>
            </li>
          </ul>
        </StyledRoot>
      ) : (
        <StyledRoot id="nav_root" className={isHidden ? "_hide" : ""}>
          <StyledMobileMenu id="mobile_menu" onClick={() => toggle()}>
            <div className="top_bar"></div>
            <div className="center_bar"></div>
            <div className="bottom_bar"></div>
          </StyledMobileMenu>

          <ul>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <div>Home</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">
                <div>Services</div>
              </Link>
            </li>
            <li>
              <Link to="/showcase" className="nav-link">
                <div>Showcase</div>
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                <div>Our Story</div>
              </Link>
            </li>
            <li>
              <Link to="/protips" className="nav-link">
                <div>Pro Tips</div>
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="nav-link">
                <div>Gallery</div>
              </Link>
            </li>
          </ul>
        </StyledRoot>
      )}
    </nav>
  );
}

export const NavBar = React.memo(NavBarComponent);

const StyledNavButton = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const StyledRoot = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  text-decoration: none;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5em 0 0 0;
  text-transform: uppercase;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
  font-size: 1.3em;
  font-weight: 900;
  width: 100%;
  max-width: 100%;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0)
  );
  z-index: 9999;
  overflow: hidden;

  ul {
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow: hidden;

    li {
      margin: 0 0 0.5em 0.5em;
      padding: 0 0.5em 0 0;

      &:last-child {
        border: none;
      }

      &:active div {
        color: #fff;
        transform: translateY(5px);
      }

      &:hover {
        text-decoration: underline;
      }

      ion-icon {
        font-size: 2em;
      }
    }

    a {
      color: #fff;
      text-decoration: none;
      padding: 4px;
      margin: 0.25em;
    }
  }

  @media (max-width: 1025px) {
    flex-wrap: wrap;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    transition: width 0.3s, height 0.3s;
    z-index: 9999;

    ul {
      display: block;
      position: fixed;
      top: 50%;
      left: 50%;
      overflow: hidden;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s, transform 0.3s;

      li {
        display: block;
        width: fit-content;
        margin: 0 auto;
        padding: 0 0.5em;
        text-align: center;

        a {
          div {
            text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.6);
          }
        }
      }
    }

    &._hide {
      width: 62px;
      height: 60px;
      border-radius: 0 0 50% 0;

      ul {
        opacity: 0;
        transform: translate(-50%, -57%);
        visibility: hidden;
      }
    }
  }
`;

const StyledMobileMenu = styled.div`
  display: none;

  @media (max-width: 1025px) {
    display: block;
    position: fixed;
    top: 16px;
    left: 12px;
    width: 32px;
    height: 32px;
    font-size: 2.8em;
    display: block;
    margin: 0;
    box-sizing: border-box;

    div {
      width: 100%;
      height: 33%;
      display: block;
      border-top: 2px solid #fff;
      user-select: none;
    }

    .top_bar {
    }

    .center_bar {
    }

    .bottom_bar {
    }
  }

  &:hover {
    cursor: pointer;
  }
`;
