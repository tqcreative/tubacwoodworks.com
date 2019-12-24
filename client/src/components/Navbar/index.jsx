import React from "react"
import { Link } from 'react-router-dom'
import './navbar.css'

function NavBarComponent({ loggedIn, _logout }) {
    return (
        <nav className="">
            {loggedIn ?
                <ul className="nav_root">
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
                        <Link to="/" className="nav-link">
                            Furniture
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-link">
                            Commercial
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-link">
                            Pro Tips
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-link">
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
                <ul className="nav_root">
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
                        <Link to="/" className="nav-link">
                            Furniture
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-link">
                            Commercial
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-link">
                            Pro Tips
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-link">
                            Gallery
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to="/login" className="nav-link">
                            Login
						</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link">
                            Sign Up
						</Link>
                    </li> */}
                </ul>
            }
        </nav>
    )
}

export const NavBar = React.memo(NavBarComponent);