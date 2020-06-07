import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import styled from "styled-components";

function NavBarComponent({ loggedIn, styleProp, logout }) {
  function toggleMobileMenu() {
    let theMenu, name, arr;
    theMenu = document.getElementById("nav_root");
    let menuButton = document.getElementById("mobile_menu");
    let closeButton = document.getElementById("menu_close");
    let openButton = document.getElementById("menu_open");
    name = "positionZero";
    arr = theMenu.className.split(" ");

    if (arr.indexOf(name) === -1) {
      theMenu.classList.add("positionZero");
      menuButton.classList.add("noBackground");
      closeButton.classList.remove("displayNone");
      openButton.classList.add("displayNone");
    } else {
      theMenu.classList.remove("positionZero");
      menuButton.classList.remove("noBackground");
      closeButton.classList.add("displayNone");
      openButton.classList.remove("displayNone");
    }
  }

  return (
    <nav id="nav" className="">
      {loggedIn ? (
        <div id="nav_root" className="nav_root">
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
              <Link to="/furniture" className="nav-link">
                <div>Furniture</div>
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
        </div>
      ) : (
        <div id="nav_root" className="nav_root">
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
              <Link to="/furniture" className="nav-link">
                <div>Furniture</div>
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
          <div id="mobile_menu" onClick={toggleMobileMenu}>
            <span id="menu_open">
              <ion-icon name="menu"></ion-icon>
            </span>
            <span id="menu_close" className="displayNone">
              <ion-icon name="close"></ion-icon>
            </span>
          </div>
        </div>
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
