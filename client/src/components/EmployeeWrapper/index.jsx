import React, {Component} from 'react';
import AddUser from '../AddUser';
import EmployeeNav from '../EmployeeNav';
import ScheduledAppts from '../ScheduledAppts';
import axios from 'axios';

class EmployeeWrapper extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    componentDidMount(){

    }
    
    render(){
        return(
            <div>
                <EmployeeNav loggedIn={this.props.loggedIn} user={this.props.user} />
                {this.props.loggedIn ? <AddUser user={this.props.user} /> : null}
                <ScheduledAppts />
            </div>
        )    
    }
}

export default EmployeeWrapper;