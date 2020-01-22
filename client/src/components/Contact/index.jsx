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
            firstName: "",
            middleName: "",
            lastName: "",
            nickname: "",
            email: "",
            phoneNumber: "",
            streetAddress: "",
            city: "",
            state: "",
            zipcode: "",
            zip4: "",
            isLead: false,
            notes: []
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleContactSubmit = this.handleContactSubmit.bind(this);
        this.handleContactUpdate = this.handleContactUpdate.bind(this);
        this.handleContactDelete = this.handleContactDelete.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }

    componentDidMount() {
        if (this.state.id) {
            this.getCustomerInfo();
        }
    }

    getCustomerInfo() {
        axios.get(`/api/customers/id/${this.state.id}`)
            .then(res => {
                console.log(res.data);
                const { _id, ...rest } = res.data;
                this.setState({ ...rest })
            })
            .catch(err => {
                console.log(err);
            })

    }

    handleInputChange(event) {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    };

    handleCheck(event) {
        // event.preventDefault();
        this.setState({ [event.target.name]: !this.state[event.target.name] })
    }

    handleContactSubmit(event) {
        event.preventDefault();
        const custObj = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            nickname: this.state.nickname,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            streetAddress: this.state.streetAddress,
            city: this.state.city,
            state: this.state.state,
            zipcode: this.state.zipcode,
            zip4: this.state.zip4,
            isLead: this.state.isLead,
            notes: this.state.notes
        };

        axios.put(`/api/customers/id/${this.state.id}`, { custObj: custObj })
            .then(res => {
                this.setState({
                    contactIsReadOnly: !this.state.contactIsReadOnly,
                    contactUpdateBtnText: this.state.contactUpdateBtnText === "Edit" ? "Cancel" : "Edit"
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    handleContactUpdate(event) {
        event.preventDefault();
        this.setState({
            contactIsReadOnly: !this.state.contactIsReadOnly,
            contactUpdateBtnText: this.state.contactUpdateBtnText === "Edit" ? "Cancel" : "Edit"
        });
    }

    handleContactDelete(event){
        event.preventDefault();
        axios.delete(`/api/customers/id/${this.state.id}`).then(res=>{
            console.log(res);
            window.location.href="/crm/customer"
        })
    }

    render() {
        let readOnly = this.state.contactIsReadOnly;
        return (
            <div className="container">
                <div hidden={!this.state.id}>
                    <button className="btn btn-dark mx-1"
                        onClick={(event) => { event.preventDefault(); window.location.href = `/crm/notes/${this.state.id}` }}
                    >Notes</button>
                    <button className="btn btn-dark mx-1"
                        onClick={(event) => { event.preventDefault(); window.location.href = `/crm/scheduler/${this.state.id}` }}
                    >Scheduler</button>
                </div>
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
                        <label htmlFor="customerNickname" className="col-sm-3 col-form-label">Nickname</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="customerNickname" name="nickname" readOnly={readOnly}
                                value={this.state.nickname} onChange={this.handleInputChange}
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

                    <hr />
                    <h1>Address</h1>
                    <div className="form-group row">
                        <label htmlFor="customerStreetAddress" className="col-sm-3 col-form-label">Street Address</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="customerStreetAddress" name="streetAddress" readOnly={readOnly}
                                value={this.state.streetAddress} onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="customerCity" className="col-sm-3 col-form-label">City</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="customerCity" name="city" readOnly={readOnly}
                                value={this.state.city} onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="customerState" className="col-sm-3 col-form-label">State</label>
                        <div className="col-sm-2">
                            <input type="text" className="form-control" id="customerState" name="state" readOnly={readOnly}
                                value={this.state.state} onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="customerZipcode" className="col-sm-3 col-form-label">Zipcode</label>
                        <div className="col-sm-2">
                            <input type="text" className="form-control" id="customerZipcode" name="zipcode" readOnly={readOnly}
                                value={this.state.zipcode} onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="customerZip4" className="col-sm-3 col-form-label">Zip+4</label>
                        <div className="col-sm-2">
                            <input type="text" className="form-control" id="customerZip4" name="zip4" readOnly={readOnly}
                                value={this.state.zip4} onChange={this.handleInputChange}
                            />
                        </div>
                    </div>

                    <hr />
                    <h1>Promotional Info</h1>
                    <div className="form-group row">
                        <label htmlFor="customerLead" className="col-sm-3 col-form-label">Lead</label>
                        <div className="col-sm-2">
                            <input type="checkbox" className="form-control" id="customerLead" name="isLead" disabled={readOnly}
                                checked={this.state.isLead} onChange={this.handleCheck}
                            />
                        </div>
                    </div>

                    <button className="btn btn-dark my-2 mr-2" id="contact-update-btn" hidden={!this.state.id} onClick={this.handleContactUpdate}>{this.state.contactUpdateBtnText}</button>
                    <button className="btn btn-success my-2 mr-2" id="contact-submit-btn" hidden={this.state.contactIsReadOnly} onClick={this.handleContactSubmit}>Submit</button>
                    <button className="btn btn-danger my-2 mr-2" id="contact-delete-btn" hidden={!this.state.id || this.props.user.role != "admin"} onClick={this.handleContactDelete}
                    >Delete Customer</button>
                </form>
            </div>
        )
    }
}

export default Contact;