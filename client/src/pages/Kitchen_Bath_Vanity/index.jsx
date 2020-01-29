import React, { Component } from 'react';
import "./kitchen_bath_vanity.css";
import { NavBar } from '../../components/Navbar';
import HeroSmart from "../../components/HeroSmart";
import Footer from '../../components/Footer';
import Signup from '../../components/Signup';
import Toast from '../../components/Toast';
import LayoutBasic from '../../components/LayoutBasic';
import LayoutThree from '../../components/LayoutThree';
import Slider from '../../components/Slider';
import axios from 'axios';

export default class Kitchen_Bath_Vanity extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: props.user,
			navPos: "absolute",
			toastMsg: [],
			toastShow: false,
			kitchenImages: [],
			bathImages: []
		}

		// bind signup and toast
		this.handleSignupResult = this.handleSignupResult.bind(this);
		this.toggleToast = this.toggleToast.bind(this);
	}

	componentDidMount() {
		window.scrollTo(0,0);
		
		axios
            .get("/cms/kitchenbathvanity")
            .then(collectData => {
				console.log(collectData.data)
                this.setState({ arrayOfImages: collectData.data[1].kitchenTable });
                let newArray = Array.from(collectData.data[1].kitchenTable);
                // console.log(newArray);
                let arrayOfObjects = []
                for(let i=0; i < newArray.length; i++){
                    let newObjectItem = { original: `/cms/images/${newArray[i]}`, thumbnail: `/cms/images/${newArray[i]}`};
                    arrayOfObjects.push(newObjectItem);
                }
                this.setState({kitchenImages: arrayOfObjects});
			
	})
	
		axios
            .get("/cms/kitchenbathvanity")
            .then(collectData => {
				console.log(collectData.data)
                this.setState({ arrayOfImages: collectData.data[2].bathTable });
                let newArray = Array.from(collectData.data[2].bathTable);
                // console.log(newArray);
                let arrayOfObjects = []
                for(let i=0; i < newArray.length; i++){
                    let newObjectItem = { original: `/cms/images/${newArray[i]}`, thumbnail: `/cms/images/${newArray[i]}`};
                    arrayOfObjects.push(newObjectItem);
                }
                this.setState({bathImages: arrayOfObjects});
			
	})
	}

	handleSignupResult(msg) {
		console.log(msg);
		this.setState({ toastMsg: msg, toastShow: true })
	}

	toggleToast() {
		this.setState({ toastShow: !this.state.toastShow });
	}


	render() {
		if (this.props.user) {
			return (
				<div className="kitchen_root">
					<HeroSmart login={"Peter"} backgroundName={"kitchen_bath_vanity"} title="Kitchen Bath &amp; Vanity" subTitle="Love your home."/>
					<NavBar styleProp={this.state.navPos} />
					<Slider name="kitchen" smartArray={this.state.kitchenImages}/>
					<LayoutBasic />
					<LayoutThree login={"Peter"} image1={"layout3_kbv_default_1"} image2={"layout3_kbv_default_2"} image3={"layout3_kbv_default_3"}/>
					<LayoutBasic />
					<Slider smartArray={this.state.bathImages}/>
					<Signup  submitResult={this.handleSignupResult}/>
					<Footer />
					<Toast show={this.state.toastShow} onClose={this.toggleToast} >
						{this.state.toastMsg.map(element => {
							return <p>{element}</p>
						})}
					</Toast>
				</div>
			)
		} else {
			return (
				<div className="kitchen_root">
					<HeroSmart login={false} backgroundName={"kitchen_bath_vanity"} title="Kitchen Bath &amp; Vanity" subTitle="Love your home."/>
					<NavBar styleProp={this.state.navPos} />
					<Slider name="kitchen" smartArray={this.state.kitchenImages}/>
					<LayoutBasic />
					<LayoutThree login={false} image1={"layout3_kbv_default_1"} image2={"layout3_kbv_default_2"} image3={"layout3_kbv_default_3"}/>
					<LayoutBasic />
					<Slider smartArray={this.state.bathImages}/>
					<Signup  submitResult={this.handleSignupResult}/>
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
