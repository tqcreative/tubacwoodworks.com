import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';
import './style.css';
import axios from 'axios';
import Toast from '../Toast';

class ContactList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: [],
            redirectTo: "",
            toastShow: false,
            toastPhoneNumber: "",
            toastFirstName: "",
            toastLastName: ""
        }
        this.handleCallClick = this.handleCallClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.toggleToast = this.toggleToast.bind(this);
    }

    componentDidMount() {
        this.getContacts()
    }

    handleCallClick(phoneNumber, firstName, lastName) {
        this.setState({
            toastPhoneNumber: phoneNumber,
            toastFirstName: firstName,
            toastLastName: lastName
        })
        this.toggleToast()
    }

    handleDeleteClick(id){
        console.log(`Deleting contact with id: ${id}`);

        axios.delete(`/api/customers/id/${id}`)
        .then(res=>{
            console.log(res)
            console.log(`Successfully deleted customer with id: ${res.data.id}`)
            const tempArray = [...this.state.contacts];
            const index = tempArray.findIndex(element=>element._id === id);
            console.log(tempArray);
            console.log(`Index in array: ${index}`)
            tempArray.splice(index,1) //removes contact from contact array
            console.log(tempArray);
            this.setState({contacts: tempArray});        
        })
        .catch(err=>{
            console.log(err)
        })
    }

    toggleToast() {
        if(this.state.toastShow){
            this.setState({ toastFirstName: "", toastLastName: "", toastPhoneNumber: ""})
        }
        this.setState({ toastShow: !this.state.toastShow })
    }

    getContacts() {
        axios.get("/api/customers").then(res => {
            this.setState({ contacts: res.data })
        })
            .catch(err => {
                console.log(err)
            })
    }

    goToDetailsPage(id) {
        this.setState({ redirectTo: id })
    }

    render() {
        return (
            <div className="container cl_root">
                {this.state.redirectTo ? <Redirect to={`/crm/customer/${this.state.redirectTo}`} /> : null}
                <h1>All Customers</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Address</th>
                            <th>Phone Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.contacts.map(contact => {
                            return (
                                <tr key={contact._id}>
                                    <td className="my-2">{contact.firstName}</td>
                                    <td className="m-auto p-">{contact.lastName}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.phoneNumber}</td>
                                    <td>
                                        <button className="btn btn-dark my-2 mr-2" onClick={() => this.goToDetailsPage(contact._id)}>View Details</button>
                                        <button className="btn btn-call my-2 mr-2" onClick={() => this.handleCallClick(contact.phoneNumber, contact.firstName, contact.lastName)}><ion-icon name="ios-call"></ion-icon></button>
                                        { this.props.user.role === "admin" ? (
                                        <button className="btn btn-del my-2" onClick={() => this.handleDeleteClick(contact._id)}><ion-icon name="trash"></ion-icon></button>
                                        ) : null }
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
                <Toast show={this.state.toastShow} onClose={this.toggleToast}>
                    <Fragment>
                        <h1>{this.state.toastFirstName} {this.state.toastLastName}</h1>
                        <h1>{this.state.toastPhoneNumber}</h1>
                        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${this.state.toastPhoneNumber}`} alt="Phone Number QR Code" />
                    </Fragment>
                </Toast>
            </div>
        )
    }
}

export default ContactList;