import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import './signup.css';

export default class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			firstName: '',
			lastName: '',
			role: 'user',
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
		// TODO - validate!
		axios
			.post('/auth/signup', {
				username: this.state.username,
				password: this.state.password,
				lastName: this.state.lastName,
				firstName: this.state.firstName,
				role: this.state.role
			})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					// console.log('youre good')
					this.setState({
						redirectTo: '/login'
					})
				} else {
					// console.log('duplicate')
				}
			})
	}
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<div className="SignupForm">
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
				<label htmlFor="confirmPassword">Confirm Password: </label>
				<input
					type="password"
					name="confirmPassword"
					value={this.state.confirmPassword}
					onChange={this.handleChange}
				/>
				<label htmlFor="firstName">First Name: </label>
				<input
					type="text"
					name="firstName"
					value={this.state.firstName}
					onChange={this.handleChange}
				/>
				<label htmlFor="lastName">Last Name: </label>
				<input
					type="text"
					name="lastName"
					value={this.state.lastName}
					onChange={this.handleChange}
				/>
				<label htmlFor="role">Role: </label>
				<select
					name="role"
					value={this.state.role}
					onChange={this.handleChange}
				>
					<option>user</option>
					<option>admin</option>
				</select>


				<button onClick={this.handleSubmit}>Create Account</button>
			</div>
		)
	}
}
