import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { FormGroup, FormLabel, Row, Col } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import MaskedInput from "react-text-mask";
import axios from 'axios';

const phoneNumberMask = ["(", /[1-9]/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];
const zipcodeMask = [/\d/, /\d/, /\d/, /\d/, /\d/];
const zip4Mask = [/\d/, /\d/, /\d/, /\d/];

// Define yup schema for how to validate form fields
const contactSchema = Yup.object().shape({
    firstName: Yup.string()
        .required("First name is required"),
    lastName: Yup.string()
        .required("Last name is required"),
    email: Yup.string()
        .email("Enter a valid email address")
        .required("Email address is required"),
    phoneNumber: Yup.string()
        .required("Phone number is required")
        .matches(/\([1-9]\d\d\) \d\d\d-\d\d\d\d/, "Must enter a valid phone number"),
    zipcode: Yup.string()
        .matches(/^\d{5}$/, "Zipcode must be 5 digits"),
    zip4: Yup.string()
        .matches(/^\d{4}$/, "Zip+4 must be 4 digits")
});

function ContactForm(props) {
    const { id, contact, role } = props;
    const [readOnly, setReadOnly] = useState(true);
    const [updateBtnText, setUpdateBtnText] = useState(id ? "Edit" : "Add New Customer");
    const [redirectPath, setRedirectPath] = useState("");

    function toggleEdit(handleReset) {
        setReadOnly(!readOnly);
        if(updateBtnText === "Cancel"){
            setUpdateBtnText(id ? "Edit" : "Add New Customer");
            handleReset();
        }
        else{
            setUpdateBtnText("Cancel");
        }
        
    }

    function handleContactUpdate(event,handleReset) {
        event.preventDefault();
        toggleEdit(handleReset);
    }

    function handleContactSave(values) {
        //if id already exists, update it
        if(id){
            axios.put(`/api/customers/id/${id}`, { custObj: values })
            .then(res => {
                toggleEdit();
            })
            .catch(err => {
                console.log(err);
            })
        }
        else{
            //new contact, insert into db
            axios.post('/api/customers', {custObj: values})
            .then(res=>{
                const {_id} = res.data.customer;
                window.location.href = `/crm/customer/${_id}`;
            })
            .catch(err =>{
                console.log(err)
            })
        }
    }

    function handleContactDelete(event) {
        event.preventDefault();
        axios.delete(`/api/customers/id/${id}`)
            .then(res => {
                setRedirectPath("/crm/customer");
            })
    }

    return (
        <Formik
            initialValues={contact}
            enableReinitialize={true}
            validationSchema={contactSchema}
            onSubmit={handleContactSave}
        >
            {({ touched, errors, handleReset }) => (
                <Form className="mx-2 my-4">
                    {redirectPath ? <Redirect to={redirectPath} /> : null}
                    <FormGroup as={Row} controlId="customerFirstName">
                        <Col sm={3}><FormLabel className="col-form-label">First Name</FormLabel></Col>
                        <Col sm={6}>
                            <Field id="customerFirstName" name="firstName" readOnly={readOnly}
                                className={`form-control ${touched.firstName && errors.firstName ? "is-invalid" : ""}`}
                            />
                            <ErrorMessage name="firstName" className="invalid-feedback" />
                        </Col>
                    </FormGroup>
                    <FormGroup as={Row} controlId="customerLastName">
                        <Col sm={3}><FormLabel className="col-form-label">Last Name</FormLabel></Col>
                        <Col sm={6}>
                            <Field id="customerLastName" name="lastName" readOnly={readOnly}
                                className={`form-control ${touched.lastName && errors.lastName ? "is-invalid" : ""}`}
                            />
                            <ErrorMessage name="lastName" className="invalid-feedback" />
                        </Col>
                    </FormGroup>
                    <FormGroup as={Row} controlId="customerNickname">
                        <Col sm={3}><FormLabel className="col-form-label">Nickname</FormLabel></Col>
                        <Col sm={6}>
                            <Field id="customerNickname" name="nickname" readOnly={readOnly}
                                className={`form-control ${touched.nickname && errors.nickname ? "is-invalid" : ""}`}
                            />
                            <ErrorMessage name="nickname" className="invalid-feedback" />
                        </Col>
                    </FormGroup>
                    <FormGroup as={Row} controlId="customerEmail">
                        <Col sm={3}><FormLabel className="col-form-label">Email Address</FormLabel></Col>
                        <Col sm={6}>
                            <Field id="customerEmail" name="email" readOnly={readOnly}
                                className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`}
                            />
                            <ErrorMessage name="email" className="invalid-feedback" />
                        </Col>
                    </FormGroup>
                    <FormGroup as={Row} controlId="customerPhoneNumber">
                        <Col sm={3}><FormLabel className="col-form-label">Phone Number</FormLabel></Col>
                        <Col sm={6}>
                            <Field id="customerPhoneNumber" name="phoneNumber"
                                render={({ field }) => (
                                    <MaskedInput {...field}
                                        mask={phoneNumberMask}
                                        type="text"
                                        readOnly={readOnly}
                                        className={`form-control ${touched.phoneNumber && errors.phoneNumber ? "is-invalid" : ""}`}
                                    />
                                )}
                            />
                            <ErrorMessage name="phoneNumber" className="invalid-feedback" />
                        </Col>
                    </FormGroup>

                    <hr />
                    <h1>Address</h1>
                    <FormGroup as={Row} controlId="customerStreetAddress">
                        <Col sm={3}><FormLabel className="col-form-label">Street Address</FormLabel></Col>
                        <Col sm={6}>
                            <Field id="customerStreetAddress" name="streetAddress" readOnly={readOnly}
                                className={`form-control ${touched.streetAddress && errors.streetAddress ? "is-invalid" : ""}`}
                            />
                            <ErrorMessage name="streetAddress" className="invalid-feedback" />
                        </Col>
                    </FormGroup>
                    <FormGroup as={Row} controlId="customerCity">
                        <Col sm={3}><FormLabel className="col-form-label">City</FormLabel></Col>
                        <Col sm={6}>
                            <Field id="customerCity" name="city" readOnly={readOnly}
                                className={`form-control ${touched.city && errors.city ? "is-invalid" : ""}`}
                            />
                            <ErrorMessage name="city" className="invalid-feedback" />
                        </Col>
                    </FormGroup>
                    <FormGroup as={Row} controlId="customerState">
                        <Col sm={3}><FormLabel className="col-form-label">State</FormLabel></Col>
                        <Col sm={2}>
                            <Field id="customerState" name="state" readOnly={readOnly}
                                className={`form-control ${touched.state && errors.state ? "is-invalid" : ""}`}
                            />
                            <ErrorMessage name="state" className="invalid-feedback" />
                        </Col>
                    </FormGroup>
                    <FormGroup as={Row} controlId="customerZipcode">
                        <Col sm={3}><FormLabel className="col-form-label">Zipcode</FormLabel></Col>
                        <Col sm={2}>
                            <Field id="customerZipcode" name="zipcode"
                                render={({ field }) => (
                                    <MaskedInput {...field}
                                        mask={zipcodeMask}
                                        readOnly={readOnly}
                                        className={`form-control ${touched.zipcode && errors.zipcode ? "is-invalid" : ""}`}
                                    />
                                )}
                            />
                            <ErrorMessage name="zipcode" className="invalid-feedback" />
                        </Col>
                    </FormGroup>
                    <FormGroup as={Row} controlId="customerZip4">
                        <Col sm={3}><FormLabel className="col-form-label">Zip+4</FormLabel></Col>
                        <Col sm={2}>
                            <Field id="customerZip4" name="zip4"
                                render={({ field }) => (
                                    <MaskedInput {...field}
                                        mask={zip4Mask}
                                        readOnly={readOnly}
                                        className={`form-control ${touched.zip4 && errors.zip4 ? "is-invalid" : ""}`}
                                    />
                                )}
                            />
                            <ErrorMessage name="zip4" className="invalid-feedback" />
                        </Col>
                    </FormGroup>

                    <hr />
                    <h1>Promotional Info</h1>
                    <FormGroup as={Row} controlId="customerLead">
                        <Col sm={3}><FormLabel className="col-form-label">Lead</FormLabel></Col>
                        <Col sm={2}>
                            <Field id="customerLead" name="isLead" disabled={readOnly} type="checkbox"
                                className={`form-control ${touched.zip4 && errors.zip4 ? "is-invalid" : ""}`}
                            />
                            <ErrorMessage name="zip4" className="invalid-feedback" />
                        </Col>
                    </FormGroup>
                    <Row>
                        <Col>
                            <button className="btn btn-dark my-2 mr-2" id="contact-update-btn" onClick={(event)=>handleContactUpdate(event, handleReset)}>{updateBtnText}</button>
                            <button className="btn btn-success my-2 mr-2" id="contact-submit-btn" hidden={readOnly} onClick={handleContactSave}>Save</button>
                            <button className="btn btn-danger my-2 mr-2" id="contact-delete-btn" hidden={!id || role !== "admin"} onClick={handleContactDelete}
                            >Delete Customer</button>
                        </Col>
                    </Row>
                </Form>
            )}
        </Formik>
    )
}

export default ContactForm;