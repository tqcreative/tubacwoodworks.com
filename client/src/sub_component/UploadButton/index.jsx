import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

// This needs to be a smart component so that it can store the file in state
export default class UploadBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // This file starts at null because no files are selected at default
      selectedFile: null,
      tableName: props.tableNameProp,
    };
    this.uploadFileHandler = this.uploadFileHandler.bind(this);
    this.submitPhotoForUpload = this.submitPhotoForUpload.bind(this);
  }

  // This will set the file to the state
  uploadFileHandler(event) {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
      editMenu: "",
      loading: false,
    });
  }

  // This will send the file to the server
  submitPhotoForUpload(event) {
    // This assigns the file to a class object named FormData which is required to send the file
    // !!! WARNING !!! //
    // You cannot console log form data on server or on client, because it is a class object
    if (
      this.state.selectedFile === null ||
      this.state.selectedFile === undefined
    ) {
      // dont do anything. the state is null or undefined. This can cause errors
    } else {
      // there is a file stored in state. Lets try and upload it.
      let thisFilesName = this.state.selectedFile.name
        .toLowerCase()
        .split(".")[0];
      const data = new FormData();
      data.append(thisFilesName, this.state.selectedFile);
      let theTablesName = "";
      let uploadThisObject = {};

      switch (this.props.tableNameProp) {
        case "imageArray":
          uploadThisObject = { imageArray: thisFilesName + ".jpg" };
          theTablesName = "imageArray";
          break;
        case "kitchenTable":
          uploadThisObject = { kitchenTable: thisFilesName + ".jpg" };
          theTablesName = "kitchenTable";
          break;
        case "bathTable":
          uploadThisObject = { bathTable: thisFilesName + ".jpg" };
          theTablesName = "bathTable";
          break;
        case "furnitureTable":
          uploadThisObject = { furnitureTable: thisFilesName + ".jpg" };
          theTablesName = "furnitureTable";
          break;
        case "showcase":
          uploadThisObject = { showcase: thisFilesName + ".jpg" };
          theTablesName = "showcase";
          break;
        default:
          break;
      }

      // This call is sending the name of the file before it sends the file
      if (thisFilesName != null) {
        // call loading gif
        this.setState({ loading: true });

        // start axios call
        axios
          .post("/cms/GD8PQX3UV18999AARONWITHANEY/filename", {
            body: this.state.selectedFile.name,
          })
          .then((returnedData) => {
            //console.log(returnedData);
            // This call sends the file
            axios
              .post(
                "/cms/GD8PQX3UV18999AARONWITHANEY/upload",
                data,
                uploadThisObject
                // receive two    parameter endpoint url ,form data
              )
              // This returns the result
              .then((res) => {
                // console.log(res.data.msg);
                if (res.data.msg === "uploaded") {
                  //if content uploaded successfully then add this to the image database.
                  axios
                    .post(
                      `/cms/uploadfile/hash43b4h234bhj/${theTablesName}`,
                      uploadThisObject
                    )
                    .then((returnFromCall) => {
                      this.props.forceRefresh(); // This will refresh the components that need the gallery array that was just changed.
                      return;
                    });
                } else {
                  this.props.forceRefresh(); // This will refresh the components that need the gallery array that was just changed.
                  return;
                }
                // Update the images array in the mongo database
              })
              .finally(() => {
                // dismiss loading gif
                this.setState({ loading: false });
              });
          });
      } else {
        /* file name error */
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <StyledRoot className="upload_img_root">
          <h2>Upload a new photo.</h2>
          <input type="file" name="file" onChange={this.uploadFileHandler} />
          <button
            type="button"
            className="button"
            onClick={this.submitPhotoForUpload}
          >
            <ion-icon name="ios-save"></ion-icon>
          </button>
        </StyledRoot>
        <StyledLoadGif className={this.state.loading ? "" : "_hide"}>
          <img src="https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/100.gif" alt="loading..." />
        </StyledLoadGif>
      </React.Fragment>
    );
  }
}

// Notes: This component is positioned absolute top right and requires ion icons.
// Notes: The server will name the photo after it's original upload name. And is not friendly to "." in the names.

const StyledRoot = styled.section`
  padding: 1em;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1200px;

  input {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  h2 {
    font-weight: 900;
    text-transform: uppercase;
    width: 100%;
  }
`;

const StyledLoadGif = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.8);

  &._hide {
    display: none;
  }
`;
