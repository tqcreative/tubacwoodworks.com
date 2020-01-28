import React, { Component } from 'react';
import { Header } from '../../components';
import "./commercial.css";
import { NavBar } from '../../components/Navbar';
import HeroSmart from '../../components/HeroSmart';
import Footer from '../../components/Footer';
import Signup from '../../components/Signup';
import LayoutBasic from '../../components/LayoutBasic';
import Toast from '../../components/Toast';

export default class Commercial extends Component {
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
		console.log("Commercial Component Mounted")
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
				<div className="commercial_root">
					<HeroSmart login={"Peter"} backgroundName={"commercial_hero"} title="Commercial" subTitle="From on local business to another" />
					<NavBar styleProp={this.state.navPos} />
					<LayoutBasic />
					<Signup submitResult={this.handleSignupResult} />
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
				<div className="commercial_root">
					<HeroSmart login={false} backgroundName={"commercial_hero"} title="Commercial" subTitle="From on local business to another" />
					<NavBar styleProp={this.state.navPos} />
					<LayoutBasic />
					<Signup submitResult={this.handleSignupResult} />
					<Footer />
					<Toast show={this.state.toastShow} onClose={this.toggleToast} >
						{this.state.toastMsg.map(element => {
							return <p>{element}</p>
						})}
					</Toast>
				</div>
			)
		}
	}

}
