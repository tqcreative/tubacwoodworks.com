import React, { Component } from 'react'
import './quote.css';
import axios from 'axios';

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }

        this.uploadFileHandler = this.uploadFileHandler.bind(this);
        this.submitPhotoForUpload = this.submitPhotoForUpload.bind(this);
    };

    uploadFileHandler(event) {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
            editMenu: ""
        })
    };

    submitPhotoForUpload(event) {

        let thisFilesName = this.state.selectedFile.name.toLowerCase().split(".")[0];
        const data = new FormData()
        data.append( thisFilesName, this.state.selectedFile)

        axios.post('/cms/GD8PQX3UV18999AARONWITHANEY/filename', {
            body: this.state.selectedFile.name
        })
        .then(returnedData => {
            console.log(returnedData);
            axios.post("/cms/GD8PQX3UV18999AARONWITHANEY/upload", data, { 
                // receive two    parameter endpoint url ,form data
            })
          
          .then(res => { // then print response status
              console.log(res.statusText)
              console.log(res.data)
           })

        })

    };

    //////////////////////////
    // !!!  SWAP THE TWO ELEMENTS do NOT DEPLOY
    /////////////////////////


    render() {
        return (
            <div className="quote_root">
                <div className="cms_gear">

                    <input type="file" name="file" onChange={this.uploadFileHandler} />
                    <button type="button" className="button" onClick={this.submitPhotoForUpload}>Upload</button>

                </div>
                <div className="background-img parallax" data-rellax-speed="-3"></div>
                <div id="quote_1" className="quote">
                    <ion-icon name="quote"></ion-icon>
                    <p>
                        Tuboc Woodworks is the bee's knees.
                        They did such an amazing job!
                            <span>- "Matthew"</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default Quote;