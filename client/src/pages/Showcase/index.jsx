import React, { Component } from "react";
import { NavBar } from "../../components/Navbar";
import gsap from "gsap";
import HeroSmart from "../../components/HeroSmart";
import GalleryFlex from "../../components/GalleryFlex/GalleryFlex";
import Footer from "../../components/Footer";
import Signup from "../../components/Signup";
import LayoutBasic from "../../components/LayoutBasic";
import Toast from "../../components/Toast";
import LayoutThree from "../../components/LayoutThree";
import axios from "axios";

export default class Showcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      navPos: "absolute",
      toastMsg: [],
      toastShow: false,
      arrayOfImages: [],
      mobileNavHidden: true,
      showcaseImages: [
        "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/showcase_9.jpg",
      ],
    };

    // bind signup and toast
    this.handleSignupResult = this.handleSignupResult.bind(this);
    this.toggleToast = this.toggleToast.bind(this);
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
  }

  toggleMobileNav() {
    this.setState({ mobileNavHidden: !this.state.mobileNavHidden });
  }

  componentDidMount() {
    // scroll to 0 0 because it's a react app and will remember how far down the screen it is otherwise.
    window.scrollTo(0, 0);
    this.setState({ mobileNavHidden: true });

    if (document.getElementById("funiture_h1")) {
      gsap.from("#furniture_h1", { duration: 2, x: 200, opacity: 0 });
    }

    axios.get("/cms/kitchenbathvanity").then((collectData) => {
      collectData.data.forEach((table) => {
        // set the table for the slider
        if (table.showcaseGrid) {
          // tell the gallery what to place inside
          this.setState({ showcaseImages: table.showcaseGrid });

          // grab images for slider
          const newArray = Array.from(table.showcaseGrid);
          const arrayOfObjects = [];
          for (let i = 0; i < newArray.length; i++) {
            let newObjectItem = {
              original: `/cms/images/${newArray[i]}`,
              thumbnail: `/cms/images/${newArray[i]}`,
            };
            arrayOfObjects.push(newObjectItem);
          }
          this.setState({ arrayOfImages: arrayOfObjects });
        }
      });
    });
  }

  handleSignupResult(msg) {
    // console.log(msg);
    this.setState({ toastMsg: msg, toastShow: true });
  }

  toggleToast() {
    this.setState({ toastShow: !this.state.toastShow });
  }

  render() {
    // content for demo
    // this data will normally be held in a server cand axios called on mount.
    const contentObject = {
      paragraphOne: {
        h2Tag: "Design and Expertise",
        pTag: `Welcome to the Tubac Woodworks, Inc. Portfolio Web Page. This page
          provides us with an opportunity to showcase the work done by
          Tom Simons of Tubac Woodworks, Inc. Tom has been in
          business in Arizona since 1982, providing all areas of Pima and
          Santa Cruz Counties with quality products at competitive prices.`,
        pTag2: (
          <React.Fragment>
            Some of the most exciting pieces that we have done are featured in
            this showcase. But dont forget to stop by and check out our 
            <a href="/gallery">Gallery</a> for even more pieces that are sure to
            surprise and delight you.
          </React.Fragment>
        ),
        pTag3: (
          <React.Fragment>
            <a href="tel:+15206250050">Call now</a> to schedule an appointment
            for a consultation and experience our creative designs first hand.
          </React.Fragment>
        ),
      },
    };

    const contentObjectTwo = {
      paragraphOne: {
        h2Tag: "Wall Beds",
        pTag:
          "One of the things Tubac Woodworks is most excited about is helping our clients discover how to both keep their office and their guestroom.",
        pTag2:
          "This can be accomplished by selecting a stylish Wall-Bed. These functional pieces of furniture double as both storage and a convenient guestroom sleep area when the time comes to have your mother-in-law visit.",
        pTag3:
          "With multiple different styles to choose from, Wall-Bed's display upright in an in-wall unit or in a stand-alone armor fashion. Storage can be placed on the sides, under, or over the main section and make a perfect addition to any home office.",
      },
    };

    const contentObjectThree = {
      paragraphOne: {
        h2Tag: "Business Card",
        pTag: (
          <React.Fragment>
            <em>Tom</em>
            <em>Tubac Woodworks Inc, Southern Arizona</em> <br />
            Phone: <a href="tel:+5206250050">(520) 625-0050</a> <br />
            Email:{" "}
            <a href="mailto:info@tubacwoodworks.com">
              info@tubacwoodworks.com
            </a>{" "}
          </React.Fragment>
        ),
      },
    };

    if (this.props.user) {
      return (
        <div className="furnitrue_root">
          <HeroSmart
            login={"Peter"}
            backgroundName={
              "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/97f7c6bf-12d2-472f-975c-8634d6fe88a2.jpg"
            }
            title="Showcase"
            subTitle="Wall Beds, Desks, Mantels, and more"
          />
          <NavBar
            isHidden={this.state.mobileNavHidden}
            toggle={this.toggleMobileNav}
          />

          <LayoutBasic
            h2Tag={contentObject.paragraphOne.h2Tag}
            pTag={contentObject.paragraphOne.pTag}
            pTag2={contentObject.paragraphOne.pTag2}
            pTag3={contentObject.paragraphOne.pTag3}
          />

          <LayoutThree
            image_info={[
              {
                title: "Wall Beds",
                body:
                  "Keep your office space and still have that guest room with the addtion of a Wall Bed unit",
                image_uri:
                  "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/gallery_7.jpg",
              },
              {
                title: "Class & Style",
                body:
                  "Dont hunt for peices that go together. Design pieces that go with what you love.",
                image_uri:
                  "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_gallery.jpg",
              },
              {
                title: "Just Right",
                body:
                  "The perfect mantle piece, in the perfect color, and all the character that comes out of natural wood.",
                image_uri:
                  "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/d18.jpg",
              },
            ]}
          />

          <LayoutBasic
            h2Tag={contentObjectTwo.paragraphOne.h2Tag}
            pTag={contentObjectTwo.paragraphOne.pTag}
            pTag2={contentObjectTwo.paragraphOne.pTag2}
            pTag3={contentObjectTwo.paragraphOne.pTag3}
          />

          <GalleryFlex theArray={this.state.showcaseImages} />

          <Signup submitResult={this.handleSignupResult} />
          <Footer />
          <Toast show={this.state.toastShow} onClose={this.toggleToast}>
            {this.state.toastMsg.map((element) => {
              return <p>{element}</p>;
            })}
          </Toast>
        </div>
      );
    } else {
      return (
        <div>
          <HeroSmart
            login={false}
            backgroundName={
              "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/97f7c6bf-12d2-472f-975c-8634d6fe88a2.jpg"
            }
            title="Showcase"
            subTitle="Wall Beds, Desks, Mantels, and more"
          />
          <NavBar
            isHidden={this.state.mobileNavHidden}
            toggle={this.toggleMobileNav}
          />

          <LayoutBasic
            h2Tag={contentObject.paragraphOne.h2Tag}
            pTag={contentObject.paragraphOne.pTag}
            pTag2={contentObject.paragraphOne.pTag2}
            pTag3={contentObject.paragraphOne.pTag3}
          />

          <LayoutThree
            image_info={[
              {
                title: "Wall Beds",
                body:
                  "Keep your office space and still have that guest room with the addtion of a Wall Bed unit",
                image_uri:
                  "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/gallery_7.jpg",
              },
              {
                title: "Class & Style",
                body:
                  "Dont hunt for peices that go together. Design pieces that go with what you love.",
                image_uri:
                  "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_gallery.jpg",
              },
              {
                title: "Just Right",
                body:
                  "The perfect mantle piece, in the perfect color, and all the character that comes out of natural wood.",
                image_uri:
                  "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/d18.jpg",
              },
            ]}
          />

          <LayoutBasic
            h2Tag={contentObjectTwo.paragraphOne.h2Tag}
            pTag={contentObjectTwo.paragraphOne.pTag}
            pTag2={contentObjectTwo.paragraphOne.pTag2}
            pTag3={contentObjectTwo.paragraphOne.pTag3}
          />

          <GalleryFlex theArray={this.state.showcaseImages} />

          <LayoutBasic
            h2Tag={contentObjectThree.paragraphOne.h2Tag}
            pTag={contentObjectThree.paragraphOne.pTag}
          />

          <Signup submitResult={this.handleSignupResult} />
          <Footer />
          <Toast show={this.state.toastShow} onClose={this.toggleToast}>
            {this.state.toastMsg.map((element) => {
              return <p>{element}</p>;
            })}
          </Toast>
        </div>
      );
    }
  }
}
