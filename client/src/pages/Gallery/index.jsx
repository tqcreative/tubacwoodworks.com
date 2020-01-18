import React, { Component } from 'react';
import { Header } from '../../components';
import './gallery.css';
import { NavBar } from '../../components/Navbar';
import gsap from "gsap";
import HeroSmart from '../../components/HeroSmart';
import Footer from '../../components/Footer';
import Signup from '../../components/Signup';
import StateGallery from '../../components/stateGallery';
import UploadBtn from '../../sub_component/UploadButton';


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
				<div className="gallery_page_root">
					<NavBar styleProp={this.state.styleProp} />
					<HeroSmart backgroundImage="gallery_hero.jpg" title="Gallery" subTitle="come see our work"/>	
					<StateGallery/>
					<Signup />
					<Footer />
				</div>
			)
		} else {
			return (
				<div className="gallery_page_root">
					<NavBar styleProp={this.state.styleProp}/>
					<HeroSmart backgroundImage="gallery_hero.jpg" title="Gallery" subTitle="come see our work"/>	
					<UploadBtn/>
					<StateGallery/>
					<Signup />
					<Footer />
				</div>
			)
		}
	}

}
