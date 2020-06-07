import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBarComponent({ loggedIn, styleProp, logout }) {

  // =============== //
  //   MOBILE MENU   //
  // =============== //
  function toggleMobileMenu() {
    alert('mobile menu clicked');
    // let theMenu, name, arr;
    // theMenu = document.getElementById("nav_root");
    // let menuButton = document.getElementById("mobile_menu");
    // let closeButton = document.getElementById("menu_close");
    // let openButton = document.getElementById("menu_open");
    // name = "positionZero";
    // arr = theMenu.className.split(" ");

    // if (arr.indexOf(name) === -1) {
    //   theMenu.classList.add("positionZero");
    //   menuButton.classList.add("noBackground");
    //   closeButton.classList.remove("displayNone");
    //   openButton.classList.add("displayNone");
    // } else {
    //   theMenu.classList.remove("positionZero");
    //   menuButton.classList.remove("noBackground");
    //   closeButton.classList.add("displayNone");
    //   openButton.classList.remove("displayNone");
    // }
  }

  return (
    <nav id="nav" className="">
      {loggedIn ? (
        <StyledRoot id="nav_root" className="nav_root">
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
          <div id="mobile_menu" onClick={toggleMobileMenu}>
            <span id="menu_open">
              <ion-icon name="menu"></ion-icon>
            </span>
            <span id="menu_close" className="displayNone">
              <ion-icon name="close"></ion-icon>
            </span>
          </div>
        </StyledRoot>
      ) : (
        <StyledRoot id="nav_root" className="nav_root">
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
          <StyledMobileMenu id="mobile_menu" onClick={toggleMobileMenu}>
            <div className="top_bar"></div>
            <div className="center_bar"></div>
            <div className="bottom_bar"></div>
          </StyledMobileMenu>
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

    li {
      border-right: 2px solid rgba($light, 1);
      margin: 0 0 0.5em 0.5em;
      padding: 0 0.5em 0 0;

      &:last-child {
        border: none;
      }

      &:active div {
        color: #fff;
        transform: translateY(5px);
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
    .nav_root {
      flex-wrap: wrap;
      transform: translateY(-82%);
      transition: transform 0.3s;
      position: fixed;

      ul {
        flex-wrap: wrap;

        li {
          display: block;
          width: 100%;
          border: none;

          a {
            div {
              text-shadow: 1px 1px 8px $dark;
            }
          }
        }
      }
    }
  }
`;

const StyledMobileMenu = styled.div`
  display: none;

  @media (max-width: 1025px) {
    display: block;
    width: 32px;
    height: 32px;
    font-size: 2.8em;
    display: block;
    margin: .3em;
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
`;
