import React from "react";
import { Link } from 'react-router-dom';
import './navbar.css';

function NavBarComponent({ loggedIn, _logout, styleProp }) {

    function toggleMobileMenu() {
        let theMenu, name, arr;
        theMenu = document.getElementById("nav_root");
        name = "positionZero";
        arr = theMenu.className.split(" ");

        if (arr.indexOf(name) == -1){
            console.log('toggle on');
            theMenu.classList.add("positionZero");
        } else {
            theMenu.classList.remove("positionZero");
            console.log('toggle off');
        }
    }

    return (
        <nav className="" >
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
                    <div id="mobile_menu">
                        <ion-icon name="menu" onClick={toggleMobileMenu}></ion-icon>
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
                        <ion-icon name="menu"></ion-icon>
                    </div>
                </div>
            }
        </nav>
    )
}

export const NavBar = React.memo(NavBarComponent);