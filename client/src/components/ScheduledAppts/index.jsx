import React from 'react';
import moment from 'moment';
import AddToCalendar from '../AddToCalendar';

function ScheduledAppts(props) {
    return (
        <div className="row">
            <div className="col m-2">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Appt Length</th>
                            <th>Assigned To</th>
                            <th>Details</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.appointments.map(appointment => {
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
                                            title={`Meet with ${props.firstName} ${props.lastName}`}
                                            description={appointment.detail}
                                            duration={duration}
                                            startDatetime={utcStartDatetime.format('YYYYMMDDTHHmmssZ')}
                                            endDatetime={utcEndDatetime.format('YYYYMMDDTHHmmssZ')}
                                            location={props.location}
                                        />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ScheduledAppts;
