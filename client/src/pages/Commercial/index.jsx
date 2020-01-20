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
					<HeroSmart login={"Peter"} backgroundName={"commercial_hero"} title="Commercial" subTitle="From on local business to another"/>
					<NavBar styleProp={this.state.navPos} />
					<Signup />
					<Footer />
				</div>
			)
		} else {
			return (
				<div className="commercial_root">
					<HeroSmart login={false} backgroundName={"commercial_hero"} title="Commercial" subTitle="From on local business to another"/>
					<NavBar styleProp={this.state.navPos} />
					<Signup />
					<Footer />
				</div>
			)
		}
	}

}
