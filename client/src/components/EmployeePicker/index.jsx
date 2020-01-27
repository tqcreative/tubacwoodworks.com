import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';

function EmployeePicker(props) {
    const { getEmployeeId, ...rest } = props;

    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        // Get employee info
        axios.get('/api/users')
            .then(res => {
                setEmployees(res.data);
            })
    },[]);

    useEffect(()=>{getEmployeeId(assignedEmployee._id)});

    const [assignedEmployee, setAssignedEmployee] = useState({});

    function handleUserSelect(event){
        setAssignedEmployee(employees.find(e => e._id === event));
    }

    return (
        <Dropdown {...rest} >
            <Dropdown.Toggle variant="dark" id="dropdown">
                {assignedEmployee.firstName ? `${assignedEmployee.firstName} ${assignedEmployee.lastName}` : "Pick an employee"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {employees.map(user => {
                    return <Dropdown.Item key={user._id} as="button" onSelect={handleUserSelect} eventKey={user._id}
                    >{`${user.firstName} ${user.lastName}`}</Dropdown.Item>
                })}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default EmployeePicker;