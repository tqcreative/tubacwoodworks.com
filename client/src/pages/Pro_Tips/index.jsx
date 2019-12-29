import React, { Component } from 'react';
import { Header } from '../../components';
import "./pro_tips.css";
import { NavBar } from '../../components/Navbar';

export default class Pro_Tips extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: props.user
		}
	}

	componentDidMount() {
		console.log("Pro_Tips Component Mounted")
	}

	render() {
		if (this.props.user) {
			return (
				<div className="pro_tips_root">
					<NavBar/>
					<Header user={this.state.user} />
                    <h1> Pro_Tips </h1>
				</div>
			)
		} else {
			return (
				<div className="pro_tips_root">
					<NavBar/>
					<Header user={this.state.user} />
                    <h1> Pro_Tips </h1>
					{/* <p>Current User:</p>
					<code>
						{JSON.stringify(this.props)}
					</code> */}
				</div>
			)
		}
	}

}
