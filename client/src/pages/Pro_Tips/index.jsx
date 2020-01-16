import React, { Component } from 'react';
import { Header } from '../../components';
import "./pro_tips.css";
import { NavBar } from '../../components/Navbar';
import HeroSmart from '../../components/HeroSmart';
import Quote from '../../components/Quote';
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
					<Header user={this.state.user} />
                    <h1> Pro_Tips </h1>
				</div>
			)
		} else {
			return (
				<div className="pro_tips_root">
					<NavBar styleProp={this.state.navPos}/>
					<Header user={this.state.user} />
                    <HeroSmart backgroundImage="gallery_7.jpg" title="Easy" subTitle="works like a dream"/>
					<Quote user={this.state.user} />
					<Signup />
					<Quote user={this.state.user} />
				</div>
			)
		}
	}

}
