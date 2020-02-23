import React, { Component } from 'react';
import './style.css';
import Contact from '../Contact';
import ContactSearch from '../ContactSearch';

class ContactWrapper extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            id: props.id
        }
    }

    render() {
        return (
            <div>
                <div className="m-3">
                    <ContactSearch hrefOnClick="/crm/customer" />
                </div>
                <Contact id={this.state.id} user={this.props.user}/>
            </div>
        )
    }
}

export default ContactWrapper;