import React, { useState } from 'react';
import Calendar from 'react-calendar';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import EmployeePicker from '../EmployeePicker';
import './style.css';

function SchedulePicker(props) {
    // console.log("SchedulePicker loaded");
    const {id, user, ...rest} = props;
    const [date, setDate] = useState(new Date());
    const [detail, setDetail] = useState("");
    const [startTime, setStartTime] = useState(moment());
    const [endTime, setEndTime] = useState(moment());
    const [employeeId, setEmployeeId] = useState("");

    function handleDateChange(pickedDate) {
        setDate(pickedDate);
        if (props.getDate)
            props.getDate(pickedDate);
    }

    function getEmployeeId(id){
        setEmployeeId(id);
    }

    function addToSchedule() {
        let startDatetime = `${moment(moment(date).format('YYYY-MM-DD') + "T" + moment(startTime).format('HH:mm')).toDate()}`;
        let endDatetime = `${moment(moment(date).format('YYYY-MM-DD') + "T" + moment(endTime).format('HH:mm')).toDate()}`;

        axios.post(`/api/customers/id/${id}/appointment`, {
            startDatetime: startDatetime,
            endDatetime: endDatetime,
            assignedTo: employeeId,
            customer: id,
            createdBy: user._id,
            updatedBy: user._id,
            detail: detail
        })
            .then(res => {
                window.location.href = `/crm/scheduler/${id}`
            })

    }

    return (
        <section className="schedule-picker" {...rest} >
            <Row>
                <Col md={6} className="date-col">
                    <Calendar
                        className="date-picker" calendarType="US" value={date} onChange={handleDateChange}
                    />
                </Col>
                <Col md={6}>
                    <Row>
                        <Col md={6}>
                            <Row><Col><h5 className="text-center">Start Time</h5></Col></Row>
                            <Row><Col className="time-col">
                                <TimePicker
                                    className="time-picker" popupClassName="time-picker-popup"
                                    use12Hours inputReadOnly showSecond={false} minuteStep={15}
                                    name="startTime" value={startTime} onChange={(time) => setStartTime(time)}
                                />
                            </Col></Row>
                            <Row><Col><h5 className="text-center">End Time</h5></Col></Row>
                            <Row><Col className="time-col">
                                <TimePicker
                                    className="time-picker" popupClassName="time-picker-popup"
                                    use12Hours inputReadOnly showSecond={false} minuteStep={15}
                                    name="endTime" value={endTime} onChange={(time) => setEndTime(time)}
                                />
                            </Col></Row>
                        </Col>
                        <Col md={6}>
                            <Row><Col><h5 className="text-center">Employee</h5></Col></Row>
                            <Row><Col><EmployeePicker className="justify-content-center" getEmployeeId={getEmployeeId} /></Col></Row>
                        </Col>
                    </Row>
                    <Row className="mt-4"><Col><h3 className="text-center">Appointment Details</h3></Col></Row>
                    <Row><Col>
                        <textarea rows="5" className="form-control" name="detail" value={detail} onChange={(event) => setDetail(event.target.value)} />
                    </Col></Row>
                    <Row><Col className="d-flex justify-content-center">
                        <button type="button" className="btn btn-success btn-schedule" onClick={addToSchedule}>Add to Schedule</button>
                    </Col></Row>
                </Col>
            </Row>
        </section>
    )
}

export default SchedulePicker;