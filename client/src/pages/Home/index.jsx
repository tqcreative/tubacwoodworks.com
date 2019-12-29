import React, { Component } from 'react';
import { Header } from '../../components';
import Signup from "../../components/Signup";
import "./home.css";
import Hero from "../../components/Hero";
import Numbers from "../../components/Numbers";
import Footer from "../../components/Footer";
import Toast from "../../components/Toast";
import Quote from "../../components/Quote";
import Portfolio from '../../components/Portfolio';
import Gallery from '../../components/Gallery';
import Checkbox from '../../components/Checkbox';
import { NavBar } from '../../components/Navbar';
import Partners from '../../components/Partners';

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: props.user,
			toastMsg: [],
			toastShow: false,
			navPos: "absolute"
		}
		this.handleSignupResult = this.handleSignupResult.bind(this);
		this.toggleToast = this.toggleToast.bind(this);
	}

	componentDidMount() {
		console.log("Home Component Mounted")
	}

	handleSignupResult(msg){
		console.log(msg);
		this.setState({toastMsg: msg, toastShow: true})
	}

	toggleToast(){
		this.setState({toastShow: !this.state.toastShow});
	}

	render() {
		if (this.props.user) {
			return (
				<div className="Home home_root">
					<NavBar styleProp={this.state.navPos} />
					<Header user={this.state.user} />
					<Hero />
					<Numbers />
					<Quote />
					<Portfolio />
					<Quote />
					<Gallery />
					<Checkbox />
					<Partners />
					<Signup submitResult={this.handleSignupResult}/>
					<Footer />
					<Toast show={this.state.toastShow} onClose={this.toggleToast}>
						{this.state.toastMsg.map(element => {
							return <p>element</p>
						})};
					</Toast>
				</div>
			)
		} else {
			return (
				<div className="Home home_root">
					<NavBar styleProp={this.state.navPos} />
					<Header user={this.state.user} />
					<Hero />
					<Numbers />
					<Quote />
					<Portfolio />
					<Quote />
					<Gallery />
					<Checkbox />
					<Partners />
					<Signup submitResult={this.handleSignupResult}/>
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
