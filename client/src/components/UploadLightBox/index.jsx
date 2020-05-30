import React, { Component } from "react";
import "./UploadLightBox.css";

export default class UploadLightBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      imageAlt: "",
      imageName: "",
      imageDescription: "",
      imageCategory: [],
    };
    this.hideLightBox = this.hideLightBox.bind(this);
    this.submitPhoto = this.submitPhoto.bind(this);
  }

  hideLightBox() {
    document.getElementById("UploadLightBox").classList.add("_hide");
  }

  submitPhoto(e) {
    e.preventDefault();
    alert('submitted1');
  }

  render() {
    // helper funtion
    const titleInput = `title_${Math.floor(Math.random() * 10) + Date.now()}`;
    const altInput = `alt_${Math.floor(Math.random() * 10) + Date.now()}`;
    const descriptionInput = `description_${
      Math.floor(Math.random() * 10) + Date.now()
    }`;
    const categories = ["kitchen", "bath & vanity", "furniture", "commercial"];

    return (
      <div id="UploadLightBox">
        <div className="shadow_box" onClick={this.hideLightBox}>
          {/* When clicked close this component. */}
        </div>
        <div className="light_box">
          <label htmlFor={titleInput}>Title:</label>{" "}
          <input type="text" name={titleInput} id={`upload${titleInput}`} />
          <label htmlFor={altInput}>Image Description:</label>{" "}
          <input type="text" name={altInput} id={`upload${altInput}`} />
          <label htmlFor={descriptionInput}>About:</label>{" "}
          <textarea
            type="textarea"
            name={descriptionInput}
            id={`upload${descriptionInput}`}
          />
          <div>
            {categories.map((category) => {
              return (
                <div>
                  <label htmlFor={category}> {category} </label>
                  <input type="checkbox" name={category} id={category} />
                </div>
              );
            })}
          </div>
          <button type="submit" onClick={this.submitPhoto}>upload</button>
        </div>
        {/* End of Lightbox */}
      </div>
    );
  }
}
