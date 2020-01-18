import React, { useState } from 'react';
import { Form, FormGroup, Button, Col } from 'react-bootstrap';
import axios from 'axios';

function ChangePassword(props){
    const [userState, setUserState] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    function handleInputChange(event) {
        setUserState({ ...userState, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Submit Hit");
        // axios.post('/api/users', {
        //     firstName: userState.firstName,
        //     lastName: userState.lastName,
        //     username: userState.username,
        //     password: userState.password,
        //     role: userState.role
        // })
        //     .then(res => {
        //         console.log(res.data)
        //         props.handleAddUser();
        //     })
    }


    return(
        <div className="container">
            <hr />
            <h3>Change Password</h3>
            <hr />
            <Form>
                <Form.Row>
                    <Col>
                        <FormGroup controlId="formGroupCurrentPassword">
                            <Form.Label className="pl-2">Current Password</Form.Label>
                            <Form.Control type="password" placeholder="Current Password" name="currentPassword" value={userState.currentPassword} onChange={handleInputChange} />
                        </FormGroup>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <FormGroup controlId="formGroupNewPassword">
                            <Form.Label className="pl-2">New Password</Form.Label>
                            <Form.Control type="password" placeholder="New Password" name="newPassword" value={userState.newPassword} onChange={handleInputChange} />
                        </FormGroup>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <FormGroup controlId="formGroupConfirmPassword">
                            <Form.Label className="pl-2">Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" value={userState.confirmPassword} onChange={handleInputChange} />
                        </FormGroup>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    )
}

export default ChangePassword;