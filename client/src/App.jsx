import React, { Component } from "react";
import axios from "axios";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
// import { NavBar } from './components'
import Home from "./pages/Home";
import Services from "./pages/Services";
import Commercial from "./pages/Commercial/";
import Furniture from "./pages/Furniture/";
import ProTipsPage from "./pages/Pro_Tips";
import Gallery from "./pages/Gallery/";
import AboutUs from "./pages/AboutUs/AboutUs";
import Error from "./pages/Error/";
import CRM from "./pages/CRM";
import PrivateRoute from "./components/PrivateRoute";
import Cookies from "./pages/Cookies/Cookies.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null,
      user: null,
    };
    this._logout = this._logout.bind(this);
    this._login = this._login.bind(this);
  }

  componentDidMount() {
    axios.get("/auth/user").then((response) => {
      if (!!response.data.user) {
        this.setState({
          loggedIn: true,
          user: response.data.user,
        });
      } else {
        this.setState({
          loggedIn: false,
          user: null,
        });
      }
    });
  }

  _logout(event) {
    event.preventDefault();
    axios.post("/auth/logout").then((response) => {
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: null,
        });
      }
    });
  }

  _login(username, password) {
    this.setState({ loggedIn: null });
    axios
      .post("/auth/login", {
        username,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            loggedIn: true,
            user: response.data.user,
          });
        } else {
          this.setState({
            loggedIn: false,
          });
        }
      })
      .catch((err) => {
        // console.log(err)
        this.setState({
          loggedIn: false,
        });
      });
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
            render={() => (
              <Home
                user={this.state.user}
                _login={this._login}
                logout={this._logout}
              />
            )}
          />
          <PrivateRoute
            path="/crm"
            loggedIn={this.state.loggedIn}
            user={this.state.user}
          >
            <CRM logout={this._logout} user={this.state.user} />
          </PrivateRoute>
          <Route
            exact
            path="/services"
            render={() => <Services user={this.state.user} />}
          />
          <Route
            exact
            path="/furniture"
            render={() => <Furniture user={this.state.user} />}
          />
          <Route
            exact
            path="/about"
            render={() => <AboutUs user={this.state.user} />}
          />

          <Route
            exact
            path="/commercial"
            render={() => <Commercial user={this.state.user} />}
          />

          <Route
            exact
            path="/protips"
            render={() => <ProTipsPage user={this.state.user} />}
          />

          <Route
            exact
            path="/gallery"
            render={() => <Gallery user={this.state.user} />}
          />

          <Route
            exact
            path="/privacy"
            render={() => <Cookies user={this.state.user} />}
          />

          <Route exact path="/login">
            {this.state.loggedIn ? (
              <Redirect to="/crm" />
            ) : (
              <LoginForm _login={this._login} />
            )}
          </Route>
          <Route exact path="/signup" component={SignupForm} />
          <Route render={() => <Error user={this.state.user} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
