import React, { Component } from 'react';
import "./kitchen_bath_vanity.css";
import { NavBar } from '../../components/Navbar';
import HeroSmart from "../../components/HeroSmart";
import Footer from '../../components/Footer';
import Signup from '../../components/Signup';
import Toast from '../../components/Toast';
import LayoutBasic from '../../components/LayoutBasic';
import LayoutThree from '../../components/LayoutThree';

export default class Kitchen_Bath_Vanity extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: props.user,
			navPos: "absolute",
			toastMsg: [],
			toastShow: false
		}

		// bind signup and toast
		this.handleSignupResult = this.handleSignupResult.bind(this);
		this.toggleToast = this.toggleToast.bind(this);

	}

	componentDidMount() {
		console.log("Kitchen_Bath_Vanity Component Mounted")
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
					<LayoutBasic />
					<LayoutThree login={"Peter"} image1={"layout3_kbv_default_1"} image2={"layout3_kbv_default_2"} image3={"layout3_kbv_default_3"}/>
					<LayoutBasic />
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
					<LayoutBasic />
					<LayoutThree login={false} image1={"layout3_kbv_default_1"} image2={"layout3_kbv_default_2"} image3={"layout3_kbv_default_3"}/>
					<LayoutBasic />
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
