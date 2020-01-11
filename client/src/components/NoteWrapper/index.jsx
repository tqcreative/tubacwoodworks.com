import React, { Component } from 'react';
import './style.css';
import Note from '../Note';
import ContactSearch from '../ContactSearch';
import Toast from '../Toast';
import axios from 'axios';

class NoteWrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toastShow: false,
            id: props.id,
            notes: [],
            firstName: "",
            lastName: "",
            nickname: "",
            email: "",
            phoneNumber: ""
        }
        this.toggleToast = this.toggleToast.bind(this);
        this.addNote = this.addNote.bind(this);
    }

    componentDidMount() {
        if (this.state.id) {
            this.getNotesForContact();
        }
    }

    getNotesForContact() {
        axios.get(`/api/customers/id/${this.state.id}`)
            .then(res => {
                const { notes, firstName, lastName, nickname, email, phoneNumber } = res.data;
                this.setState({
                    notes: notes,
                    firstName: firstName,
                    lastName: lastName,
                    nickname: nickname,
                    email: email,
                    phoneNumber: phoneNumber
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    toggleToast() {
        this.setState({ toastShow: !this.state.toastShow });
    }

    addNote(event) {
        event.preventDefault();
        this.toggleToast();
    }

    render() {
        return (
            <div className="m-3">
                <ContactSearch hrefOnClick="/crm/notes" />
                <button type="button" className="btn btn-dark mt-3"
                    onClick={this.addNote}
                >Add a Note</button>
                <hr />
                <h1>Notes</h1>
                {this.state.notes.map(note => {
                    return <Note note={note} />
                })}
                <Toast show={this.state.toastShow} onClose={this.toggleToast}>
                    <form>
                        <h1>Add a Note</h1>
                        <input type="textbox"/>
                    </form>

                </Toast>
            </div>

        )
    }
}

export default NoteWrapper;