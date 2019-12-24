import React, { Component } from 'react';
import { Header } from '../../components';
import "./kitchen_bath_vanity.css";

export default class Kitchen_Bath_Vanity extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: props.user
		}
	}

	componentDidMount() {
		console.log("Kitchen_Bath_Vanity Component Mounted")
	}

	render() {
		if (this.props.user) {
			return (
				<div className="kitchen_root">
					<Header user={this.state.user} />
					{/* <p>Current User:</p>
					<code>
						{JSON.stringify(this.props)}
					</code> */}
				</div>
			)
		} else {
			return (
				<div className="kitchen_root">
					<Header user={this.state.user} />
                    <h1>
                        kitchen_bath_vanity
                    </h1>
					{/* <p>Current User:</p>
					<code>
						{JSON.stringify(this.props)}
					</code> */}
				</div>
			)
		}
	}

}
