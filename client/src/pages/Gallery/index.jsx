import React, { Component } from 'react';
import './gallery.css';
import { NavBar } from '../../components/Navbar';
// import gsap from "gsap";
import HeroSmart from '../../components/HeroSmart';
import Footer from '../../components/Footer';
import Signup from '../../components/Signup';
import StateGallery from '../../components/stateGallery';
import UploadBtn from '../../sub_component/UploadButton';
import SimpleSlider from '../../components/SimpleSlider';
import SmartSlider from '../../components/Slider';


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
					<HeroSmart login={"Peter"} backgroundName={"gallery_hero"} title="Gallery" subTitle="come see our work"/>	
					<NavBar styleProp={this.state.styleProp} />
					<div style={{position: 'relative'}}>
						<UploadBtn />
					</div>
					<SmartSlider/>
					<StateGallery/>
					<Signup />
					<Footer />
				</div>
			)
		} else {
			return (
				<div className="gallery_page_root">
					<HeroSmart login={false} backgroundName={"gallery_hero"} title="Gallery" subTitle="come see our work"/>	
					<NavBar styleProp={this.state.styleProp} />
					{/* <SimpleSlider/> */}
					<SmartSlider/>
					<StateGallery/>
					<Signup />
					<Footer />
				</div>
			)
		}
	}

}
