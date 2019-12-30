import React, { Component } from 'react'
import axios from 'axios'
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom'
import LoginForm from './pages/LoginForm'
import SignupForm from './pages/SignupForm'
import { NavBar } from './components'
import Home from './pages/Home'
import Kitchen_Bath_Vanity from './pages/Kitchen_Bath_Vanity'
import Commercial from './pages/Commercial/'
import Furniture from './pages/Furniture/'
import Pro_Tips from './pages/Pro_Tips/'
import Gallery from './pages/Gallery/'
import Error from './pages/Error/'
import CRM from './pages/CRM'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loggedIn: false,
			user: null
		}
		this._logout = this._logout.bind(this);
		this._login = this._login.bind(this);
	};

	componentDidMount() {
		axios.get('/auth/user').then(response => {
			if (!!response.data.user) {
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	};

	_logout(event) {
		event.preventDefault()
		axios.post('/auth/logout').then(response => {
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login(username, password) {
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				if (response.status === 200) {
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			})
	}

	// Here is where you will add routes
	// this is using the <Route> tag. Follow schema to create more routes.
	render() {
		return (
			<div className="App_root">
				{/* Navbar on every page */}
				{/* <NavBar
					_logout={this._logout}
					loggedIn={this.state.loggedIn}
				/> */}
				{/*  Individual Things */}
				<Switch>
					<Route
						exact
						path="/"
						render={() =>
							<Home user={this.state.user} />} />
					<Route
					    path="/crm"
						render={() =>
						<CRM />} />
					<Route
						exact
						path="/kitchenbathvanity"
						render={() => 
							<Kitchen_Bath_Vanity user={this.state.user} /> } />
					<Route
						exact
						path="/furniture"
						render={() =>
							<Furniture user={this.state.user} /> } />
					<Route
						exact
						path="/commercial"
						render={() =>
							<Commercial user={this.state.user} /> } />
					<Route
						exact
						path="/protips"
						render={() =>
							<Pro_Tips user={this.state.user} /> } />
					<Route
						exact
						path="/gallery"
						render={() =>
							<Gallery user={this.state.user} /> } />
					<Route
						exact
						path="/login"
						render={() =>
							<LoginForm
								_login={this._login}
								_googleSignin={this._googleSignin}
							/>}
					/>
					<Route
						exact path="/signup"
						component={SignupForm}
					/>
					<Route
						render={() =>
							<Error user={this.state.user} /> } />
				</Switch>
			</div>
		)
	}
}

export default App
