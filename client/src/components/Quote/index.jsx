import React from 'react'
import './quote.css';
import UploadPhoto from '../../sub_component/UploadPhoto';
import PencilEdit from '../../sub_component/PencilEdit';
import axios from 'axios';

function Quote(props) {

    // props required to publish
    let backgroundImageForCheckbox = 'quote_2.jpg';
    let nameOfImage = 'quote_2'
    let uploadPhotoElement;
    let editText;
    let thisId = props.__id;
    let theH2 = props.textContent.h2;
    let theP = props.textContent.p;

    // check for signed in
    props.login === 'Peter' ?
    uploadPhotoElement = <UploadPhoto __parent_id={thisId} __parent_image_name={nameOfImage}/> :
    uploadPhotoElement = <noscript></noscript>

    // check for pencil edit
    props.login === 'Peter' ?
    //theTextObject={this.state.textInfoFromDatabase} theUpdateButton={this.updateStateTest} textContent={this.state.textInfoFromDatabase.quoteTop}
    editText = <PencilEdit theTextObject={props.theTextObject} theUpdateButton={props.theUpdateButton} /> :
    editText = <noscript></noscript>

    return (
        <div className="quote_root">
            {uploadPhotoElement}
            {editText}
            <div id={thisId} style={{ backgroundImage: `url("https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/bobsyouruncle.jpg`}} className="background-img parallax" data-rellax-speed="-3"></div>
            {/* <div id={thisId} style={{ backgroundImage: `url("/cms/images/${backgroundImageForCheckbox}")`}} className="background-img parallax" data-rellax-speed="-3"></div> */}
            <div id="quote_1" className="quote">
                <ion-icon name="quote"></ion-icon>
                <p>
                    {theP}
                    <span>- "{theH2}"</span>
                </p>
            </div>
        </div>
    )
}

export default Quote;