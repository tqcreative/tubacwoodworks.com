import React, { Component } from 'react';
import { Header } from '../../components';
import './gallery.css';
import { NavBar } from '../../components/Navbar';

export default class Gallery extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: props.user
		}
	}

	componentDidMount() {
		console.log("Gallery Component Mounted")
	}

	render() {
		if (this.props.user) {
			return (
				<div className="gallery_root">
					<NavBar/>
					<Header user={this.state.user} />
                    <h1> Gallery </h1>
				</div>
			)
		} else {
			return (
				<div className="gallery_root">
					<NavBar/>
					<Header user={this.state.user} />
                    <h1> Gallery </h1>
					{/* <p>Current User:</p>
					<code>
						{JSON.stringify(this.props)}
					</code> */}
				</div>
			)
		}
	}

}
