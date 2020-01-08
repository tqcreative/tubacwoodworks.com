import React, { Component } from 'react';
import { Header } from '../../components';
import "./commercial.css";
import { NavBar } from '../../components/Navbar';

export default class Commercial extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: props.user
		}
	}

	componentDidMount() {
		console.log("Commercial Component Mounted")
	}

	render() {
		if (this.props.user) {
			return (
				<div className="commercial_root">
					<NavBar/>
					<Header user={this.state.user} />
					<h1> Commercial </h1>
					{/* <p>Current User:</p>
					<code>
						{JSON.stringify(this.props)}
					</code> */}
				</div>
			)
		} else {
			return (
				<div className="commercial_root">
					<NavBar/>
					<Header user={this.state.user} />
					<h1> Commercial </h1>
					{/* <p>Current User:</p>
					<code>
						{JSON.stringify(this.props)}
					</code> */}
				</div>
			)
		}
	}

}
