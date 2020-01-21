import React, { Component } from 'react';
import './furniture.css';
import { NavBar } from '../../components/Navbar';
import gsap from "gsap";
import HeroSmart from '../../components/HeroSmart';
import Footer from '../../components/Footer';
import Signup from '../../components/Signup';
import LayoutBasic from '../../components/LayoutBasic';

export default class Furniture extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: props.user,
			navPos: "absolute"
		}
	}

	componentDidMount() {
		console.log("Furniture Component Mounted")
		gsap.from("#furniture_h1", {duration: 2, x:200, opacity: 0});
	}

	render() {

		if (this.props.user) {
			return (
				<div className="furnitrue_root">
					<HeroSmart login={"Peter"} backgroundName={"furniture_hero"} title="Furniture" subTitle="Wall Beds, Desks, Mantels, and more"/>
					<NavBar styleProp={this.state.navPos} />	
					<LayoutBasic />				
					<Signup />
					<Footer />
				</div>
			)
		} else {
			return (
				<div className="furnitrue_root">
					<HeroSmart login={false} backgroundName={"furniture_hero"} title="Furniture" subTitle="Wall Beds, Desks, Mantels, and more"/>	
					<NavBar styleProp={this.state.navPos} />
					<LayoutBasic />
					<Signup />
					<Footer />
				</div>
			)
		}

	}

}
