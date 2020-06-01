import React from "react";
import "./deleteButton.css";
import axios from "axios";

// This component takes its a prop of the parents imageIndex and imageTable and then makes an axios call to the table and removes the item at that index.

// This needs to be a smart component so that it can store the file in state
function DeleteButton(props) {
  ////////////////////////
  // required props
  // props are passed to the delete button from the ImageCard component
  // imageIndexNumber
  // imageIsInTable
  ////////////////////////

  const deleteThisItemFromThisArray = () => {
    //console.log(props.tableName); // this is the key we are looking for.
    axios("/cms/deletebuttonroute/", (req, res) => {}).then((theReturn) => {
      //console.log(theReturn.data); // returns an array full of objects.
      // set the returned object to an array so that the local computer can parse it.
      let theReturnedObjectArray = theReturn.data;
      // grab the items index number from your props
      let indexNumber = Number(props.imageIndexNumber);

      // go through the array of objects and find the one that has a key that matches the table name (passed through props)
      theReturnedObjectArray.forEach((objectInThisArray) => {
        if (objectInThisArray[props.tableName]) {
          let theFinalArray = objectInThisArray[props.tableName];
          let theId = objectInThisArray._id;
          let theTablesName = props.tableName;
          // is
          // console.log(theFinalArray[indexNumber]);
          if (theFinalArray.length <= 1) {
            // you only have 1 item in this array. Do not touch it.
            return;
          } else if (indexNumber == 0) {
            // we can shift this object
            theFinalArray.shift();
          } else if (indexNumber == theFinalArray.length - 1) {
            // we can pop this number
            theFinalArray.pop();
          } else {
            //wait what?
            theFinalArray.splice(indexNumber, 1);
          }

          let mongoObject = { none: theFinalArray };
          switch (theTablesName) {
            case "bathTable":
              mongoObject = { bathTable: theFinalArray };
              break;
            case "kitchenTable":
              mongoObject = { kitchenTable: theFinalArray };
              break;
            case "showcase":
              mongoObject = { showcase: theFinalArray };
              break;
            case "imageArray":
              mongoObject = { imageArray: theFinalArray };
              break;
            case "furnitureTable":
              mongoObject = { furnitureTable: theFinalArray };
            default:
              console.log("No Table Found.");
              break;
          }

          axios
            .put(`/cms/deletebuttonroute/put/${theId}`, mongoObject)
            .then((returnedData) => {
            //   console.log(returnedData);
            props.forceRefresh(); // this is passed down from the page component and will refresh the images after it is done.
            })
            .catch((err) => {
              console.error(err);
            });

          // remove that item from the array and console log the new array.
        } else {
          /* do nothing could not find the item in the array. */
        }
      });
    });
  };

  return (
    <div className="delete_button_root">
      <button
        type="button"
        className="button"
        onClick={deleteThisItemFromThisArray}
      >
        <ion-icon name="ios-trash"></ion-icon>
      </button>
    </div>
  );
}

export default DeleteButton;
// Notes: This component is positioned absolute top right and requires ion icons.
// Notes: The server will name the photo after it's original upload name. And is not friendly to "." in the names.
