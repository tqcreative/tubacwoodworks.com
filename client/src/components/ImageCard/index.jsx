import React from "react";
import "./imageCard.css";

const ImageCard = ({arrayOfImages}) => {
  return (
    <div className="imagecard">
      <div className="img-container">
        <div className="item" style={{backgroundImage: `url(/cms/images/${arrayOfImages}`}}></div>
      </div>
    </div>
  );
  }

export default ImageCard;
