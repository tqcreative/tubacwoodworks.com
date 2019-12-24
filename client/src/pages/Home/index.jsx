import React, { Component } from 'react';
import { Header } from '../../components';
import Signup from "../../components/Signup";
import "./home.css";
import Hero from "../../components/Hero";
import Numbers from "../../components/Numbers";

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: props.user
		}
	}

	componentDidMount() {
		console.log("Home Component Mounted")
	}

	render() {
		if (this.props.user) {
			return (
				<div className="Home">
					<Header user={this.state.user} />
					<Hero />
					<Numbers />
					<Signup />
				</div>
			)
		} else {
			return (
				<div className="Home">
					<Header user={this.state.user} />
					<Hero />
					<Numbers />
					<Signup />
				</div>
			)
		}
	}

}
