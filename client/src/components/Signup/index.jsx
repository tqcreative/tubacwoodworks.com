import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import Toast from "../Toast";

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleInputChange(event){
        event.preventDefault();
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
                //Clear out the input fields
                this.setState({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: ""
                })
                this.props.submitResult(["Thank you for signing up.  You will receive a confirmation email shortly."]);
            })
            .catch(err => {
                console.log(err.response.data);
                let obj = err.response.data.errors;
                let errors = ["Sorry, your request could not be completed due to the following issues:"];
                if(obj){
                    Object.keys(obj).forEach(key=>{
                        errors.push(obj[key].message)
                    })    
                }
                else if(!obj && err.response.data.name === "MongoError" && err.response.data.code == 11000){
                    errors.push("You've already signed up for a quote.  We'll be in touch soon.")
                }
                else if(err.response.data.errmsg){
                    errors.push(err.response.data.errmsg)
                }
                else{
                    errors.push("Unknown error occurred.  Please try again.");
                }
                this.props.submitResult(errors);
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
                    <Toast message="Test Message"/>
                </div>
            </section>
        )
    };
}

export default Signup;