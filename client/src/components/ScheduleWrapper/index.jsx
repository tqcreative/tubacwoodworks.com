import React, { Component } from 'react';
import Calendar from 'react-calendar';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import './style.css';
import moment from 'moment';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';

class ScheduleWrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            time: moment(),
            userid: null,
            username: "Select a user",
            userList: []
        }
        this.onDateChange = this.onDateChange.bind(this);
        this.onTimeChange = this.onTimeChange.bind(this);
        this.handleUserSelect = this.handleUserSelect.bind(this);
    }

    componentDidMount() {
        axios.get('/api/users')
            .then(res => {
                this.setState({ userList: res.data })
            })
    }

    onDateChange(date) {
        this.setState({ date })
    }

    onTimeChange(time) {
        this.setState({ time })
    }

    handleUserSelect(event) {
        console.log(event);
        this.setState({userid: event})
    }

    render() {
        return (
            <div className="scheduler_root container m-3">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">Scheduler</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-md-6">
                        <div className="row">
                            <h3>Pick a Date</h3>
                        </div>
                        <div className="row">

                            <Calendar
                                calendarType="US"
                                value={this.state.date}
                                onChange={this.onDateChange}
                            />
                        </div>
                        <div className="row">
                            <h3>Pick a Time</h3>
                        </div>
                        <div className="row">
                            <TimePicker
                                defaultValue={moment()}
                                showSecond={false}
                                minuteStep={15}
                                value={this.state.time}
                                onChange={this.onTimeChange}
                            />
                        </div>
                        <div className="row">
                            <h3>Pick an Employee</h3>
                        </div>
                        <div className="row">
                            <Dropdown >
                                <Dropdown.Toggle variant="dark" id="dropdown">
                                    {this.state.username}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {this.state.userList.map(user => {
                                        return <Dropdown.Item as="button" onSelect={this.handleUserSelect} eventKey={user._id}
                                        >{user.local.username}</Dropdown.Item>
                                    })}

                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="row my-3">
                            <button type="button" className="btn btn-dark">Add to Schedule</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScheduleWrapper;