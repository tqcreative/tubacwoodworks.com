import React from 'react';
import AddUser from '../AddUser';

function EmployeeWrapper(props){
    return(
        <div>
            <AddUser user={props.user} />
        </div>
    )
}

export default EmployeeWrapper;