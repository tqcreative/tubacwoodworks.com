import React, { Component } from "react";
import styled from "styled-components";
import HeroSmart from "../../components/HeroSmart";
import Signup from "../../components/Signup";
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
  constructor(props) {
    super(props);
    this.state = {};

    // bind signup
    this.handleSignupResult = this.handleSignupResult.bind(this);
  }

  componentDidMount() {
    // scroll to 0 0 because it's a react app and will remember how far down the screen it is otherwise.
    window.scrollTo(0, 0);
  }

  handleSignupResult(msg) {
    // console.log(msg);
    this.setState({ toastMsg: msg, toastShow: true });
  }

  render() {
    return (
      <StyledRoot>
        <HeroSmart
          login={false}
          backgroundName={
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_furniture.jpg"
          }
          title="Our Story"
          subTitle="An Arizona business with over 40 years of history"
        />

        <NavBar />

        <StyledIntro>
          <h2>Tubac Woodworks</h2>
          <h3>An Arizona business with over 40 years of history.</h3>
          <p>
            Tubac Woodworks, has been owned and opporated for over 40 years. And
            our motto has not changed.{" "}
            <span>"We want people to love their homes"</span>
          </p>
          <p>
            We've had the pleasure to serve hundres of Arizona locals and
            visitors, and that number keeps going up. Our team is dedicated to
            their craft.
          </p>
        </StyledIntro>

        <LayoutThree login={false} image_info={bathroomBoxes} />

        <StyledIntro>
          <h3>Our Mission</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
            itaque hic, debitis quos minima libero iure alias suscipit
            asperiores voluptatem necessitatibus. Corporis delectus in, iste
            temporibus quam distinctio totam facilis enim doloremque. Autem
            facere debitis obcaecati est sapiente quae aut.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            soluta distinctio ab nisi voluptatem. Neque expedita velit maxime ut
            dolore officia vitae perspiciatis doloribus placeat odio ad
            inventore, amet ab.
          </p>
        </StyledIntro>

        <Video />

        <StyledIntro>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            vitae.
          </h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            veniam commodi id perspiciatis saepe delectus, dolores quibusdam
            non, placeat nisi iste voluptatibus veritatis quae neque praesentium
            consequuntur. Accusantium vero sunt dolore doloremque tenetur. In
            possimus placeat corrupti voluptatem sed impedit eaque, sit
            laudantium magnam! Natus doloribus rem blanditiis dolores labore.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            excepturi nam eligendi aspernatur, quis eius cumque, expedita
            deserunt natus totam fugit nulla dignissimos ea dicta enim! Aliquam
            iusto sapiente rem corrupti. Impedit velit debitis tenetur ducimus
            explicabo ullam necessitatibus suscipit soluta, voluptate blanditiis
            illo qui architecto praesentium inventore quae quaerat.
          </p>
        </StyledIntro>

        <Signup submitResult={this.handleSignupResult} />

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
  margin: 2em auto;

  h2,
  h3,
  h4 {
    color: #a6988d;
    font-weight: 900;
  }

  h2 {
    text-transform: uppercase;
  }
`;
