import React, { Component } from "react";
import { NavBar } from "../../components/Navbar";
import HeroSmart from "../../components/HeroSmart";
import Footer from "../../components/Footer";

export default class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      mobileNavHidden: true,
    };
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
  }

  componentDidMount() {
    // scroll to 0 0 because it's a react app and will remember how far down the screen it is otherwise.
    window.scrollTo(0, 0);
    this.setState({ mobileNavHidden: true });
  }

  toggleMobileNav() {
    this.setState({ mobileNavHidden: !this.state.mobileNavHidden });
  }

  render() {
    return (
      <div className="error_root">
        <HeroSmart
          login={false}
          backgroundName={
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/error.jpg"
          }
          title="404 Error Page Not Found"
          subTitle="oops! Somethings gone wrong."
        />
        <NavBar
          isHidden={this.state.mobileNavHidden}
          toggle={this.toggleMobileNav}
        />
        <Footer />
      </div>
    );
  }
}
