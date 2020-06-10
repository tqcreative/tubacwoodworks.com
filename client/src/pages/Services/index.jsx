import React, { Component } from "react";
import { NavBar } from "../../components/Navbar";
import HeroSmart from "../../components/HeroSmart";
import Footer from "../../components/Footer";
import Signup from "../../components/Signup";
import Toast from "../../components/Toast";
import LayoutBasic from "../../components/LayoutBasic";
import LayoutThree from "../../components/LayoutThree";
import Chapter from "../../components/Chapter/Chapter";
import styled from "styled-components";
import axios from "axios";

export default class Services extends Component {
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
      mobileNavHidden: true,
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
    // window reset
    window.scrollTo(0, 0);
    this.setState({ mobileNavHidden: true });

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
    // =========== //
    //   CONTENT   //
    // =========== //
    const kitchenProps = {
      sliderArray: [
        {
          original:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/tww_gallery_6.jpg",
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/tww_gallery_6.jpg",
        },
        {
          original:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/white2.jpg",
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/white2.jpg",
        },
        {
          original:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/kitchen_image_1.jpg",
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/kitchen_image_1.jpg",
        },
        {
          original:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/kitchen_image_6.jpg",
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/kitchen_image_6.jpg",
        },
        {
          original:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/kitchen_image_8.jpg",
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/kitchen_image_8.jpg",
        },
      ],
      hero: {
        image:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/97f7c6bf-12d2-472f-975c-8634d6fe88a2.jpg",
        title: "Kitchen",
        subtitle: "Cabinets, Pantries, & more",
      },
      category: "Kitchen Remodels",
      contentArray: [
        `Let us help you remodel your kitchen into the one you've always dreamed of.`,
        `A lot goes into the planning of a new kitchen. "Where do we put the island?" "What type of wood is going to hold up over the years?""What color should the cupboards be?"`,
      ],
      footerArray: [
        <React.Fragment><strong>Storage</strong></React.Fragment>,
      ],
    };

    const bathProps = {
      sliderArray: [
        {
          original:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/tww_gallery_11.jpg",
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/tww_gallery_11.jpg",
        },
        {
          original:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/dsc_0061.jpg",
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/dsc_0061.jpg",
        },
        {
          original:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/tww_gallery_9.jpg",
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/tww_gallery_9.jpg",
        },
      ],
      hero: {
        image:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/14b5d483-d86c-4c2b-9d6c-d335658f9e16.jpg",
        title: "Bath & Vanity",
        subtitle: "In-wall or Standalone",
      },
      category: "Bathroom Storage",
      contentArray: [
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minus
        tempore hic fuga, eveniet totam odit, repellendus delectus earum
        suscipit quae obcaecati amet assumenda explicabo dolore saepe laboriosam
        laudantium illo?`,
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum
        eveniet similique vero praesentium laudantium aperiam consequatur, ab
        dolorem ipsum, enim nulla! Vitae molestiae possimus accusamus at
        laboriosam ea ex dolore laborum est voluptates earum qui eaque corrupti,
        omnis eum officiis a doloribus asperiores excepturi vel dolorem tempora.
        Cupiditate, obcaecati?`,
      ],
      footerArray: [
        <React.Fragment>
          Though our kids believe he can do anything. We know some work is left to the right professionals. It's because of this we take strategic partners when consulting on <em>Tile work, General Construction, Foundations,</em> and other non-wood related needs. 
        </React.Fragment>,
      ],
    };

