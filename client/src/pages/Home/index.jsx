import React, { Component } from 'react';
import { Header } from '../../components';
import Signup from "../../components/Signup";
import "./home.css";
import Hero from "../../components/Hero";
import Numbers from "../../components/Numbers";
import Footer from "../../components/Footer";
import Toast from "../../components/Toast";

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: props.user,
			toastMsg: "",
			toastShow: false
		}
		this.handleSignupResult = this.handleSignupResult.bind(this);
		this.toggleToast = this.toggleToast.bind(this);
	}

	componentDidMount() {
		console.log("Home Component Mounted")
	}

	handleSignupResult(msg){
		console.log(msg);
		this.setState({toastMsg: msg, toastShow: true})
	}

	toggleToast(){
		this.setState({toastShow: !this.state.toastShow});
	}

	render() {
		if (this.props.user) {
			return (
				<div className="Home home_root">
					<Header user={this.state.user} />
					<Hero />
					<Numbers />
					<Signup submitResult={this.handleSignupResult}/>
					<Footer />
					<Toast message={this.state.toastMsg} show={this.state.toastShow} onClose={this.toggleToast} />
				</div>
			)
		} else {
			return (
				<div className="Home home_root">
					<Header user={this.state.user} />
					<Hero />
					<Numbers />
					<Signup submitResult={this.handleSignupResult}/>
					<Footer />
					<Toast message={this.state.toastMsg} show={this.state.toastShow} onClose={this.toggleToast} />
				</div>
			)
		}
	}

}
