import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.css';
import axios from 'axios';
import ScheduledAppt from '../ScheduledAppt';

function ScheduledApptWrapper(props) {
    const { id, hidden, ...rest } = props;
    const [customer, setCustomer] = useState({
        firstName: "",
        lastName: "",
        email: "",
        location: "",
        appointments: []
    });
    const [headerText, setHeaderText] = useState("")
    useEffect(() => { getCustomerInfo() }, []);  //Get customer info on component mount
    useEffect(() => {
        if (customer.firstName)
            setHeaderText(`Scheduled Appts for ${customer.firstName} ${customer.lastName}`)
        else
            setHeaderText("Scheduled Appts")
    })

    // Get all scheduled appointments for customer and include their personal info
    // to be added to appts
    function getCustomerInfo() {
        axios.get(`/api/customers/id/${id}`)
            .then(res => {
                const { appointments, firstName, lastName, email } = res.data;
                const { streetAddress, city, state, zipcode } = res.data;
                const location = `${streetAddress ? streetAddress : ""} ${city ? city : ""} ${state ? state : ""} ${zipcode ? zipcode : ""}`;
                setCustomer({ ...customer, appointments, firstName, lastName, email, location })
                setHeaderText(`${headerText} for ${customer.firstName} ${customer.lastName}`)
            })
            .catch(err => {
                console.log(err);
            })
    }

    function handleDeletedAppt(apptId){
        const tempArray = [...customer.appointments];
        tempArray.splice(tempArray.find(e=>e._id === apptId),1);
        setCustomer({...customer, appointments: tempArray })
    }

    return (
        <section hidden={hidden} {...rest}>
            <Row><Col><h3 className="text-center">{headerText}</h3></Col></Row>
            <Row className="mb-5">
                <Col className="m-2">
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
                            {customer.appointments.map(appointment => {
                                return (
                                    <ScheduledAppt key={appointment._id} appointment={appointment} location={customer.location}
                                        firstName={customer.firstName} lastName={customer.lastName} handleDeletedAppt={handleDeletedAppt}
                                    />
                                )
                            })}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </section>
    )
}

export default ScheduledApptWrapper;
