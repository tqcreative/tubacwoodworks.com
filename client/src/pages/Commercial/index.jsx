import React, { Component } from 'react';
import { Header } from '../../components';
import "./commercial.css";
import { NavBar } from '../../components/Navbar';
import HeroSmart from '../../components/HeroSmart';
import Footer from '../../components/Footer';
import Signup from '../../components/Signup';

export default class Commercial extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: props.user,
			navPos: "absolute"
		}
	}

	componentDidMount() {
		console.log("Commercial Component Mounted")
	}

	render() {
		if (this.props.user) {
			return (
				<div className="commercial_root">
					<NavBar styleProp={this.state.navPos} />
					<Header user={this.state.user} />
					<HeroSmart backgroundImage="commercial_hero.jpg" title="Commercial" subTitle="From one local business to another"/>
					<Signup />
					<Footer />
				</div>
			)
		} else {
			return (
				<div className="commercial_root">
					<NavBar styleProp={this.state.navPos} />
					<Header user={this.state.user} />
					<HeroSmart backgroundImage="commercial_hero.jpg" title="Commercial" subTitle="From one local business to another"/>
					<Signup />
					<Footer />
				</div>
			)
		}
	}

}
