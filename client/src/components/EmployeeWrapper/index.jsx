import React, {Component} from 'react';
import AddUser from '../AddUser';
import EmployeeNav from '../EmployeeNav';
import EmployeeAppts from '../EmployeeAppts';
import axios from 'axios';

class EmployeeWrapper extends Component{
    constructor(props){
        super(props)
        this.state={
            appointments: []
        }
    }

    componentDidMount(){
        axios.get(`/api/users/${this.props.user._id}/appts`).then(res=>{
            console.log(res);
            this.setState({appointments: res.data})
        })
    }
    
    render(){
        return(
            <div>
                <EmployeeNav loggedIn={this.props.loggedIn} user={this.props.user} />
                {this.props.loggedIn ? <AddUser user={this.props.user} /> : null}
                <EmployeeAppts appointments={this.state.appointments} />
            </div>
        )    
    }
}

export default EmployeeWrapper;