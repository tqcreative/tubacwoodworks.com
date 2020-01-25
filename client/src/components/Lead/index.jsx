import React from 'react';
import './style.css';

function Lead(props) {
    return (
        <tr className="lead_root">
            <td className="my-2">{props.firstName}</td>
            <td className="m-auto p-">{props.lastName}</td>
            <td>{props.signupDate}</td>
            <td>
                <button className="btn btn-dark my-2 mr-2" onClick={() => props.onClick(props.id, { isLead: false })}>Ignore</button>
                <button className="btn btn-dark my-2 mr-2" onClick={() => props.contactClick(props.id)}>View Contact</button>
                <button className="btn btn-call my-2 mr-2" onClick={() => props.handleCallClick(props.phoneNumber, props.firstName, props.lastName)}><ion-icon name="ios-call"></ion-icon></button>
            </td>
        </tr>
    )
}

export default Lead;