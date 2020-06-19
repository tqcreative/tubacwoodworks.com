import React, { Component } from "react";
import "./gallery.css";
import { NavBar } from "../../components/Navbar";
import HeroSmart from "../../components/HeroSmart";
import Footer from "../../components/Footer";
import Signup from "../../components/Signup";
import { FaToilet, FaPhotoVideo, FaTrophy } from "react-icons/fa";
import { GiDesk } from "react-icons/gi";
import { IoIosBed } from "react-icons/io";
import { MdKitchen } from "react-icons/md";
import UploadBtn from "../../sub_component/UploadButton";
import axios from "axios";
import Toast from "../../components/Toast";
import GalleryFlex from "../../components/GalleryFlex/GalleryFlex";
import StateGallery from "../../components/stateGallery";
import styled from "styled-components";

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      mobileNavHidden: true,
      styleProp: "absolute",
      arrayOfImages: ["check_1.jpg"],
      tableName: "showcase",
      galleryInfoName: "",
      galleryName: "Showcase",
      toastMsg: [],
      toastShow: false,
      sliderArray: [],
      galleryOptionsFrontEnd: [
        {
          frontEnd: true,
          gallery: "Showcase",
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/thumb_2.jpg",
          name: "showcaseGrid", // Name of the Table it pulls its images from.
          icon: <FaTrophy />,
          // onClick: {this.changeTableName} // needs to be added to the button creation within the class
        },
        {
          frontEnd: true,
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/thumb_8.jpg",
          gallery: "Kitchen",
          name: "kitchenTable", // Name of the Table it pulls its images from.
          icon: <MdKitchen />,
        },
        {
          frontEnd: true,
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/thumb_7.jpg",
          gallery: "Bathroom",
          name: "bathTable", // Name of the Table it pulls its images from.,
          icon: <FaToilet />,
        },
        {
          frontEnd: true,
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/thumb_6.jpg",
          gallery: "Furniture",
          name: "furnitureTable",
          icon: <GiDesk />,
        },
        {
          frontEnd: true,
          gallery: "Wall Beds",
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/thumb_5.jpg",
          name: "imageArray", // Name of the Table it pulls its images from.
          icon: <IoIosBed />,
        },
        {
          frontEnd: true,
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/thumb_4.jpg",
          gallery: "More Photos",
          name: "showcase",
          icon: <FaPhotoVideo />,
        },
        {
          frontEnd: false,
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/d18.jpg",
          gallery: "showroom",
          name: "showroom",
          icon: <FaPhotoVideo />,
        },
        {
          frontEnd: false,
          thumbnail:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/woodworking_5.jpg",
          gallery: "tubacwoodworks",
          name: "tubacwoodworks",
          icon: <FaPhotoVideo />,
        },
      ],
    };
    this.changeTableName = this.changeTableName.bind(this);
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
    this.handleSignupResult = this.handleSignupResult.bind(this);
    this.toggleToast = this.toggleToast.bind(this);
    this.forceRefreshGallery = this.forceRefreshGallery.bind(this);
  }

  forceRefreshGallery() {
    // This requries grabbing the new list of images from the database.
    // PENDING the database is still broken and includes /imagename.jpg rather than the url to AWS. Not fixed yet.

    axios.get("/cms/kitchenbathvanity").then((newList) => {
      this.setState({ allImageTables: newList.data });
      newList.data.forEach((table) => {
        if (table.name === this.state.tableName) {
          this.setState({ arrayOfImages: table[this.state.tableName] });
        }
      });
    });
  }

  componentDidMount() {
    // window reset
    window.scrollTo(0, 0);
    this.setState({ mobileNavHidden: true });

    axios.get("/cms/kitchenbathvanity").then((collectData) => {
      this.setState({ allImageTables: collectData.data });

      let arrayOfObjects = [];

      this.state.allImageTables.forEach((table) => {
        if (table.showcase) {
          this.setState({ arrayOfImages: table.showcase });
        }

        if (table.showcaseGrid) {
          // console.log(table.showcaseGrid);

          for (let i = 0; i < table.showcaseGrid.length; i++) {
            let newObjectItem = {
              original: `${table.showcaseGrid[i]}`,
              thumbnail: `${table.showcaseGrid[i]}`,
            };
            arrayOfObjects.push(newObjectItem);
          }
        }
      });

      this.setState({ sliderArray: arrayOfObjects });
    });
  }

  handleSignupResult(msg) {
    // console.log(msg);
    this.setState({ toastMsg: msg, toastShow: true });
  }

  toggleMobileNav() {
    this.setState({ mobileNavHidden: !this.state.mobileNavHidden });
  }

  toggleToast() {
    this.setState({ toastShow: !this.state.toastShow });
  }

  changeTableName(event) {
    let galleryName = "";
    let galleryInfoName = "";
    let pretyName = "Photo";

    if (event.target.parentNode.name) {
      galleryName = event.target.parentNode.name;
      galleryInfoName = event.target.parentNode.attributes.galleryInfoName
        ? event.target.parentNode.attributes.galleryInfoName.value
        : event.target.parentNode.name;
    } else {
      galleryName = event.target.name;
      galleryInfoName = event.target.attributes.galleryInfoName
        ? event.target.attributes.galleryInfoName.value
        : event.target.name;
    }

    // Turn on all box shadows before selection happens.
    const list = document.querySelectorAll(".gallery_button");
    for (var i = 0; i < list.length; ++i) {
      list[i].classList.remove("selected");
    }

    // Turn off box shadow for selected.
    document.getElementById(`${galleryName}_shadow`).classList.add("selected");

    // Update Pretty Name
    switch (galleryName) {
      case "showcaseGrid":
        pretyName = "Showcase";
        break;
      case "kitchenTable":
        pretyName = "Kitchen";
        break;
      case "bathTable":
        pretyName = "Bath & Vanity";
        break;
      case "furnitureTable":
        pretyName = "Furniture";
        break;
      case "imageArray":
        pretyName = "Wall Beds";
        break;
      case "showcase":
        pretyName = "More Photos";
        break;
      case "tubacwoodworks":
        pretyName = "Our Story";
        break;
      case "showroom":
        pretyName = "Show Room";
        break;
      case "showcase":
        pretyName = "Showcase";
        break;
      case "tubacwoodworks":
        pretyName = "Company Photos";
        break;
      default:
        break;
    }

    if (galleryName !== null && galleryName !== undefined) {
      this.setState({ tableName: `${galleryName}` });
      this.state.allImageTables.forEach((table) => {
        if (table[galleryName]) {
          this.setState({
            arrayOfImages: table[galleryName],
            galleryInfoName: galleryInfoName,
            galleryName: pretyName,
          });
        }
      });
    } else {
      //dont do anything!
    }
  }

  render() {
    if (this.props.user) {
      return (
        <React.Fragment>
          <StyledRoot className="gallery_page_root">
            <HeroSmart
              login={"Peter"}
              backgroundName={
                "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_gallery.jpg"
              }
              title="Gallery"
              subTitle="come see our work"
            />
            <NavBar
              isHidden={this.state.mobileNavHidden}
              toggle={this.toggleMobileNav}
            />

            {/* <SmartSlider smartArray={this.state.sliderArray} /> */}

            <StyledButtons>
              {this.state.galleryOptionsFrontEnd.map((buttonInfo, index) => {
                if (buttonInfo.frontEnd) {
                  return (
                    <button
                      key={index}
                      className="matthews_bootstrap_button"
                      type="button"
                      name={buttonInfo.name}
                      onClick={this.changeTableName}
                      style={{
                        background: `url(${buttonInfo.thumbnail})`,
                        backgroundSize: "cover",
                      }}
                    >
                      {buttonInfo.icon}
                      <span>{buttonInfo.gallery}</span>
                    </button>
                  );
                } else {
                  /* do not display front end, hide this element */
                }
              })}
            </StyledButtons>
            <div style={{ position: "relative" }}></div>
            <GalleryFlex theArray={this.state.arrayOfImages} />

            {/* this component is to delete images from the library. */}
            <StateGallery
              logedIn={"Peter"}
              tableNameProp={this.state.tableName}
              theArray={this.state.arrayOfImages}
              forceRefresh={this.forceRefreshGallery}
              galleryInfoName={this.state.galleryInfoName}
            />

            {/* this component is to add images to the library */}
            <UploadBtn
              tableNameProp={this.state.tableName}
              forceRefresh={this.forceRefreshGallery}
            />
            <StyledButtons>
              {this.state.galleryOptionsFrontEnd.map((buttonInfo, index) => {
                return (
                  <button
                    key={index}
                    className={`matthews_bootstrap_button`}
                    type="button"
                    name={buttonInfo.name}
                    galleryInfoName={buttonInfo.gallery}
                    onClick={this.changeTableName}
                    style={{
                      background: `url(${buttonInfo.thumbnail})`,
                      backgroundSize: "cover",
                    }}
                  >
                    {buttonInfo.icon}
                    <span>{buttonInfo.gallery}</span>
                  </button>
                );
              })}
            </StyledButtons>

            <StyledTitle>{this.state.galleryName} Gallery</StyledTitle>

            <Signup submitResult={this.handleSignupResult} />
            <Footer />
            <Toast show={this.state.toastShow} onClose={this.toggleToast}>
              {this.state.toastMsg.map((element) => {
                return <p>{element}</p>;
              })}
            </Toast>
          </StyledRoot>
          {/* <UploadLightBox /> */}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <StyledRoot className="gallery_page_root">
            <HeroSmart
              login={false}
              backgroundName={
                "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_gallery.jpg"
              }
              title="Gallery"
              subTitle="come see our work"
            />
            <NavBar
              isHidden={this.state.mobileNavHidden}
              toggle={this.toggleMobileNav}
            />
            {/* <SimpleSlider/> */}

            {/* <SmartSlider smartArray={this.state.sliderArray} /> */}

            {/* Button with kitchen/bath/furniture options that call their subsequent functions that set the state on click  */}

            <StyledButtons>
              {this.state.galleryOptionsFrontEnd.map((buttonInfo, index) => {
                if (buttonInfo.frontEnd) {
                  return (
                    <button
                      key={index}
                      className="matthews_bootstrap_button"
                      type="button"
                      name={buttonInfo.name}
                      onClick={this.changeTableName}
                      style={{
                        background: `url(${buttonInfo.thumbnail})`,
                        backgroundSize: "cover",
                      }}
                    >
                      <div
                        id={`${buttonInfo.name}_shadow`}
                        className={`gallery_button${buttonInfo.name === "showcase" ? " selected" : ""}`}
                      ></div>
                      {buttonInfo.icon}
                      <span>{buttonInfo.gallery}</span>
                    </button>
                  );
                } else {
                  /* do not display front end, hide this element */
                }
              })}
            </StyledButtons>

            <StyledTitle>{this.state.galleryName} Gallery</StyledTitle>

            <GalleryFlex theArray={this.state.arrayOfImages} />

            <Signup submitResult={this.handleSignupResult} />

            <Footer />

            <Toast show={this.state.toastShow} onClose={this.toggleToast}>
              {this.state.toastMsg.map((element) => {
                return <p>{element}</p>;
              })}
            </Toast>
          </StyledRoot>
        </React.Fragment>
      );
    }
  }
}

