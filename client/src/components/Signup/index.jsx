import React, { Component } from "react";
import "./style.css";
import Toast from "../Toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import MaskedInput from "react-text-mask";
import { FormGroup} from 'react-bootstrap';
import axios from 'axios';

const phoneNumberMask = [
    "(",
    /[1-9]/,
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/
];

// Define yup schema for how to validate form fields
const signupSchema = Yup.object().shape({
    firstName: Yup.string()
        .required("First name is required"),
    lastName: Yup.string()
        .required("Last name is required"),
    email: Yup.string()
        .required("Email address is required")
        .email("Must be an email address"),
    phoneNumber: Yup.string()
        .required("Phone number is required")
        .matches(/\([1-9]\d\d\) \d\d\d-\d\d\d\d/, "Must enter a valid U.S. phone number")
});


class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleInputChange(event) {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit(values, actions) {
        const { setSubmitting, resetForm, setStatus } = actions;
        const { firstName, lastName, email, phoneNumber } = values;

        axios.post("/api/customers/signup", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber
        })
            .then(res => {
                console.log(res);
                //Clear out the input fields
                // this.setState({
                //     firstName: "",
                //     // middleName: "",
                //     lastName: "",
                //     email: "",
                //     phoneNumber: ""
                // })
                this.props.submitResult(["Thank you for signing up.  You will receive a confirmation email shortly."]);
                setSubmitting(false);
                setStatus({ success: true })
                resetForm();
            })
            .catch(err => {
                let obj = err.response.data.errors;
                let errors = ["Sorry, your request could not be completed due to the following issues:"];
                if (obj) {
                    Object.keys(obj).forEach(key => {
                        errors.push(obj[key].message)
                    })
                }
                else if (!obj && err.response.data.name === "MongoError" && err.response.data.code == 11000) {
                    errors.push("You've already signed up for a quote.  We'll be in touch soon.")
                }
                else if (err.response.data.errmsg) {
                    errors.push(err.response.data.errmsg)
                }
                else {
                    errors.push("Unknown error occurred.  Please try again.");
                }
                this.props.submitResult(errors);
                setSubmitting(false);
                setStatus({ success: false })
            })
    };

    render() {
        return (
            <section className="signupWrapper">
                <div className="background-img">
                </div>
                <div className="body">
                    <div className="banner">
                        <h1>Sign Up Now For Your Free Consultation Today!</h1>
                    </div>
                    <Formik
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            email: "",
                            phoneNumber: ""
                        }}
                        validationSchema={signupSchema}
                        onSubmit={this.handleSubmit}
                    >
                        {({ touched, errors, isSubmitting }) => (
                            <Form>
                                <FormGroup>
                                    <Field type="text" placeholder="First Name" name="firstName"
                                        className={`form-control ${touched.firstName && errors.firstName ? "is-invalid" : ""}`}
                                    />
                                    <ErrorMessage component="span" name="firstName" className="invalid-feedback" />
                                </FormGroup>

                                <input id="middle_name" type="text" placeholder="Middle Name" name="middleName" value={this.state.middleName} onChange={this.handleInputChange} />

                                <FormGroup>
                                    <Field type="text" placeholder="Last Name" name="lastName"
                                        className={`form-control ${touched.lastName && errors.lastName ? "is-invalid" : ""}`}
                                    />
                                    <ErrorMessage component="span" name="lastName" className="invalid-feedback" />
                                </FormGroup>

                                <FormGroup>
                                    <Field type="email" placeholder="Email Address" name="email"
                                        className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`}
                                    />
                                    <ErrorMessage component="span" name="email" className="invalid-feedback" />
                                </FormGroup>
                                <FormGroup>
                                    <Field name="phoneNumber"
                                        render={({ field }) => (
                                            <MaskedInput
                                                {...field}
                                                mask={phoneNumberMask}
                                                type="text"
                                                placeholder="Phone Number"
                                                className={`form-control ${touched.phoneNumber && errors.phoneNumber ? "is-invalid" : ""}`}
                                            />
                                        )}
                                    />
                                    <ErrorMessage component="span" name="phoneNumber" className="invalid-feedback" />
                                </FormGroup>
                                <FormGroup>
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </FormGroup>
                            </Form>
                        )}
                    </Formik>
                    <Toast message="Test Message" />
                </div>
            </section>
        )
    };
}

export default Signup;