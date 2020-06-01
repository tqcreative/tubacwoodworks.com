import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './login.css';

export default class LoginForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			redirectTo: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		//console.log('handleSubmit')
		this.props._login(this.state.username, this.state.password)
		this.setState({
			redirectTo: '/crm'
		})
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div className="LoginForm login_root">
					<form>
						<div>
							<label htmlFor="username">Username: </label>
							<input
								type="text"
								autoComplete="username"
								name="username"
								value={this.state.username}
								onChange={this.handleChange}
							/>
						</div>
						<div>
							<label htmlFor="password">Password: </label>
							<input
								type="password"
								autoComplete="current-password"
								name="password"
								value={this.state.password}
								onChange={this.handleChange}
							/>
						</div>
						<button onClick={this.handleSubmit}>Login</button>
						<a href="/">forgot my password</a>
					</form>
				</div>
			)
		}
	}
}
