import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import './style.css';
import Navlink from '../../components/Navlink';

class CRM extends Component {
    render() {
        return (
            <div className="crm_root">
                <div className="top_root"></div>
                <div className="bottom_root">
                    <div className="left_root">
                        <Navlink
                            linkText="Dashboard"
                            linkRef="/crm/dashboard"
                        />
                        <Navlink
                            linkText="Customer Info"
                            linkRef="/crm/customer"
                        />
                        <Navlink
                            linkText="All Customers"
                            linkRef="/crm/customers"
                        />
                        <Navlink
                            linkText="Email"
                            linkRef="/crm/email"
                        />
                                                <Navlink 
                            linkText="Help"
                            linkRef="/crm/help"
                        />
                    </div>
                    <div className="right_root"></div>
                </div>
            </div>
        )
    }
}

export default CRM
