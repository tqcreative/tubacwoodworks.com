import React, { Component } from 'react';
import './uploadPhoto.css';
import axios from 'axios';

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//  !!! must have ID of parent to use this component !!! //
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// Requires props __parent_id  &&  __parent_image_name   //
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//<UploadPhoto __parent_id={thisId} __parent_image_name={backgroundImageName}/>
/////////////////////example/////////////////////////////////////

// This needs to be a smart component so that it can store the file in state
class UploadPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // This file starts at null because no files are selected at default
            selectedFile: null,
            backgroundImageName: this.props.__parent_image_name,
            upload: false
        }
        this.uploadFileHandler = this.uploadFileHandler.bind(this);
        this.submitPhotoForUpload = this.submitPhotoForUpload.bind(this);
    };

    ////////////////////////
    // required props
    // __parent_image_name
    ////////////////////////

    /////////////////////////////////
    // to collect the image's name we 
    // will grab it from the id being passed.
    /////////////////////////////////

    componentDidMount() {
        // below is the logic for getting then name from .jpg files in the event you do not want to pass props.
        //let imageUrl = document.getElementById(this.props.__parent_id).style.backgroundImage;
        //console.log(document.getElementById(this.props.__parent_id).style.backgroundImage);
        // return will look something like "url(blah/blahblah/image.jpg")
        // we are going to grab just the name 'image' from this string and pass that to our server.
        // console.log(imageUrl)
        // console.log(imageUrl.indexOf('images/'))
        // console.log(imageUrl.indexOf('.jpg'))
        // let imageUrl = document.getElementById(this.props.__parent_id).style.backgroundImage;
        // let fullImageName = imageUrl.slice((imageUrl.indexOf('images/') + 7),imageUrl.indexOf('.jpg'));
        // console.log(fullImageName);
        // this.setState({
        //     backgroundImageName: fullImageName
        // });
        // console.log(this.state.backgroundImageName);
        // this means the image will always have to be a .jpg (server has been forced to take in jpgs)
        //console.log(this.props)
    }

    // This will set the file to the state
    uploadFileHandler(event) {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
            editMenu: ""
        })
    };

    // See notes in UploadButton for more details.

    submitPhotoForUpload(event) {
        if (this.state.selectedFile === null || this.state.selectedFile === undefined) {
        // do nothing. There is no file selected yet.
        console.log(this.state.backgroundImageName);
        } else {
            // there is a file stored in state. Lets try and upload it.
            // use the name of the current background.
            let thisFilesName = this.state.backgroundImageName;
            const data = new FormData()
            data.append(thisFilesName, this.state.selectedFile)
        // This call is sending the name of the file before it sends the file
        if (thisFilesName != null) {
            axios.post('/cms/GD8PQX3UV18999AARONWITHANEY/filename', {
                body: this.state.backgroundImageName
            })
            .then(returnedData => {
                //console.log(returnedData);
                // This call sends the file 
                axios.post("/cms/GD8PQX3UV18999AARONWITHANEY/upload", data, {
                    // receive two    parameter endpoint url ,form data
                })
                // This returns the result
                .then(res => { // then print response status
                    // background picture changed.
                    console.log('background picture has been changed.');
                    console.log(res);
                    this.setState({upload: true})
                })
            })
        } else { /* file name error */};
        }

    };

    render() {
        return (
            <div className="upload_img_root">
                <input type="file" name="file" onChange={this.uploadFileHandler} />
                <button type="button" className="button" onClick={this.submitPhotoForUpload}><ion-icon name="ios-save"></ion-icon></button>
            </div>
        )
    }
}

export default UploadPhoto;
// Notes: This component is positioned absolute top right and requires ion icons.
// Notes: The server will name the photo after it's original upload name. And is not friendly to "." in the names.