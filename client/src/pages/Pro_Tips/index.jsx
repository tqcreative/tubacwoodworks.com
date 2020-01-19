import React, { Component } from 'react';
import "./pro_tips.css";
import { NavBar } from '../../components/Navbar';
import HeroSmart from '../../components/HeroSmart';
import Footer from '../../components/Footer';
import Signup from '../../components/Signup';

export default class Pro_Tips extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: props.user,
			navPos: "absolute"
		}
	}

	componentDidMount() {
		console.log("Pro_Tips Component Mounted")
	}

	render() {
		if (this.props.user) {
			return (
				<div className="pro_tips_root">
					<NavBar styleProp={this.state.navPos}/>
					<HeroSmart backgroundImage="pro_tips_hero.jpg" title="Pro Tips" subTitle="How to keep that like-new look"/>	
					<Signup />
					<Footer />
				</div>
			)
		} else {
			return (
				<div className="pro_tips_root">
					<NavBar styleProp={this.state.navPos}/>
					<HeroSmart backgroundImage="pro_tips_hero.jpg" title="Pro Tips" subTitle="How to keep that like-new look"/>	
					<Signup />
					<Footer />
				</div>
			)
		}
	}
}
