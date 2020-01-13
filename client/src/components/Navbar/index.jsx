import React from "react";
import { Link } from 'react-router-dom';
import './navbar.css';

function NavBarComponent({ loggedIn, _logout, styleProp}) {

    return (
        <nav className="" >
            {loggedIn ?
                <ul className="nav_root" style={{position: styleProp}}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/kitchenbathvanity" className="nav-link">
                            Kitchen / Bath
                        </Link>
                    </li>
                    <li>
                        <Link to="/furniture" className="nav-link">
                            Furniture
                        </Link>
                    </li>
                    <li>
                        <Link to="/commercial" className="nav-link">
                            Commercial
                        </Link>
                    </li>
                    <li>
                        <Link to="/protips" className="nav-link">
                            Pro Tips
                        </Link>
                    </li>
                    <li>
                        <Link to="/gallery" className="nav-link">
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link" onClick={_logout}>
                            Logout
                        </Link>
                    </li>
                </ul>
                :
                <ul className="nav_root" style={{position: styleProp}}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/kitchenbathvanity" className="nav-link">
                            Kitchen &amp; Bath
                        </Link>
                    </li>
                    <li>
                        <Link to="/furniture" className="nav-link">
                            Furniture
                        </Link>
                    </li>
                    <li>
                        <Link to="/commercial" className="nav-link">
                            Commercial
                        </Link>
                    </li>
                    <li>
                        <Link to="/protips" className="nav-link">
                            Pro Tips
                        </Link>
                    </li>
                    <li>
                        <Link to="/gallery" className="nav-link">
                            Gallery
                        </Link>
                    </li>
                    <li id="mobile_menu">
                        <ion-icon name="menu"></ion-icon>
                        </li>
                </ul>
            }
        </nav>
    )
}

export const NavBar = React.memo(NavBarComponent);