import React, { Component } from 'react';
import { Header } from '../../components';
import Signup from "../../components/Signup";
import "./home.css";
import Hero from "../../components/Hero";
import Numbers from "../../components/Numbers";
import Footer from "../../components/Footer";
import Toast from "../../components/Toast";
import Quote from "../../components/Quote";
import QuoteTwo from "../../components/Quote_2";
import Portfolio from '../../components/Portfolio';
import Gallery from '../../components/Gallery';
import Checkbox from '../../components/Checkbox';
import { NavBar } from '../../components/Navbar';
import Partners from '../../components/Partners';
import gsap from "gsap";

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: props.user,
			toastMsg: [],
			toastShow: false,
			navPos: "absolute",
			redirectTo: null
		}
		// bind signup and toast
		this.handleSignupResult = this.handleSignupResult.bind(this);
		this.toggleToast = this.toggleToast.bind(this);
		// bind login
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	// login change event for updating state.
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	// hand form submit for login.
	handleSubmit(event) {
		event.preventDefault()
		this.props._login(this.state.username, this.state.password)
		this.setState({
			redirectTo: '/home'
		})
	}

	componentDidMount() {
		console.log("Home Component Mounted")
		gsap.from("#hero_quote", {delay: .5, opacity: 0, duration:1, x:750, ease: "power4"});
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
					<Hero user={this.state.user} />
					<Numbers user={this.state.user}/>
					<Quote user={this.state.user} />
					<Portfolio user={this.state.user} />
					<QuoteTwo user={this.state.user} />
					<Gallery user={this.state.user} />
					<Checkbox user={this.state.user} />
					<Partners user={this.state.user} />
					<Signup submitResult={this.handleSignupResult}/>
					{/* This is where sign out would come into play. */}
					<Footer user={this.state.user}/>
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
					<Quote user={this.state.user} />
					<Portfolio />
					<QuoteTwo />
					<Gallery />
					<Checkbox />
					<Partners />
					<Signup submitResult={this.handleSignupResult}/>

					{/* login information hard coded into non-signed in user. */}
					<div className="LoginForm">
						<form>
							<label htmlFor="username">Username: </label>
							<input
								type="text"
								name="username"
								value={this.state.username}
								onChange={this.handleChange}
							/>
							<label htmlFor="password">Password: </label>
							<input
								type="password"
								name="password"
								value={this.state.password}
								onChange={this.handleChange}
							/>
							<button onClick={this.handleSubmit}>Login</button>
						</form>
					</div>

					{/* be sure to make a component out of this */}

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
