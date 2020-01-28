import React, { Component } from 'react';
import './furniture.css';
import { NavBar } from '../../components/Navbar';
import gsap from "gsap";
import HeroSmart from '../../components/HeroSmart';
import Footer from '../../components/Footer';
import Signup from '../../components/Signup';
import LayoutBasic from '../../components/LayoutBasic';
import Toast from '../../components/Toast';

export default class Furniture extends Component {
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
		window.scrollTo(0,0);
		gsap.from("#furniture_h1", { duration: 2, x: 200, opacity: 0 });
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
				<div className="furnitrue_root">
					<HeroSmart login={"Peter"} backgroundName={"furniture_hero"} title="Furniture" subTitle="Wall Beds, Desks, Mantels, and more" />
					<NavBar styleProp={this.state.navPos} />
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
