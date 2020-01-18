import React, { useState } from 'react';
import { Form, FormGroup, Button, Col } from 'react-bootstrap';
import axios from 'axios';


function AddUser(props) {
    const [userState, setUserState] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: "",
        role: "user"
    });

    function handleInputChange(event) {
        setUserState({ ...userState, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Submit Hit");
        axios.post('/api/users', {
            firstName: userState.firstName,
            lastName: userState.lastName,
            username: userState.username,
            password: userState.password,
            role: userState.role
        })
            .then(res => {
                console.log(res.data)
                props.handleAddUser();
            })
    }

    return (
        <div className="container">
            <hr />
            <h3>Add New User</h3>
            <hr />
            <Form>
                <Form.Row>
                    <Col>
                        <FormGroup controlId="formGroupFirstName">
                            <Form.Label className="pl-2">First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" name="firstName" value={userState.firstName} onChange={handleInputChange} />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup controlId="formGroupLastName">
                            <Form.Label className="pl-2">Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" name="lastName" value={userState.lastName} onChange={handleInputChange} />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup controlId="formGroupUsername">
                            <Form.Label className="pl-2">Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" name="username" value={userState.username} onChange={handleInputChange} />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup controlId="formGroupPassword">
                            <Form.Label className="pl-2">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" value={userState.password} onChange={handleInputChange} />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup controlId="formGroupConfirmPassword">
                            <Form.Label className="pl-2">Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" value={userState.confirmPassword} onChange={handleInputChange} />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup controlId="formGroupRole">
                            <Form.Label className="pl-2">Role</Form.Label>
                            <Form.Control as="select" name="role" value={userState.role} onChange={handleInputChange}>
                                <option>user</option>
                                <option>admin</option>
                            </Form.Control>
                        </FormGroup>
                    </Col>
                    <Col>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    )
}

export default AddUser;