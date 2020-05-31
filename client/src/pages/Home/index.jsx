import React, { Component } from "react";
import { Header } from "../../components";
// import Signup from "../../components/Signup";
import Hero from "../../components/Hero";
import Numbers from "../../components/Numbers";
import Footer from "../../components/Footer";
import Toast from "../../components/Toast";
import Quote from "../../components/Quote";
import QuoteTwo from "../../components/Quote_2";
import Portfolio from "../../components/Portfolio";
import Gallery from "../../components/Gallery";
import Checkbox from "../../components/Checkbox";
import { NavBar } from "../../components/Navbar";
import Partners from "../../components/Partners";
import Phone from "../../sub_component/PhoneSlider";
import Signup from "../../components/Signup";
import Cookie from "../../sub_component/Cookie";
import axios from "axios";
import gsap from "gsap";
import styled from "styled-components";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      user: props.user,
      toastMsg: [],
      toastShow: false,
      navPos: "absolute",
      redirectTo: null,
      staticGalleryImages: ["/images/check_1.jpg"],
      showcaseImages: [
        "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/showcase_9.jpg",
      ],
      textInfoFromDatabase: {
        _id: "5e2fb19cbf1a343bc0ddd739",
        quoteTop: { h2: "", p: "", url: "#" },
        quoteBottom: { h2: "", p: "", url: "#" },
        checkerBox: { slotOne: "", slotTwo: "", slotThree: "" },
        partners: {
          partner_1: { name: " ", description: " ", url: "#", picture: "#" },
          partner_2: { name: " ", description: " ", url: "#", picture: "#" },
          partner_3: { name: " ", description: " ", url: "#", picture: "#" },
          partner_text: { text: " ", backgroundImage: "#" },
        },
        hero: { logo: "#", h2: "#" },
        portfolio: {
          box_1: { title: "", description: "", background: "" },
          box_2: { title: "", description: "", background: "" },
          box_3: { title: "", description: "", background: "" },
          box_4: { title: "", description: "", background: "" },
          box_5: { title: "", description: "", background: "" },
          box_6: { title: "", description: "", background: "" },
        },
      },
    };
    // bind signup and toast
    this.handleSignupResult = this.handleSignupResult.bind(this);
    this.toggleToast = this.toggleToast.bind(this);
    // bind login
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // bind axios call to fill home page data.
    this.callForHomepageData = this.callForHomepageData.bind(this);
    this.callImagesToLoad = this.callImagesToLoad.bind(this);
    this.updateTextDatabase = this.updateTextDatabase.bind(this);
    this.updateStateTest = this.updateStateTest.bind(this);
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    this.fileUploadHandler = this.fileUploadHandler.bind(this);
  }

  // file upload.
  fileSelectedHandler(event) {
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0],
    });
  }

  fileUploadHandler() {}

  //update text site wide.
  updateTextDatabase(event) {
    event.preventDefault();
    // console.log("=================================");
    // console.log(event.target);
    // console.log(this.state.textInfoFromDatabase);
    // console.log("=================================");
    axios
      .put(
        `/cms/homepage/text/${this.state.textInfoFromDatabase._id}`,
        this.state.textInfoFromDatabase
      )
      .then((data) => {
        console.log(this.state.textInfoFromDatabase);
        alert("Uploaded Text to Database.");
      });
  }

  // update state button
  updateStateTest(newTextObject) {
    // now lets set the state from the HOME level.
    // the newTextObject must contain the full state for this.state.textInfoFromDatabase
    this.setState({ textInfoFromDatabase: newTextObject });
  }

  // make an axios call to fill home page data.
  callForHomepageData() {
    axios.get("/cms/homepage").then((data) => {
      this.setState({ textInfoFromDatabase: data.data[0] });
    });
  }

  callImagesToLoad() {
    axios.get("/cms/kitchenbathvanity").then((collectData) => {
      console.log(collectData.data);
      collectData.data.forEach((libraryOfImages) => {
        if (libraryOfImages.showcaseGrid) {
          this.setState({ showcaseImages: libraryOfImages.showcaseGrid });
        } else if (libraryOfImages.static) {
          this.setState({ staticGalleryImages: libraryOfImages.static });
        }
      });
    });
  }

  // login change event for updating state.
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // hand form submit for login.
  handleSubmit(event) {
    event.preventDefault();
    this.props._login(this.state.username, this.state.password);
    this.setState({
      redirectTo: "/home",
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.callForHomepageData();
    this.callImagesToLoad();
    gsap.from("#hero_quote", {
      delay: 0.5,
      opacity: 0,
      duration: 1,
      x: 750,
      ease: "power4",
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
    if (this.props.user) {
      return (
        <div className="Home home_root">
          <Header user={this.state.user} />
          <Hero
            theTextObject={this.state.textInfoFromDatabase}
            theUpdateButton={this.updateStateTest}
            login={"Peter"}
          />
          <NavBar loggedIn={true} styleProp={this.state.navPos} />
          <Numbers user={this.state.user} />
          <button
            onClick={this.updateTextDatabase}
            style={{
              position: "fixed",
              right: "0",
              top: "10%",
              color: "#fff",
              backgroundColor: "rgba(0,0,0,.6)",
              fontSize: "2em",
              zIndex: "10000",
            }}
          >
            <ion-icon name="ios-save"></ion-icon>
          </button>
          <Quote
            theTextObject={this.state.textInfoFromDatabase}
            theUpdateButton={this.updateStateTest}
            textContent={this.state.textInfoFromDatabase.quoteTop}
            login={"Peter"}
            __id={"homepage_first_quote"}
          />
          <Portfolio
            theTextObject={this.state.textInfoFromDatabase}
            theUpdateButton={this.updateStateTest}
            login={"Peter"}
            __id={"homepage_first_quote"}
          />
          <QuoteTwo
            textContent={this.state.textInfoFromDatabase.quoteBottom}
            login={"Peter"}
            __id={"landing_page_quote"}
          />
          <Gallery
            login={"Peter"}
            user={this.state.user}
            staticGalleryImageProp={this.state.showcaseImages}
          />
          <Checkbox
            textContent={this.state.textInfoFromDatabase.checkerBox}
            login={"Peter"}
            __id={"checkbox_image_home"}
          />
          <Partners
            textContent={this.state.textInfoFromDatabase.partners}
            login={"Peter"}
          />
          <Signup user={this.state.user} />
          {/* This is where sign out would come into play. */}
          <Footer user={this.state.user} />
          <Toast show={this.state.toastShow} onClose={this.toggleToast}>
            {this.state.toastMsg.map((element) => {
              return <p>{element}</p>;
            })}
          </Toast>
        </div>
      );
    } else {
      return (
        <div className="Home home_root">
          <Header user={this.state.user} />
          <Hero
            theTextObject={this.state.textInfoFromDatabase}
            theUpdateButton={this.updateStateTest}
            login={false}
          />
          <NavBar styleProp={this.state.navPos} />
          <Numbers user={this.state.user} />
          {/* <input type="file" onChange={this.fileSelectedHandler} /> */}
          {/* <button onClick={this.fileUploadHandler}>Save</button> */}
          <Quote
            theTextObject={this.state.textInfoFromDatabase}
            theUpdateButton={this.updateStateTest}
            textContent={this.state.textInfoFromDatabase.quoteTop}
            login={false}
            __id={"homepage_first_quote"}
          />
          <Portfolio
            theTextObject={this.state.textInfoFromDatabase}
            theUpdateButton={this.updateStateTest}
            login={false}
            __id={"homepage_first_quote"}
          />
          <QuoteTwo
            textContent={this.state.textInfoFromDatabase.quoteBottom}
            login={false}
            __id={"landing_page_quote"}
          />
          <Phone phoneNumber="5208405864" />
          <Gallery
            login={false}
            user={this.state.user}
            staticGalleryImageProp={this.state.showcaseImages}
          />
          <Checkbox
            textContent={this.state.textInfoFromDatabase.checkerBox}
            login={false}
            __id={"checkbox_image_home"}
          />
          <Partners
            textContent={this.state.textInfoFromDatabase.partners}
            login={false}
          />

          {/* login information hard coded into non-signed in user. */}
          <div className="LoginForm" style={{ display: "none" }}>
            <form>
              <label htmlFor="username">Username: </label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <button onClick={this.handleSubmit}>Login</button>
            </form>
          </div>

          {/* be sure to make a component out of this */}
          <Signup submitResult={this.handleSignupResult} />
          <Footer />
          <Cookie />
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

const StyledRoot = styled.main`
  overflow: hidden;
`;
