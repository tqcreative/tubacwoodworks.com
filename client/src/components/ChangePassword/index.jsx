import React, { Component, useState } from 'react';
import { Container, FormGroup, FormLabel, Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';


// Adding to yup schema to compare fields (i.e. passwords match)
function equalTo(ref, msg) {
    return this.test({
        name: 'equalTo',
        exclusive: false,
        message: msg || '${path} must be the same as ${reference}',
        params: {
            reference: ref.path
        },
        test: function (value) {
            return value === this.resolve(ref)
        }
    })
};
Yup.addMethod(Yup.string, 'equalTo', equalTo);

// Adding to yup schema to compare fields (i.e. new and old passwords don't match)
function notEqualTo(ref, msg) {
    return this.test({
        name: 'notEqualTo',
        exclusive: false,
        message: msg || '${path} must not be the same as ${reference}',
        params: {
            reference: ref.path
        },
        test: function (value) {
            return value !== this.resolve(ref)
        }
    })
};
Yup.addMethod(Yup.string, 'notEqualTo', notEqualTo);


// Define yup schema for how to validate form fields
const changePasswordSchema = Yup.object().shape({
    currentPassword: Yup.string()
        .required("Password is required"),
    newPassword: Yup.string()
        .required("Password is required")
        .notEqualTo(Yup.ref('currentPassword'),"New password must be different than current password"),
    confirmPassword: Yup.string()
        .required("Password is required")
        .equalTo(Yup.ref('newPassword'), "New password must match")
});


class ChangePassword extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(values, actions) {
        console.log(values);
        console.log(actions);
        console.log("Submit Hit");
        const { setSubmitting } = actions;
        const { currentPassword, newPassword } = values;

        axios.put(`/api/users/${this.props.user._id}/password`, {
            currentPassword: currentPassword,
            newPassword: newPassword
        })
            .then(res => {
                console.log(res.data)
                this.props.handleChangePassword();
                setSubmitting(false)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    render() {
        return (
            <Container>
                <hr />
                <h3>Change Password</h3>
                <hr />
                <Formik
                    initialValues={{
                        currentPassword: "",
                        newPassword: "",
                        confirmPassword: ""
                    }}
                    validationSchema={changePasswordSchema}
                    onSubmit={this.handleSubmit}
                >
                    {({ touched, errors, isSubmitting }) => (
                        <Form>
                            <Row>
                                <Col>
                                    <FormGroup controlId="formGroupCurrentPassword">
                                        <FormLabel className="pl-2">Current Password</FormLabel>
                                        <Field type="password" placeholder="Current Password" name="currentPassword"
                                            className={`form-control ${touched.currentPassword && errors.currentPassword ? "is-invalid" : ""}`}
                                        />
                                        <ErrorMessage name="currentPassword" className="invalid-feedback" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup controlId="formGroupNewPassword">
                                        <FormLabel className="pl-2">New Password</FormLabel>
                                        <Field type="password" placeholder="New Password" name="newPassword"
                                            className={`form-control ${touched.newPassword && errors.newPassword ? "is-invalid" : ""}`}
                                        />
                                        <ErrorMessage name="newPassword" className="invalid-feedback" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup controlId="formGroupConfirmPassword">
                                        <FormLabel className="pl-2">Confirm Password</FormLabel>
                                        <Field type="password" placeholder="Confirm Password" name="confirmPassword"
                                            className={`form-control ${touched.confirmPassword && errors.confirmPassword ? "is-invalid" : ""}`}
                                        />
                                        <ErrorMessage name="confirmPassword" className="invalid-feedback" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button variant="success" type="submit">Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    )}
                </Formik>
            </Container>
        )
    }
}

export default ChangePassword;