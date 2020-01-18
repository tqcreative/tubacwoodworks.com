import React, { Component } from 'react';
import { Header } from '../../components';
import './gallery.css';
import { NavBar } from '../../components/Navbar';
import gsap from "gsap";
import HeroSmart from '../../components/HeroSmart';
import Slider from '../../components/Slider';
import Footer from '../../components/Footer';
import Signup from '../../components/Signup';
import StateGallery from '../../components/stateGallery';


export default class Gallery extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: props.user,
			styleProp: 'absolute'
		}
	}

	componentDidMount() {
		console.log("Gallery Component Mounted")
	}

	render() {
		if (this.props.user) {
			return (
				<div className="gallery_root">
					<NavBar styleProp={this.state.styleProp} />
					<Header user={this.state.user} />
					
					<StateGallery/>
					<Signup />
					<Footer />
				</div>
			)
		} else {
			return (
				<div className="gallery_root">
					<NavBar styleProp={this.state.styleProp}/>
					<Header user={this.state.user} />
					
					{/* <p>Current User:</p>
					<code>
						{JSON.stringify(this.props)}
					</code> */}
					<Slider/>
					<StateGallery/>
					<Signup />
					<Footer />
				</div>
			)
		}
	}

}
