import React from 'react'
import './quote.css';
import UploadPhoto from '../../sub_component/UploadPhoto';
// import axios from 'axios';

function Quote(props) {

    // props required to publish
    let backgroundImageForCheckbox = 'quote_2.jpg';
    let nameOfImage = 'quote_2'
    let uploadPhotoElement;
    let thisId = props.__id;

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
                    Tuboc Woodworks is the bee's knees.
                    They did such an amazing job!
                        <span>- "Matthew"</span>
                </p>
            </div>
        </div>
    )
}

export default Quote;