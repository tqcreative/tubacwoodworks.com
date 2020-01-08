import React, { Component } from 'react';
import { Header } from '../../components';
import './furniture.css';
import { NavBar } from '../../components/Navbar';

export default class Furniture extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: props.user
		}
	}

	componentDidMount() {
		console.log("Furniture Component Mounted")
	}

	render() {
		if (this.props.user) {
			return (
				<div className="furnitrue_root">
					<NavBar/>
					<Header user={this.state.user} />
                    <h1> Furniture </h1>
				</div>
			)
		} else {
			return (
				<div className="furnitrue_root">
					<NavBar/>
					<Header user={this.state.user} />
                    <h1> Furniture </h1>
					{/* <p>Current User:</p>
					<code>
						{JSON.stringify(this.props)}
					</code> */}
				</div>
			)
		}
	}

}
