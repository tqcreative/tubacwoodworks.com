import React, { Fragment, Component } from 'react';
import axios from 'axios';
import './style.css';
import Lead from '../Lead';
import moment from 'moment';
import { Line } from 'react-chartjs-2';
import Toast from '../Toast';


class LeadWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leadsArr: [],
            chartData: [],
            chartOptions: {
                title: {
                    text: "New Leads: Last 7 Days",
                    display: true
                },
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        type: 'time',
                        distribution: 'series',
                        bounds: 'data',
                        time: {
                            minUnit: 'day',
                            displayFormats: {
                                day: 'ddd'
                            }
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 1
                        }
                    }]
                }
            },
            toastShow: false,
            toastPhoneNumber: "",
            toastFirstName: "",
            toastLastName: ""
        }
        this.updateLead = this.updateLead.bind(this);
        this.handleCallClick = this.handleCallClick.bind(this);
        this.toggleToast = this.toggleToast.bind(this);
    }

    componentDidMount() {
        this.getLeads();
        this.getChartData();
    }

    updateLead(id, obj) {
        axios.put(`/api/customers/id/${id}`, { custObj: obj })
            .then(res => {
                console.log(res);
                this.getLeads();
            })
            .catch(err => {
                console.log(err);
            })
    }

    getLeads() {
        axios.get('/api/customers/leads/contact')
            .then(res => {
                this.setState({ leadsArr: res.data })
            })
            .catch(err => {
                console.log(err);
            })
    }

    getChartData() {
        axios.get('/api/customers/leads/summary/last7')
            .then(res => {
                const { data } = res;
                const chartData = data.map(lead => {
                    return { t: moment(lead.date), y: lead.count }
                })
                this.setState({ chartData: chartData });
            })
            .catch(err => {
                console.log(err);
            })
    }

    handleCallClick(phoneNumber, firstName, lastName) {
        this.setState({
            toastPhoneNumber: phoneNumber,
            toastFirstName: firstName,
            toastLastName: lastName
        })
        this.toggleToast()
    }

    toggleToast() {
        if(this.state.toastShow){
            this.setState({ toastFirstName: "", toastLastName: "", toastPhoneNumber: ""})
        }
        this.setState({ toastShow: !this.state.toastShow })
    }

    redirectToContact(id) {
        window.location.href = `/crm/customer/${id}`;
    }

    render() {
        return (
            <div className="container">
                <div className="row py-3">
                    <div className="col-4  d-flex align-items-center">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <h3>Leads in Queue</h3>
                            </div>
                            <div className="col-12 text-center">
                                <h1>{this.state.leadsArr.length}</h1>
                            </div>
                            <div className="col-12 text-center">
                                <p>Not Yet Contacted</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <Line data={{
                            datasets: [
                                { label: "New Leads", data: this.state.chartData, backgroundColor: "rgba(244, 144, 128, 0.8)" }
                            ]
                        }}
                            options={this.state.chartOptions}
                        />
                    </div>
                </div>
                <div className="row">
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
                                this.state.leadsArr.map(lead => {
                                    const signupDate = moment(lead.createdAt).format('MM/DD/YYYY');
                                    return (
                                        <Lead key={lead._id} id={lead._id} onClick={this.updateLead}
                                            firstName={lead.firstName} lastName={lead.lastName}
                                            phoneNumber={lead.phoneNumber} signupDate={signupDate} 
                                            contactClick={this.redirectToContact} handleCallClick={this.handleCallClick}
                                        />
                                    )
                                })}
                        </tbody>
                    </table>
                </div>
                <Toast show={this.state.toastShow} onClose={this.toggleToast}>
                    <Fragment>
                        <h1>{this.state.toastFirstName} {this.state.toastLastName}</h1>
                        <h1 className="mb-4">{this.state.toastPhoneNumber}</h1>
                        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${this.state.toastPhoneNumber}`} alt="Phone Number QR Code" />
                    </Fragment>
                </Toast>
            </div>
        )
    }
}

export default LeadWrapper;