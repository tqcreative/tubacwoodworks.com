import React, { Component } from "react";
import "./gallery.css";
import Toast from "../../components/Toast";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staticGalleryImages: ["check_1.jpg"],
      toastShow: false,
      toastImage: "",
    };
    this.toggleToast = this.toggleToast.bind(this);
  }

  toggleToast(imgURL) {
    this.setState({ toastShow: !this.state.toastShow, toastImage: imgURL });
  }

  render(staticGalleryImageProp, onClick) {
    // console.log(this.props.staticGalleryImageProp)
    return (
      <section className="gallery_root" style={{ maxWidth: "1200px" }}>
        <h2>Showcase</h2>
        <h3>
          {" "}
          <a href="/gallery">
            <ion-icon name="ios-camera"></ion-icon>
          </a>
        </h3>

        <div id="gallery_container" className="gallery_container">
          {this.props.staticGalleryImageProp.map((img, index) => {
            // prevent more than 13 images from displaying in the grid
            if (index > 13) {
              return;
            } else {
              return (
                <div
                  className={`item item_${index + 1} span-${index + 1}`}
                  style={
                    img.indexOf("http") === -1
                      ? {
                          backgroundImage: `url(https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/${img}`,
                        }
                      : { backgroundImage: `url(${img}` }
                  }
                  key={img + index}
                  onClick={() => {
                    img.indexOf("http") === -1
                      ? this.toggleToast(
                          `https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/${img}`
                        )
                      : this.toggleToast(img);
                  }}
                ></div>
              );
            }
          })}
        </div>

        <Toast show={this.state.toastShow} onClose={this.toggleToast}>
          <div>
            <img
              src={this.state.toastImage}
              alt="Tubac Woodworks AZ"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </Toast>
      </section>
    );
  }
}

export default Gallery;
