import React, { Component } from 'react';
import { Header } from '../../components';
import Signup from "../../components/Signup";
import "./home.css";
import Hero from "../../components/Hero";
import Numbers from "../../components/Numbers";
import Footer from "../../components/Footer";
import Quote from "../../components/Quote";
import Portfolio from '../../components/Portfolio';

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
				<div className="Home home_root">
					<Header user={this.state.user} />
					<Hero />
					<Numbers />
					<Quote />
					<Portfolio />
					<Quote />
					<Signup />
					<Footer />
				</div>
			)
		} else {
			return (
				<div className="Home home_root">
					<Header user={this.state.user} />
					<Hero />
					<Numbers />
					<Quote />
					<Portfolio />
					<Quote />
					<Signup />
					<Footer />
				</div>
			)
		}
	}

}
