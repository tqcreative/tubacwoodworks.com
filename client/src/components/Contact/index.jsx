import React, { Component } from 'react';
import './style.css';
import axios from 'axios';

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contactUpdateBtnText: "Edit",
            contactIsReadOnly: true,
            id: props.id ? props.id : null,
            firstName: props.firstName ? props.firstName : "",
            lastName: props.lastName ? props.lastName : "",
            email: props.email ? props.email : "",
            phoneNumber: props.phoneNumber ? props.phoneNumber : ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleContactSubmit = this.handleContactSubmit.bind(this);
        this.handleContactUpdate = this.handleContactUpdate.bind(this);
    }

    componentDidMount() {
        if (this.state.id) {
            axios.get(`/api/customers/id/${this.state.id}`)
                .then(res => {
                    const { firstName, lastName, email, phoneNumber} = res.data;
                    this.setState({ firstName: firstName, lastName: lastName, email: email,
                        phoneNumber: phoneNumber
                    })
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    handleInputChange(event) {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    };

    handleContactSubmit(event) {
        event.preventDefault();
        console.log("Save Contact");
        const custObj={
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber
        };

        axios.put(`/api/customers/id/${this.state.id}`, {custObj:custObj})
        .then(res=>{
            console.log(res);
            this.setState({contactIsReadOnly: !this.state.contactIsReadOnly,
                contactUpdateBtnText: this.state.contactUpdateBtnText === "Edit" ? "Cancel" : "Edit"
            });
        })
        .catch(err=>{
            console.log(err);
        });
    };

    handleContactUpdate(event){
        event.preventDefault();
        this.setState({ contactIsReadOnly: !this.state.contactIsReadOnly,
            contactUpdateBtnText: this.state.contactUpdateBtnText === "Edit" ? "Cancel" : "Edit"
        });
        
    }


    render() {
        let readOnly = this.state.contactIsReadOnly;
        return (
            <div className="container">
                <form className="mx-2 my-4">
                    <div className="form-group row">
                        <label htmlFor="customerFirstName" className="col-sm-3 col-form-label">First Name</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="customerFirstName" name="firstName" readOnly={readOnly}
                                value={this.state.firstName} onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="customerLastName" className="col-sm-3 col-form-label">Last Name</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="customerLastName" name="lastName" readOnly={readOnly}
                                value={this.state.lastName} onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="customerEmail" className="col-sm-3 col-form-label">Email Address</label>
                        <div className="col-sm-6">
                            <input type="email" className="form-control" id="customerEmail" name="email" readOnly={readOnly}
                                value={this.state.email} onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="customerPhoneNumber" className="col-sm-3 col-form-label">Phone Number</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="customerPhoneNumber" name="phoneNumber" readOnly={readOnly}
                                value={this.state.phoneNumber} onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                    <button className="btn btn-primary m-2" id="contact-update-btn" hidden={!this.state.id} onClick={this.handleContactUpdate}>{this.state.contactUpdateBtnText}</button>
                    <button className="btn btn-danger" id="contact-submit-btn" hidden={this.state.contactIsReadOnly} onClick={this.handleContactSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Contact;