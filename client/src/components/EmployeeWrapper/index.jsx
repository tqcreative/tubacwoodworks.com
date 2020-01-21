import React, { Component } from 'react';
import AddUser from '../AddUser';
import EmployeeNav from '../EmployeeNav';
import EmployeeAppts from '../EmployeeAppts';
import ChangePassword from '../ChangePassword';
import axios from 'axios';
// import './style.css'

class EmployeeWrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            appointments: [],
            showAddUser: false,
            showChangePassword: false
        }
        this.handleAddUser = this.handleAddUser.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    componentDidMount() {
        axios.get(`/api/users/${this.props.user._id}/appts`).then(res => {
            console.log(res);
            this.setState({ appointments: res.data })
        })
    }

    handleAddUser() {
        this.setState({ showAddUser: !this.state.showAddUser });
    }

    handleChangePassword() {
        this.setState({ showChangePassword: !this.state.showChangePassword });
    }

    render() {
        return (
            <div className="container">
                <div className="m-2 d-flex justify-content-center">
                    <h1>Hello, {this.props.user.firstName}</h1>
                </div>

                {/* <EmployeeNav loggedIn={this.props.loggedIn} user={this.props.user} /> */}
                <EmployeeAppts appointments={this.state.appointments} />
                <div>
                    <h1>Admin</h1>
                    <hr />
                    <button hidden={this.props.user.role != "admin"} className="btn btn-dark my-2 mr-2" onClick={this.handleAddUser}
                    >Add User</button>
                    <button className="btn btn-dark my-2 mr-2" onClick={this.handleChangePassword}
                    >Change Password</button>
                </div>
                {this.state.showAddUser ? <AddUser user={this.props.user} handleAddUser={this.handleAddUser} /> : null}
                {this.state.showChangePassword ? <ChangePassword user={this.props.user} handleChangePassword={this.handleChangePassword} /> : null}
            </div>
        )
    }
}

export default EmployeeWrapper;