    const wallBedProps = {
      sliderArray: [
        {
          original:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/wallbed_green2.jpg",
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/wallbed_green2.jpg",
        },
        {
          original:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/gallery_7.jpg",
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/gallery_7.jpg",
        },
        {
          original:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/d23.jpg",
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/d23.jpg",
        },
        {
          original:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/d25.jpg",
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/d25.jpg",
        },
      ],
      hero: {
        image:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/gallery_7.jpg",
        title: "Wall Beds",
        subtitle: "Luxury without the price tag",
      },
      category: "Don't sacrifice your office space for a spare bedroom",
      contentArray: [
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minus
        tempore hic fuga, eveniet totam odit, repellendus delectus earum
        suscipit quae obcaecati amet assumenda explicabo dolore saepe laboriosam
        laudantium illo?`,
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum
        eveniet similique vero praesentium laudantium aperiam consequatur, ab
        dolorem ipsum, enim nulla! Vitae molestiae possimus accusamus at
        laboriosam ea ex dolore laborum est voluptates earum qui eaque corrupti,
        omnis eum officiis a doloribus asperiores excepturi vel dolorem tempora.
        Cupiditate, obcaecati?`,
      ],
      footerArray: [
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magnam
    nihil, molestias doloribus et vitae reprehenderit explicabo odit
    libero accusamus quidem eos ratione? Sunt, numquam consequuntur?
    Doloribus, pariatur? Architecto, dignissimos inventore consectetur
    dicta deserunt eius, nulla natus nesciunt autem officiis sequi
    repudiandae nam eveniet unde. Saepe voluptatem odit quod temporibus
    tempore minus ab maiores obcaecati id architecto voluptatibus
    eveniet voluptas animi alias vitae, quae eos eum placeat nihil, odio
    deserunt?`,
      ],
    };

    const furnitureProps = {
      hero: {
        image:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/dsc_0017.jpg",
        title: "Home & Office",
        subtitle: "Desks, Bookshelves, Entertainment Centers",
      },
      category: "Don't sacrifice your office space for a spare bedroom",
      contentArray: [
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minus
        tempore hic fuga, eveniet totam odit, repellendus delectus earum
        suscipit quae obcaecati amet assumenda explicabo dolore saepe laboriosam
        laudantium illo?`,
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum
        eveniet similique vero praesentium laudantium aperiam consequatur, ab
        dolorem ipsum, enim nulla! Vitae molestiae possimus accusamus at
        laboriosam ea ex dolore laborum est voluptates earum qui eaque corrupti,
        omnis eum officiis a doloribus asperiores excepturi vel dolorem tempora.
        Cupiditate, obcaecati?`,
      ],
      footerArray: [
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magnam
    nihil, molestias doloribus et vitae reprehenderit explicabo odit
    libero accusamus quidem eos ratione? Sunt, numquam consequuntur?
    Doloribus, pariatur? Architecto, dignissimos inventore consectetur
    dicta deserunt eius, nulla natus nesciunt autem officiis sequi
    repudiandae nam eveniet unde. Saepe voluptatem odit quod temporibus
    tempore minus ab maiores obcaecati id architecto voluptatibus
    eveniet voluptas animi alias vitae, quae eos eum placeat nihil, odio
    deserunt?`,
      ],
    };

    const commecrialProps = {
      sliderArray: [
        {
          original:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/com_1.jpg",
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/com_1.jpg",
        },
        {
          original:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/com_3.jpg",
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/com_3.jpg",
        },
        {
          original:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/com_4.jpg",
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/com_4.jpg",
        },
      ],
      hero: {
        image:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/com_2.jpg",
        title: "Commercial",
        subtitle: "From one local business to another",
      },
      category: "Don't sacrifice your office space for a spare bedroom",
      contentArray: [
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minus
        tempore hic fuga, eveniet totam odit, repellendus delectus earum
        suscipit quae obcaecati amet assumenda explicabo dolore saepe laboriosam
        laudantium illo?`,
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum
        eveniet similique vero praesentium laudantium aperiam consequatur, ab
        dolorem ipsum, enim nulla! Vitae molestiae possimus accusamus at
        laboriosam ea ex dolore laborum est voluptates earum qui eaque corrupti,
        omnis eum officiis a doloribus asperiores excepturi vel dolorem tempora.
        Cupiditate, obcaecati?`,
      ],
      footerArray: [
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magnam
    nihil, molestias doloribus et vitae reprehenderit explicabo odit
    libero accusamus quidem eos ratione? Sunt, numquam consequuntur?
    Doloribus, pariatur? Architecto, dignissimos inventore consectetur
    dicta deserunt eius, nulla natus nesciunt autem officiis sequi
    repudiandae nam eveniet unde. Saepe voluptatem odit quod temporibus
    tempore minus ab maiores obcaecati id architecto voluptatibus
    eveniet voluptas animi alias vitae, quae eos eum placeat nihil, odio
    deserunt?`,
      ],
    };

    const customProps = {
      sliderArray: [
        {
          original:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/tww_gallery_7.jpg",
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/tww_gallery_7.jpg",
        },
        {
          original:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/tww_gallery_12.jpg",
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/tww_gallery_12.jpg",
        },
        {
          original:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/tww_gallery_13.jpg",
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/tww_gallery_13.jpg",
        },
        {
          original:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/tww_gallery_14.jpg",
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/tww_gallery_14.jpg",
        },
      ],
      hero: {
        image:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/furniture_42.jpg",
        title: "Custom Woodwork",
        subtitle: "If you can imagine it we want to hear about it.",
      },
      category: "Don't sacrifice your office space for a spare bedroom",
      contentArray: [
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minus
        tempore hic fuga, eveniet totam odit, repellendus delectus earum
        suscipit quae obcaecati amet assumenda explicabo dolore saepe laboriosam
        laudantium illo?`,
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum
        eveniet similique vero praesentium laudantium aperiam consequatur, ab
        dolorem ipsum, enim nulla! Vitae molestiae possimus accusamus at
        laboriosam ea ex dolore laborum est voluptates earum qui eaque corrupti,
        omnis eum officiis a doloribus asperiores excepturi vel dolorem tempora.
        Cupiditate, obcaecati?`,
      ],
      footerArray: [
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magnam
    nihil, molestias doloribus et vitae reprehenderit explicabo odit
    libero accusamus quidem eos ratione? Sunt, numquam consequuntur?
    Doloribus, pariatur? Architecto, dignissimos inventore consectetur
    dicta deserunt eius, nulla natus nesciunt autem officiis sequi
    repudiandae nam eveniet unde. Saepe voluptatem odit quod temporibus
    tempore minus ab maiores obcaecati id architecto voluptatibus
    eveniet voluptas animi alias vitae, quae eos eum placeat nihil, odio
    deserunt?`,
      ],
    };

