import React, { Component } from 'react'
import './quote.css';


const Quote = props => {
    let editMenu;

    function handleEdit(event) {
        // from here you can call the multer route and replace the image.
        // or if we want to get real fancy, lets call the toast and pass it some html to edit the image, quote, and who said it.
        // <download button>
        // <input field>
        // <input field>
    };

    //////////////////////////
    // !!!  SWAP THE TWO ELEMENTS do NOT DEPLOY
    /////////////////////////

    if (props.user === null) {
        console.log("you're not signe in.")
		editMenu = <div className="cms_gear" onClick={handleEdit}><ion-icon name="ios-cog"></ion-icon></div>
	} else if (props.user.local.username) {
        console.log("you're signed in.")
		editMenu = (
			<div className="cms_gear" onClick={handleEdit}>
                <ion-icon name="ios-cog"></ion-icon>
            </div>
		)
    };
    
    /*
        Next Step: Set so that the quote component can see how many quotes are being used on the page and fill its information based on that.
        Make an API call to fill quote from the database.
    */

    return (
        <div className="quote_root">
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