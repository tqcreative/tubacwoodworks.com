import React from "react";
import "./imageCard.css";

/////////////////
// Props
/////////////////
//
// onClick  => runs a prop that passes the image to the toast.
//
// arrayOfImages: is the name of the .jpg 
// 
// imageNumber: is the index of the number in the array.
// imageNumber is needed to delete the image from the array.
// this will remove the name from the array but NOT remove the image from the server.
//////////////////////////////////////////////////


const ImageCard = ({arrayOfImages, onClick, imageNumber}) => {
  return (
    <div className="imagecard" image_number={imageNumber} onClick={()=> onClick(`/cms/images/${arrayOfImages}`)}>
      <div className="img-container">
        <div className="item" style={{backgroundImage: `url(/cms/images/${arrayOfImages}`}}></div>
      </div>
    </div>
  );
  }

export default ImageCard;
