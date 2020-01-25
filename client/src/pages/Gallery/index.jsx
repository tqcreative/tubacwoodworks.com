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
import axios from 'axios';


export default class Gallery extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: props.user,
			styleProp: 'absolute',
			arrayOfImages: ["/images/check_1.jpg"],
        };
        this.allGallery = this.allGallery.bind(this);
        this.kitchenGallery = this.kitchenGallery.bind(this);
        this.bathGallery = this.bathGallery.bind(this);
		this.furnitureGallery = this.furnitureGallery.bind(this);
		};
	

	componentDidMount() {
		console.log("Gallery Component Mounted")
		// Set initial state to the whole gallery seed object
	
		axios
            .get("/cms/kitchenbathvanity")
            .then(collectData => {
                // console.log(collectData.data)
                // console.log(collectData.data[0].imageArray);
                // console.log(collectData.data[0].imageArray.length);
                // console.log(collectData.data[0].imageArray[2]);
                this.setState({ arrayOfImages: collectData.data[0].imageArray });
            })
	}

	allGallery(){
        axios
            .get("/cms/kitchenbathvanity")
            .then(collectData => {
                // console.log(collectData.data[0].imageArray)
                this.setState({ arrayOfImages: collectData.data[0].imageArray });
            })
    }

    kitchenGallery(){
        axios
            .get("/cms/kitchenbathvanity")
            .then(collectData => {
                console.log(collectData.data[1].kitchenTable)
                // console.log(collectData.data[0].imageArray);
                // console.log(collectData.data[0].imageArray.length);
                // console.log(collectData.data[0].imageArray[2]);
                this.setState({ arrayOfImages: collectData.data[1].kitchenTable });
            })
    }

    bathGallery(){
        axios
            .get("/cms/kitchenbathvanity")
            .then(collectData => {
                // console.log(collectData.data[1].kitchenTable)
                // console.log(collectData.data[0].imageArray);
                // console.log(collectData.data[0].imageArray.length);
                // console.log(collectData.data[0].imageArray[2]);
                this.setState({ arrayOfImages: collectData.data[2].bathTable });
            })
    }

    furnitureGallery(){
        axios
            .get("/cms/kitchenbathvanity")
            .then(collectData => {
                // console.log(collectData.data[1].kitchenTable)
                // console.log(collectData.data[0].imageArray);
                // console.log(collectData.data[0].imageArray.length);
                // console.log(collectData.data[0].imageArray[2]);
                this.setState({ arrayOfImages: collectData.data[3].furnitureTable });
            })
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
					<button type='button' className="btn btn-primary" onClick={this.allGallery}>All Images</button>
                <button type='button' className="btn btn-primary" onClick={this.kitchenGallery}>Kitchen Images</button>
                <button type='button' className="btn btn-primary" onClick={this.bathGallery}>Bath Images</button>
                <button type='button' className="btn btn-primary" onClick={this.furnitureGallery}>Furniture Images</button>
					<StateGallery theArray={this.state.arrayOfImages}/>
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
					<button type='button' className="btn btn-primary" onClick={this.allGallery}>All Images</button>
                <button type='button' className="btn btn-primary" onClick={this.kitchenGallery}>Kitchen Images</button>
                <button type='button' className="btn btn-primary" onClick={this.bathGallery}>Bath Images</button>
                <button type='button' className="btn btn-primary" onClick={this.furnitureGallery}>Furniture Images</button>
					<StateGallery/>
					<Signup />
					<Footer />
				</div>
			)
		}
	}

}
