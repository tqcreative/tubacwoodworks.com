import React from 'react';
import './style.css';
import {useHistory} from 'react-router-dom';

function Navlink(props) {
    let classes= (props.location.pathname === props.linkRef) ? "navlink active" : "navlink";

    return (
        <div className={classes} id={props.id}>
            <a className="navlink-link" href={props.linkRef}>{props.linkText}</a>
            <span></span>
        </div>
    )
}

export default Navlink;