import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import Lead from '../Lead';
import moment from 'moment';

class LeadWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leadsArr: []
        }
        this.updateLead = this.updateLead.bind(this);
    }

    componentDidMount() {
        this.getLeads();
    }

    updateLead(id, obj){
        axios.put(`/api/customers/id/${id}`,{custObj: obj})
        .then(res=>{
            console.log(res);
            this.getLeads();
        })
        .catch(err=>{
            console.log(err);
        })
    }

    getLeads() {
        axios.get('/api/customers/leads')
            .then(res => {
                console.log(res.data);
                this.setState({leadsArr: res.data})
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Signup Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.leadsArr.map(lead=>{
                            const signupDate = moment(lead.createdAt).format('MM/DD/YYYY');
                            return (
                                <Lead id={lead._id} onClick={this.updateLead}
                                    firstName={lead.firstName} lastName={lead.lastName}
                                    signupDate={signupDate}
                                />
                            )
                        })}
                        
                    </tbody>
                </table>
            </div>
        )
    }
}

export default LeadWrapper;