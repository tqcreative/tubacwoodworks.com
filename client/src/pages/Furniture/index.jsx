import React, { Component } from "react";
import { NavBar } from "../../components/Navbar";
import gsap from "gsap";
import HeroSmart from "../../components/HeroSmart";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";
import Signup from "../../components/Signup";
import LayoutBasic from "../../components/LayoutBasic";
import Toast from "../../components/Toast";
import LayoutThree from "../../components/LayoutThree";
// import Slider from "../../components/Slider";
import axios from "axios";

export default class Furniture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      navPos: "absolute",
      toastMsg: [],
      toastShow: false,
      arrayOfImages: [],
      showcaseImages: [
        "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/showcase_9.jpg",
      ],
    };

    // bind signup and toast
    this.handleSignupResult = this.handleSignupResult.bind(this);
    this.toggleToast = this.toggleToast.bind(this);
  }

  componentDidMount() {
    // scroll to 0 0 because it's a react app and will remember how far down the screen it is otherwise.
    window.scrollTo(0, 0);

    if (document.getElementById("funiture_h1")) {
      gsap.from("#furniture_h1", { duration: 2, x: 200, opacity: 0 });
    }

    axios.get("/cms/kitchenbathvanity").then((collectData) => {
      collectData.data.forEach((table) => {
        // set the table for the slider
        if (table.imageArray) {
          // tell the gallery what to place inside
          this.setState({ showcaseImages: table.imageArray });

          // grab images for slider
          const newArray = Array.from(table.imageArray);
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
    let contentObject = {
      paragraphOne: {
        h2Tag: "Wall Beds",
        pTag:
          "Our products are available through authorized showrooms, on-line retailers and the Urban Woods website. If there is not a dealer near you then we encourage you to contact us directly for more information.",
        pTag2:
          "Reclaimed wood has many advantages. The grain of the timber has tight growth rings that show the superior density of the wood. The natural patina and color of the old-growth timber is preserved in the manufacturing process.  The results provide a look and feel that can not be replicated in new wood.",
        pTag3:
          "The reclaimed wood was originally harvested and milled 50 to 100 years ago, and has been seasoned in sunny Southern California for decades. The vintage wood has better stability and resistance to future distortion or structural movement.",
      },
    };

    if (this.props.user) {
      return (
        <div className="furnitrue_root">
          <HeroSmart
            login={"Peter"}
            backgroundName={
              "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_furniture.jpg"
            }
            title="Furniture"
            subTitle="Wall Beds, Desks, Mantels, and more"
          />
          <NavBar styleProp={this.state.navPos} />

          <LayoutBasic
            h2Tag={contentObject.paragraphOne.h2Tag}
            pTag={contentObject.paragraphOne.pTag}
            pTag2={contentObject.paragraphOne.pTag2}
            pTag3={contentObject.paragraphOne.pTag3}
          />

          <LayoutThree
            image_info={[
              "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/gallery_7.jpg",
              "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/photo (5).jpg",
              "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/d23.jpg",
            ]}
          />

          <LayoutBasic
            h2Tag={contentObject.paragraphOne.h2Tag}
            pTag={contentObject.paragraphOne.pTag}
            pTag2={contentObject.paragraphOne.pTag2}
            pTag3={contentObject.paragraphOne.pTag3}
          />

          <Gallery
            login={"Peter"}
            user={this.state.user}
            staticGalleryImageProp={this.state.showcaseImages}
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
    } else {
      return (
        <div className="furnitrue_root">
          <HeroSmart
            login={false}
            backgroundName={
              "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_furniture.jpg"
            }
            title="Furniture"
            subTitle="Wall Beds, Desks, Mantels, and more"
          />
          <NavBar styleProp={this.state.navPos} />

          <LayoutBasic
            h2Tag={contentObject.paragraphOne.h2Tag}
            pTag={contentObject.paragraphOne.pTag}
            pTag2={contentObject.paragraphOne.pTag2}
            pTag3={contentObject.paragraphOne.pTag3}
          />

          <LayoutThree
            image_info={[
              {
                title: "Save Space",
                body: "Keep your office space and still have that guest room!",
                image_uri: "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/gallery_7.jpg",
              },
              {
                title: "Keep Style",
                body: "More than just a space saver. You'll be able to keep the look and feel of your home office with these stylish Wallbeds.",
                image_uri: "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_gallery.jpg",
              },
              {
                title: "Storage",
                body: "Wallbed units also add in-wall storage that can be used to stay organized.",
                image_uri: "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/d23.jpg",
              },
            ]}
          />

          <LayoutBasic
            h2Tag={contentObject.paragraphOne.h2Tag}
            pTag={contentObject.paragraphOne.pTag}
            pTag2={contentObject.paragraphOne.pTag2}
            pTag3={contentObject.paragraphOne.pTag3}
          />

          <Gallery
            login={false}
            user={this.state.user}
            staticGalleryImageProp={this.state.showcaseImages}
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
