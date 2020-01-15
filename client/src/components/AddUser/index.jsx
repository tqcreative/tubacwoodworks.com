import React from 'react';
import { Form } from 'react-bootstrap';


function AddUser(props) {
    return (
        <div>
            <h3>You are logged on as {props.user.local.username} with a role type of {props.user.role}</h3>
            <Form>
                <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" name="firstName"/>
                </Form.Group>
            </Form>
        </div>
    )
}

export default AddUser;