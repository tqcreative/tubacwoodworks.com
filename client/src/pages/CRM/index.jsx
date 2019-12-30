import React from 'react'
import { Redirect } from 'react-router-dom';
import './style.css';
import Navlink from '../../components/Navlink';

function CRM(props) {
    return (
        <div className="crm_root">
            <Redirect from="/crm" to="/crm/dashboard" />
            <div className="top_root">
                <a href="/"><ion-icon name="home"></ion-icon></a>
                <ion-icon name="log-out" onClick={props.logout}></ion-icon>
            </div>
            <div className="bottom_root">
                <div className="left_root">
                    <Navlink
                        linkText="Dashboard"
                        linkRef="/crm/dashboard"
                        id="link-1"
                    />
                    <Navlink
                        linkText="Customer Info"
                        linkRef="/crm/customer"
                        id="link-2"
                    />
                    <Navlink
                        linkText="All Customers"
                        linkRef="/crm/customers"
                        id="link-3"
                    />
                    <Navlink
                        linkText="Email"
                        linkRef="/crm/email"
                        id="link-4"
                    />
                    <Navlink
                        linkText="Help"
                        linkRef="/crm/help"
                        id="link-5"
                    />
                </div>
                <div className="right_root"></div>
            </div>
        </div>
    )
}

export default CRM
