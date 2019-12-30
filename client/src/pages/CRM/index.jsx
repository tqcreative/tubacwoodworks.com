import React from 'react'
import { Redirect, useLocation } from 'react-router-dom';
import './style.css';
import Navlink from '../../components/Navlink';

function CRM(props) {
    const location = useLocation();
    return (
        <div className="crm_root">
            <div className="top_root"></div>
            <div className="bottom_root">
                <div className="left_root">
                    <Navlink
                        linkText="Dashboard"
                        linkRef="/crm/dashboard"
                        location={location}
                        id="link-1"
                    />
                    <Navlink
                        linkText="Customer Info"
                        linkRef="/crm/customer"
                        location={location}
                        id="link-2"
                    />
                    <Navlink
                        linkText="All Customers"
                        linkRef="/crm/customers"
                        location={location}
                        id="link-3"
                    />
                    <Navlink
                        linkText="Email"
                        linkRef="/crm/email"
                        location={location}
                        id="link-4"
                    />
                    <Navlink
                        linkText="Help"
                        linkRef="/crm/help"
                        location={location}
                        id="link-5"
                    />
                </div>
                <div className="right_root"></div>
            </div>
        </div>
    )
}

export default CRM
