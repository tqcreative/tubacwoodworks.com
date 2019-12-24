import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: ""
        }
    };

    handleInputChange(event){
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit(event){
        event.preventDefault();
        API.signup({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    };

    render() {
        return (
            <section className="signupWrapper">
                <div className="background-img">
                </div>
                <div className="body">
                    <div className="banner">
                        <h1>Sign Up Now For Your Free Consultation Today!</h1>
                    </div>
                    <form>
                        <input type="text" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                        <input type="text" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
                        <input type="email" placeholder="Email Address" name="email" value={this.state.email} onChange={this.handleInputChange} />
                        <input type="text" placeholder="Phone Number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleInputChange} />
                        <button className="btn btn-primary" type="submit" onClick={this.handleSubmit}>Submit</button>
                    </form>
                </div>
            </section>
        )
    };
}

export default Signup;