const StyledRoot = styled.section`
  padding: 0;
  margin: 0;
  max-width: none;
`;

const StyledButtons = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  padding: 0;
  margin: 1em auto;

  button {
    position: relative;
    border: none;
    /* background-color: rgba(#a6988d, .3); */
    color: #fff;
    font-size: 1.1em;
    font-weight: 900;
    border-radius: 8px;
    margin: 0.5em;
    width: 40vw;
    max-width: 170px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 40vw;
    max-height: 170px;
    color: #fff;
    flex-wrap: wrap;
    text-shadow: 0 1px 8px black;
    box-sizing: border-box;
    z-index: 1;

    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: opacity 0.2s;
      z-index: 1;

      &.selected {
        opacity: 0;
      }
    }

    svg {
      font-size: 2em;
      -webkit-filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.7));
      filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.7));
      z-index: 3;
    }

    span {
      display: block;
      width: 100%;
      text-shadow: 0 1px 8px black;
      font-size: 0.9em;
      z-index: 3;
    }

    &:hover {
      cursor: pointer;
    }

    &:hover div {
      opacity: 0;
    }

    &:active {
      transform: translateY(4px);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 4px #c0392b;
    }
  }

  @media (max-width: 768px) {
    .image-div {
      justify-content: center;
      display: flex;
      flex-wrap: wrap;
      margin: 0 !important;
      padding: 0 !important;

      .imagecard {
        margin: 3em auto !important;
      }
    }
  }
`;

const StyledTitle = styled.h2`
  width: 100%;
  max-width: 1400px;
  text-align: center;
  color: #a6988d;
  font-weight: 900;
  margin: 1.5em auto;
  font-size: 2em;
  padding: 0.2em;
  border-bottom: 1px solid #a6988d;
`;
