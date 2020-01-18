import React, {Component} from 'react';
import AddUser from '../AddUser';
import EmployeeNav from '../EmployeeNav';
import EmployeeAppts from '../EmployeeAppts';
import axios from 'axios';

class EmployeeWrapper extends Component{
    constructor(props){
        super(props)
        this.state={
            appointments: [],
            showAddUser: false
        }
        this.handleAddUser = this.handleAddUser.bind(this);
    }

    componentDidMount(){
        axios.get(`/api/users/${this.props.user._id}/appts`).then(res=>{
            console.log(res);
            this.setState({appointments: res.data})
        })
    }

    handleAddUser(){
        this.setState({ showAddUser: !this.state.showAddUser});
    }
    
    render(){
        return(
            <div class="container">
                <EmployeeNav loggedIn={this.props.loggedIn} user={this.props.user} />
                <EmployeeAppts appointments={this.state.appointments} />
                <div>
                    <h1>Admin</h1>
                    <hr/>
                    <button hidden={this.props.user.role != "admin"} className="btn btn-dark my-2 mr-2" onClick={this.handleAddUser}
                    >Add User</button>
                </div>
                {this.props.loggedIn && this.state.showAddUser ? <AddUser user={this.props.user} handleAddUser={this.handleAddUser}/> : null}
            </div>
        )    
    }
}

export default EmployeeWrapper;