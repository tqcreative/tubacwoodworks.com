import React from 'react';
import AddToCalendar from '../AddToCalendar';
import { ButtonGroup, Button } from 'react-bootstrap';
import moment from 'moment';
import './style.css'
import axios from 'axios';

function ScheduledAppt(props) {
    const { appointment, firstName, lastName, location } = props;

    function delAppt(custId, apptId) {
        axios.delete(`/api/customers/id/${custId}/appointment/${apptId}`)
            .then(res => {
                // console.log(res.data)
                props.handleDeletedAppt(apptId); //kick back the deleted appt for parent to handle
            })
            .catch(err=>{
                // console.log(err)
            })
    }

    // UTC time needed for add to calendar component
    const utcStartDatetime = moment(appointment.startDatetime).utc();
    const utcEndDatetime = moment(appointment.endDatetime).utc();
    const displayStartDatetime = moment(appointment.startDatetime);
    // const displayEndDatetime = moment(appointment.endDatetime);
    const duration = moment.duration(utcEndDatetime.diff(utcStartDatetime)).asHours();


    return (
        <tr key={appointment._id} className="sched-appt">
            <td>{displayStartDatetime.format('MM/DD/YYYY')}</td>
            <td>{displayStartDatetime.format('h:mm a')}</td>
            <td>{`${duration} hours`}</td>
            <td>{appointment.assignedTo.local.username}</td>
            <td>{appointment.detail}</td>
            <td>
                <ButtonGroup>
                    <AddToCalendar
                        title={`Meet with ${firstName} ${lastName}`}
                        description={appointment.detail}
                        duration={duration}
                        startDatetime={utcStartDatetime.format('YYYYMMDDTHHmmssZ')}
                        endDatetime={utcEndDatetime.format('YYYYMMDDTHHmmssZ')}
                        location={location}
                    />
                    <Button variant="dark" className="ml-2" onClick={() => delAppt(appointment.customer, appointment._id)}
                    ><ion-icon name="trash"></ion-icon></Button>
                </ButtonGroup>
            </td>
        </tr>
    )
}

export default ScheduledAppt;