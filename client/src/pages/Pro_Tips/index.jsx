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
					<HeroSmart login={"Peter"} backgroundName="pro_tips_hero" title="Pro Tips" subTitle="How to keep that like-new look"/>	
					<NavBar styleProp={this.state.navPos} />
					<Signup />
					<Footer />
				</div>
			)
		} else {
			return (
				<div className="pro_tips_root">
					<HeroSmart login={false} backgroundName="pro_tips_hero" title="Pro Tips" subTitle="How to keep that like-new look"/>	
					<NavBar styleProp={this.state.navPos} />
					<Signup />
					<Footer />
				</div>
			)
		}
	}
}
