import React, { Component } from 'react'
import './quote.css';
import axios from 'axios';

const Quote = props => {
    let editMenu;

    function uploadFileHandler(event) {
        console.log(event.target.files);
        event.preventDefault();
        
        axios.post('/upload', "werd").then(res => {
            console.log(res)
        })
    };

    //////////////////////////
    // !!!  SWAP THE TWO ELEMENTS do NOT DEPLOY
    /////////////////////////

    // check to see if a user is signed into this components parent by viewing prop.user and seeing if it is still set to the default (App.jsx) of 'null';
    if (props.user === null) {

        // editMenu = <div></div>
        editMenu =
            <div className="cms_gear">
                <form action="https:localhost:3000/upload" method="POST" enctype="multipart/form-data" >
                    <input type="file" name="myImage" />
                    <button type="submit" class="btn">submit</button>
                </form>
            </div>

    } else if (props.user.local.username) {

        editMenu = <div className="cms_gear" onClick={uploadFileHandler}><ion-icon name="ios-cog"></ion-icon></div>

    };

    return (
        <div className="quote_root">
            {/* {console.log(props.user)} */}
            {editMenu};
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

export default Quote;