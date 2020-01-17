import React from 'react';
import moment from 'moment';

function ScheduledAppts(props) {
    return (
        <div className="row">
            <div className="col m-2">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Assigned To</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.appointments.map(appointment => {
                            return (
                                <tr key={appointment._id}>
                                    <td>{moment(appointment.date).format('MM/DD/YYYY')}</td>
                                    <td>{moment(appointment.date).format('h:mm a')}</td>
                                    <td>{appointment.assignedTo.local.username}</td>
                                    <td>{appointment.detail}</td>
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
