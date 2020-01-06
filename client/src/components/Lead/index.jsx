import React from 'react';
import './style.css';

function Lead(props) {
    return (
        <tr>
            <td className="my-2">{props.firstName}</td>
            <td className="m-auto p-">{props.lastName}</td>
            <td>{props.signupDate}</td>
            <td><button className="btn btn-dark m-2" onClick={()=>props.onClick(props.id,{isLead:false})}>Ignore</button><button className="btn btn-dark m-2">Contact</button></td>
        </tr>
    )
}

export default Lead;