import React, { Component } from "react";
import styled from "styled-components";
import HeroSmart from "../../components/HeroSmart";
import { NavBar } from "../../components/Navbar";
import Footer from "../../components/Footer";

export default class AboutUs extends Component {
  render() {
    return (
      <StyledRoot>
        <HeroSmart 
        login={false}
        backgroundName={"https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_furniture.jpg"}
        title="Our Story"
        subTitle="An Arizona business with over 40 years of history"
        />
        <NavBar />
        <section>
            <h2>Tubac Woodworks</h2>
            <h3>An Arizona business for over 40 years.</h3>
            <p>Tubac Woodworks, has been owned and opporated for over 40 years. And our motto has not changed. <span>"We want people to love their homes"</span></p>
            <p>We've had the pleasure to serve hundres of Arizona locals and visitors, and that number keeps going up. Our team is dedicated to their craft.</p>

            <p>VIDEO</p>

            <h2>More about the buiness</h2>

            <p>images of the showcase</p>
        </section>
        <Footer />
      </StyledRoot>
    );
  }
}

// ========== //
//   STYLES   //
// ========== //
const StyledRoot = styled.main`
`;
