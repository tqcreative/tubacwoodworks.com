import React from "react";
import "./imageCard.css";

const ImageCard = ({arrayOfImages, onClick}) => {
  return (
    <div className="imagecard" onClick={()=> onClick(`/cms/images/${arrayOfImages}`)}>
      <div className="img-container">
        <div className="item" style={{backgroundImage: `url(/cms/images/${arrayOfImages}`}}></div>
      </div>
    </div>
  );
  }

export default ImageCard;
