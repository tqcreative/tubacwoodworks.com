import React, { Component } from "react";
import "./gallery.css";
import { NavBar } from "../../components/Navbar";
import HeroSmart from "../../components/HeroSmart";
import Footer from "../../components/Footer";
import Signup from "../../components/Signup";
import StateGallery from "../../components/stateGallery";
import UploadBtn from "../../sub_component/UploadButton";
import SmartSlider from "../../components/Slider";
import axios from "axios";
import Toast from "../../components/Toast";
import GalleryFlex from "../../components/GalleryFlex/GalleryFlex";
// import UploadLightBox from "../../components/UploadLightBox"; //PENDING: This is something for the next upload window.

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
    };
    this.changeTableName = this.changeTableName.bind(this);
    // bind signup and toast
    this.handleSignupResult = this.handleSignupResult.bind(this);
    this.toggleToast = this.toggleToast.bind(this);
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
    // set the state of tableName to kitchenTable
    if (event.target.name != null && event.target.name != undefined) {
      this.setState({ tableName: `${event.target.name}` });

      this.state.allImageTables.forEach((table) => {
        if (table[event.target.name]) {
          this.setState({
            arrayOfImages: table[event.target.name],
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
          <div className="gallery_page_root">
            <HeroSmart
              login={"Peter"}
              backgroundName={"gallery_hero"}
              title="Gallery"
              subTitle="come see our work"
            />
            <NavBar styleProp={this.state.styleProp} />
            <SmartSlider smartArray={this.state.sliderArray} />
            <div className="matthews_bootstrap_button_wrap">
              <button
                type="button"
                name="imageArray"
                className="matthews_bootstrap_button"
                onClick={this.changeTableName}
              >
                All Images
              </button>
              <button
                type="button"
                name="kitchenTable"
                className="matthews_bootstrap_button"
                onClick={this.changeTableName}
              >
                Kitchen Images
              </button>
              <button
                type="button"
                name="bathTable"
                className="matthews_bootstrap_button"
                onClick={this.changeTableName}
              >
                Bath Images
              </button>
              <button
                type="button"
                name="furnitureTable"
                className="matthews_bootstrap_button"
                onClick={this.changeTableName}
              >
                Furniture Images
              </button>
            </div>
            <div style={{ position: "relative" }}>
              <UploadBtn tableNameProp={this.state.tableName} />
            </div>
            {/* <StateGallery
              logedIn={"Peter"}
              tableNameProp={this.state.tableName}
              theArray={this.state.arrayOfImages}
            /> */}
            <Signup submitResult={this.handleSignupResult} />
            <Footer />
            <Toast show={this.state.toastShow} onClose={this.toggleToast}>
              {this.state.toastMsg.map((element) => {
                return <p>{element}</p>;
              })}
            </Toast>
          </div>
          {/* <UploadLightBox /> */}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="gallery_page_root">
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
            <div className="matthews_bootstrap_button_wrap">
              <button
                type="button"
                name="imageArray"
                className="matthews_bootstrap_button"
                onClick={this.changeTableName}
              >
                All Images
              </button>
              <button
                type="button"
                name="kitchenTable"
                className="matthews_bootstrap_button"
                onClick={this.changeTableName}
              >
                Kitchen
              </button>
              <button
                type="button"
                name="bathTable"
                className="matthews_bootstrap_button"
                onClick={this.changeTableName}
              >
                Bath
              </button>
              <button
                type="button"
                name="furnitureTable"
                className="matthews_bootstrap_button"
                onClick={this.changeTableName}
              >
                Furniture
              </button>
            </div>
            {/* <StateGallery
              logedIn={false}
              tableNameProp={this.state.tableName}
              theArray={this.state.arrayOfImages}
            /> */}
            <GalleryFlex theArray={this.state.arrayOfImages} />
            <Signup submitResult={this.handleSignupResult} />
            <Footer />
            <Toast show={this.state.toastShow} onClose={this.toggleToast}>
              {this.state.toastMsg.map((element) => {
                return <p>{element}</p>;
              })}
            </Toast>
          </div>
        </React.Fragment>
      );
    }
  }
}
