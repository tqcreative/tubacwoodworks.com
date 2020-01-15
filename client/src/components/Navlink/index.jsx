import React from 'react';
import './style.css';
import {useLocation} from 'react-router-dom';

function Navlink(props) {
    const location = useLocation();
    let classes= (location.pathname.startsWith(props.linkRef)) ? "navlink active" : "navlink";

    return (
        <div className={classes} id={props.id}>
            <a className="navlink-link" href={props.linkRef}>{props.linkText}</a>
            <span></span>
        </div>
    )
}

export default Navlink;