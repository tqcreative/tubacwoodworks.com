import React, { Component } from 'react';
import './furniture.css';
import { NavBar } from '../../components/Navbar';
import gsap from "gsap";
import HeroSmart from '../../components/HeroSmart';
import Footer from '../../components/Footer';
import Signup from '../../components/Signup';
import LayoutBasic from '../../components/LayoutBasic';
import Toast from '../../components/Toast';
import Slider from '../../components/Slider';
import axios from 'axios';

export default class Furniture extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: props.user,
			navPos: "absolute",
			toastMsg: [],
			toastShow: false,
			arrayOfImages:[]
		}

		// bind signup and toast
		this.handleSignupResult = this.handleSignupResult.bind(this);
		this.toggleToast = this.toggleToast.bind(this);
	}

	componentDidMount() {
		window.scrollTo(0,0);
		gsap.from("#furniture_h1", { duration: 2, x: 200, opacity: 0 });
		axios
            .get("/cms/kitchenbathvanity")
            .then(collectData => {
                this.setState({ arrayOfImages: collectData.data[3].furnitureTable });
                let newArray = Array.from(collectData.data[3].furnitureTable);
                // console.log(newArray);
                let arrayOfObjects = []
                for(let i=0; i < newArray.length; i++){
                    let newObjectItem = { original: `/cms/images/${newArray[i]}`, thumbnail: `/cms/images/${newArray[i]}`};
                    arrayOfObjects.push(newObjectItem);
                }
                this.setState({arrayOfImages: arrayOfObjects});
	})}
	

	handleSignupResult(msg) {
		// console.log(msg);
		this.setState({ toastMsg: msg, toastShow: true })
	}

	toggleToast() {
		this.setState({ toastShow: !this.state.toastShow });
	}

	render() {

		if (this.props.user) {
			return (
				<div className="furnitrue_root">
					<HeroSmart login={"Peter"} backgroundName={"furniture_hero"} title="Furniture" subTitle="Wall Beds, Desks, Mantels, and more" />
					<NavBar styleProp={this.state.navPos} />
					<Slider/>
					<LayoutBasic />
					<Signup submitResult={this.handleSignupResult} />
					<Footer />
					<Toast show={this.state.toastShow} onClose={this.toggleToast}>
						{this.state.toastMsg.map(element => {
							return <p>{element}</p>
						})}
					</Toast>
				</div>
			)
		} else {
			return (
				<div className="furnitrue_root">
					<HeroSmart login={false} backgroundName={"furniture_hero"} title="Furniture" subTitle="Wall Beds, Desks, Mantels, and more" />
					<NavBar styleProp={this.state.navPos} />
					<Slider smartArray={this.state.arrayOfImages}/>
					<LayoutBasic />
					<Signup submitResult={this.handleSignupResult} />
					<Footer />
					<Toast show={this.state.toastShow} onClose={this.toggleToast}>
						{this.state.toastMsg.map(element => {
							return <p>{element}</p>
						})}
					</Toast>
				</div>
			)
		}

	}

}
