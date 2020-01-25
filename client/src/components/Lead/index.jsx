import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './style.css';

function Lead(props) {
    return (
        <tr className="lead_root">
            <td className="my-2">{props.firstName}</td>
            <td className="m-auto p-">{props.lastName}</td>
            <td>{props.signupDate}</td>
            <td>
                <button className="btn btn-dark my-2 mr-2" onClick={() => props.contactClick(props.id)}>View Contact</button>
                <OverlayTrigger placement="right" overlay={<Tooltip>Mark Complete</Tooltip>} >
                    <button className="btn btn-check my-2 mr-2" onClick={() => props.onClick(props.id, { isLead: false })}><ion-icon name="checkmark-circle"></ion-icon></button>
                </OverlayTrigger>
                <OverlayTrigger placement="right" overlay={<Tooltip>Call</Tooltip>} >
                    <button className="btn btn-call my-2 mr-2" onClick={() => props.handleCallClick(props.phoneNumber, props.firstName, props.lastName)}><ion-icon name="ios-call"></ion-icon></button>
                </OverlayTrigger>
            </td>
        </tr>
    )
}

export default Lead;