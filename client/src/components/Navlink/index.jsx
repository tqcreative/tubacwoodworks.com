import React from 'react';
import './style.css';

function Navlink(props) {
    const updateLinks = function(){
        let a = document.getElementsByClassName("navlink-wrapper");
        console.log(a);
    };

    return (
        <div className="navlink">
            <div className="navlink-wrapper" onClick={updateLinks}>
                    <a className="navlink-link" href={props.linkRef}>{props.linkText}</a>
                <span></span>
            </div>
        </div>
    )
}

export default Navlink;