import React, { Component } from "react";
import { NavBar } from "../../components/Navbar";
import HeroSmart from "../../components/HeroSmart";
import Footer from "../../components/Footer";

export default class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
    };
  }

  componentDidMount() {
    console.log("Error Component Mounted");
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
        <NavBar />
        <Footer />
      </div>
    );
  }
}
