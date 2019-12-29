import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import './style.css';

class CRM extends Component {
    render() {
        return (
            this.props.loggedIn ?
                (
                    <div>
                        <nav className="navpane_root">
                            <a href="/dashboard">Dashboard</a>
                            <a href="/Customers">Customers</a>
                            <a href="/email">Email</a>
                        </nav>
                    </div>
                )
                :
                (
                    <div>
                        <p>Not logged in, will redirect</p>
                    </div>
                    // <Redirect
                    //     to={{
                    //         pathname: "/login"
                    //     }}
                    // />
                )
        )
    }
}

export default CRM
