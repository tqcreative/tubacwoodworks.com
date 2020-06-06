import React, { Component } from "react";
import styled from "styled-components";
import HeroSmart from "../../components/HeroSmart";
import { NavBar } from "../../components/Navbar";
import Footer from "../../components/Footer";
import LayoutThree from "../../components/LayoutThree";
import Video from "../../components/Video/Video";

let bathroomBoxes = [
  {
    title: "Stand Alone",
    body:
      "More than just a space saver. You'll be able to keep the look and feel of your home office with these stylish Wallbeds.",
    image_uri:
      "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/dsc_0021.jpg",
  },
  {
    title: "Bath & Vanity",
    body: "Keep your office space and still have that guest room!",
    image_uri:
      "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/14b5d483-d86c-4c2b-9d6c-d335658f9e16.jpg",
  },
  {
    title: "Custom Styles",
    body:
      "Wallbed units also add in-wall storage that can be used to stay organized.",
    image_uri:
      "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/d4b7203a-86a1-48fb-9e12-415dcab8a180.jpg",
  },
];

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

        <StyledIntro>
          <h2>Tubac Woodworks</h2>
          <h3>An Arizona business for over 40 years.</h3>
          <p>Tubac Woodworks, has been owned and opporated for over 40 years. And our motto has not changed. <span>"We want people to love their homes"</span></p>
          <p>We've had the pleasure to serve hundres of Arizona locals and visitors, and that number keeps going up. Our team is dedicated to their craft.</p>

          <p>VIDEO</p>

          <h2>More about the buiness</h2>

          <p>images of the showcase</p>

        </StyledIntro>

        <LayoutThree login={false} image_info={bathroomBoxes} />

        <Video />

        <Footer />

      </StyledRoot>
    );
  }
}

// ========== //
//   STYLES   //
// ========== //
const StyledRoot = styled.main`
margin: 0;
padding: 0;
`;

const StyledIntro = styled.section`

`;