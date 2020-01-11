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
            username: null,
            userid: null,
            id: props.id,
            notes: [],
            firstName: "",
            lastName: "",
            nickname: "",
            email: "",
            phoneNumber: "",
            newNoteText: ""
        }
        this.toggleToast = this.toggleToast.bind(this);
        this.addNote = this.addNote.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        if (this.state.id) {
            this.getNotesForContact();
        }
        this.getUsername();
    }

    // Getting username of logged in user to add to note entry
    getUsername(){
        axios.get('/auth/user')
        .then(res=>{
            console.log(res.data);
            if(res.data) this.setState({
                username: res.data.user.local.username,
                userid: res.data.user._id
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    handleInputChange(event) {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    };

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
        console.log("Submit Note")
        axios.post(`/api/customers/id/${this.state.id}/note`,{
            content: this.state.newNoteText,
            createdBy: this.state.userid,
        })
        .then(res=>{
            window.location.href=`/crm/notes/${this.state.id}`
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render() {
        return (
            <div className="m-3">
                <ContactSearch hrefOnClick="/crm/notes" />
                <button type="button" className="btn btn-dark mt-3"
                    onClick={this.toggleToast} hidden={!this.state.id}
                >Add a Note</button>
                <hr />
                <h1>Notes</h1>
                {this.state.notes.map(note => {
                    return <Note note={note} />
                })}
                <Toast show={this.state.toastShow} onClose={this.toggleToast}>
                    <form>
                        <h1>Add a Note</h1>
                        <textarea className="form-control" id="newNoteText"
                            name="newNoteText" value={this.state.newNoteText}
                            onChange={this.handleInputChange}
                        />
                        <button type="submit" className="btn btn-primary my-3"
                            onClick={this.addNote}
                        >Submit</button>
                    </form>

                </Toast>
            </div>

        )
    }
}

export default NoteWrapper;