import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';


function EmployeeNav(props){
    return(
        <Navbar bg="dark">
            <Nav.Link>Schedule</Nav.Link>
            <Nav.Link>Settings</Nav.Link>
            <Nav.Link>Manage Users</Nav.Link>
            <Nav.Link>Manage Customers</Nav.Link>
            <h3 inline>Hello, {props.user.local.username}</h3>
        </Navbar>
    )
}

export default EmployeeNav;