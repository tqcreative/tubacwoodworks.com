import React, { Component } from "react";
import styled from "styled-components";
import HeroSmart from "../../components/HeroSmart";
import Signup from "../../components/Signup";
import { NavBar } from "../../components/Navbar";
import Footer from "../../components/Footer";
import LayoutThree from "../../components/LayoutThree";
import Video from "../../components/Video/Video";

const ourStoryBoxes = [
  {
    title: "Local",
    body:
      "We serve the entire southern Arizona areas of Pima and Santa Cruz Counties",
    image_uri:
      "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/woodworking_7.jpg",
  },
  {
    title: "Specialized",
    body:
      "We specialize in the building and installation of custom cabinetry for kitchens, baths, entertainment centers, office desks, armoires, wall-beds, and a variety of other wood products",
    image_uri:
      "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/woodworking_8.jpg",
  },
  {
    title: "Quality",
    body: "Learning a craft takes time. Mastering one takes discipline.",
    image_uri:
      "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/woodworking_1.jpg",
  },
];

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNavHidden: true,
    };

    // bind signup
    this.handleSignupResult = this.handleSignupResult.bind(this);
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

        <NavBar
          isHidden={this.state.mobileNavHidden}
          toggle={this.toggleMobileNav}
        />

        <StyledIntro>
          <h2>Tubac Woodworks</h2>
          <p>
            Tubac Woodworks, has been an Arizona owned and opporated business
            for over 40 years. And our goal has not changed.
            <span>"We want people to love their homes"</span>
          </p>
          <p>
            We've had the pleasure to serve hundres of Arizona locals &amp;
            visitors, and that number keeps going up. We are dedicated to our
            craft and have built some of the most stunning wood furniture and
            cabinetry on the market today.
          </p>
          <p>
            We hope you enjoy your tour of the Tubac Woodworks, Inc. Gallery
            work, and look forward to bringing to life your vision for the home
            you live in.
          </p>
        </StyledIntro>

        <LayoutThree login={false} image_info={ourStoryBoxes} />

        <StyledIntro>
          <h3>1979</h3>

          <p>
          In 1979 Tom was hired as a <em>cabinetmakers assistant</em> at a prominent Los Angeles hospital. The shop owner, Andy, had completed his “Master Craftsmen“ program in Germany. Andy was a certified master craftsman and an extraordinary entrepreneur. When Andy was ready to retire he wanted to pass on what he had learned, and so he took Tom under his wing and taught him everything he knew. Once retired Tom single handedly caught-up the shop, and now it was time for him to take on challenges of his own. So Tom went out on his own and came to Arizona.
          </p>

          <p>
            We dont just build high quality wood furniture, storage, counters,
            and closets. We love what we do! And that passion comes out in our
            work. Every piece we design and craft, and every tool that we use is
            taken care of with the same love and care that each of us has for
            our own homes.
          </p>
        </StyledIntro>

        <Video />

        <StyledIntro>
          <h3>Tools of the trade.</h3>

          <p>
            We take care of our shop, our tools, our people, and our customers.
          </p>

          <p>
            While specializing in woodwork and wood care, Tubac Woodworks is
            proud to say that we partner with only the best local contractors
            for projects that extend beyond building the best wood cabinets and
            furniture. These partnerships were formed over years of working in
            the Southern Arizona market.
          </p>

        </StyledIntro>

        <StyledClient>
          <h2>Our Clients</h2>
          <blockquote>

          </blockquote>
          <cite>Bill and Lisa Garber</cite>
        </StyledClient>

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
  margin: 1em auto;
  padding: 1em;

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

const StyledClient = styled.article`
h2 {

}

blockquote {

}

cite {

}
`;