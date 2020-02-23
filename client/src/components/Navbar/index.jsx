import React from "react";
import { Link } from 'react-router-dom';
import './navbar.css';

function NavBarComponent({ loggedIn, _logout, styleProp }) {

    function toggleMobileMenu() {
        let theMenu, name, arr;
        theMenu = document.getElementById("nav_root");
        let menuButton = document.getElementById("mobile_menu");
        let closeButton = document.getElementById("menu_close");
        let openButton = document.getElementById("menu_open");
        name = "positionZero";
        arr = theMenu.className.split(" ");

        if (arr.indexOf(name) == -1){
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
        <nav id="nav" className="" >
            {loggedIn ?
                <div id="nav_root" className="nav_root" >
                    <ul>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                        </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/kitchenbathvanity" className="nav-link">
                                <div>Kitchen &amp; Bath</div>
                        </Link>
                        </li>
                        <li>
                            <Link to="/furniture" className="nav-link">
                                <div>Furniture</div>
                        </Link>
                        </li>
                        <li>
                            <Link to="/commercial" className="nav-link">
                                <div>Commercial</div>
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
                            <Link to="/#" className="nav-link" onClick={_logout}>
                                <div>Log Out</div>
                            </Link>
                        </li>
                    </ul>
                    <div id="mobile_menu" onClick={toggleMobileMenu}>
                    <span id="menu_open"><ion-icon name="menu"></ion-icon></span>
                        <span id="menu_close" className="displayNone" ><ion-icon name="close"></ion-icon></span>
                    </div>
                </div>
                :
                <div id="nav_root" className="nav_root">
                    <ul>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <div>Home</div>
                        </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/kitchenbathvanity" className="nav-link">
                                <div>Kitchen &amp; Bath</div>
                        </Link>
                        </li>
                        <li>
                            <Link to="/furniture" className="nav-link">
                                <div>Furniture</div>
                        </Link>
                        </li>
                        <li>
                            <Link to="/commercial" className="nav-link">
                                <div>Commercial</div>
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
                        <span id="menu_open"><ion-icon name="menu"></ion-icon></span>
                        <span id="menu_close" className="displayNone" ><ion-icon name="close"></ion-icon></span>
                    </div>
                </div>
            }
        </nav>
    )
}

export const NavBar = React.memo(NavBarComponent);