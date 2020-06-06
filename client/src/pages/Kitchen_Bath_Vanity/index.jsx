import React, { Component } from "react";
import { NavBar } from "../../components/Navbar";
import HeroSmart from "../../components/HeroSmart";
import Footer from "../../components/Footer";
import Signup from "../../components/Signup";
import Toast from "../../components/Toast";
import LayoutBasic from "../../components/LayoutBasic";
import LayoutThree from "../../components/LayoutThree";
// import Slider from "../../components/Slider";
import axios from "axios";

export default class KitchenBathVanity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      navPos: "absolute",
      toastMsg: [],
      toastShow: false,
      kitchenImages: [],
      bathImages: [],
      arrayOfImages: [],
    };

    // bind signup and toast
    this.handleSignupResult = this.handleSignupResult.bind(this);
    this.toggleToast = this.toggleToast.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    axios.get("/cms/kitchenbathvanity").then((collectData) => {
      // console.log(collectData.data);

      let newArray = [];
      collectData.data.forEach((collectionOfImages) => {
        if (collectionOfImages.kitchenTable) {
          this.setState({ arrayOfImages: collectionOfImages.kitchenTable });
          newArray = collectionOfImages.kitchenTable;
          // console.log(newArray)
        }
      });

      // console.log(this.state.arrayOfImages);

      // console.log(newArray);
      let arrayOfObjects = [];
      for (let i = 0; i < newArray.length; i++) {
        let newObjectItem = {
          original: `/cms/images/${newArray[i]}`,
          thumbnail: `/cms/images/${newArray[i]}`,
        };
        arrayOfObjects.push(newObjectItem);
      }
      this.setState({ kitchenImages: arrayOfObjects });
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
        h2Tag: "Furniture you're going to love.",
        pTag:
          "Our products are available through authorized showrooms, on-line retailers and the Urban Woods website. If there is not a dealer near you then we encourage you to contact us directly for more information.",
        pTag2:
          "Reclaimed wood has many advantages. The grain of the timber has tight growth rings that show the superior density of the wood. The natural patina and color of the old-growth timber is preserved in the manufacturing process.  The results provide a look and feel that can not be replicated in new wood.",
        pTag3:
          "The reclaimed wood was originally harvested and milled 50 to 100 years ago, and has been seasoned in sunny Southern California for decades. The vintage wood has better stability and resistance to future distortion or structural movement.",
      },

      paragraphTwo: {
        h2Tag: "Furniture you're going to love.",
        pTag:
          "Our products are available through authorized showrooms, on-line retailers and the Urban Woods website. If there is not a dealer near you then we encourage you to contact us directly for more information.",
        pTag2:
          "Reclaimed wood has many advantages. The grain of the timber has tight growth rings that show the superior density of the wood. The natural patina and color of the old-growth timber is preserved in the manufacturing process.  The results provide a look and feel that can not be replicated in new wood.",
        pTag3:
          "The reclaimed wood was originally harvested and milled 50 to 100 years ago, and has been seasoned in sunny Southern California for decades. The vintage wood has better stability and resistance to future distortion or structural movement.",
      },
    };

    let kitchenBoxes = [
      {
        title: "stunning cabinets",
        body: "Keep your office space and still have that guest room!",
        image_uri:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/d10.jpg",
      },
      {
        title: "Kitchen Islands",
        body:
          "More than just a space saver. You'll be able to keep the look and feel of your home office with these stylish Wallbeds.",
        image_uri:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/97f7c6bf-12d2-472f-975c-8634d6fe88a2.jpg",
      },
      {
        title: "Stove & Oven Covers",
        body:
          "Wallbed units also add in-wall storage that can be used to stay organized.",
        image_uri:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/gallery_5.jpg",
      },
    ];

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

    if (this.props.user) {
      return (
        <div className="kitchen_root">
          <HeroSmart
            login={"Peter"}
            backgroundName={
              "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_kitchen_bath_vanity.jpg"
            }
            title="Kitchen Bath &amp; Vanity"
            subTitle="Love your home."
          />

          <NavBar styleProp={this.state.navPos} />

          <LayoutBasic
            h2Tag={contentObject.paragraphOne.h2Tag}
            pTag={contentObject.paragraphOne.pTag}
            pTag2={contentObject.paragraphOne.pTag2}
            pTag3={contentObject.paragraphOne.pTag3}
          />

          <LayoutThree login={"Peter"} image_info={kitchenBoxes} />

          <LayoutBasic
            h2Tag={contentObject.paragraphTwo.h2Tag}
            pTag={contentObject.paragraphTwo.pTag}
            pTag2={contentObject.paragraphTwo.pTag2}
            pTag3={contentObject.paragraphTwo.pTag3}
          />

          <LayoutThree login={"Peter"} image_info={bathroomBoxes} />

          <LayoutBasic
            h2Tag={contentObject.paragraphOne.h2Tag}
            pTag={contentObject.paragraphOne.pTag}
            pTag2={contentObject.paragraphOne.pTag2}
            pTag3={contentObject.paragraphOne.pTag3}
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
        <div className="kitchen_root">
          <HeroSmart
            login={false}
            backgroundName={
              "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_kitchen_bath_vanity.jpg"
            }
            title="Kitchen Bath &amp; Vanity"
            subTitle="Love your home."
          />
          <NavBar styleProp={this.state.navPos} />

          <LayoutBasic
            h2Tag={contentObject.paragraphOne.h2Tag}
            pTag={contentObject.paragraphOne.pTag}
            pTag2={contentObject.paragraphOne.pTag2}
            pTag3={contentObject.paragraphOne.pTag3}
          />

          <LayoutThree login={false} image_info={kitchenBoxes} />

          <LayoutBasic
            h2Tag={contentObject.paragraphTwo.h2Tag}
            pTag={contentObject.paragraphTwo.pTag}
            pTag2={contentObject.paragraphTwo.pTag2}
            pTag3={contentObject.paragraphTwo.pTag3}
          />

          <LayoutThree login={false} image_info={bathroomBoxes} />

          <LayoutBasic
            h2Tag={contentObject.paragraphOne.h2Tag}
            pTag={contentObject.paragraphOne.pTag}
            pTag2={contentObject.paragraphOne.pTag2}
            pTag3={contentObject.paragraphOne.pTag3}
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
