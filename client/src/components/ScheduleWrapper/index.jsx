import React, { Component } from 'react';
import ContactSearch from '../ContactSearch';
import Calendar from 'react-calendar';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import './style.css';
import moment from 'moment';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import ScheduledAppts from '../ScheduledAppts';

class ScheduleWrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            time: moment(),
            detail: "",
            userid: null,
            username: "",
            assignedId: null,
            assignedUsername: "Select a user",
            userList: [],
            appointments: [],
            id: props.id ? props.id : null,
            firstName: "",
            lastName: "",
            email: ""
        }
        this.onDateChange = this.onDateChange.bind(this);
        this.onTimeChange = this.onTimeChange.bind(this);
        this.handleUserSelect = this.handleUserSelect.bind(this);
        this.getCustomerInfo = this.getCustomerInfo.bind(this);
        this.addToSchedule = this.addToSchedule.bind(this);
        this.getUsername = this.getUsername.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        axios.get('/api/users')
            .then(res => {
                this.setState({ userList: res.data })
            })

        this.getUsername();

        if (this.state.id) {
            this.getCustomerInfo();
        }
    }

    getCustomerInfo() {
        axios.get(`/api/customers/id/${this.state.id}`)
            .then(res => {
                console.log(res.data);
                const { appointments, firstName, lastName, email } = res.data;
                this.setState({ appointments, firstName, lastName, email })
            })
            .catch(err => {
                console.log(err);
            })

    }

    // Getting username of logged in user to add to note entry
    getUsername() {
        axios.get('/auth/user')
            .then(res => {
                console.log(res.data);
                if (res.data) this.setState({
                    username: res.data.user.local.username,
                    userid: res.data.user._id
                })
            })
            .catch(err => {
                console.log(err)
            })
    }


    onDateChange(date) {
        this.setState({ date })
    }

    onTimeChange(time) {
        this.setState({ time })
    }

    handleInputChange(event) {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    };

    handleUserSelect(event) {
        this.setState({ assignedUsername: event })
    }

    findUserId(username, objArr){
        const obj = objArr.find(o => o.local.username === username);
        return obj._id;
    }

    addToSchedule() {
        let date = `${moment(moment(this.state.date).format('YYYY-MM-DD') + "T" + moment(this.state.time).format('HH:mm')).toDate()}`;
        let assignedTo = this.findUserId(this.state.assignedUsername,this.state.userList);

        axios.post(`/api/customers/id/${this.state.id}/appointment`,{
            date: date,
            assignedTo: assignedTo,
            customer: this.state.id,
            createdBy: this.state.userid,
            updatedBy: this.state.userid,
            detail: this.state.detail
        })
        .then(res=>{
            window.location.href = `/crm/scheduler/${this.state.id}`
        })
    }

    render() {

        let headerText = "Scheduled Appointments";
        headerText += this.state.firstName ? ` for ${this.state.firstName} ${this.state.lastName}` : "";

        return (
            <div className="scheduler_root container m-0 p-3">
                <div className="row">
                    <div className="col">
                        <ContactSearch hrefOnClick="/crm/scheduler" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <hr />
                        <h1 className="text-center">Scheduler</h1>
                    </div>
                </div>
                <div className="row" hidden={!this.state.id}>
                    {/* Left side of screen to add a new date */}
                    <div className="col col-md-6">
                        <div className="row mt-3">
                            <div className="col">
                                <h3 className="text-center">Pick a Date</h3>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col date-col">
                                <Calendar
                                    className="date-picker"
                                    calendarType="US"
                                    value={this.state.date}
                                    onChange={this.onDateChange}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Right side of screen to show already scheduled items */}
                    <div className="col col-md-6">
                        <div className="row h-100 d-flex align-items-center">
                            <div className="col">
                                <div className="row mt-3">
                                    <div className="col col-md-6">
                                        <div className="row">
                                            <div className="col">
                                                <h5 className="text-center">Pick a Time</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-md-6">
                                        <div className="row">
                                            <div className="col">
                                                <h5 className="text-center">Employee</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-md-6 time-col">
                                        <TimePicker
                                            className="time-picker"
                                            popupClassName="time-picker-popup"
                                            defaultValue={moment()}
                                            use12Hours
                                            inputReadOnly
                                            showSecond={false}
                                            minuteStep={15}
                                            value={this.state.time}
                                            onChange={this.onTimeChange}
                                        />
                                    </div>
                                    <div className="col col-md-6 d-flex justify-content-center">
                                        <Dropdown >
                                            <Dropdown.Toggle variant="dark" id="dropdown">
                                                {this.state.assignedUsername}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {this.state.userList.map(user => {
                                                    return <Dropdown.Item key={user._id} as="button" onSelect={this.handleUserSelect} eventKey={user.local.username}
                                                    >{user.local.username}</Dropdown.Item>
                                                })}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                                <div className="row mt-5 mx-1">
                                    <div className="col">
                                        <h3 className="text-center">Appointment Details</h3>
                                    </div>
                                </div>
                                <div className="row mt-2 mx-1">
                                    <div className="col">
                                        <textarea rows="4" className="form-control" name="detail" value={this.state.detail} onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                                <div className="row my-5">
                                    <div className="col d-flex justify-content-center">
                                        <button type="button" className="btn btn-success btn-schedule" onClick={this.addToSchedule}>Add to Schedule</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5" hidden={!this.state.id}>
                    <div className="col">
                        <h3 className="text-center">{headerText}</h3>
                        <ScheduledAppts appointments={this.state.appointments} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ScheduleWrapper;