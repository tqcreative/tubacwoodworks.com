import React from 'react';
import AddToCalendarHOC from 'react-add-to-calendar-hoc';
import { Button, Dropdown } from 'react-bootstrap';
import './style.css';
// import moment from 'moment';

function AddToCalendar(props) {
    const { duration, title, startDatetime, endDatetime, description, location } = props;

    const event = {
        duration, title, description,
        startDatetime: startDatetime,
        endDatetime: endDatetime,
        location
    };

    const AddToCalendarDropdown = AddToCalendarHOC(Button, Dropdown);
    return (
        <div className="dropleft">
            <AddToCalendarDropdown
                event={event}
                className="cal_root"
                buttonText={<ion-icon name="calendar"></ion-icon>}
                buttonProps={{ className: "btn btn-dark" }}
                dropdownProps={{ className: "dropdown-menu" }}
                linkProps={{ className: "dropdown-item" }}
            />
        </div>
    )
}

export default AddToCalendar;