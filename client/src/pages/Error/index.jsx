import React, { Component } from 'react';
import { Header } from '../../components';
import './error.css';
import { NavBar } from '../../components/Navbar';

export default class Error extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: props.user
		}
	}

	componentDidMount() {
		console.log("Error Component Mounted")
	}

	render() {
		if (this.props.user) {
			return (
				<div className="error_root">
					<NavBar/>
					<Header user={this.state.user} />
                    <h1> 404 Error </h1>
				</div>
			)
		} else {
			return (
				<div className="error_root">
					<NavBar/>
					<Header user={this.state.user} />
                    <h1> 404 Error </h1>
					{/* <p>Current User:</p>
					<code>
						{JSON.stringify(this.props)}
					</code> */}
				</div>
			)
		}
	}

}
