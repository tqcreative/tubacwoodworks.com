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
			styleProp: 'absolute',
			galleryType: []
		}
	}

	componentDidMount() {
		console.log("Gallery Component Mounted")
		// Set initial state to the whole gallery seed object
	}

	kitchenGallery () {
		// Function to set state to kitchen images from kitchen seed object

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
					{/* Button with kitchen/bath/furniture options that call their subsequent functions that set the state on click  */}
					<StateGallery/>
					<Signup />
					<Footer />
				</div>
			)
		}
	}

}
