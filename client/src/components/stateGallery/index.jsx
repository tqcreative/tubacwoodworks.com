import React, { Component } from "react";
import ImageCard from "../../components/ImageCard";
import Toast from "../../components/Toast";
import styled from "styled-components";

class StateGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfImages: ["check_1.jpg"],
      toastShow: false,
      toastImage: "",
    };
    this.toggleToast = this.toggleToast.bind(this);
  }

  componentDidUpdate() {
    // console.log(this.props.theArray);
  }

  toggleToast(imgURL) {
    this.setState({ toastShow: !this.state.toastShow, toastImage: imgURL });
  }

  render(theArray) {
    return (
      <StyledRoot>
        {/* <ImageWrapper> */}
        {/* <div className="stateGallery_root" > */}

        <h2><span>Edit Gallery:</span> {this.props.galleryInfoName ? this.props.galleryInfoName : "Photos"}</h2>

        <StyledGallery>
          {this.props.theArray.map((img, index) => {
            return (
              <ImageCard
                logedIn={this.props.logedIn}
                tableNameProp={this.props.tableNameProp}
                imageNumber={index}
                key={img + index}
                toggleToast={this.toggleToast}
                className="item"
                theArray={img === undefined ? "kitchen_1.jpg" : img}
                forceRefresh={
                  this.props.forceRefresh /* PASS FORCEREFRESH TO IMAGE */
                }
              />
            );
          })}
        </StyledGallery>
        {/* </div> */}
        {/* </ImageWrapper> */}
        <Toast show={this.state.toastShow} onClose={this.toggleToast}>
          <div>
            <img
              src={this.state.toastImage}
              alt="Tubac Woodworks AZ"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </Toast>
      </StyledRoot>
    );
  }
}

// ========== //
//   STYLES   //
// ========== //

const StyledRoot = styled.section`
  max-width: 1200px;
  padding: 1em;
  margin: 0 auto;

  h2 {
    text-transform: uppercase;
    font-weight: 900;

    span {
      font-weight: 200;
      text-transform: capitalize;
    }
  }
`;

const StyledGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  padding-bottom: 2em;
`;

// EXPORT
export default StateGallery;
