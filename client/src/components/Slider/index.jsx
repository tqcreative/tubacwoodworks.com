import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../Slider/slider.css";
import styled from "styled-components";

export default class SmartSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBullets: true,
      infinite: true,
      showThumbnails: false,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: false,
      showNav: true,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 2000,
      slideOnThumbnailOver: false,
      thumbnailPosition: "bottom",
      arrayOfImages: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.slideInterval !== prevState.slideInterval ||
      this.state.slideDuration !== prevState.slideDuration
    ) {
      // refresh setInterval
      this._imageGallery.pause();
      this._imageGallery.play();
    }
  }

  render() {
    // console.log(this.state.arrayOfImages);
    // console.log(this.props.smartArray)

    return (
      <div>
        <StyledRoot className="smartslider_root">
          <div className="frame">
            <ImageGallery
              items={this.props.smartArray}
              lazyLoad={false}
              showBullets={this.state.showBullets}
              showFullscreenButton={
                this.state.showFullscreenButton &&
                this.state.showGalleryFullscreenButton
              }
              showPlayButton={
                this.state.showPlayButton && this.state.showGalleryPlayButton
              }
              showThumbnails={this.state.showThumbnails}
              showIndex={this.state.showIndex}
              showNav={this.state.showNav}
              isRTL={this.state.isRTL}
              thumbnailPosition={this.state.thumbnailPosition}
              slideDuration={parseInt(this.state.slideDuration, 1)}
              slideInterval={parseInt(this.state.slideInterval, 1)}
              slideOnThumbnailOver={this.state.slideOnThumbnailOver}
            />
          </div>
        </StyledRoot>
        {/* <div className="buttons">
                 <button type="button" className="btn btn-warning" onclick="kitchenSlider()">Kitchen & Bath </button>
                 <button type="button" className="btn btn-warning" onclick="furnitureSlider()">Furniture</button>
            </div> */}
      </div>
    );
  }
}

const StyledRoot = styled.section`
  margin: 1em auto;

  .frame {
    width: 50%;
    margin: auto;
  }

  @media (max-width: 768px) {
    .frame {
      width: 94%;
      margin: auto;
    }
  }
`;
