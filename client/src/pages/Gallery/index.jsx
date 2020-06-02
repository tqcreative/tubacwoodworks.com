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
import SmartSlider from "../../components/Slider";
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
      styleProp: "absolute",
      arrayOfImages: ["/images/check_1.jpg"],
      tableName: "showcase",
      toastMsg: [],
      toastShow: false,
      sliderArray: [],
      galleryOptionsFrontEnd: [
        {
          gallery: "Showcase",
          name: "showcaseGrid", // Name of the Table it pulls its images from.
          icon: <FaTrophy />,
          // onClick: {this.changeTableName} // needs to be added to the button creation within the class
        },
        {
          gallery: "Kitchen",
          name: "kitchenTable", // Name of the Table it pulls its images from.
          icon: <MdKitchen />,
        },
        {
          gallery: "Bathroom",
          name: "bathTable", // Name of the Table it pulls its images from.,
          icon: <FaToilet />,
        },
        {
          gallery: "Furniture",
          name: "furnitureTable",
          icon: <GiDesk />,
        },
        {
          gallery: "Wall Beds",
          name: "imageArray", // Name of the Table it pulls its images from.
          icon: <IoIosBed />,
        },
        {
          gallery: "More Photos",
          name: "showcase",
          icon: <FaPhotoVideo />,
        },
      ],
    };
    this.changeTableName = this.changeTableName.bind(this);
    // bind signup and toast
    this.handleSignupResult = this.handleSignupResult.bind(this);
    this.toggleToast = this.toggleToast.bind(this);
    this.forceRefreshGallery = this.forceRefreshGallery.bind(this);
  }

  forceRefreshGallery() {
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

  componentDidMount() {
    window.scrollTo(0, 0);
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

  toggleToast() {
    this.setState({ toastShow: !this.state.toastShow });
  }

  changeTableName(event) {
    let galleryName = "";
    if (event.target.parentNode.name) {
      galleryName = event.target.parentNode.name;
    } else {
      galleryName = event.target.name;
    }

    if (galleryName !== null && galleryName !== undefined) {
      this.setState({ tableName: `${galleryName}` });

      this.state.allImageTables.forEach((table) => {
        if (table[galleryName]) {
          this.setState({
            arrayOfImages: table[galleryName],
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
              backgroundName={"gallery_hero"}
              title="Gallery"
              subTitle="come see our work"
            />
            <NavBar styleProp={this.state.styleProp} />
            <SmartSlider smartArray={this.state.sliderArray} />
            <StyledButtons>
              {this.state.galleryOptionsFrontEnd.map((buttonInfo, index) => {
                return (
                  <button
                    key={index}
                    className="matthews_bootstrap_button"
                    type="button"
                    name={buttonInfo.name}
                    onClick={this.changeTableName}
                  >
                    {buttonInfo.icon}
                    <span>{buttonInfo.gallery}</span>
                  </button>
                );
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
            />

            {/* this component is to add images to the library */}
            <UploadBtn
              tableNameProp={this.state.tableName}
              forceRefresh={this.forceRefreshGallery}
            />
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
              backgroundName={"gallery_hero"}
              title="Gallery"
              subTitle="come see our work"
            />
            <NavBar styleProp={this.state.styleProp} />
            {/* <SimpleSlider/> */}
            <SmartSlider smartArray={this.state.sliderArray} />
            {/* Button with kitchen/bath/furniture options that call their subsequent functions that set the state on click  */}
            <StyledButtons>
              {this.state.galleryOptionsFrontEnd.map((buttonInfo, index) => {
                return (
                  <button
                    key={index}
                    className="matthews_bootstrap_button"
                    type="button"
                    name={buttonInfo.name}
                    onClick={this.changeTableName}
                  >
                    {buttonInfo.icon}
                    <span>{buttonInfo.gallery}</span>
                  </button>
                );
              })}
            </StyledButtons>
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
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-height: 16px;
    max-width: 1000px;

    button {
        border: none;
        background-color: rgba(#a6988d, .3);
        color: #a6988d;
        font-size: 1.1em;
        line-height: 1.4em;
        font-weight: 800;
        padding: .5em;
        border-radius: 8px;
        margin: 0 .5em 1em .5em;
        width: 256px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;

        span {
          display: inline-block;
          padding-left: .5em;
        }


        &:hover{
            transform: translateY(2px);
            background-color: rgba($light, 1);
        }

        &:active {
            transform: translateY(5px);
        }
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

`;
