import React from "react";
import "./imageCard.css";
import DeleteButton from '../../sub_component/DeleteButton';

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


const ImageCard = ({arrayOfImages, imageNumber, onClick, tableNameProp}) => {
  return (
    <div tablename={tableNameProp} className="imagecard" image_number={imageNumber} onClick={()=> onClick(`/cms/images/${arrayOfImages}`)}>
      <div className="img-container">
        <DeleteButton tableName={tableNameProp} imageIndexNumber={imageNumber} imageIsInTable={"TableName"} />
        <div className="item" style={{backgroundImage: `url(/cms/images/${arrayOfImages}`}}></div>
      </div>
    </div>
  );
  }

export default ImageCard;
