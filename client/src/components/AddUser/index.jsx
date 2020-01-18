import React, { useState } from 'react';
import { Form, FormGroup, Button, Col } from 'react-bootstrap';


function AddUser(props) {
    const [userState, setUserState] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    function handleInputChange(event) {
        console.log(event.target)
        setUserState({ ...userState, [event.target.name]: event.target.value });
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log("Submit Hit");
    }

    return (
        <div className="container">
            <h3>You are logged on as {props.user.local.username} with a role type of {props.user.role}</h3>
            <hr/>
            <h1>Add New User</h1>
            <hr/>
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
                        <Button onClick={handleSubmit}>Submit</Button>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    )
}

export default AddUser;