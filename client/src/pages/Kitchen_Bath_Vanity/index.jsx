import React, { Component } from 'react';
import { Header } from '../../components';
import "./kitchen_bath_vanity.css";
import { NavBar } from '../../components/Navbar';
import HeroSmart from "../../components/HeroSmart";
import Footer from '../../components/Footer';
import Signup from '../../components/Signup';

export default class Kitchen_Bath_Vanity extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: props.user,
			navPos: "absolute"
		}
	}

	componentDidMount() {
		console.log("Kitchen_Bath_Vanity Component Mounted")
	}

	render() {
		if (this.props.user) {
			return (
				<div className="kitchen_root">
					<NavBar styleProp={this.state.navPos} />
					<Header user={this.state.user} />
					<HeroSmart backgroundImage="check_1.jpg" title="Kitchen Bath &amp; Vanity" subTitle="Love your home."/>
					<Signup />
					<Footer />
				</div>
			)
		} else {
			return (
				<div className="kitchen_root">
					<NavBar styleProp={this.state.navPos} />
					<Header user={this.state.user} />
					<HeroSmart backgroundImage="check_1.jpg" title="Kitchen Bath &amp; Vanity" subTitle="Love your home."/>
					<Signup />
					<Footer />
				</div>
			)
		}
	}

}
