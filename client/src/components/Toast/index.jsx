import React from "react";
import "./style.css";

function Toast(props){
    let classes = "toast_root";
    props.show ? classes += " toast-show" : classes += " toast-hide";

    return (
        <div className={classes} onClick={props.onClose}>
            <div className="background">
            </div>
            <div className="message">
                <p>{props.message}</p>
                <div className="closeBtn" onClick={props.onClose}>
                    <p>X</p>
                </div>
            </div>
        </div>
    )
}

export default Toast;