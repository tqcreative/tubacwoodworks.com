import React from 'react';
import Navlink from '../Navlink';

function NavlinkWrapper(props) {
    return (
        <div className="navlink_wrapper">
            <Navlink
                linkText="Dashboard"
                linkRef="/crm/dashboard"
                id="nav-dashboard"
            />
            <Navlink
                linkText="Employee"
                linkRef="/crm/employee"
                id="nav-employee"
            />
            <Navlink
                linkText="Customer Info"
                linkRef="/crm/customer"
                id="nav-customer"
            />
            <Navlink
                linkText="Notes"
                linkRef="/crm/notes"
                id="nav-notes"
            />
            <Navlink
                linkText="Scheduler"
                linkRef="/crm/scheduler"
                id="nav-scheduler"
            />
            <Navlink
                linkText="Email"
                linkRef="/crm/email"
                id="nav-email"
            />
            <Navlink
                linkText="Help"
                linkRef="/crm/help"
                id="nav-help"
            />

        </div>
    )
}

export default NavlinkWrapper;