    // content for demo
    // this data will normally be held in a server cand axios called on mount.
    let contentObject = {
      kitchen: {
        h2Tag: "Tubac Woodworks",
        pTag:
          "We service a variety of different woodworking needs. From Kitchen, Bath, Vanity, Furniture, Wall Beds, Storage, and more. We service both Residential and Commercial. New homes and remodels. Small and large projects, but the one thing they all have in common is the genuine awe that our customers feel after the job is done.",
        pTag2:
          "Below is a list of different services that Tubac Woodworks has to offer. We would be both honored and excited to hear more about your project and would love to know where we can help!",
        pTag3: (
          <React.Fragment>
            Not sure where to start? Head over to our{" "}
            <a href="/gallery">Gallery</a> to draw insperation. Already know
            what you're looking for? Feel free to give us a call at{" "}
            <a href="tel:+15206250050">(520) 625-0050</a> and ask for Tom.
          </React.Fragment>
        ),
      },
    };

    const kitchenBoxes = [
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

    const woodTypes = [
      {
        title: "Maple",
        body: "Light in color, great for doors, bookshelves, and desks",
        image_uri:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/wood_maple.jpg",
      },
      {
        title: "Birch",
        body: "A light colored wood. Wavey grain with knots.",
        image_uri:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/wood_birch.jpg",
      },
      {
        title: "Pine",
        body: "A hard wood with lots of character. Perfect for bathrooms and furniture",
        image_uri:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/wood_pine.jpg",
      },
      {
        title: "Ash",
        body: "Much like the pine, this popular choice works well with all kinds of needs",
        image_uri:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/wood_ash.jpg",
      },
      {
        title: "Oak",
        body:
          "A strong and popular wood that holds up well over the years.",
        image_uri:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/wood_red_oak.jpg",
      },
      {
        title: "Walnut",
        body:
          "A tame multipurpose wood. Holds up well against regular wear and tear",
        image_uri:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/wood_walnut.jpg",
      },
      {
        title: "Cherry",
        body:
          "A deep red that works well in open areas",
        image_uri:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/wood_cherry.jpg",
      },
      {
        title: "Mahogany",
        body:
          "A Dark and elegant choice that's perfect for custom curniture and bookshelves.",
        image_uri:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/wood_mahogany.jpg",
      },
    ];

    if (this.props.user) {
      return (
        <div>
          <HeroSmart
            login={"Peter"}
            backgroundName={
              "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_kitchen_bath_vanity.jpg"
            }
            title="Services"
            subTitle="Love your home."
          />

          <NavBar
            isHidden={this.state.mobileNavHidden}
            toggle={this.toggleMobileNav}
          />

          <LayoutBasic
            h2Tag={contentObject.kitchen.h2Tag}
            pTag={contentObject.kitchen.pTag}
            pTag2={contentObject.kitchen.pTag2}
            pTag3={contentObject.kitchen.pTag3}
          />

          <LayoutThree login={"Peter"} image_info={kitchenBoxes} />

          <Signup submitResult={this.handleSignupResult} />

          <Footer />

          <Toast show={this.state.toastShow} onClose={this.toggleToast}>
            {this.state.toastMsg.map((element) => {
              return <StyledParagraph>{element}</StyledParagraph>;
            })}
          </Toast>
        </div>
      );
    } else {
      return (
        <div>
          {/* ==== */}
          {/* HERO */}
          {/* ==== */}
          <HeroSmart
            login={false}
            backgroundName={
              "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_kitchen_bath_vanity.jpg"
            }
            title="Services"
            subTitle="Love your home."
          />
          {/* ====== */}
          {/* HEADER */}
          {/* ====== */}
          <NavBar
            isHidden={this.state.mobileNavHidden}
            toggle={this.toggleMobileNav}
          />

          {/* ===== */}
          {/* INTRO */}
          {/* ===== */}
          <LayoutBasic
            h2Tag={contentObject.kitchen.h2Tag}
            pTag={contentObject.kitchen.pTag}
            pTag2={contentObject.kitchen.pTag2}
            pTag3={contentObject.kitchen.pTag3}
          />

          {/* ====== */}
          {/* BLOCKS */}
          {/* ====== */}
          <LayoutThree login={false} image_info={kitchenBoxes} />

          <StyledParagraph>
            Welcome to the Tubac Woodworks, Inc. Portfolio Web Page. This page
            provides us with an opportunity to showcase the work done by Tom
            Simons of Tubac Woodworks, Inc. Tom has been in business in Arizona
            since 1982, providing all areas of Pima and Santa Cruz Counties with
            quality products at competitive prices.
          </StyledParagraph>

          <LayoutThree login={false} image_info={woodTypes} />

          <StyledParagraph>
            Located near the southern Arizona town of Green Valley, Tubac
            Woodworks, Inc. serves the entire southern Arizona areas of Pima and
            Santa Cruz Counties, specializing in the building and installation
            of custom cabinetry for kitchens and baths, entertainment centers,
            bookcases, office desks, computer desks, armoires, wall-beds, and a
            variety of other wood products for the home, office, or business.
          </StyledParagraph>

          <StyledParagraph>
            We hope you enjoy your tour of the Tubac Woodworks, Inc website and
            look forward to hearing from you!
          </StyledParagraph>

          {/* =============== */}
          {/* KITCHEN CHAPTER */}
          {/* =============== */}
          <Chapter testing="props" chapterProps={kitchenProps} />

          {/* ============ */}
          {/* BATH CHAPTER */}
          {/* ============ */}
          <Chapter chapterProps={bathProps} />

          {/* =============== */}
          {/* WALLBED CHAPTER */}
          {/* =============== */}
          <Chapter chapterProps={wallBedProps} />

          {/* ================= */}
          {/* FURNITURE CHAPTER */}
          {/* ================= */}
          <Chapter chapterProps={furnitureProps} />

          {/* ============== */}
          {/* CUSTOM CHAPTER */}
          {/* ============== */}
          <Chapter chapterProps={commecrialProps} />

          {/* ================== */}
          {/* COMMERCIAL CHAPTER */}
          {/* ================== */}
          <Chapter chapterProps={customProps} />

          {/* ====== */}
          {/* SIGNUP */}
          {/* ====== */}
          <Signup submitResult={this.handleSignupResult} />

          {/* ====== */}
          {/* FOOTER */}
          {/* ====== */}
          <Footer />
          <Toast show={this.state.toastShow} onClose={this.toggleToast}>
            {this.state.toastMsg.map((element) => {
              return <StyledParagraph>{element}</StyledParagraph>;
            })}
          </Toast>
        </div>
      );
    }
  }
}

const StyledParagraph = styled.p`
  max-width: 1400px;
  padding: 0.5em 1em;
  font-weight: 400;
  margin: auto;
  font-size: 1.1em;
`;
