import React, { Component } from 'react';
import { Header } from '../../components';
import './furniture.css';
import { NavBar } from '../../components/Navbar';
import gsap from "gsap";
import HeroSmart from '../../components/HeroSmart';
import Footer from '../../components/Footer';
import Signup from '../../components/Signup';

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
					<NavBar styleProp={this.state.navPos} />
					<Header user={this.state.user} />
					<HeroSmart backgroundImage="gallery_8.jpg" title="Furniture" subTitle="Woodworking, Wall Beds, Custom Mantels"/>					
					<Signup />
					<Footer />
				</div>
			)
		} else {
			return (
				<div className="furnitrue_root">
					<NavBar styleProp={this.state.navPos} />
					<Header user={this.state.user} />
					<HeroSmart backgroundImage="gallery_8.jpg" title="Furniture" subTitle="Woodworking, Wall Beds, Custom Mantels"/>
					<Signup />
					<Footer />
				</div>
			)
		}

	}

}
