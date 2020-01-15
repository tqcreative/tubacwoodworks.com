import React from "react";
// import "./style.css";

const ImageCard = ({arrayOfImages}) => {
  return (
    <div className="imagecard">
      <div className="img-container">
        

        <div className="image_div" style={{backgroundImage: `url(/cms/images/${arrayOfImages}`}}></div>
          
        
      </div>
    </div>
  );
  }

export default ImageCard;
