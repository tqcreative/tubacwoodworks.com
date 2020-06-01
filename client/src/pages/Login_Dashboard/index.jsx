import React, { Component } from 'react';
import './login.css';

export default class Login_Dashboard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: props.user
		}
	}

	componentDidMount() {
		// console.log("Login_Dashboard Component Mounted")
	}

	render() {
		if (this.props.user) {
			return (
				<div className="dashboard_root">
                    <h1> Login_Dashboard </h1>
				</div>
			)
		} else {
			return (
				<div className="dashboard_root">
                    <h1> Login_Dashboard </h1>
					{/* <p>Current User:</p>
					<code>
						{JSON.stringify(this.props)}
					</code> */}
				</div>
			)
		}
	}

}
