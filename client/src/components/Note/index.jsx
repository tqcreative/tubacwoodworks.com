import React from 'react';
import './style.css';
import moment from 'moment';

function Note(props) {
    const date = moment(props.note.updateAt).format("MM/DD/YYYY")
    const time = moment(props.note.updateAt).format("h:mm a")
    return (
        <div className="note_root card my-3">
            <div className="card-header">
                Made by {props.note.createdBy.local.username} on {date} at {time}
            </div>
            <div className="card-body">
                <h3>{props.note.content}</h3>
            </div>
        </div>
    )
}

export default Note;