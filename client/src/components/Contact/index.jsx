import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './style.css';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../ContactForm';

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id ? props.id : null,
            contact: {
                firstName: "",
                lastName: "",
                nickname: "",
                email: "",
                phoneNumber: "",
                streetAddress: "",
                city: "",
                state: "",
                zipcode: "",
                zip4: "",
                isLead: ""
            },
            noteRedirectPath: "",
            apptRedirectPath: ""
        }
    }

    componentDidMount() {
        if (this.state.id) {
            this.getCustomerInfo();
        }
    }

    getCustomerInfo() {
        axios.get(`/api/customers/id/${this.state.id}`)
            .then(res => {
                const { _id, ...rest } = res.data;
                this.setState({ contact: { ...this.state.contact, ...rest } })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <Container>
                {this.state.noteRedirectPath ? <Redirect to={this.state.noteRedirectPath} /> : null}
                {this.state.apptRedirectPath ? <Redirect to={this.state.apptRedirectPath} /> : null}
                <Row hidden={!this.state.id}>
                    <Col>
                        <button className="btn btn-dark mx-1"
                            onClick={(event) => { event.preventDefault(); this.setState({ noteRedirectPath: `/crm/notes/${this.state.id}` }) }}
                        >Notes</button>
                        <button className="btn btn-dark mx-1"
                            onClick={(event) => { event.preventDefault(); this.setState({ apptRedirectPath: `/crm/scheduler/${this.state.id}` }) }}
                        >Scheduler</button>
                    </Col>
                </Row>
                <ContactForm contact={this.state.contact} id={this.state.id} role={this.props.user.role} />
            </Container>
        )
    }
}

export default Contact;