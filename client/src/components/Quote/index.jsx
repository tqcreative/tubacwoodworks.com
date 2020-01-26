import React from 'react'
import './quote.css';
import UploadPhoto from '../../sub_component/UploadPhoto';
import axios from 'axios';

function Quote(props) {

    // props required to publish
    let backgroundImageForCheckbox = 'quote_2.jpg';
    let nameOfImage = 'quote_2'
    let uploadPhotoElement;
    let thisId = props.__id;
    let theH2 = props.textContent.h2;
    let theP = props.textContent.p;

    // check for signed in
    props.login === 'Peter' ?
    uploadPhotoElement = <UploadPhoto __parent_id={thisId} __parent_image_name={nameOfImage}/> :
    uploadPhotoElement = <noscript></noscript>

    

    return (
        <div className="quote_root">
            {uploadPhotoElement}
            <div id={thisId} style={{ backgroundImage: `url("/cms/images/${backgroundImageForCheckbox}")`}} className="background-img parallax" data-rellax-speed="-3"></div>
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