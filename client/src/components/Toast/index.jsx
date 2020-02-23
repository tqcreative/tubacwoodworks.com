import React from "react";
import "./style.css";

function Toast(props) {
    let classes = "toast_root";
    props.show ? classes += " toast-show" : classes += " toast-hide";

    return (
        <div className={classes}>
            <div className="background" onClick={props.onClose}>
            </div>
            <div className="message">
                <button type="button" className="close closeBtn" onClick={(event) => { event.preventDefault(); props.onClose() }}>
                    <span>&times;</span>
                </button>
                <div className="body">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Toast;