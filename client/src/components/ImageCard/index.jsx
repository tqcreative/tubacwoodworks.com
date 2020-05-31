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

// if theArray includes http then backgroundImage = url(theArray) else = url(`/cms/images/${theArray}`) line 29

const ImageCard = ({theArray, imageNumber, onClick, tableNameProp, logedIn}) => {
  return (
    <div tablename={tableNameProp} className="imagecard" image_number={imageNumber} onClick={()=> onClick(`/cms/images/${theArray}`)}>
      <div className="img-container">

        {logedIn === "Peter" ?
        <DeleteButton tableName={tableNameProp} imageIndexNumber={imageNumber} imageIsInTable={"TableName"} /> :
        <noscript></noscript>}
      
        <div className="item" style={ theArray.indexOf('http') == -1 ? {backgroundImage: `url(/cms/images/${theArray}`} : {backgroundImage: `url(${theArray})`}}></div>
      </div>
    </div>
  );
  }

export default ImageCard;
