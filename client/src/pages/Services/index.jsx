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
        `Theres alot that goes into the planning of a new kitchen; along with design questions that we can help you with. "Where do I put that island?"  "What type of wood is going to hold up over the years?"  "What color should the cupboards be?"`,
      ],
      footerArray: [
        <React.Fragment>
          <p>
            <strong>Island</strong> &ndash;{" "}
            <em>
              Gives you that extra counter top space you have been missing for
              far too long
            </em>
          </p>
          <p>
            <strong>Lazy Susan</strong> &ndash;{" "}
            <em>
              Allows you a convienant way to utilize the normally usable corner
              cabinet space.
            </em>
          </p>
          <p>
            <strong>Pantry</strong> &ndash;{" "}
            <em>
              An unorganized kitchen can make for a caotic cooking experience,
              give your self a space to storage everything neatly to make
              cooking that much easier.
            </em>
          </p>
          <p>
            <strong>Counter Bar</strong> &ndash;{" "}
            <em>
              Tall counterspaces are perfect for a spot to place a few stylish stools.
            </em>
          </p>
        </React.Fragment>,
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
      category: "Bathroom Upgrades",
      contentArray: [
        `Under the sink doesnt just have to be a place for the cat to hide`,
        `Turn extra space into storage or even extend your counter space into a Hers & His sink combo. Increase walk space with a barn door instead of a traditional swinging door. Let us help you add zen to one of the most sacred places in the house. `,
      ],
      footerArray: [
        <React.Fragment>
          Though our kids believe we can do anything. We know some work should
          be left to the professionals. It's because of this we take strategic
          partners when consulting on{" "}
          <em>tile work, general construction, foundations, plumbing,</em> and
          other non-wood related needs.
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
      category:
        "Who says you cant have a spacious office",
      contentArray: [
        <React.Fragment><strong>&amp; a guest bedroom for when the inlaws come to visit!</strong> A bed can take up a lot of floor space, with a Wall Bed you can hide that mattress in a attractive looking cabinet when your not using it. And no one would be the wiser`,
        `Maybe you also wanted a workout studio where you can close the door, throw on some music and get to burning some calories.  Just fold that bed out of the way and act like it's not even there.</React.Fragment> ,
      ],
      footerArray: [
        <React.Fragment>
          In addition to Wall Beds, we also can help you decorate your office
          with custom <strong>desks</strong>, <strong>armour</strong>, <strong>bookshelves</strong>, or <strong>reading stands</strong>.
        </React.Fragment>,
      ],
    };

    const furnitureProps = {
      sliderArray: [
        {
          original:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/dsc_0131.jpg",
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/dsc_0131.jpg",
        },
        {
          original:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/furniture_7.jpg",
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/furniture_7.jpg",
        },
        {
          original:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/wine_bar_1.jpg",
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/wine_bar_1.jpg",
        },
      ],
      hero: {
        image:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/dsc_0017.jpg",
        title: "Wall Beds",
        subtitle: "Custom Furniture",
      },
      category: "No need to hunt down the perfect night stand. Design it!",
      contentArray: [
        `Finding furniture you love can be a journey, one that could lead to settling on something that works, but doesnt quite fit the room. We understand! Custom furniture is one of the things we specialize in. Everything from book shelves to a clasic trunk that sits at the foot of your bed.`,
        `Want your home office to feel more like a library? Need somewhere to put your keys when you come through the door? Or perhaps you need a desk that creates the perfect energy you need to make your study about your work.`,
      ],
      footerArray: [
        <React.Fragment>
          Tables that include storage under the top, and even hallway closet
          shelves! These are just some of the few places finding the right peice
          for at a local furniture shop can really become a challenge. But
          there's more, we are able to <em>stain</em>, <em>paint</em>, or{" "}
          <em>lacquer</em> your new design in the shade you're actually looking
          for.
        </React.Fragment>,
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
      category: "You want to wow your visitors & So do we",
      contentArray: [
        <React.Fragment>
        Tubac Woodworks is proud to say we service other local businesses. They say:  <em>"When you are your own boss; You can work any 80 hours in the week you want."</em> Funny to hear, but as a small business ourselves we understand what that means as much as you do. 
        </React.Fragment>,
        `The experience you provide to your visitors and employees in one of the most rewarding experiences a business owner can have. So when it comes to having the right look in your front of stage, we've got you covered.`,
      ],
      footerArray: [
        <React.Fragment>
          So whether you are looking to add something new to your living room or upgrading your spair bedroom, Tubac Woodworks is here to help. 
        </React.Fragment>,
      ],
    };

    const customProps = {
      sliderArray: [
        {
          original:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/tww_gallery_12.jpg",
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/tww_gallery_12.jpg",
        },
        {
          original:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/tww_gallery_7.jpg",
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/tww_gallery_7.jpg",
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
        `
        Not quite sure how to describe that piece you are looking for in your entry way? Describe it to us! We have made custom pieces for clients over the years. And each one is a joy.
        `,
        `We can do barn doors to add space to small rooms. Side table, desk extensions and more. Lets get creative.`,
      ],
      footerArray: [
        <React.Fragment>
          <strong>Thank you</strong> for taking the time to read about the
          services we offer. While you're here feel free to check out the{" "}
          <a href="/gallery">Gallery</a> and see some of the work we've done
          around southern Arizona. We take a great deal of pride in our craft
          and <a href="/about">history</a>.
        </React.Fragment>,
      ],
    };

    // this data will normally be held in a server cand axios called on mount.
    let contentObject = {
      kitchen: {
        h2Tag: "Tubac Woodworks",
        pTag:
          <React.Fragment>We service a variety of different woodworking needs. From <strong>Kitchen</strong>, <strong>Bath</strong>, <strong>Vanity</strong>, <strong>Furniture</strong>, <strong>Wall Beds</strong>, <strong>Storage</strong>, and more. We service both Residential and Commercial. New homes and remodels. Small and large projects, but the one thing they all have in common is the genuine awe that our customers feel after the job is done.</React.Fragment>,
        pTag2:
          "Below is a list of different services that Tubac Woodworks has to offer. We would be both honored and excited to hear more about your project and where we can help!",
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
        title: "Home Remodels",
        body: "Let your home feel new again",
        image_uri:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/d10.jpg",
      },
      {
        title: "Islands",
        body: "Add more counter space, more storage, and more class to that unused kitchen space",
        image_uri:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/97f7c6bf-12d2-472f-975c-8634d6fe88a2.jpg",
      },
      {
        title: "Custom Designs",
        body: "Get an over the stove accent that adds that dark finish to every angle of your new kitchen",
        image_uri:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/gallery_5.jpg",
      },
    ];

    const woodTypes = [
      {
        mobile: true,
        title: "Maple",
        body: "Light in color, great for doors, bookshelves, and desks",
        image_uri:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/wood_maple.jpg",
      },
      {
        mobile: true,
        title: "Birch",
        body: "A light colored wood. Wavey grain with knots.",
        image_uri:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/wood_birch.jpg",
      },
      {
        mobile: true,
        title: "Pine",
        body:
          "A hard wood with lots of character. Perfect for bathrooms and furniture",
        image_uri:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/wood_pine.jpg",
      },
      {
        mobile: true,
        title: "Ash",
        body:
          "Much like the pine, this popular choice works well with all kinds of needs",
        image_uri:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/wood_ash.jpg",
      },
      {
        mobile: true,
        title: "Oak",
        body: "A strong and popular wood that holds up well over the years.",
        image_uri:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/wood_red_oak.jpg",
      },
      {
        mobile: true,
        title: "Walnut",
        body:
          "A tame multipurpose wood. Holds up well against regular wear and tear",
        image_uri:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/wood_walnut.jpg",
      },
      {
        mobile: true,
        title: "Cherry",
        body: "A deep red that works well in open areas",
        image_uri:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/wood_cherry.jpg",
      },
      {
        mobile: true,
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
            Find the right <strong>wood</strong> for you. We are able to craft in a variety of different styles and types. Some of the more popular ones range from <strong>Maple</strong>, <strong>Birch</strong>, <strong>Pine</strong>, <strong>Ash</strong>, <strong>Oak</strong>, <strong>Walnut</strong>, <strong>Cherry</strong>, and <strong>Mahogany</strong>. These range from a soft to hard, heavy grain to light grane and different natural colors.
          </StyledParagraph>

          <StyledParagraph>
            We also do our own finishes as well. You can choose from <strong>Natural</strong>, <strong>Painted</strong>, <strong>Stained</strong> <strong>Lacquered</strong>, or just <strong>sealed</strong>. With the combination of woods and finishes you're sure to love your new cabinets.
          </StyledParagraph>

          {/* ========== */}
          {/* WOOD TYPES */}
          {/* ========== */}
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

strong {
  color: #a6988d;
}

  span {
    display: inline-block;
  }
`;
