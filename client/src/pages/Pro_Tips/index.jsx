import React, { Component } from 'react';
import { Header } from '../../components';
import "./pro_tips.css";

export default class Pro_Tips extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: props.user,
			navPos: "absolute"
		}
	}

	componentDidMount() {
		console.log("Pro_Tips Component Mounted")
	}

	render() {
		if (this.props.user) {
			return (
				<div className="pro_tips_root">

				</div>
			)
		} else {
			return (
				<div className="pro_tips_root">

				</div>
			)
		}
	}

}
