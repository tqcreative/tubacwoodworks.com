import React, { useState } from 'react'
import EmployeePicker from '../EmployeePicker';
import axios from 'axios';
import './style.css';

function DeleteUser(props) {
    const [employeeId, setEmployeeId] = useState("");

    function getEmployeeId(id) {
        setEmployeeId(id);
    }

    function deleteUser() {
        axios.delete(`/api/users/${employeeId}`).then(res => {
            console.log(res.data);
            props.handleDeleteUser();
        })
    }

    return (
        <div className="mt-4 delete_user_root">
            <hr />
            <h3>Delete User</h3>
            <hr />
            <div className="row">
                <div className="col d-flex">
                    <EmployeePicker getEmployeeId={getEmployeeId} />
                    <button className="btn btn-del mx-2" onClick={deleteUser}><ion-icon name="trash"></ion-icon></button>
                </div>
            </div>
        </div>
    )
}

export default DeleteUser;
