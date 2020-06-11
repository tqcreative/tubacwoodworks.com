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
          <h3>1979</h3>

          <p>
            Over fourty years ago, Tom was hired as a{" "}
            <em>cabinetmakers assistant</em> at a prominent Los Angeles
            hospital. The shop owner, Andy, had completed his “Master Craftsmen“
            program in Germany. Andy was a certified master craftsman and an
            extraordinary entrepreneur. When Andy was ready to retire he wanted
            to pass on what he had learned, and so he took Tom under his wing
            and taught him everything he knew. Once retired Tom single handedly
            caught-up the shop, and now it was time for him to take on
            challenges of his own. So Tom went out on his own and came to
            Arizona.
          </p>
        </StyledIntro>

        <LayoutThree login={false} image_info={ourStoryBoxes} />

        <StyledIntro>
          <h3>Tools of the trade.</h3>

          <p>
            We dont just build high quality wood furniture, storage, counters,
            and closets. We love what we do! And that passion comes out in our
            work. Every piece we design and craft, and every tool that we use is
            taken care of with the same love and care that each of us has for
            our own homes.
          </p>

          <p>
            While specializing in woodwork and wood care, Tubac Woodworks is
            proud to say that we partner with only the best{" "}
            <em>local contractors </em>
            for projects that extend beyond building the best wood cabinets and
            furniture. These partnerships were formed over years of working in
            the Southern Arizona market.
          </p>
        </StyledIntro>

        <Video />

        <StyledTitle>
          <h2>Testimonials</h2>
          <p>
            We could go on about how much we love the work we do, but why not
            hear from our previous clients instead!
          </p>
        </StyledTitle>

        <StyledClient>
          <blockquote>
            <h3>We were inspired by the quality</h3>
            <h2>&#x2605; &#x2605; &#x2605; &#x2605; &#x2605;</h2>
            <p>
              My wife was so excited about our new bathroom cabinets from Tubac
              Woodworks, that we decided to upgrade the cabinets in the kitchen,
              too.
            </p>
            <p>
              Tom had warned me that this would happen. Our old cabinets were 26
              years old, and typical for that time period. We had considered
              upgrading our kitchen cabinets about 5 years prior, and decided to
              simply replace the counter-tops to save on costs, so I was not
              interested in replacing the kitchen cabinets this time, let alone
              the counter-tops
            </p>

            <p>
              However after we replaced the bathroom cabinets, we just were
              inspired by the quality of his work and knew an upgrade of the
              kitchen cabinets was needed. Since I did not want to throw our old
              counter-tops out, Tom convinced me that he could replace the
              cabinets (all, not just the face) and keep the existing
              counter-tops.
            </p>

            <p>
              During the design process, Tom insisted that he speak with both of
              us, to see what we liked and didn't like about our existing
              cabinets, and then provided options on how to make it meet our
              needs while providing us with a more contemporary kitchen.
            </p>

            <p>
              As a bonus, he was able to remove most of our old cabinets with
              enough care that we could donate them to people who really needed
              them. We appreciated that we didn't have to send perfectly good,
              but old, cabinets to the landfill.
            </p>

            <p>
              Be sure to ask Tom about the magical corner lazy Susan. Ours now
              holds twice as much cookware in the same amount of space.
            </p>
          </blockquote>
          <cite>David J. Lichtsinn</cite>
        </StyledClient>

        <StyledClient>
          <h3>We had Tom work on 3 projects in our home</h3>
          <h2>&#x2605; &#x2605; &#x2605; &#x2605; &#x2605;</h2>

          <p>
            If you want work done by a perfectionist, Tom Simons is the one to
            do it. I have a custom built 1500 square foot house in which the
            guest bedroom is a free standing studio apartment. The beautiful
            custom cabinets throughout the house, studio and garage are a major
            reason my downsizing from twice the square footage was such a
            success.
          </p>

          <p>
            Although there were delays during the construction project which
            inconvenienced the flow of work; the end result was worth the wait
            and I was completely satisfied.
          </p>

          <cite>Mildred Broome</cite>
        </StyledClient>

        <StyledClient>
          <h3>Tom is who you need to see</h3>
          <h2>&#x2605; &#x2605; &#x2605; &#x2605; &#x2605;</h2>

          <p>
            We have had Tom work on 3 projects in our home. He has built a
            custom desk, cabinets for the bathroom and kitchen. If you are
            looking for an excellent wood craftsman Tom is who you need to see.
            I am so comfortable with Tom that he installed our kitchen cabinets
            while we were gone.
          </p>

          <cite>Phil &amp; Mary</cite>
        </StyledClient>

        <StyledClient>
          <h3>How a kitchen should be</h3>
          <h2>&#x2605; &#x2605; &#x2605; &#x2605; &#x2605;</h2>

          <p>
            We first met Tom Simons right after we moved to Rio Rico. The
            kitchen in the home we bought did not have enough cabinets for all
            of my kitchenware and I couldn’t even finish unpacking my kitchen. I
            found Tom/Tubac Woodworking on the internet, called him and he came
            out the next day to look at the space we had and give us a quote for
            building and installing cabinets in an empty area of the kitchen. I
            was pleased at how reasonable I found the quote to be and his ideas
            about transforming the space. (Although I had never had the option
            of custom cabinetry before I assumed it was going to break the bank!
            But it didn’t.) A couple of weeks later he came with the cabinet
            boxes for the preliminary installation. The cabinetry is well-made
            and transformed an essentially useless area of the kitchen into a
            beautifully useful addition.
          </p>

          <p>
            In fact, we were so pleased that we asked him to tear out the
            existing kitchen cabinets and redo the remainder of the kitchen to
            match. The flow of the kitchen is now how a kitchen should be and a
            perfect utilization of the total space in the room. I am so thrilled
            at the additional storage space that renovation gave us, not to
            mention the striking granite countertops we had installed to top the
            cabinetry off.{" "}
          </p>

          <p>
            I would definitely recommend Tom and Tubac Woodworking to anyone who
            is thinking of installing custom cabinetry anywhere in your home.
            Because like Tom said, once you have custom cabinets you won’t ever
            want to NOT have custom cabinetry. Yep, I am now officially spoiled
            and I am considering having some cabinets added to an under-utilized
            area in the Master Bath in the future. Thanks, Tom!{" "}
          </p>

          <cite>Bill and Lisa Garber</cite>
        </StyledClient>

        <StyledClient>
          <h3>Tom takes pride in his work</h3>
          <h2>&#x2605; &#x2605; &#x2605; &#x2605; &#x2605;</h2>

          <p>
            Tom Simons of Tubac Woodworks orchestrated a total kitchen remodel
            for us. Tom is knowledgeable about space and materials and does
            beautiful cabinetry work. He offered many options as well as
            listened to my ideas and found ways to develop my dream kitchen. Tom
            was very patient when I was undecided offering more options and
            suggestions and willingly made changes at my request. Tom takes
            pride in his work and customer satisfaction is his top priority. He
            responds quickly to inquiries and lets you know you are his number
            one priority once the job starts. The Herbigs of Green Valley highly
            recommend Tom Simons and Tubac Woodworks
          </p>

          <cite>Janice Herbig</cite>
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

const StyledTitle = styled.section`
  max-width: 1400px;
  margin: 1em auto;
  padding: 1em;

  h2 {
    text-transform: uppercase;
    color: #a6988d;
    font-weight: 900;
    padding-bottom: 4px;
    border-bottom: 2px dashed #a6988d;
  }
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

  p {
    em {
      font-style: italic;
    }
  }
`;

const StyledClient = styled.article`
  max-width: 1400px;
  margin: 1.5em auto;
  padding: 1em;
  background-color: #f1f1f1;

  h2 {
    color: #a6988d;
    text-transform: capitalize;
  }

  h3 {
    font-weight: 100;
    color: #4a5559;

    &::before,
    &::after {
      content: '"';
    }
  }

  blockquote {
    color: #4a5559;
  }

  cite {
    color: #4a5559;
    text-transform: capitalize;
    font-weight: 900;

    &::before {
      content: "- ";
    }
  }
`;
