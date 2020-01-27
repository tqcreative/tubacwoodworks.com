import React from 'react';
import AddToCalendar from '../AddToCalendar';
import moment from 'moment';

function ScheduledAppt(props) {
    const { appointment, firstName, lastName, location } = props;

    // UTC time needed for add to calendar component
    const utcStartDatetime = moment(appointment.startDatetime).utc();
    const utcEndDatetime = moment(appointment.endDatetime).utc();
    const displayStartDatetime = moment(appointment.startDatetime);
    // const displayEndDatetime = moment(appointment.endDatetime);
    const duration = moment.duration(utcEndDatetime.diff(utcStartDatetime)).asHours();


    return (
        <tr key={appointment._id}>
            <td>{displayStartDatetime.format('MM/DD/YYYY')}</td>
            <td>{displayStartDatetime.format('h:mm a')}</td>
            <td>{`${duration} hours`}</td>
            <td>{appointment.assignedTo.local.username}</td>
            <td>{appointment.detail}</td>
            <td>
                <AddToCalendar
                    title={`Meet with ${firstName} ${lastName}`}
                    description={appointment.detail}
                    duration={duration}
                    startDatetime={utcStartDatetime.format('YYYYMMDDTHHmmssZ')}
                    endDatetime={utcEndDatetime.format('YYYYMMDDTHHmmssZ')}
                    location={location}
                />
            </td>
        </tr>
    )
}

export default ScheduledAppt;