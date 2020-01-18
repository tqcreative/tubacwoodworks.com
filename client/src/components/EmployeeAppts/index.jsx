import React from 'react';
import moment from 'moment';

function EmployeeAppts(props) {
    return (
        <div>
            <div className="row">
                <div className="col m-2">
                    <h3>Your Scheduled Appts</h3>
                </div>
            </div>
            <div className="row">
                <div className="col m-2">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.appointments.map(appointment => {
                                return (
                                    <tr key={appointment._id}>
                                        <td>{moment(appointment.date).format('MM/DD/YYYY')}</td>
                                        <td>{moment(appointment.date).format('h:mm a')}</td>
                                        <td>{appointment.customer.firstName}</td>
                                        <td>{appointment.customer.lastName}</td>
                                        <td>{appointment.detail}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmployeeAppts;
